import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
      title: z.string(),
      cover: image(),
      date: z.string().optional(),
      authors: z.string().optional(),
      source: z.string().optional(),
      githubUrl: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
