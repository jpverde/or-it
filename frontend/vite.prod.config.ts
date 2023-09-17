import type { UserConfigExport } from "vite";

import { BUCKET_NAME, CI_COMMIT_REF_NAME } from "./src/utils/ctx";
import { commonConfig } from "./vite.common.config";

const prodConfig: UserConfigExport = {
  ...commonConfig,
  base: `https://${BUCKET_NAME}/${CI_COMMIT_REF_NAME}/static/dashboard/`,
  mode: "production",
};

// eslint-disable-next-line import/no-default-export
export default prodConfig;
