// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://alexlavaee.me",
  output: "static",
  integrations: [tailwind({
      applyBaseStyles: false,
    }), icon(), mdx()],
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    },
});