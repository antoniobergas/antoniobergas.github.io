import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const collections = {
  career: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/career" }),
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
