# Repository Structure

**Project:** iTowns Framework Website  
**Framework:** Astro 4.x  
**Updated:** January 2026

---

## Proposed Directory Tree

```
itowns-website/
├── .github/
│   └── workflows/
│       ├── build.yml          # CI: build validation
│       └── deploy.yml         # CD: deployment pipeline
│
├── .cursor/
│   └── rules/
│       └── project/
│           └── RULES.md       # Project-specific cursor rules
│
├── docs/
│   ├── product-definition.md  # Audience, goals, messaging
│   ├── stack-decision.md      # Technical choices rationale
│   └── repository-structure.md # This file
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── manifest.json          # PWA manifest (optional)
│   └── assets/                # Static assets (images, fonts, etc.)
│       ├── images/
│       └── fonts/
│
├── src/
│   ├── assets/                # Processed assets (Astro will optimize)
│   │   └── images/
│   │
│   ├── components/            # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Nav.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── CodeBlock.astro
│   │   └── sections/
│   │       ├── Hero.astro
│   │       ├── CaseStudies.astro
│   │       └── CallToAction.astro
│   │
│   ├── content/               # Content Collections (type-safe)
│   │   ├── config.ts          # Content schemas (Zod)
│   │   ├── blog/
│   │   │   ├── 2026-01-welcome.md
│   │   │   └── ...
│   │   ├── case-studies/
│   │   │   ├── organization-name.md
│   │   │   └── ...
│   │   └── governance/
│   │       ├── decision-process.md
│   │       └── membership.md
│   │
│   ├── layouts/               # Page layouts
│   │   ├── BaseLayout.astro   # Base HTML structure
│   │   ├── PageLayout.astro   # Standard page wrapper
│   │   ├── BlogLayout.astro   # Blog post layout
│   │   └── DocsLayout.astro   # Documentation layout
│   │
│   ├── pages/                 # File-based routing
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About / Governance
│   │   ├── docs/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro  # Dynamic docs routing
│   │   ├── blog/
│   │   │   ├── index.astro    # Blog listing
│   │   │   └── [slug].astro   # Individual blog posts
│   │   ├── case-studies/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── governance.astro
│   │   ├── community.astro
│   │   └── 404.astro
│   │
│   ├── styles/                # Global and shared styles
│   │   ├── global.css         # CSS reset, base styles
│   │   └── variables.css      # CSS custom properties
│   │
│   ├── utils/                 # Utility functions
│   │   ├── dates.ts           # Date formatting
│   │   └── content.ts         # Content helpers
│   │
│   └── env.d.ts               # TypeScript environment types
│
├── .gitignore
├── .prettierrc                # Code formatting config
├── astro.config.mjs           # Astro configuration
├── package.json
├── package-lock.json
├── README.md                  # Project overview (this is the public README)
├── tsconfig.json              # TypeScript configuration
└── LICENSE                    # Apache 2.0 (to match iTowns)
```

---

## Directory Explanations

### `/.github/workflows/`
**Purpose:** CI/CD automation via GitHub Actions.

**Files:**
- `build.yml` - Runs on every PR: install deps, run build, validate content schemas
- `deploy.yml` - Runs on push to main: build and deploy to hosting platform

---

### `/docs/`
**Purpose:** Project documentation and decision records (NOT user-facing documentation).

**Contents:**
- Product definition
- Technical decisions
- Architecture notes
- Contribution guidelines (internal)

**Note:** User-facing documentation lives in `src/content/` or `src/pages/docs/`.

---

### `/public/`
**Purpose:** Static assets served as-is (no processing).

**Use for:**
- Favicon, robots.txt, manifest.json
- Assets that must have stable URLs
- Third-party files (e.g., verification files)

**Don't use for:**
- Images that need optimization (use `src/assets/`)

---

### `/src/assets/`
**Purpose:** Assets that Astro should process (optimize, bundle, hash).

**Use for:**
- Images that should be optimized
- Inline SVGs
- Assets referenced in components

---

### `/src/components/`
**Purpose:** Reusable Astro components.

**Organization:**
- `layout/` - Header, footer, navigation (structural)
- `ui/` - Buttons, cards, inputs (generic UI elements)
- `sections/` - Hero, CTA blocks (page-specific sections)

