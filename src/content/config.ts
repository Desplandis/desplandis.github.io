import { defineCollection, z } from 'astro:content';

/**
 * Blog post collection
 * Posts for framework updates, governance communication, and thought leadership
 */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    audience: z.enum(['developers', 'executives', 'both']),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    author: z.string().optional(),
  }),
});

/**
 * Case studies collection
 * Real-world implementations and use cases
 */
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    industry: z.enum([
      'government',
      'research',
      'commercial',
      'education',
      'nonprofit',
      'other',
    ]),
    useCase: z.string(),
    outcome: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    logo: z.string().optional(),
    website: z.string().url().optional(),
  }),
});

/**
 * Governance documentation collection
 * Transparency and decision-making processes
 */
const governance = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      'process',
      'membership',
      'decision-making',
      'transparency',
      'funding',
    ]),
    lastUpdated: z.coerce.date(),
    order: z.number().optional(),
  }),
});

export const collections = {
  blog,
  'case-studies': caseStudies,
  governance,
};

