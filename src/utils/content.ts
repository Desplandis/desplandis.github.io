/**
 * Generate SEO-friendly description from markdown content
 */
export function generateExcerpt(content: string, maxLength = 160): string {
  // Remove markdown syntax
  const plain = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*?(.*?)\*\*?/g, '$1') // Remove bold/italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/`{1,3}.*?`{1,3}/g, '') // Remove code
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .trim();

  if (plain.length <= maxLength) return plain;

  // Truncate at word boundary
  const truncated = plain.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return truncated.slice(0, lastSpace) + '...';
}

/**
 * Calculate reading time in minutes from raw markdown content
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Calculate reading time from rendered HTML content
 * Strips HTML tags and counts words
 */
export function calculateReadingTimeFromHtml(html: string): number {
  const wordsPerMinute = 200;
  // Strip HTML tags
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Create URL-friendly slug from title
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

