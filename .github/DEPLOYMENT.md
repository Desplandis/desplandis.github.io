# Deployment Guide

This document explains the CI/CD setup for the iTowns website.

## Workflows

### CI (`ci.yml`)

**Triggers:** All pushes and pull requests to `main`

**Purpose:** Validates that the site builds successfully

**Steps:**
1. Checkout code
2. Setup Node.js 20 with npm cache
3. Install dependencies (`npm ci` for deterministic builds)
4. Run linter (non-blocking)
5. Check formatting (non-blocking)
6. Build site (`npm run build`)
7. Verify output exists
8. Upload build artifact

### Deploy (`deploy.yml`)

**Triggers:** Pushes to `main`, manual dispatch

**Purpose:** Deploy to GitHub Pages

**Steps:**
1. Build the site
2. Upload to GitHub Pages
3. Deploy

### Preview (`preview.yml`)

**Triggers:** Pull requests to `main`

**Purpose:** Create downloadable preview builds

**Steps:**
1. Build the site
2. Upload artifact
3. Comment on PR with download link

## GitHub Pages Setup

To enable GitHub Pages deployment:

1. Go to **Settings** → **Pages**
2. Under "Build and deployment", select **GitHub Actions**
3. The workflow will automatically deploy on pushes to `main`

## Environment Variables

No secrets are required for basic deployment. The site URL is configured in `astro.config.mjs`.

For custom domains, add a `CNAME` file in `public/`:

```
itowns.org
```

## Alternative Hosts

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Node version: 20

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Node version: 20

### Vercel

1. Connect your repository to Vercel
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

## Deterministic Builds

Builds are deterministic because:

- `npm ci` uses exact versions from `package-lock.json`
- Node.js version is pinned to 20 via `.nvmrc`
- Astro output is `static` (no SSR)
- No external runtime dependencies

## Troubleshooting

### Build fails on CI but works locally

1. Ensure `package-lock.json` is committed
2. Run `npm ci` locally (not `npm install`)
3. Check Node.js version matches `.nvmrc`

### TypeScript errors

The build command includes `astro check` which validates TypeScript.
Fix all errors before merging.

### Missing dependencies

If you see module not found errors:
1. Add the dependency: `npm install <package>`
2. Commit the updated `package-lock.json`

