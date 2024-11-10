import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
