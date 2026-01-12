/**
 * Authors data with schema validation
 */
import { z } from 'astro:content';
import authorsData from './authors.json';

// =============================================================================
// SCHEMA
// =============================================================================

export const authorSchema = z.object({
  name: z.string(),
  image: z.string(),
  url: z.string().url().optional(),
});

export type Author = z.infer<typeof authorSchema>;

// =============================================================================
// DATA
// =============================================================================

// Validate authors data at build time
const authorsRecord = authorsData as Record<string, unknown>;
const authors: Record<string, Author> = {};

for (const [key, value] of Object.entries(authorsRecord)) {
  const result = authorSchema.safeParse(value);
  if (result.success) {
    authors[key] = result.data;
  } else {
    console.warn(`Invalid author data for "${key}":`, result.error.issues);
  }
}

// =============================================================================
// HELPERS
// =============================================================================

const defaultAuthor: Author = {
  name: 'iTowns Contributors',
  image: '/images/authors/default-avatar.svg',
};

/**
 * Get author info by name
 * Returns default author if not found
 */
export function getAuthor(name?: string): Author {
  if (!name) {
    return authors['iTowns Contributors'] || defaultAuthor;
  }

  return authors[name] || {
    name,
    image: '/images/authors/default-avatar.svg',
  };
}

export { authors };
