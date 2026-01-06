# Content Models Documentation

**iTowns Website Content Architecture**  
**Version:** 1.0  
**Status:** ✅ Complete

---

## Overview

The iTowns website uses Astro Content Collections to manage structured content. This document defines the content model for each collection, including schemas, relationships, and usage guidelines.

## Design Principles

### 1. Avoid Duplication

Each piece of information should live in one place:

- **Features** describe what iTowns can do (technical capabilities)
- **Use Cases** describe what you can build (application categories)
- **Case Studies** describe who has built what (specific implementations)
- **Governance** describes how decisions are made (process and policy)

Collections reference each other rather than duplicating content.

### 2. Optimize for Future Iteration

Schemas are designed to support:

- New fields without breaking existing content
- Relationship-based queries
- Multiple display contexts (cards, pages, comparisons)
- Content versioning and history

### 3. No Hard-Coded Content

All displayed content comes from content collections:

- Layouts define structure, not content
- Components accept content as props
- Pages query collections, not hard-coded arrays

---

## Content Collections

### 1. Features Collection

**Purpose:** Document technical capabilities of the iTowns framework.

**Location:** `src/content/features/`

**Schema:**

```typescript
{
  // Identity
  title: string (5-60 chars)
  slug?: string // Optional override

  // Display
  summary: string (20-200 chars)
  icon?: string // Icon identifier

  // Categorization
  category: enum [
    'visualization',  // Rendering, styling
    'data-sources',   // Data loading
    'interaction',    // Controls, picking
    'analysis',       // Measurement, queries
    'integration',    // APIs, frameworks
    'performance'     // Optimization
  ]

  // Technical details
  capabilities?: string[]      // Bullet points
  supportedStandards?: string[] // OGC, W3C, etc.
  relatedDocs?: url            // Link to docs

  // Targeting
  audience: enum ['developers', 'executives', 'both']

  // Ordering
  order: number (default: 100)
  featured: boolean (default: false)
  comingSoon: boolean (default: false)

  // Metadata
  publishDate: date
  updatedDate?: date
  draft: boolean (default: false)
}
```

**Example Files:**

- `3d-tiles.md` - 3D Tiles support (data-sources)
- `wms-wmts.md` - Imagery services (data-sources)
- `globe-view.md` - Globe visualization (visualization)

**Display Contexts:**

- Homepage feature cards (featured only)
- Features page with categories
- Feature comparison tables
- Linked from use cases and case studies

---

### 2. Use Cases Collection

**Purpose:** Document application scenarios where iTowns excels.

**Location:** `src/content/use-cases/`

**Schema:**

```typescript
{
  // Identity
  title: string (5-80 chars)

  // Display
  summary: string (30-250 chars)
  problem?: string    // What problem it solves
  solution?: string   // How iTowns helps
  icon?: string

  // Domain
  industry: enum [
    'government',
    'research',
    'urban-planning',
    'defense',
    'environment',
    'transportation',
    'utilities',
    'real-estate',
    'cultural-heritage',
    'general'
  ]

  // Relationships
  relatedFeatures?: string[]     // Feature slugs
  relatedCaseStudies?: string[]  // Case study slugs

  // Technical
  typicalDataSources?: string[]
  complexity: enum ['beginner', 'intermediate', 'advanced']

  // Targeting
  audience: enum ['developers', 'executives', 'both']
  featured: boolean
  order: number

  // Metadata
  publishDate: date
  updatedDate?: date
  draft: boolean
}
```

**Example Files:**

- `urban-planning.md` - City digital twins
- `terrain-analysis.md` - Elevation data analysis
- `point-cloud-visualization.md` - LiDAR/photogrammetry

**Display Contexts:**

- Homepage "What can you build?" section
- Use cases page with industry filtering
- Linked from case studies

**Distinction from Case Studies:**

