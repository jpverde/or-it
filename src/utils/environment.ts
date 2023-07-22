import _ from "lodash";

type Environment = "development" | "ephemeral" | "production";

export const getEnvironment: () => Environment = (): Environment => {
  if (_.isUndefined(window)) {
    return "development";
  }
  const currentUrl: string = window.location.hostname;

  if (currentUrl === "localhost") {
    return "development";
  }

  return "production";
};
