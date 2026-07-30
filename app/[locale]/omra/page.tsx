import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BookOpen, FileCheck, ShieldCheck, Users } from "lucide-react";
import {
  buildMetadata,
  JsonLd,
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  type FaqItem,
} from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { TourCard } from "@/components/ui/tour-card";
import { omra } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.omra" });
  return buildMetadata({
    locale: locale as Locale,
    path: "/omra",
    title: t("metaTitle"),
    description: t("metaDesc"),
    image: "/media/destinations/intl/saudi.webp",
  });
}

const TRUST = [
  { key: "visa", Icon: FileCheck },
  { key: "insurance", Icon: ShieldCheck },
  { key: "guide", Icon: Users },
  { key: "rituals", Icon: BookOpen },
] as const;

export default async function OmraPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const t = await getTranslations("pages.omra");
  const tl = await getTranslations("landing.omra");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: omra.map((pkg, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pkg.title[locale],
      url: `${SITE_URL}/${locale}/tours/${pkg.slug}`,
    })),
  };

  const faq = t.raw("faq") as FaqItem[];

  return (
    <>
      <JsonLd data={itemList} />
      <JsonLd
        data={breadcrumbJsonLd(locale, [{ name: t("breadcrumb"), path: "/omra" }])}
      />
      <JsonLd data={faqJsonLd(faq)} />
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/destinations/intl/saudi.webp"
        imageLabel={t("title")}
      />

      <section className="py-16 sm:py-24">
        <div className="container-wide">
          {/* The four guarantees come before the grid: they hold for every
              departure, so repeating them per card would be noise. */}
          <Reveal>
            <ul className="grid gap-4 rounded-[1.75rem] border border-surface-200 bg-surface-50 p-6 sm:grid-cols-2 lg:grid-cols-4">
              {TRUST.map(({ key, Icon }) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-azure-50 text-azure-600 ring-1 ring-azure-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy-700">
                      {tl(`trust.${key}.title`)}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-500">
                      {tl(`trust.${key}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 flex items-baseline justify-between gap-4">
            <h2 className="text-h3 font-medium text-ink-900">{t("packagesTitle")}</h2>
            <span className="text-sm text-muted-500">
              {omra.length} {t("resultsLabel")}
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {omra.map((pkg, i) => (
              <Reveal key={pkg.id} index={i}>
                <TourCard tour={pkg} className="h-full" />
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-500">{tl("footnote")}</p>
        </div>
      </section>

      <div className="border-t border-sand-200 bg-dune">
        <Faq title={t("faqTitle")} items={faq} />
      </div>

      <div className="py-24 sm:py-28">
        <CtaBand />
      </div>
    </>
  );
}
