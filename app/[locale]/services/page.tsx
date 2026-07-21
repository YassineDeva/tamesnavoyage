import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { EngagementBand } from "@/components/sections/engagement-band";
import { AlaCarteStrip } from "@/components/sections/alacarte-strip";
import { CtaBand } from "@/components/sections/cta-band";
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
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.services");

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/services/header.webp"
        imageLabel="Tamesna Voyages — services"
      />

      <ServicesGrid />
      <EngagementBand />
      <AlaCarteStrip />

      <div className="pb-24 sm:pb-28 pt-20 sm:pt-24">
        <CtaBand />
      </div>
    </>
  );
}
