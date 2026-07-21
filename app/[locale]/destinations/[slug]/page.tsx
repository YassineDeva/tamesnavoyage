import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ChevronRight,
  Check,
  CalendarRange,
  Compass,
  Clock,
  Languages,
  ArrowLeft,
  MapPin,
} from "lucide-react";
import { buildMetadata, JsonLd, SITE_URL, BRAND } from "@/lib/seo";
import { Reveal } from "@/components/motion/reveal";
import { GalleryCarousel } from "@/components/ui/gallery-carousel";
import { DestinationCard } from "@/components/ui/destination-card";
import { ButtonLink } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  destinations,
  internationalDestinations,
  allDestinations,
  getDestination,
  getDestinationDetail,
  t as tr,
} from "@/lib/data";
import { locales, type Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    allDestinations.map((d) => ({ locale, slug: d.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const d = getDestination(slug);
  if (!d) return {};
  const detail = getDestinationDetail(d.id);
  return buildMetadata({
    locale,
    path: `/destinations/${slug}`,
    title: `${tr(d.name, locale)} — ${tr(d.region, locale)} | ${BRAND}`,
    description: detail ? tr(detail.intro, locale) : tr(d.blurb, locale),
    image: d.image,
  });
}

export default async function DestinationDetailPage({ params }: Props) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  setRequestLocale(locale);
  const d = getDestination(slug);
  if (!d) notFound();

  const detail = getDestinationDetail(d.id);
  const t = await getTranslations("pages.destinationDetail");
  const tm = await getTranslations("meta");
  const tn = await getTranslations("nav");

  const isMorocco = destinations.some((x) => x.id === d.id);
  const group = isMorocco ? destinations : internationalDestinations;
  const related = group.filter((x) => x.id !== d.id).slice(0, 4);

  const gallery = [
    { src: d.image, alt: tr(d.name, locale) },
    { src: `/media/destinations/gallery/${d.id}-1.webp`, alt: tr(d.name, locale) },
    { src: `/media/destinations/gallery/${d.id}-2.webp`, alt: tr(d.name, locale) },
  ];

  const facts = detail
    ? [
        { icon: CalendarRange, label: t("bestTime"), value: tr(detail.bestTime, locale) },
        { icon: Compass, label: t("idealFor"), value: tr(detail.idealFor, locale) },
        { icon: Clock, label: t("duration"), value: tr(detail.duration, locale) },
        { icon: Languages, label: t("language"), value: tr(detail.language, locale) },
      ]
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: tr(d.name, locale),
    description: detail ? tr(detail.intro, locale) : tr(d.blurb, locale),
    image: `${SITE_URL}${d.image}`,
    url: `${SITE_URL}/${locale}/destinations/${d.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <header className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy-800 pb-14 pt-32 sm:min-h-[68vh] sm:pb-20">
        <Image
          src={d.image}
          alt={tr(d.name, locale)}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/92 via-navy-900/45 to-navy-900/40" />
        <div className="dotted-field absolute inset-0 opacity-[0.12]" aria-hidden />

        <div className="container-wide relative">
          <nav className="mb-5 flex items-center gap-2 text-xs font-medium text-white/70">
            <Link href="/" className="transition-colors hover:text-white">
              {tm("brand")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            <Link href="/destinations" className="transition-colors hover:text-white">
              {tn("destinations")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            <span className="text-amber-300">{tr(d.name, locale)}</span>
          </nav>

          {d.tag && (
            <span className="mb-4 inline-block rounded-full bg-amber-500 px-4 py-1.5 text-xs font-semibold text-ink-900">
              {tr(d.tag, locale)}
            </span>
          )}
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-amber-300">
            <MapPin className="h-4 w-4" />
            {tr(d.region, locale)}
          </p>
          <h1 className="mt-3 text-display font-bold leading-[1.02] text-white">
            {tr(d.name, locale)}
          </h1>
        </div>
      </header>

      {/* Overview + facts */}
      <section className="py-20 sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Left — intro + highlights */}
          <div>
            <Reveal>
              <p className="eyebrow text-azure-500">{t("overview")}</p>
              <p className="mt-5 text-lg leading-relaxed text-muted-500 sm:text-xl">
                {detail ? tr(detail.intro, locale) : tr(d.blurb, locale)}
              </p>
            </Reveal>

            {detail && (
              <div className="mt-12">
                <h2 className="text-h3 font-bold text-navy-800">{t("highlights")}</h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {detail.highlights.map((h, i) => (
                    <Reveal key={i} index={i % 2}>
                      <li className="flex items-center gap-3 rounded-2xl border border-surface-200 bg-surface-50 px-5 py-4">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive-500/20 text-olive-700">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="text-[15px] font-medium text-navy-700">
                          {tr(h, locale)}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right — facts card */}
          {facts.length > 0 && (
            <Reveal index={1}>
              <aside className="lg:sticky lg:top-28">
                <div className="rounded-[2rem] border border-surface-200 bg-white p-7 shadow-[0_28px_60px_-40px_rgba(5,63,92,0.4)]">
                  <p className="eyebrow text-amber-500">{t("factsTitle")}</p>
                  <dl className="mt-6 space-y-5">
                    {facts.map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-4">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-azure-50 text-azure-600 ring-1 ring-azure-100">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-wide text-muted-400">
                            {label}
                          </dt>
                          <dd className="mt-0.5 text-[15px] font-semibold text-navy-800">
                            {value}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                  <ButtonLink href="/contact" variant="primary" size="md" withArrow className="mt-7 w-full">
                    {t("planCta")}
                  </ButtonLink>
                </div>
              </aside>
            </Reveal>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-surface-50 py-20 sm:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow text-azure-500">{t("gallery")}</p>
            <h2 className="mt-4 text-h2 font-bold text-navy-800">{tr(d.name, locale)}</h2>
          </Reveal>
          <div className="mt-10">
            <GalleryCarousel images={gallery} />
          </div>
        </div>
      </section>

      {/* Plan CTA */}
      <section className="py-20 sm:py-28">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-900 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="dotted-field pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden />
            <div className="pointer-events-none absolute -top-24 start-1/2 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-azure-500/25 blur-[120px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-h2 font-bold leading-[1.08] text-white">
                {t("planTitle")}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">
                {t("planSubtitle")}
              </p>
              <div className="mt-9 flex justify-center">
                <ButtonLink href="/contact" variant="gold" size="lg" withArrow>
                  {t("planCta")}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pb-24 sm:pb-28">
        <div className="container-wide">
          <div className="mb-10 flex items-center justify-between gap-4">
            <h2 className="text-h2 font-bold text-navy-800">{t("relatedTitle")}</h2>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-azure-600 hover:text-azure-700"
            >
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {t("backTo")}
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r, i) => (
              <Reveal key={r.id} index={i % 4}>
                <DestinationCard destination={r} className="h-[22rem]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
