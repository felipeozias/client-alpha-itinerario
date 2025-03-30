import * as path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), tsconfigPaths()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@context": path.resolve(__dirname, "src/context"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	},
});
