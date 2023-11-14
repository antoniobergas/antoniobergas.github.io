import { defineCollection, z } from "astro:content";

export const collections = {
  career: defineCollection({
    schema: z.object({
      title: z.string(),
      company: z.string(),
      img: z.string(),
      img_alt: z.string().optional(),
      period: z.string(),
      tags: z.array(z.string()),
    }),
  }),
};
