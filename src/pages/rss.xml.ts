import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  const site = context.site!.toString().replace(/\/$/, "");

  blog.sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: "Alex Lavaee's Blog",
    description: "Posts about machine learning, AI, and all things tech.",
    site: context.site!,
    items: blog.map((post) => {
      const postUrl = `${site}/blog/${post.slug}/`;
      const coverHtml = post.data.cover
        ? `<img src="${site}${post.data.cover.src}" alt="${post.data.title}" />`
        : "";
      const descriptionHtml = post.data.description
        ? `<p>${post.data.description}</p>`
        : "";
      const content = `${coverHtml}${descriptionHtml}<p><a href="${postUrl}">Read more on the blog →</a></p>`;

      return {
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        content,
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
