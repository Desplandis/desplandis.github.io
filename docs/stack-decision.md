# Stack Decision Rationale

**Date:** January 2026  
**Status:** Approved  
**Project:** iTowns Framework Website

---

## Decision: Astro as Static Site Generator

**Verdict:** ✅ **Confirmed** - Astro is the optimal choice for this project.

---

## Requirements Context

The iTowns website must:
- Serve two distinct audiences (developers and C-suite) with different information needs
- Maintain high performance and accessibility
- Support content-driven architecture (blog, case studies, documentation)
- Enable long-term maintainability with minimal tooling complexity
- Generate fully static output with optional interactive islands
- Support markdown/MDX-first content authoring
- Integrate with GitHub Actions for automated deployment

---

## Why Astro

### 1. Static-First by Default
**Requirement:** Site must be fully static with no JavaScript by default.

**How Astro Delivers:**
- Zero JavaScript shipped to the client by default
- HTML-first rendering model
- Explicit opt-in for client-side interactivity via islands architecture
- No hydration overhead for static content

**Alternative Considered:** Next.js Static Export
- ❌ Heavier client bundle even in static mode
- ❌ React runtime always included
- ❌ More complexity for purely static sites

---

### 2. Content Collections (First-Class)
**Requirement:** Markdown/MDX content with type-safe schemas for blog posts, case studies, and documentation.

**How Astro Delivers:**
- Built-in Content Collections API with Zod schema validation
- TypeScript inference for frontmatter
- Automatic content routing and generation
- MDX support out of the box

**Alternative Considered:** Eleventy
- ❌ No built-in schema validation
- ❌ Requires custom data cascade configuration
- ❌ Less TypeScript integration

---

### 3. Component Flexibility Without Framework Lock-In
**Requirement:** Reusable UI components without vendor lock-in or framework commitment.

**How Astro Delivers:**
- `.astro` components are framework-agnostic
- Can optionally integrate React/Vue/Svelte only where needed (islands)
- No global framework decision required
- Templates use familiar HTML-like syntax

**Alternative Considered:** Hugo
- ❌ Go templating syntax has steeper learning curve
- ❌ No component model, only partials
- ❌ Limited TypeScript integration

---

### 4. Performance Without Configuration
**Requirement:** Fast load times, minimal JavaScript, excellent Core Web Vitals.

**How Astro Delivers:**
- Automatic asset optimization
- Built-in image optimization (`<Image>` component)
- CSS scoping prevents bloat
- Partial hydration (islands) for interactive elements only

**Benchmark Reference:** Astro sites typically achieve:
- 100 Lighthouse performance scores (static pages)
- < 50KB initial JavaScript (with islands)
- Sub-second First Contentful Paint

---

### 5. Developer Experience Without Complexity
**Requirement:** Simple local development, fast builds, easy onboarding.

**How Astro Delivers:**
- Single `npm create astro@latest` setup
- Hot module reloading in dev mode
- Intuitive file-based routing
- Excellent TypeScript support
- Clear documentation and error messages

---

### 6. Deployment Simplicity
**Requirement:** Single build command, static output, GitHub Actions compatibility.

**How Astro Delivers:**
- `npm run build` → static `dist/` folder
- Works with any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages)
- No server-side runtime required
- Deterministic builds

---

## Supporting Tools

### Package Manager: npm
**Why:**
- Default Node.js package manager
- No additional installation required
- Universally supported in CI/CD
- Lock file (`package-lock.json`) ensures reproducible builds

**Rejected:** pnpm, yarn
- Unnecessary complexity for this project
- Additional installation step for contributors

---

### Styling: CSS Modules / Scoped CSS
**Why:**
- Built into Astro (no additional tooling)
- Scoped by default (no naming collisions)
- No build complexity (no Tailwind config, no CSS-in-JS runtime)
- Portable to future frameworks

**Rejected:** Tailwind CSS
- Adds build complexity
- Utility-first can reduce semantic HTML
- Not required given component-scoped CSS

**Rejected:** CSS-in-JS (styled-components, etc.)
- Requires JavaScript runtime
- Violates static-first principle

---

### Linting & Formatting: Minimal
**Why:**
- ESLint for JavaScript/TypeScript (standard)
- Prettier for code formatting (standard)
- No framework-specific linters

---

### CI/CD: GitHub Actions
**Why:**
- Free for public repositories
- Native GitHub integration
- Simple YAML configuration
- Can deploy to GitHub Pages or external hosts

---

## What We're NOT Including

### ❌ Component UI Library (e.g., shadcn/ui, MUI)
**Reason:** Premature abstraction. Build custom components first; extract patterns later if needed.

### ❌ CMS (e.g., Sanity, Strapi)
**Reason:** Content lives in Git (markdown). CMS adds complexity without benefit for technical content.

### ❌ Analytics (Initially)
**Reason:** Add after launch if needed. Privacy-first approach.

### ❌ Search (Initially)
**Reason:** Site structure and navigation should reduce search dependency. Add if proven necessary.

### ❌ Animation Libraries
**Reason:** Prefer CSS animations. JS animation libraries add weight and complexity.

---

## Technology Stack Summary

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Astro 4.x | Static-first, content collections, islands architecture |
| **Language** | TypeScript | Type safety, better tooling, schema validation |
| **Content** | Markdown/MDX | Git-native, portable, human-readable |
| **Styling** | Scoped CSS | Built-in, simple, no build complexity |
| **Package Manager** | npm | Standard, no extra tools |
| **CI/CD** | GitHub Actions | Free, integrated, simple |
| **Hosting** | TBD | Any static host (GitHub Pages, Netlify, Cloudflare Pages) |

---

## Decision Principles Applied

1. **Simplicity over features** → Astro has exactly what we need, nothing more
2. **Content-first** → Content Collections make content a first-class citizen
3. **Long-term maintainability** → Standard tools, minimal dependencies
4. **Performance by default** → Static output, zero JS baseline
5. **Open-source aligned** → No vendor lock-in, portable content

---

## Future Considerations

### When to Add Complexity

**Interactive Demos (3D visualizations):**
- Use Astro islands with minimal JS framework (e.g., Preact)
- Load only on demo pages
- Server-render fallback HTML

**Search:**
- If site grows beyond ~50 pages
- Consider Pagefind (static search, no backend)

**Analytics:**
- If user behavior data becomes necessary
- Prefer privacy-first solution (Plausible, Fathom)
- Self-hosted option preferred

---

## Approval & Sign-off

- ✅ Meets all project requirements (see RULES.md)
- ✅ Aligns with product definition goals
- ✅ Minimizes long-term maintenance burden
- ✅ Enables both developer and C-suite audience needs
- ✅ Supports blog as first-class feature

**Decision:** Proceed with Astro-based implementation.

---

## References

- [Astro Documentation](https://docs.astro.build)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- Project RULES.md (technical constraints)
- Product Definition (audience and goals)

