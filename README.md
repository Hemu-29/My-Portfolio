# Hemanth — Portfolio

Personal portfolio of **Hemanth Ande**, AI & Full Stack Developer.
Designed with smooth GSAP animations, 3D scenes, light/dark themes, and interactive project showcases.

**Profiles:** [LinkedIn](https://www.linkedin.com/in/hemanth-ande-0265a2330/) ·
[GitHub](https://github.com/Hemu-29)

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript |
| Animation | GSAP + ScrollTrigger |
| Smooth scroll | Lenis (single rAF loop, see `lib/lenis.ts`) |
| 3D | Three.js (intro tunnel, journey light cables) |
| Styling | CSS Modules + design tokens in `app/globals.css` |
| Content | Typed local files in `content/` |
| i18n | EN/FR React context (`lib/i18n.tsx`) — pure state, survives scroll |

## The scenes

1. **Intro** — Three.js gallery tunnel travelled through the "GIREESH" mask
2. **Hero** — headline, stats, CTAs
3. **About** — identity, philosophy, velocity marquee
4. **Journey** — six resume chapters (2021–2026) inside a light-cable tunnel
5. **Design Stack** — tool spiral
6. **Work** — 14 selected projects on a perspective card arc, each with a
   case-study route at `/work/[slug]`
7. **Experience** — seven roles as a stacked panel deck
8. **Credentials** — certification records with issuer marks, right-to-centre deck
9. **Gallery** — *The People Behind the Work*: 14 photographs on a drifting wall
10. **Connect** — contact, socials, footer

## Scroll architecture

The page is a stack, not a column. Each scene is a sticky `100svh` hold plus a
runway sibling rendered directly under `<main>` (`components/layout/Scene.tsx`):
the outgoing frame stays pinned while the next one physically rises from the
bottom of the viewport and covers it. Scroll-driven interiors read their
progress off the runway (`lib/scene.ts`) rather than pinning themselves, so
every transition is scrubbable and reverses exactly.

## Structure

```
app/            layout, the scene stack (page.tsx), /work/[slug] case studies,
                sitemap, robots, 404, /tunnel lab route
components/
  layout/       Nav, Scene, LanguageToggle, SmoothScroll
  sections/     one folder per scene (component + module.css)
  ui/           Button (the site-wide CTA standard), VelocityMarquee
content/        typed content: projects, journey, experience, certifications,
                gallery, stack
lib/            gsap/lenis integration, i18n store, scene scrub helper, site meta
public/images/  covers, gallery photographs, issuer + company marks
```

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all routes statically generated)
```

Set `NEXT_PUBLIC_SITE_URL` once a domain exists — sitemap, robots, OG and
JSON-LD follow automatically (`lib/site.ts`).

## Conventions

- Every motion path checks `prefers-reduced-motion` and ships a readable
  static fallback; content is never gated behind an animation.
- Only `transform` / `opacity` are animated; interiors run scroll → target →
  interpolation, never raw scroll binding.
- Photographs and brand marks render at their true aspect ratios — cropped by
  `object-fit` when needed, never stretched, never dimmed.
- Proper nouns (companies, products, tools, places) are never translated.
