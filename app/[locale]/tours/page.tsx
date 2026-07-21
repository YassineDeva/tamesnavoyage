import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata, JsonLd, SITE_URL } from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { ToursExplorer } from "@/components/sections/tours-explorer";
import { CtaBand } from "@/components/sections/cta-band";
import { tours } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.tours" });
  return buildMetadata({
    locale: locale as Locale,
    path: "/tours",
    title: t("metaTitle"),
    description: t("metaDesc"),
  });
}

export default async function ToursPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const t = await getTranslations("pages.tours");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tours.map((tour, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tour.title[locale],
      url: `${SITE_URL}/${locale}/tours/${tour.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/tours/grand-sud.jpg"
        imageLabel="Caravan crossing the dunes"
      />
      <ToursExplorer />
      <div className="pb-24 sm:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
