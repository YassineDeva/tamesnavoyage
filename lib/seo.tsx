import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tamesnavoyage.com";

export const BRAND = "Tamesna Voyage";

/** Build per-page metadata with hreflang alternates and OpenGraph. */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  image = "/media/og/default.jpg",
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
    image: `${SITE_URL}/media/og/default.jpg`,
    description:
      locale === "ar"
        ? "وكالة أسفار مغربية مخصّصة لرحلات استثنائية."
        : "Agence de voyage marocaine sur-mesure pour des voyages d'exception.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Derb Sidi Bouloukat, Médina",
      addressLocality: "Marrakech",
      postalCode: "40000",
      addressCountry: "MA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 31.6295, longitude: -7.9811 },
    telephone: "+212 5 24 00 00 00",
    priceRange: "$$$",
    areaServed: "Morocco",
    sameAs: [
      "https://www.instagram.com/tamesnavoyage",
      "https://www.facebook.com/tamesnavoyage",
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
