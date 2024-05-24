import { defineConfig, defineViteConfig, bytecodePlugin } from "electron-vite";
import path from "path";

// https://electron-vite.org/config/
export default defineConfig({
  main: defineViteConfig(({ command, mode }) => {
    return {
      plugins: mode !== "production" ? [] : [bytecodePlugin()],
      root: path.resolve(__dirname, "src/main"),
      build: {
        lib: {
          entry: ["main.js"],
          formats: ["cjs"],
        },
        outDir: path.resolve(__dirname, ".vite/build"),
      },
    };
  }),
  preload: {
    root: path.resolve(__dirname, "src/preload"),
    // https://vitejs.dev/guide/build.html#library-mode
    build: {
      // https://vitejs.dev/config/build-options.html#build-lib
      lib: {
        entry: ["preload.js"],
        formats: ["cjs"],
      },
      outDir: path.resolve(__dirname, ".vite/build"),
    },
  },
  renderer: {
    root: path.resolve(__dirname, "src/renderer"),
    // https://vitejs.dev/guide/build.html#multi-page-app
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "src/renderer/index.html"),
        },
      },
      outDir: path.resolve(__dirname, ".vite/renderer/main_window"),
    },
  },
});
