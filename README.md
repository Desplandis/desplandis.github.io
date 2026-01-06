# iTowns Framework Website

Official website for [iTowns](https://github.com/iTowns/itowns), a commons-oriented framework for building 3D geospatial web applications.

**Status:** 🚧 In Development  
**Framework:** Astro 4.x  
**License:** Apache 2.0

---

## Project Goals

This website serves as the primary digital interface for the iTowns framework, designed to:

1. **Enable informed adoption decisions** - Provide technical and strategic information for developers and decision-makers
2. **Communicate governance credibility** - Make the commons governance model visible and understandable
3. **Lower barriers to first value** - Clear paths from interest to implementation
4. **Demonstrate sustainability** - Signal active maintenance and long-term viability
5. **Position iTowns in the ecosystem** - Articulate when iTowns is the right choice

### Dual Audience

The site serves two primary audiences equally:
- **Developers** - Technical evaluation, implementation guidance, contribution pathways
- **C-Suite / Decision-Makers** - Strategic value, governance clarity, risk assessment

---

## Technology Stack

| Component | Technology | Why |
|-----------|-----------|-----|
| Framework | Astro 4.x | Static-first, content collections, islands architecture |
| Language | TypeScript | Type safety, better tooling |
| Content | Markdown/MDX | Git-native, portable, human-readable |
| Styling | Scoped CSS | Built-in, simple, no build complexity |
| CI/CD | GitHub Actions | Free, integrated, straightforward |

**Philosophy:** Simplicity, performance, and long-term maintainability over feature maximalism.

See [docs/stack-decision.md](docs/stack-decision.md) for detailed rationale.

---

## Project Structure

```
itowns-website/
├── docs/                    # Project documentation (decision records, architecture)
├── public/                  # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/             # Processed assets (images, fonts)
│   ├── components/         # Reusable Astro components
│   │   ├── layout/        # Header, footer, navigation
│   │   ├── ui/            # Buttons, cards, generic UI
│   │   └── sections/      # Hero, CTAs, page sections
│   ├── content/           # Content collections (type-safe)
│   │   ├── blog/         # Blog posts (markdown)
│   │   ├── case-studies/ # Case studies
│   │   └── governance/   # Governance documentation
│   ├── layouts/          # Page layout templates
│   ├── pages/            # File-based routing
│   ├── styles/           # Global CSS, variables
│   └── utils/            # Helper functions
└── ...
```

See [docs/repository-structure.md](docs/repository-structure.md) for detailed structure explanation.

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** (comes with Node.js)
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/iTowns/itowns-website.git
cd itowns-website

# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type-check TypeScript
npm run astro check

# Format code
npm run format

# Lint code
npm run lint
```

---

## Content Management

### Blog Posts

Blog posts live in `src/content/blog/` as Markdown files.

**Create a new post:**

```bash
# Create a new file: src/content/blog/YYYY-MM-title.md
```

**Frontmatter schema:**
```yaml
---
title: "Post Title"
summary: "Brief summary for listings and social cards"
publishDate: 2026-01-06
audience: "both" # developers | executives | both
tags: ["governance", "technical", "community"]
draft: false
---
```

### Case Studies

Case studies live in `src/content/case-studies/`.

**Schema:**
```yaml
---
title: "Organization Name"
organization: "Official Name"
industry: "Government" # or Research, Commercial, etc.
useCase: "Brief one-sentence description"
outcome: "What was achieved"
publishDate: 2026-01-06
featured: true
---
```

### Content Validation

All content schemas are validated at build time via Zod. Invalid frontmatter will cause build failures with helpful error messages.

---

## Deployment

### Automatic Deployment (Recommended)

Commits to `main` trigger automatic deployment via GitHub Actions.

**Workflow:**
1. Push to `main` branch
2. GitHub Actions runs `npm run build`
3. Static `dist/` folder is deployed to hosting platform

### Manual Deployment

```bash
# Build the site
npm run build

# Output is in dist/ - upload to any static host
# (GitHub Pages, Netlify, Cloudflare Pages, Vercel, etc.)
```

---

## Contributing

### Content Contributions

**Blog Posts:**
- Fork the repository
- Create a new markdown file in `src/content/blog/`
- Follow the frontmatter schema
- Submit a pull request

**Case Studies:**
- Coordinate with iTowns governance team
- Follow the case study template
- Ensure you have permission to share organizational details

### Code Contributions

**Before contributing:**
1. Read [.cursor/rules/project/RULES.md](.cursor/rules/project/RULES.md) for project conventions
2. Check existing issues or create a new one to discuss your change
3. Follow the existing code style (enforced by Prettier/ESLint)

**Development workflow:**
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Test locally with npm run dev

# Type-check and build
npm run astro check
npm run build

# Commit with clear messages
git commit -m "Add: brief description of changes"

# Push and create PR
git push origin feature/your-feature-name
```

---

## Design Principles

### Content
- **Clarity over cleverness** - Direct, factual language
- **No marketing fluff** - Every claim must be grounded
- **Technical depth with strategic framing** - Serve both audiences
- **Open-source credibility** - Transparent, honest, community-aligned

### Technical
- **Static-first** - Zero JavaScript by default
- **Performance by default** - Optimize images, minimize bundles
- **Accessibility** - Semantic HTML, keyboard navigation, WCAG 2.1 AA
- **Long-term maintainability** - Simple tools, clear patterns

### Architecture
- **Content-first** - Content collections for all structured content
- **Component-driven** - Reusable, self-contained components
- **Conventional** - Follow Astro conventions unless there's a strong reason not to
- **Explicit** - Prefer clarity over abstraction

---

## Project Documentation

- **[Product Definition](docs/product-definition.md)** - Audience segments, goals, messaging hierarchy
- **[Stack Decision](docs/stack-decision.md)** - Technical choices and rationale
- **[Repository Structure](docs/repository-structure.md)** - Detailed file organization
- **[Project Rules](.cursor/rules/project/RULES.md)** - Development conventions and constraints

---

## Key Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (hot reload enabled) |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Type-check TypeScript and content schemas |
| `npm run format` | Format code with Prettier |
| `npm run lint` | Lint code with ESLint |

---

## Browser Support

- **Modern browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile:** iOS Safari 13+, Chrome Android latest
- **Graceful degradation:** Core content accessible without JavaScript

---

## Performance Targets

- **First Contentful Paint:** < 1.0s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.0s
- **Lighthouse Score:** > 95 (performance, accessibility, best practices, SEO)

---

## License

This website is licensed under the **Apache License 2.0**, matching the iTowns framework license.

See [LICENSE](LICENSE) for details.

---

## Links

- **iTowns Framework:** [github.com/iTowns/itowns](https://github.com/iTowns/itowns)
- **Documentation:** *(will be published at itowns.org/docs)*
- **Community:** *(Discord/Slack/Forum link TBD)*
- **Governance:** *(Governance page URL TBD)*

---

## Status & Roadmap

### ✅ Completed
- [x] Product definition and audience analysis
- [x] Technical stack selection
- [x] Repository structure design
- [x] Project documentation

### 🚧 In Progress
- [ ] Astro project initialization
- [ ] Component library (Header, Footer, Hero, etc.)
- [ ] Content schemas (blog, case studies, governance)
- [ ] Homepage implementation

### 📋 Planned
- [ ] Blog implementation and listing pages
- [ ] Case studies collection and templates
- [ ] Documentation section architecture
- [ ] Governance transparency pages
- [ ] GitHub Actions CI/CD pipeline
- [ ] Deployment configuration
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Content creation (initial blog posts, case studies)

---

## Questions or Issues?

- **Bug reports:** [Open an issue](https://github.com/iTowns/itowns-website/issues)
- **Feature requests:** [Open an issue](https://github.com/iTowns/itowns-website/issues) with `[Feature Request]` prefix
- **General questions:** *(Community forum/Discord link TBD)*

---

**Built with [Astro](https://astro.build) 🚀**

