import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tech = defineCollection({
  loader: glob({ base: "./src/content/tech", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    cardTitle: z.string().optional(),
    excerpt: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    githubRepo: z.string().url().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const life = defineCollection({
  loader: glob({ base: "./src/content/life", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    cardTitle: z.string().optional(),
    excerpt: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { tech, life };
