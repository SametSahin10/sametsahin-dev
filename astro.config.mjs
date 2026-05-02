import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sametsahin.dev",
  output: "static",
  adapter: vercel(),
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark",
      },
      gfm: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