| Aspect | Use Cases | Case Studies |
|--------|-----------|--------------|
| Subject | Application category | Specific organization |
| Content | Problem/solution pattern | Detailed implementation |
| Audience | Evaluators | Technical learners |
| Quantity | ~10-20 total | Unlimited |

---

### 3. Case Studies Collection

**Purpose:** Document real-world implementations by specific organizations.

**Location:** `src/content/case-studies/`

**Schema:**

```typescript
{
  // Organization
  title: string
  organization: string
  organizationType: enum [
    'government-agency',
    'research-institution',
    'commercial-company',
    'educational-institution',
    'nonprofit',
    'consortium',
    'other'
  ]
  country?: string
  website?: url
  logo?: string

  // Project
  projectName?: string
  useCase: string           // Brief description
  challenge?: string        // What problem
  solution?: string         // How iTowns helped
  outcome: string           // What was achieved

  // Relationships
  relatedUseCases?: string[]  // Use case slugs
  featuresUsed?: string[]     // Feature slugs

  // Technical
  dataTypes?: string[]
  scale?: string

  // Testimonial
  testimonial?: {
    quote: string
    author: string
    role?: string
  }

  // Visibility
  featured: boolean
  order: number

  // Metadata
  publishDate: date
  updatedDate?: date
  draft: boolean
}
```

**Example Files:**

- `example-organization.md` - Research climate platform

**Display Contexts:**

- Homepage featured case studies
- Case studies page with filtering
- Linked from use cases
- Embedded quotes in other pages

---

### 4. Governance Collection

**Purpose:** Document decision-making, membership, and organizational structure.

**Location:** `src/content/governance/`

**Schema:**

```typescript
{
  // Identity
  title: string (5-100 chars)
  summary: string (20-300 chars)

  // Categorization
  category: enum [
    'overview',           // What is governance
    'decision-making',    // How decisions work
    'membership',         // How to participate
    'contribution',       // How to contribute
    'funding',            // Financial sustainability
    'transparency',       // Reports, notes
    'legal'               // Licensing, policies
  ]

  // Structure
  order: number          // Within category
  parent?: string        // For nesting

  // Targeting
  audience: enum ['developers', 'executives', 'both']

  // Status
  status: enum ['current', 'draft', 'archived']
  approvedDate?: date
  approvedBy?: string

  // Metadata
  lastUpdated: date
  changeHistory?: [{
    date: date
    description: string
  }]
}
```

**Example Files:**

- `overview.md` - Introduction to governance
- `decision-process.md` - How decisions are made
- `membership.md` - Membership levels
- `funding.md` - Financial sustainability

**Display Contexts:**

- Governance page with categorized navigation
- Linked from blog posts about governance
- Referenced as a feature for decision-makers

---

### 5. Blog Collection

**Purpose:** First-class communication channel.

**Location:** `src/content/blog/`

*(Schema documented in blog-system.md)*

---

## Content Relationships

### Feature → Use Case

Features are referenced by use cases to show which capabilities enable each application:

```markdown
<!-- In use-cases/urban-planning.md -->
relatedFeatures:
  - "3d-tiles"
  - "wms-wmts"
```

### Use Case → Case Study

Use cases reference case studies to show real implementations:

```markdown
<!-- In use-cases/urban-planning.md -->
relatedCaseStudies:
  - "paris-3d"
```

### Case Study → Features

Case studies list which features were used:

```markdown
<!-- In case-studies/example-organization.md -->
featuresUsed:
  - "3d-tiles"
  - "wms-wmts"
```

### Relationship Diagram

```
Features ←────────────── Use Cases
    ↑                        ↑
    │                        │
    └─── Case Studies ───────┘
              ↓
          Governance (referenced for sustainability)
              ↓
            Blog (announces changes)
```

---

## Content Creation Guidelines

### Features

**When to create:** When iTowns has a distinct technical capability worth highlighting.

**Template:**

