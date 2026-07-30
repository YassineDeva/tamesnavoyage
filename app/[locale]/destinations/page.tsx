import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata, JsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { DestinationCard } from "@/components/ui/destination-card";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { destinations, internationalDestinations } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.destinations" });
  return buildMetadata({
    locale: locale as Locale,
    path: "/destinations",
    title: t("metaTitle"),
    description: t("metaDesc"),
    image: "/media/destinations/marrakech.jpg",
  });
}

export default async function DestinationsPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const t = await getTranslations("pages.destinations");

  /* Both grids in one list, in the order they are rendered. */
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [...destinations, ...internationalDestinations].map(
      (d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: d.name[locale],
        url: `${SITE_URL}/${locale}/destinations/${d.slug}`,
      }),
    ),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: t("breadcrumb"), path: "/destinations" },
        ])}
      />
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/destinations/marrakech.jpg"
        imageLabel={t("imageAlt")}
      />

      {/* Morocco */}
      <section className="py-20 sm:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-azure-500">{t("moroccoEyebrow")}</p>
            <h2 className="mt-4 text-h2 font-bold leading-[1.08] text-navy-800">
              {t("moroccoTitle")}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-500">
              {t("moroccoSubtitle")}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <Reveal key={d.id} index={i % 3}>
                <DestinationCard destination={d} className="h-[22rem]" priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* International */}
      <section className="bg-surface-50 py-20 sm:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-amber-500">{t("intlEyebrow")}</p>
            <h2 className="mt-4 text-h2 font-bold leading-[1.08] text-navy-800">
              {t("intlTitle")}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-500">
              {t("intlSubtitle")}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {internationalDestinations.map((d, i) => (
              <Reveal key={d.id} index={i % 4}>
                <DestinationCard destination={d} className="h-[22rem]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-24 pt-4 sm:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
