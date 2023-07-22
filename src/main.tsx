import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.scss";
import { ApolloProvider } from "utils/apollo";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
