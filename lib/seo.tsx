import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/routing";
import { contact } from "@/lib/site";
import ogManifest from "@/lib/og-manifest.json";

/** Trailing slashes here would leak into every canonical, so strip them once. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tamesnavoyages.ma"
).replace(/\/+$/, "");

export const BRAND = "Tamesna Voyages";

/** Stable node ids so every graph on the site points at the same entities. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

/**
 * Ratings are only marked up once somebody has collected real, verifiable
 * reviews. Google treats invented `aggregateRating` as spam and self-serving
 * reviews on an Organization are ignored outright — so the catalogue's
 * placeholder scores stay out of the structured data until this flips.
 */
export const REVIEWS_ARE_VERIFIED = false;

/**
 * `<lastmod>` for the catalogue. Bump it whenever tours, destinations or the
 * page copy change — a date that never moves is a date Google stops reading,
 * and one that moves without the content moving is worse than none at all.
 */
export const CONTENT_UPDATED = "2026-07-30";

/** Shop coordinates — same point the contact page's map embed uses. */
export const GEO = { latitude: 33.8349991, longitude: -6.9208849 };

export const MAP_URL = `https://maps.google.com/maps?q=Tamesna+Voyages&ll=${GEO.latitude},${GEO.longitude}&z=17`;

const OG_DEFAULT = "/media/og/default.jpg";

/**
 * Social crawlers (WhatsApp above all, which is how most of this audience
 * shares a link) are unreliable with WebP, so previews point at the JPEG
 * renditions built by `npm run og:build`. Anything without a rendition falls
 * back to the brand card rather than to a dead URL.
 */
export function ogImage(src?: string): string {
  if (!src) return OG_DEFAULT;
  const flat = src
    .replace(/^\/media\//, "")
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/\//g, "-");
  const candidate = `/media/og/${flat}.jpg`;
  return (ogManifest as string[]).includes(candidate) ? candidate : OG_DEFAULT;
}

export function absolute(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function canonical(locale: Locale, path = ""): string {
  return `${SITE_URL}/${locale}${path}`;
}

/** hreflang set — every variant plus x-default, identical on all of them. */
function languageAlternates(path: string) {
  const languages = Object.fromEntries(
    locales.map((l) => [l, canonical(l, path)]),
  ) as Record<string, string>;
  /* French is the fallback for anyone we have no variant for. */
  languages["x-default"] = canonical("fr", path);
  return languages;
}

/** Build per-page metadata with hreflang alternates and OpenGraph. */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  image,
  noindex = false,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  const url = canonical(locale, path);
  const og = absolute(ogImage(image));

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            /* Let Google use a full-size thumbnail and an untruncated snippet —
               both are opt-in and both lift click-through on travel queries. */
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      url,
      siteName: BRAND,
      title,
      description,
      locale: locale === "ar" ? "ar_MA" : "fr_MA",
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => (l === "ar" ? "ar_MA" : "fr_MA")),
      images: [{ url: og, width: 1200, height: 630, alt: title, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og],
    },
  };
}

/** Organization + LocalBusiness JSON-LD for the travel agency. */
export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: BRAND,
    alternateName: locale === "ar" ? "تامسنا فوياج" : undefined,
    url: canonical(locale),
    logo: absolute("/brand/logo-dark.svg"),
    image: absolute(OG_DEFAULT),
    description:
      locale === "ar"
        ? "وكالة أسفار وتنظيم فعاليات بتامسنا — جولات وفنادق ورحلات طيران وبرامج عمرة."
        : "Agence de voyages & d'événementiel à Tamesna — circuits, hôtels, vols et programmes Omra.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Yaâkoub El Mansour, Imm. A, Magasin N°1",
      addressLocality: "Tamesna",
      addressRegion: "Rabat-Salé-Kénitra",
      postalCode: "12000",
      addressCountry: "MA",
    },
    geo: { "@type": "GeoCoordinates", ...GEO },
    hasMap: MAP_URL,
    telephone: contact.phone,
    email: contact.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "customer service",
      availableLanguage: ["fr", "ar"],
      areaServed: "MA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "MAD",
    knowsLanguage: ["fr", "ar"],
    /* The towns a walk-in agency actually serves — the strongest local signal
       we can give without a Business Profile. */
    areaServed: [
      { "@type": "City", name: "Tamesna" },
      { "@type": "City", name: "Témara" },
      { "@type": "City", name: "Rabat" },
      { "@type": "City", name: "Salé" },
      { "@type": "City", name: "Skhirat" },
      { "@type": "Country", name: "Maroc" },
    ],
    sameAs: [
      contact.instagram,
      contact.facebook,
      contact.twitter,
      contact.youtube,
    ],
  };
}

/** WebSite node, so both language trees resolve to one publisher entity. */
export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: canonical(locale),
    name: BRAND,
    inLanguage: locale === "ar" ? "ar-MA" : "fr-MA",
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList mirroring the trail each page already renders. The final crumb
 * carries no `item` — it is the current page.
 */
export function breadcrumbJsonLd(locale: Locale, trail: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: BRAND, path: "" }, ...trail].map(
      (crumb, i, all) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        ...(i === all.length - 1
          ? {}
          : { item: canonical(locale, crumb.path) }),
      }),
    ),
  };
}

export type FaqItem = { q: string; a: string };

/**
 * FAQPage. Google restricted FAQ *rich results* to government and health sites
 * in 2023, so this is not a SERP decoration — it is here because assistants and
 * AI summaries read structured answers far more reliably than prose, and every
 * question below is rendered visibly on the page, as the spec requires.
 */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** Render a JSON-LD <script> tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
