import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://porfolio-nahuel.vercel.app",
  integrations: [tailwind()],
});