```markdown
---
title: "Feature Name"
summary: "One-sentence description of what this feature does."
icon: "icon-name"
category: "category"
capabilities:
  - "Capability 1"
  - "Capability 2"
supportedStandards:
  - "Standard 1"
audience: "both"
order: 50
featured: false
publishDate: 2026-01-01
---

## What is [Feature]?

Brief explanation.

## Key Capabilities

### Capability 1

Details...

## Example Usage

```code```

## When to Use

Use cases and scenarios.
```

### Use Cases

**When to create:** When there's a distinct application category worth documenting.

**Template:**

```markdown
---
title: "Use Case Name"
summary: "What you can build and why."
problem: "The challenge this addresses."
solution: "How iTowns helps."
industry: "industry"
relatedFeatures:
  - "feature-slug"
complexity: "intermediate"
audience: "both"
featured: false
publishDate: 2026-01-01
---

## The Challenge

What problem users face...

## How iTowns Helps

How the framework addresses it...

## Example Application

Code and architecture...

## Key Benefits

Summary of value...
```

### Case Studies

**When to create:** When an organization agrees to share their implementation.

**Template:**

```markdown
---
title: "Project Name"
organization: "Organization Name"
organizationType: "type"
useCase: "Brief description"
challenge: "What problem they faced"
solution: "How iTowns helped"
outcome: "What was achieved"
featuresUsed:
  - "feature-slug"
featured: false
publishDate: 2026-01-01
---

## The Challenge

Detailed problem description...

## The Solution

Implementation details...

## Results

Outcomes and metrics...

## Lessons Learned

What worked, what was challenging...
```

### Governance

**When to create:** When documenting a new policy or updating existing process.

**Template:**

```markdown
---
title: "Policy Name"
summary: "What this document covers."
category: "category"
order: 10
audience: "executives"
status: "current"
lastUpdated: 2026-01-01
---

## Overview

What this policy/process is about...

## Details

The specifics...

## Related

Links to related governance docs...
```

---

## File Structure

```
src/content/
├── config.ts              # All collection schemas
│
├── features/
│   ├── 3d-tiles.md
│   ├── wms-wmts.md
│   └── globe-view.md
│
├── use-cases/
│   ├── urban-planning.md
│   ├── terrain-analysis.md
│   └── point-cloud-visualization.md
│
├── case-studies/
│   └── example-organization.md
│
├── governance/
│   ├── overview.md
│   ├── decision-process.md
│   ├── membership.md
│   └── funding.md
│
└── blog/
    └── (blog posts)
```

---

## Querying Content

### Get All Features

```typescript
import { getCollection } from 'astro:content';

const features = await getCollection('features');
const published = features.filter(f => !f.data.draft);
const featured = published.filter(f => f.data.featured);
```

### Get Related Content

```typescript
// Get case studies related to a use case
const useCaseSlug = 'urban-planning';
const caseStudies = await getCollection('case-studies');
const related = caseStudies.filter(cs =>
  cs.data.relatedUseCases?.includes(useCaseSlug)
);
```

### Get by Category

```typescript
const governance = await getCollection('governance');
const decisionMaking = governance.filter(
  doc => doc.data.category === 'decision-making'
);
```

---

## Validation

All schemas are validated at build time with Zod:

```bash
npm run build
# Invalid frontmatter will fail with clear errors
```

To check without building:

```bash
npm run astro check
```

---

## Summary

| Collection | Purpose | Key Fields |
|------------|---------|------------|
| **features** | Technical capabilities | category, capabilities, standards |
| **use-cases** | Application scenarios | industry, complexity, relatedFeatures |
| **case-studies** | Real implementations | organization, outcome, testimonial |
| **governance** | Process & policy | category, status, approvedBy |
| **blog** | Communication | audience, tags, featured |

All collections:
- Use Zod for validation
- Support relationships via slug references
- Have consistent metadata (dates, draft status)
- Target specific audiences

---

## Questions?

- [Content Collection Docs](https://docs.astro.build/en/guides/content-collections/)
- [Zod Validation](https://zod.dev/)

