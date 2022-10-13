import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueSetupExtend()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./packages", import.meta.url)),
    },
  },
});
