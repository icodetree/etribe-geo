# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (Vite, port 3000)
- **Build**: `npm run build` (output: `dist/`)
- **Type check**: `npm run lint` (runs `tsc --noEmit` with strict mode)
- **Clean**: `npm run clean`
- **Deploy**: `vercel --yes --prod` (Vercel) or push to main (GitHub Pages auto-deploys)

## Architecture

**Stack**: React 19, Vite 6, TypeScript 5.8 (strict), Tailwind CSS 4, Motion v12, Lucide React

This is a single-page premium landing page for eTribe's GEO (Generative Engine Optimization) service. Korean-first with dark luxe aesthetic.

### App structure

`App.tsx` renders sections in order: Navigation → Hero → Problem → Definition → Data → How → Tools → About → Positioning → Process → CTA → Footer. A global `useReveal()` hook (IntersectionObserver) drives scroll-triggered `.reveal` animations across all sections.

### Key directories

- `src/sections/` — Full-page sections, each a self-contained component with its own layout/animation
- `src/components/ui/` — Reusable primitives (Eyebrow, SectionHeader, ScrollDivider, Button, AnimatedCounter)
- `src/components/` — Specialized visuals (FloatingOrbs, DotWave canvas)
- `src/hooks/` — `useReveal.ts` (global scroll reveal system)
- `docs/` — `GEO_랜딩페이지_카피_v2.md` is the single source of truth for page copy

### Motion library

Import from `motion/react` (NOT `framer-motion`). This is Motion v12, the framer-motion successor:
```tsx
import { motion, useInView, animate } from 'motion/react';
```

### Scroll reveal pattern

Add `reveal` class + stagger index via `--i` CSS variable:
```tsx
<div className="reveal" style={{ ['--i' as string]: 2 }}>
```
The `useReveal()` hook in App.tsx adds `.is-visible` class via IntersectionObserver (threshold 0.12, 80ms stagger per index).

### Design tokens (defined in `src/index.css` @theme)

- **Ink palette**: `ink-950` (#0a0a0a, primary bg) through `ink-50` (#fafafa)
- **Brand red**: `brand-red` (#fc0011) — accent color for CTAs, highlights, glows
- **Easing**: `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)` — used site-wide
- **Font**: Pretendard (CDN in index.html), feature settings `'ss01', 'cv01'`

### CSS utilities (in `src/index.css`)

- `.reveal` / `.is-visible` — scroll-triggered fade+translate+blur
- `.bezel` — glassmorphism card effect (gradient + inset shadow)
- `.hairline` — subtle border treatment
- `.line-h`, `.line-v` — animated divider lines
- `.orb-drift-1` through `.orb-drift-6` — floating background orb animations
- `.accent-underline` — red gradient underline on text
- `.mask-border-beam` — border glow sweep animation

### Base URL handling

`vite.config.ts` reads `process.env.BASE_URL` (defaults to `/`). GitHub Actions sets `BASE_URL=/etribe-geo/` for GitHub Pages. Vercel uses `/`. All public asset references must use `import.meta.env.BASE_URL`:
```tsx
src={`${import.meta.env.BASE_URL}logo.png`}
```

## Deployment

- **Vercel**: `vercel --yes --prod` — linked project in `.vercel/project.json`
- **GitHub Pages**: Auto-deploys on push to main via `.github/workflows/deploy.yml`
- Both deployments are active simultaneously

## TypeScript

Strict mode is enforced: `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`. Unused imports/variables will fail `npm run lint`.

## DotWave performance

The DotWave canvas component (Hero section background) is capped at 30fps and pauses when off-viewport. Do not remove these guards — they prevent fan overheating on sustained scroll.
