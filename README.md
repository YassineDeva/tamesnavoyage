# Tamesna Voyage

Award-grade, high-conversion **bilingual (FR / AR + RTL)** website for a Moroccan
travel agency. Editorial "warm earth + terracotta" design system with zellige
geometry, cinematic motion, and a 3D hero.

## Stack
- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — house design tokens in `app/globals.css`
- **next-intl** — `fr` (default) + `ar` with full RTL, `[locale]` routing
- **GSAP + Lenis** — synced smooth-scroll (`components/motion/smooth-scroll.tsx`)
- **Framer Motion** — reveals, page motion, carousels
- **React Three Fiber + drei** — hero dust/stars canvas (`components/three`)
- **lucide-react** — icons (brand glyphs are custom SVG, lucide v1 dropped them)

## Run
```bash
npm run dev      # http://localhost:3000  → redirects to /fr
npm run build    # full SSG: 29 static pages (FR+AR)
npm start
```

## Structure
```
app/[locale]/            home, destinations, tours, tours/[slug], about, contact, testimonials
app/sitemap.ts robots.ts hreflang sitemap + robots
i18n/                    routing, navigation, request config
messages/fr.json ar.json all copy (real FR + AR)
components/
  layout/                navbar, footer, logo, locale-switcher
  sections/              hero/*, destinations-showcase/*, testimonials/*, + others
  ui/                    button, media, cards, forms, star-rating
  motion/ three/         reveal, smooth-scroll, hero-canvas
lib/                     data (tours/destinations/…), seo, fonts, site config, utils
public/media/            image slots — see media/README.md
```

## Bilingual / RTL
`fr` is default. Arabic flips `dir="rtl"`, swaps to Amiri/Cairo fonts, and mirrors
layout via CSS logical properties (`ps/pe`, `start/end`, `rtl:` variants). Add a
locale in `i18n/routing.ts` + a `messages/<locale>.json`.

## Component variants (3 per marquee component)
Each marquee section ships **3 real variants** selected centrally in
`lib/site.ts → variants`:
| Component | a | b | c |
|---|---|---|---|
| `hero` | immersive 3D + parallax | editorial split (light) | dark luxury, centered |
| `destinations` | bento grid | snap-scroll gallery | numbered editorial rows |
| `testimonials` | 3 cards | dual-row marquee | featured quote + avatars |

Flip a value (e.g. `hero: "c"`) and rebuild to preview. Navbar auto-adapts its
tone to the active hero. The same `a/b/c` folder pattern extends to nav/footer/why.

## Imagery — Higgsfield Soul 2.0
All images are typed slots via `<Media>`. Placeholders render until real files
land at the documented paths. See **`public/media/README.md`** for the full
manifest + per-image art-direction prompts (seed Soul 2.0 with `/inspiration`).

## SEO / AEO
Per-page `generateMetadata` (title, description, canonical, hreflang, OG/Twitter);
JSON-LD for `TravelAgency`, tour `Product` (offer + rating), review wall, and
`ItemList`; `sitemap.xml` + `robots.txt`.

## To wire up (backend)
`NewsletterForm` and `BookingForm` simulate submit — connect to an API route
(Resend is available) at `/api/newsletter` and `/api/booking`.
