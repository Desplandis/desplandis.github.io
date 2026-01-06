import { defineCollection, z } from 'astro:content';

// =============================================================================
// SHARED SCHEMAS
// =============================================================================
// Reusable schema fragments to avoid duplication

/**
 * Audience enum used across multiple collections
 */
const audienceEnum = z.enum(['developers', 'executives', 'both']);

/**
 * Common SEO fields for content that needs search optimization
 */
const seoFields = {
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
};

/**
 * Common metadata fields
 */
const publishMetadata = {
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
};

// =============================================================================
// BLOG COLLECTION
// =============================================================================
/**
 * Blog Post Collection
 *
 * Purpose: First-class communication channel for framework updates,
 * governance transparency, and technical deep-dives.
 *
 * Audience: developers | executives | both
 */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z
      .string()
      .min(10, 'Title must be at least 10 characters')
      .max(100, 'Title must be under 100 characters'),
    summary: z
      .string()
      .min(50, 'Summary must be at least 50 characters')
      .max(300, 'Summary must be under 300 characters for SEO'),
    ...publishMetadata,
    audience: audienceEnum,
    tags: z
      .array(z.string().toLowerCase())
      .min(1, 'At least one tag required')
      .max(5, 'Maximum 5 tags'),
    author: z.string().optional(),
    featured: z.boolean().default(false),
    ...seoFields,
  }),
});

// =============================================================================
// FEATURES COLLECTION
// =============================================================================
/**
 * Framework Features Collection
 *
 * Purpose: Document technical capabilities of iTowns for feature discovery.
 * Used on: Homepage, Features page, Documentation
 *
 * Content Model:
 * - Each feature is a distinct capability (e.g., "3D Tiles Support")
 * - Features are categorized for navigation
 * - Features link to documentation for technical details
 *
 * Display Contexts:
 * - Feature cards on homepage (title + summary)
 * - Feature list on dedicated page (full content)
 * - Feature comparison tables (capabilities + supported standards)
 */
const features = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    title: z.string().min(5).max(60),
    // Note: slug is auto-generated from filename by Astro

    // Display content
    summary: z.string().min(20).max(200), // Short description for cards
    icon: z.string().optional(), // Icon identifier (e.g., "globe", "layers")

    // Categorization
    category: z.enum([
      'visualization', // 3D rendering, styling, effects
      'data-sources', // Data loading, formats, protocols
      'interaction', // Controls, picking, navigation
      'analysis', // Measurement, processing, queries
      'integration', // APIs, frameworks, extensions
      'performance', // Optimization, caching, streaming
    ]),

    // Technical details
    capabilities: z.array(z.string()).optional(), // Bullet points for feature cards
    supportedStandards: z.array(z.string()).optional(), // OGC, W3C, etc.
    relatedDocs: z.string().url().optional(), // Link to documentation

    // Audience targeting
    audience: audienceEnum.default('both'),

    // Ordering and visibility
    order: z.number().default(100), // Lower = higher priority
    featured: z.boolean().default(false), // Show on homepage
    comingSoon: z.boolean().default(false), // Announced but not released

    // Metadata
    ...publishMetadata,
  }),
});

// =============================================================================
// USE CASES COLLECTION
// =============================================================================
/**
 * Use Cases Collection
 *
 * Purpose: Document application scenarios where iTowns excels.
 * Distinct from Case Studies (which are about specific organizations).
 *
 * Content Model:
 * - Each use case is an application category (e.g., "Urban Planning")
 * - Use cases explain the problem domain and how iTowns addresses it
 * - Use cases link to relevant features and case studies
 *
 * Display Contexts:
 * - Use case cards on homepage ("What can you build?")
 * - Dedicated use cases page with full descriptions
 * - Linked from case studies ("This organization used iTowns for [use case]")
 */
const useCases = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    title: z.string().min(5).max(80),

    // Display content
    summary: z.string().min(30).max(250), // Short description for cards
    problem: z.string().optional(), // What problem does this solve?
    solution: z.string().optional(), // How does iTowns address it?
    icon: z.string().optional(), // Icon identifier

    // Industry/domain
    industry: z
      .enum([
        'government',
        'research',
        'urban-planning',
        'defense',
        'environment',
        'transportation',
        'utilities',
        'real-estate',
        'cultural-heritage',
        'general',
      ])
      .default('general'),

    // Relationships (avoid duplication)
    relatedFeatures: z.array(z.string()).optional(), // Feature slugs
    relatedCaseStudies: z.array(z.string()).optional(), // Case study slugs

    // Technical requirements
    typicalDataSources: z.array(z.string()).optional(), // e.g., ["3D Tiles", "WMS"]
    complexity: z
      .enum(['beginner', 'intermediate', 'advanced'])
      .default('intermediate'),

    // Audience and visibility
    audience: audienceEnum.default('both'),
    featured: z.boolean().default(false),
    order: z.number().default(100),

    // Metadata
    ...publishMetadata,
  }),
});

