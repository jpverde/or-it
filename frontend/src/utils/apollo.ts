/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable fp/no-mutation
  -------
  We need it in order to use methods from xhr and mutate some values from a
  graphQL error response.
*/

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as BaseApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import type { NormalizedCacheObject, Operation } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { createUploadLink } from "apollo-upload-client";
import type { FragmentDefinitionNode, OperationDefinitionNode } from "graphql";
import _ from "lodash";
import { createElement, useMemo } from "react";

import { getEnvironment } from "utils/environment";

const getCookie: (name: string) => string = (name: string): string => {
  if (document.cookie !== "") {
    const cookies: string[] = document.cookie.split(";");
    const cookieValue: string | undefined = cookies.find(
      (cookie: string): boolean => cookie.trim().startsWith(`${name}=`)
    );
    if (!_.isUndefined(cookieValue)) {
      return decodeURIComponent(cookieValue.trim().substring(name.length + 1));
    }
  }

  return "";
};

/**
 * Apollo-compatible wrapper for XHR requests
 *
 * This is a necessary workaround for file upload mutations
 * since the Fetch API that apollo uses by default
 * lacks support for tracking upload progress
 *
 * @see https://github.com/jaydenseric/apollo-upload-client/issues/88
 */
interface IExtendedFetchConfig extends RequestInit {
  notifyUploadProgress: boolean;
  onUploadProgress: (ev: ProgressEvent) => void;
}

const xhrWrapper: WindowOrWorkerGlobalScope["fetch"] = async (
  uri: string,
  options: IExtendedFetchConfig
): Promise<Response> =>
  new Promise(
    (
      resolve: (value: Response) => void,
      reject: (reason: Error) => void
    ): void => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();

      xhr.onload = (): void => {
        resolve(new Response(xhr.response, options));
      };

      xhr.onerror = (): void => {
        reject(new Error(`Network request failed: ${xhr.responseText}`));
      };

      xhr.ontimeout = (): void => {
        reject(new Error("Network request timed out"));
      };

      xhr.open(_.get(options, "method", "POST"), uri, true);

      if (options.headers !== undefined) {
        Object.keys(options.headers).forEach((key: string): void => {
          xhr.setRequestHeader(key, _.get(options.headers, key) as string);
        });
      }

      xhr.upload.onprogress = options.onUploadProgress;

      xhr.send(options.body as XMLHttpRequestBodyInit);
    }
  );

const extendedFetch: WindowOrWorkerGlobalScope["fetch"] = async (
  uri: string,
  options: IExtendedFetchConfig
): Promise<Response> =>
  options.notifyUploadProgress ? xhrWrapper(uri, options) : fetch(uri, options);

type ProviderProps = Omit<
  React.ComponentProps<typeof BaseApolloProvider>,
  "client"
>;

const httpLink = createUploadLink({
  credentials: "same-origin",
  fetch: extendedFetch,
  headers: {
    "X-CSRFToken": getCookie("csrftoken"),
    accept: "application/json",
  },
  uri: `${window.location.origin}/api`,
});

const wsLink: ApolloLink = new WebSocketLink({
  options: {
    lazy: true,
    reconnect: true,
  },
  uri: `wss://${window.location.host}/api`,
});

const apilink: ApolloLink = ApolloLink.split(
  ({ query }: Operation): boolean => {
    const definition: FragmentDefinitionNode | OperationDefinitionNode =
      getMainDefinition(query);

    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const retryLink: ApolloLink = new RetryLink({
  attempts: {
    max: 5,
    retryIf: (error: unknown): boolean => error !== undefined,
  },
  delay: {
    initial: 300,
    jitter: true,
    max: Infinity,
  },
});

const ApolloProvider: React.FC<ProviderProps> = (
  props: ProviderProps
): JSX.Element => {
  const client: ApolloClient<NormalizedCacheObject> = useMemo(
    (): ApolloClient<NormalizedCacheObject> =>
      new ApolloClient({
        cache: new InMemoryCache(),
        connectToDevTools: getEnvironment() !== "production",
        defaultOptions: {
          watchQuery: {
            fetchPolicy: "cache-and-network",
          },
        },
        link: ApolloLink.from([retryLink, apilink]),
      }),
    []
  );

  return createElement(BaseApolloProvider, { client, ...props });
};

export { ApolloProvider };
