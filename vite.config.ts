import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import VitePluginWebpCompress from "vite-plugin-webp-compress";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), VitePluginWebpCompress()],
});
