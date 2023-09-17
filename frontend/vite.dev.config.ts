import type { UserConfigExport } from "vite";

import { commonConfig } from "./vite.common.config";

const devConfig: UserConfigExport = {
  ...commonConfig,
  mode: "development",
  preview: {
    headers: { "Access-Control-Allow-Origin": "https://localhost:8001" },
    port: 3000,
    strictPort: true,
  },
  server: {
    headers: { "Access-Control-Allow-Origin": "https://localhost:8001" },
    origin: "https://localhost:3000",
    port: 3000,
    strictPort: true,
  },
};

// eslint-disable-next-line import/no-default-export
export default devConfig;
