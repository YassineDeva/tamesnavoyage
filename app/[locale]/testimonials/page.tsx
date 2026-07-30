import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  canonical,
  ORG_ID,
  REVIEWS_ARE_VERIFIED,
} from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { testimonials } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.testimonials" });
  return buildMetadata({
    locale: locale as Locale,
    path: "/testimonials",
    title: t("metaTitle"),
    description: t("metaDesc"),
    image: "/media/lifestyle/travelers.jpg",
  });
}

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const t = await getTranslations("pages.testimonials");

  /**
   * The page used to declare itself a `Product` carrying a 4.9/412 rating.
   * Both halves were wrong: an agency is not a product, and reviews a business
   * publishes about itself are ignored by Google for rich results — an invented
   * aggregate on top of that is a manual-action risk. So the page describes
   * itself, and the testimonials are only marked up once somebody has real,
   * verifiable reviews behind them.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: canonical(locale, "/testimonials"),
    name: t("title"),
    description: t("metaDesc"),
    isPartOf: { "@id": ORG_ID },
    ...(REVIEWS_ARE_VERIFIED
      ? {
          mainEntity: testimonials.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
            },
            reviewBody: r.quote[locale],
            itemReviewed: { "@id": ORG_ID },
          })),
        }
      : {}),
  };

  const stats = [
    { value: "4,9/5", label: t("statRating") },
    { value: "412", label: t("statReviews") },
    { value: "38%", label: t("statRepeat") },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: t("breadcrumb"), path: "/testimonials" },
        ])}
      />
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/lifestyle/travelers.jpg"
        imageLabel={t("imageAlt")}
      />

      {/* Stats */}
      <section className="border-b border-sand-200 py-14">
        <div className="container-wide grid gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i}>
              <div className="text-center">
                <p className="text-4xl font-bold text-navy-700 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-muted-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Wall */}
      <section className="py-20 sm:py-28">
        <div className="container-wide columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} index={i % 3}>
              <TestimonialCard item={item} />
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
