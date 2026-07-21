import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tamesnavoyages.ma";

export const BRAND = "Tamesna Voyages";

/** Build per-page metadata with hreflang alternates and OpenGraph. */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  image = "/media/hero-santorini.webp",
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr${path}`,
        ar: `${SITE_URL}/ar${path}`,
        "x-default": `${SITE_URL}/fr${path}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: BRAND,
      title,
      description,
      locale: locale === "ar" ? "ar_MA" : "fr_MA",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Organization + LocalBusiness JSON-LD for the travel agency. */
export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: BRAND,
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/media/hero-santorini.webp`,
    description:
      locale === "ar"
        ? "وكالة أسفار وتنظيم فعاليات — جولات وفنادق ورحلات طيران لاستكشاف العالم."
        : "Agence de voyages & d'événementiel — circuits, hôtels et vols pour explorer le monde.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Yaâkoub El Mansour, Imm. A, Magasin N°1",
      addressLocality: "Tamesna, Témara",
      postalCode: "12000",
      addressCountry: "MA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.8667, longitude: -6.9167 },
    telephone: "+212 661 96 12 48",
    priceRange: "$$$",
    areaServed: "Worldwide",
    sameAs: [
      "https://www.instagram.com/tamesna.voyages",
      "https://www.facebook.com/tamesna.voyages",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "412",
    },
  };
}

/** Render a JSON-LD <script> tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
