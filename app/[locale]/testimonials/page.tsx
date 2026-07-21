import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata, JsonLd, BRAND } from "@/lib/seo";
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
  });
}

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);
  const t = await getTranslations("pages.testimonials");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: BRAND,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "412",
    },
    review: testimonials.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.quote[locale],
    })),
  };

  const stats = [
    { value: "4,9/5", label: t("statRating") },
    { value: "412", label: t("statReviews") },
    { value: "38%", label: t("statRepeat") },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/lifestyle/travelers.jpg"
        imageLabel="Happy travelers at a desert camp"
      />

      {/* Stats */}
      <section className="border-b border-sand-200 py-14">
        <div className="container-wide grid gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i}>
              <div className="text-center">
                <p className="font-display text-4xl font-semibold text-clay-600 sm:text-5xl">
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
