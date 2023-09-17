import path from "path";

import react from "@vitejs/plugin-react-swc";
import type { OnResolveResult, Plugin } from "esbuild";
import type { UserConfigExport } from "vite";
import { splitVendorChunkPlugin } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const esmPatches: Plugin = {
  name: "esmPatches",
  setup: (build): void => {
    const patches = [
      // https://github.com/bvaughn/react-virtualized/issues/1212
      {
        filter: /react-virtualized/u,
        patch: path.resolve(
          "./node_modules/react-virtualized/dist/umd/react-virtualized.js"
        ),
      },
    ];

    patches.forEach(({ filter, patch }): void => {
      build.onResolve({ filter }, (): OnResolveResult => ({ path: patch }));
    });
  },
};

export const commonConfig: UserConfigExport = {
  build: {
    assetsDir: ".",
    emptyOutDir: true,
    manifest: true,
    outDir: path.resolve(__dirname, "../app/static/dashboard/"),
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo): string => {
          if (chunkInfo.name?.match(/\.(?<ext>gif|jpg|png|svg)$/u)) {
            return "img/[hash][extname]";
          }

          return "[hash][extname]";
        },
        chunkFileNames: "[name]-vite-bundle.min.js",
        entryFileNames: "[name]-vite-bundle.min.js",
        manualChunks: (id): string | undefined => {
          if (id.includes("node_modules")) {
            return "vendors";
          }

          return undefined;
        },
      },
    },
    sourcemap: true,
    target: "es2019",
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esmPatches],
    },
  },
  plugins: [react(), splitVendorChunkPlugin(), tsconfigPaths(), svgr()],
  resolve: {
    alias: {
      components: path.join(__dirname, "src", "components"),
      scenes: path.join(__dirname, "src", "scenes"),
      utils: path.join(__dirname, "src", "utils"),
    },
  },
};
