import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
      title: z.string(),
      cover: image(),
      date: z.string().optional(),
      authors: z.string().optional(),
      githubUrl: z.string().optional(),
      paperUrl: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string(),
    authors: z.string(),
    description: z.string().optional(),
    cover: image().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