**Guidelines:**
- Components should be self-contained (include their own styles via scoped CSS)
- No logic in layout components (logic lives in pages)
- Prefer slots for composition

---

### `/src/content/`
**Purpose:** Type-safe content collections (Astro's content API).

**Organization:**
- Each subdirectory is a collection (blog, case-studies, governance)
- `config.ts` defines schemas using Zod
- All content is markdown/MDX

**Example Schema (`config.ts`):**
```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.date(),
    audience: z.enum(['developers', 'executives', 'both']),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

---

### `/src/layouts/`
**Purpose:** Page layout templates.

**Hierarchy:**
- `BaseLayout.astro` - Base HTML structure (head, body, meta tags)
- `PageLayout.astro` - Standard page (extends BaseLayout, adds header/footer)
- `BlogLayout.astro` - Blog post (extends PageLayout, adds metadata, date)
- `DocsLayout.astro` - Documentation (extends PageLayout, adds sidebar)

---

### `/src/pages/`
**Purpose:** File-based routing (Astro convention).

**Routing Examples:**
- `index.astro` → `/`
- `about.astro` → `/about`
- `blog/[slug].astro` → `/blog/welcome-to-itowns` (dynamic)
- `docs/[...slug].astro` → `/docs/getting-started/installation` (catch-all)

**Guidelines:**
- Keep pages thin (fetch data, pass to components)
- No business logic in pages
- Use layouts for structure

---

### `/src/styles/`
**Purpose:** Global styles and CSS variables.

**Files:**
- `global.css` - CSS reset, typography, base element styles
- `variables.css` - CSS custom properties (colors, spacing, breakpoints)

**Note:** Component-specific styles live in `.astro` files (scoped CSS).

---

### `/src/utils/`
**Purpose:** Utility functions and helpers.

**Examples:**
- `dates.ts` - Date formatting utilities
- `content.ts` - Content filtering, sorting
- `seo.ts` - Meta tag generation

---

## Key Astro Conventions

### Content Collections
```typescript
// Fetch all blog posts
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
```

### Images
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero.png';
---
<Image src={heroImage} alt="Description" />
```

### Dynamic Routes
```astro
---
// src/pages/blog/[slug].astro
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
---
```

---

## Configuration Files

### `astro.config.mjs`
Minimal configuration:
```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://itowns.org', // For sitemap generation
  output: 'static',            // Explicit static mode
});
```

### `tsconfig.json`
Extends Astro's base TypeScript config:
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

---

## Build Output

After `npm run build`:
```
dist/
├── index.html
├── about.html
├── blog/
│   ├── index.html
│   └── welcome-to-itowns/
│       └── index.html
├── assets/
│   ├── [hash].css
│   └── [hash].js (if any islands)
└── ...
```

**Deployment:** Upload `dist/` to any static host.

---

## Development Workflow

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type-check without building
npm run astro check
```

---

## Naming Conventions

- **Files:** kebab-case (`case-studies.astro`, `hero-section.astro`)
- **Components:** PascalCase (`<Hero />`, `<CaseStudies />`)
- **CSS classes:** kebab-case (`.hero-section`, `.cta-button`)
- **TypeScript:** camelCase for functions/variables, PascalCase for types

---

## Principles

1. **Conventional over custom:** Follow Astro conventions unless there's a strong reason not to
2. **Flat when possible:** Avoid deep nesting (max 3 levels in components)
3. **Colocate related code:** Component styles live in the component file
4. **Explicit over implicit:** Prefer clear folder names (`src/components/layout/` vs `src/components/l/`)

---

## Future Considerations

### If the site grows significantly:

**Add:**
- `/src/middleware/` - Astro middleware for request handling
- `/src/islands/` - Dedicated folder for interactive islands (if many)
- `/scripts/` - Build-time scripts (content generation, optimization)

**Consider:**
- Monorepo structure if documentation becomes a separate app
- Separate `src/content/docs/` if documentation grows beyond 100 pages

---

## References

- [Astro Project Structure](https://docs.astro.build/en/core-concepts/project-structure/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Routing](https://docs.astro.build/en/core-concepts/routing/)

