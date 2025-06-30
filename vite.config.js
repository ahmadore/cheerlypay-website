import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // import HeroSection from '@components/home/HeroSection';
    alias: {
      // eslint-disable-next-line no-undef
      "@components": path.resolve(__dirname, "src/components"),
      // eslint-disable-next-line no-undef
      "@pages": path.resolve(__dirname, "src/pages"),
      // eslint-disable-next-line no-undef
      "@images": path.resolve(__dirname, "src/assets/images"),
      // eslint-disable-next-line no-undef
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
