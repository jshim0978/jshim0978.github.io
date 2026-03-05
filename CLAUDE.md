# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jungwoo Shim (AI Researcher at ETRI). It combines **Jekyll** (static site generation for GitHub Pages) with a **React SPA** bundled by Webpack. Jekyll serves the shell (`index.md`), and React renders the entire UI inside a `#root` div.

## Build & Dev Commands

```bash
# Install dependencies
npm install
bundle install        # Ruby/Jekyll deps (Gemfile)

# React dev server (port 3000, HMR)
npm run dev

# Production webpack build (outputs assets/js/bundle.js + assets/css/tailwind.css)
npm run build

# Jekyll local server (port 4000) — run in separate terminal after npm run build
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

There are no tests or linting configured.

## Architecture

### Two-layer stack
- **Jekyll layer**: `_config.yml` defines site metadata and content data (personal info, publications, projects, experience). `index.md` is the single page — it loads the CSS and the React bundle.
- **React layer**: SPA rendered into `#root`. Hash-based routing (`#/home`, `#/projects`, `#/projects/<id>`, `#/experience/<id>`, `#/publications`, `#/cv`).

### Webpack pipeline
- Entry: `assets/js/app.js` → imports `assets/css/custom.css` and mounts `<App />`
- Output: `assets/js/bundle.js` (JS) and `assets/css/tailwind.css` (CSS via MiniCssExtractPlugin)
- Babel (preset-env + preset-react) for JSX; PostCSS + Tailwind for CSS
- Path alias: `@` → `assets/js/`

### React component structure (`assets/js/components/`)
- `App.jsx` — root component, hash router, dark mode toggle, section switching
- `Navigation.jsx` — top nav bar with section links
- `sections/` — page-level components: `Home`, `Projects`, `Experience`, `Publications`, `CV`
- `projects/` — individual project detail components (e.g., `ProjectKakaoPaySandbox.jsx`)
- `experiences/` — individual experience detail components (e.g., `ExperienceETRI.jsx`)
- `shared/` — reusable components: `Container`, `Footer`, `AnimatedSection`, `ProjectDetailCard`
- `ui/` — primitives: `Card`, `Badge`, `Button` (shadcn/ui style with CVA + tailwind-merge)

### Styling
- Tailwind CSS v3 with `darkMode: 'class'`
- CSS variables for theming defined in `assets/css/custom.css` (light/dark)
- Custom colors: accent (sky-500), violet, rose; gradients and glass effects in `tailwind.config.js`
- Fonts: Poppins (headings), Inter (body), JetBrains Mono (code) — loaded via Google Fonts in `index.md`
- Framer Motion for page transitions and animations

### Deployment
Push to `main` branch → GitHub Pages auto-builds with Jekyll. The React bundle (`assets/js/bundle.js`) must be committed since GitHub Pages doesn't run webpack.

## Key Conventions

- Navigation uses hash routing — sections are switched in `App.jsx`'s `renderSection()`, detail views use `section/id` pattern
- Content data (projects, experiences, publications) lives inline in the React components, not in `_config.yml` (the YAML data is legacy from the original Jekyll theme)
- UI components follow shadcn/ui patterns: `class-variance-authority` for variants, `clsx` + `tailwind-merge` via a `cn()` utility
