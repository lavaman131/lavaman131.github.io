// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Alex Lavaee";
export const SITE_DESCRIPTION =
  "Welcome to my personal website and blog! I write about machine learning, AI, and all things tech.";
export const TWITTER_HANDLE = "@alex_lavaee";
export const MY_NAME = "Alex Lavaee";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
