// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://highlandmomo.ca", // Changed to your custom domain
  // Removed base property completely
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