// =============================================================================
// CASE STUDIES COLLECTION
// =============================================================================
/**
 * Case Studies Collection
 *
 * Purpose: Real-world implementations by specific organizations.
 * Distinct from Use Cases (which are application categories).
 *
 * Content Model:
 * - Each case study is about a specific organization
 * - Case studies reference use cases to avoid content duplication
 * - Case studies provide concrete outcomes and testimonials
 *
 * Display Contexts:
 * - Case study cards on homepage (featured only)
 * - Dedicated case studies page
 * - Linked from use cases ("See how [org] used this approach")
 */
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    // Organization info
    title: z.string(), // Can be org name or project name
    organization: z.string(),
    organizationType: z
      .enum([
        'government-agency',
        'research-institution',
        'commercial-company',
        'educational-institution',
        'nonprofit',
        'consortium',
        'other',
      ])
      .default('other'),
    country: z.string().optional(), // ISO country code or name
    website: z.string().url().optional(),
    logo: z.string().optional(), // Path to logo image

    // Project details
    projectName: z.string().optional(), // If different from title
    useCase: z.string(), // Brief description
    challenge: z.string().optional(), // What problem did they face?
    solution: z.string().optional(), // How did iTowns help?
    outcome: z.string(), // What was achieved?

    // Industry/domain (for categorization)
    industry: z
      .enum([
        'government',
        'research',
        'urban-planning',
        'defense',
        'environment',
        'transportation',
        'utilities',
        'real-estate',
        'cultural-heritage',
        'general',
      ])
      .default('general'),

    // Relationships
    relatedUseCases: z.array(z.string()).optional(), // Use case slugs
    featuresUsed: z.array(z.string()).optional(), // Feature slugs

    // Technical details
    dataTypes: z.array(z.string()).optional(), // Data formats used
    scale: z.string().optional(), // e.g., "City-wide", "National"

    // Testimonial (optional)
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        role: z.string().optional(),
      })
      .optional(),

    // Visibility
    featured: z.boolean().default(false),
    order: z.number().default(100),

    // Metadata
    ...publishMetadata,
  }),
});

// =============================================================================
// GOVERNANCE COLLECTION
// =============================================================================
/**
 * Governance Collection
 *
 * Purpose: Transparent documentation of decision-making, membership,
 * and organizational structure for the iTowns commons.
 *
 * Content Model:
 * - Each document covers a specific governance topic
 * - Documents are categorized for navigation
 * - Documents target decision-makers evaluating sustainability
 *
 * Display Contexts:
 * - Governance page with categorized navigation
 * - Linked from blog posts about governance decisions
 * - Referenced in case studies (governance as a feature)
 */
const governance = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    title: z.string().min(5).max(100),
    summary: z.string().min(20).max(300),

    // Categorization
    category: z.enum([
      'overview', // What is iTowns governance?
      'decision-making', // How decisions are made
      'membership', // How to become a member
      'contribution', // How to contribute
      'funding', // Financial sustainability
      'transparency', // Reports, meeting notes
      'legal', // Licensing, IP, policies
    ]),

    // Structure
    order: z.number().default(100), // Within category
    parent: z.string().optional(), // For nested documents

    // Audience
    audience: audienceEnum.default('executives'),

    // Document status
    status: z
      .enum([
        'current', // Active policy
        'draft', // Under discussion
        'archived', // Historical reference
      ])
      .default('current'),

    // Approval tracking
    approvedDate: z.coerce.date().optional(),
    approvedBy: z.string().optional(), // e.g., "Governance Board"

    // Metadata
    lastUpdated: z.coerce.date(),
    changeHistory: z
      .array(
        z.object({
          date: z.coerce.date(),
          description: z.string(),
        })
      )
      .optional(),
  }),
});

// =============================================================================
// DOCUMENTATION COLLECTION (Future-ready)
// =============================================================================
/**
 * Documentation Collection
 *
 * Purpose: Technical documentation for developers.
 * Structured for future iteration when docs are added.
 *
 * Note: This is scaffolded but may not be immediately used.
 * Enable by uncommenting in exports when ready.
 */
// Scaffolded for future use, will be exported when docs content is added
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const docs = defineCollection({
  type: 'content',
  schema: z.object({
    // Identity
    title: z.string(),
    summary: z.string().optional(),

    // Structure
    section: z.enum([
      'getting-started',
      'guides',
      'api-reference',
      'tutorials',
      'migration',
      'faq',
    ]),
    order: z.number().default(100),
    parent: z.string().optional(), // For nested docs

    // Versioning
    version: z.string().optional(), // e.g., "5.x"
    minVersion: z.string().optional(), // Minimum iTowns version

    // Metadata
    ...publishMetadata,
  }),
});

// =============================================================================
// EXPORTS
// =============================================================================
export const collections = {
  blog,
  features,
  'use-cases': useCases,
  'case-studies': caseStudies,
  governance,
  // docs, // Uncomment when documentation content is added
};
