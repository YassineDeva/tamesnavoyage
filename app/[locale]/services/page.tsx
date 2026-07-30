import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  canonical,
  absolute,
  ogImage,
  ORG_ID,
  BRAND,
  type FaqItem,
} from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { EngagementBand } from "@/components/sections/engagement-band";
import { AlaCarteStrip } from "@/components/sections/alacarte-strip";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { services, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.services" });
  return buildMetadata({
    locale: locale as Locale,
    path: "/services",
    title: t("metaTitle"),
    description: t("metaDesc"),
    image: "/media/services/header.webp",
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const t = await getTranslations("pages.services");

  const faq = t.raw("faq") as FaqItem[];

  /* Each pillar the agency sells, as its own Service node pointing back at the
     one Organization — this is what tells a search engine that "Omra" and
     "MICE" are things this business does, not words that happen to be here. */
  const catalogue = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: BRAND,
    url: canonical(locale, "/services"),
    itemListElement: services.map((service, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: tr(service.title, locale),
        description: tr(service.description, locale),
        image: absolute(ogImage(service.image)),
        serviceType: tr(service.tagline, locale),
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Maroc" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: canonical(locale, "/contact"),
        },
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: t("breadcrumb"), path: "/services" },
        ])}
      />
      <JsonLd data={catalogue} />
      <JsonLd data={faqJsonLd(faq)} />

      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/services/header.webp"
        imageLabel={t("imageAlt")}
      />

      <ServicesGrid />
      <EngagementBand />
      <AlaCarteStrip />

      <div className="mt-20 border-t border-sand-200 bg-dune sm:mt-24">
        <Faq title={t("faqTitle")} items={faq} />
      </div>

      <div className="py-24 sm:py-28">
        <CtaBand />
      </div>
    </>
  );
}
