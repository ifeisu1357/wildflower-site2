import { defineCollection, z } from 'astro:content';

const artists = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    nameEn: z.string().optional(),
    tag: z.string(),
    photo: z.string().default(''),
    order: z.number().default(99),
    links: z.object({
      instagram: z.string().optional(),
      appleMusic: z.string().optional(),
      spotify: z.string().optional(),
      website: z.string().optional(),
    }).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    cover: z.string(),
    type: z.string().default('Album'),
    year: z.number().default(2026),
    releaseDate: z.string().optional(),
    published: z.boolean().default(true),
    videoId: z.string().optional(),
    order: z.number().default(99),
  }),
});

const live = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    event: z.string(),
    venue: z.string().optional(),
    city: z.string().optional(),
    ticketUrl: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { artists, projects, live };
