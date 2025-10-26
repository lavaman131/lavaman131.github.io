// @ts-check
import { defineConfig } from 'astro/config';
import astroExpressiveCode from 'astro-expressive-code'
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import * as mdxMermaid from 'mdx-mermaid';


const SERVER_PORT = 3000;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = "https://alexlavaee.me";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  server: {
    port: SERVER_PORT,
  },
  site: BASE_URL,
  output: "static",
  integrations: [
    icon(),
    astroExpressiveCode({
      themes: ["catppuccin-latte", "catppuccin-mocha"],
      themeCssSelector: (theme) => {
        const themeName = theme.name.split("-")[1];
        const selector = `[data-theme='${themeName}']`;
        return selector;
      },
      useDarkModeMediaQuery: true,
      styleOverrides: {
        codeBackground: ({ theme }) => {
          if (theme.name.includes("mocha")) {
            // A slightly lighter background for the dark theme
            return "#24273a";
          }
          // A slightly darker background for the light theme
          return "#e6e9ef";
        },
        borderColor: ({ theme }) => {
          if (theme.name.includes("mocha")) {
            // surface0
            return "#313244";
          }
          // surface0
          return "#ccd0da";
        },
      },
    }),
    mdx({
      remarkPlugins: [remarkMath, [mdxMermaid.default, {output: 'svg'}]]
    }),
  ],
  vite: { plugins: [tailwindcss()]  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    },
});