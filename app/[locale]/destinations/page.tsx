import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { DestinationCard } from "@/components/ui/destination-card";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { destinations } from "@/lib/data";
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
  });
}

export default async function DestinationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.destinations");

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/destinations/marrakech.jpg"
        imageLabel="Marrakech medina rooftops"
      />

      <section className="py-20 sm:py-28">
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.id} index={i % 3}>
              <DestinationCard destination={d} className="h-[22rem]" priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-24 sm:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
