# Tamesna Voyages

**Bilingual (FR / AR + RTL)** website for the Tamesna Voyages travel agency,
built on the official brand charter — navy / azure / olive / amber, globe +
airplane mark, BoucherieCursive + Catesque.

## Stack
- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — house design tokens in `app/globals.css`
- **next-intl** — `fr` (default) + `ar` with full RTL, `[locale]` routing
- **GSAP + Lenis** — synced smooth-scroll (`components/motion/smooth-scroll.tsx`)
- **Framer Motion** — reveals and page motion
- **embla-carousel** — card rails and photo galleries
- **lucide-react** — icons (brand glyphs are custom SVG, lucide v1 dropped them)

## Run
```bash
npm run dev      # http://localhost:3000  → redirects to /fr
npm run build    # full SSG: 86 pages (FR+AR)
npm start
```

## Structure
```
app/[locale]/            home, destinations[/slug], tours[/slug], omra, services,
                         about, contact, testimonials, legal/[doc]
app/sitemap.ts robots.ts hreflang sitemap + robots
app/manifest.ts          PWA manifest + icons
i18n/                    routing, navigation, request config
proxy.ts                 next-intl locale routing
messages/fr.json ar.json all copy (real FR + AR)
components/
  landing/               homepage sections (hero, search, tours, omra, …)
  layout/                navbar, footer, logo, locale-switcher
  sections/              page-header, cta-band, tours-explorer, services-grid, …
  ui/                    button, media, cards, sliders, forms, star-rating
  motion/                reveal, smooth-scroll
lib/                     data (tours/destinations/omra/legal), seo, fonts, site, utils
public/media/            photography · public/voyages/ brochure PDFs
```

## Bilingual / RTL
`fr` is default. Arabic flips `dir="rtl"`, swaps to Amiri/Cairo fonts, and mirrors
layout via CSS logical properties (`ps/pe`, `start/end`, `rtl:` variants). Add a
locale in `i18n/routing.ts` + a `messages/<locale>.json`.

## Imagery
Homepage and inner-page photography lives under `public/media/` and is referenced
by hard-coded paths in `lib/data.ts`, `lib/voyages-2026.ts`, `lib/omra.ts` and the
`PageHeader image=` props. Destination galleries follow the convention
`public/media/destinations/gallery/<destination-id>-{1,2}.webp`. Itinerary day
shots come from Unsplash (`lib/itinerary-images.ts`, host allow-listed in
`next.config.ts`). `<Media>` falls back to an on-brand gradient when a file is
missing.

## SEO / AEO
Per-page `generateMetadata` (title, description, canonical, hreflang, OG/Twitter);
JSON-LD for `TravelAgency`, tour `Product` (offer + rating), review wall, and
`ItemList`; `sitemap.xml` + `robots.txt`.

## To wire up (backend)
`BookingForm` and the newsletter band simulate submit — connect to an API route
(Resend is available) at `/api/newsletter` and `/api/booking`.
