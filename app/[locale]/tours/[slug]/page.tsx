import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Clock,
  CalendarRange,
  Gauge,
  Star,
  Check,
  MapPin,
  Minus,
  Hotel,
  PlaneTakeoff,
  Ticket,
  FileText,
  FileDown,
  Moon,
} from "lucide-react";
import { buildMetadata, JsonLd, SITE_URL, BRAND } from "@/lib/seo";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/motion/reveal";
import { StarRating } from "@/components/ui/star-rating";
import { BookingForm } from "@/components/ui/booking-form";
import { TourCard } from "@/components/ui/tour-card";
import { Link } from "@/i18n/navigation";
import { tours, getTour, t as tr } from "@/lib/data";
import { getDayImages } from "@/lib/itinerary-images";
import { formatPrice } from "@/lib/utils";
import { locales, type Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    tours.map((tour) => ({ locale, slug: tour.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const tour = getTour(slug);
  if (!tour) return {};
  return buildMetadata({
    locale,
    path: `/tours/${slug}`,
    title: `${tr(tour.title, locale)} — ${BRAND}`,
    description: tr(tour.summary, locale),
    image: tour.image,
  });
}

export default async function TourDetailPage({ params }: Props) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  setRequestLocale(locale);
  const tour = getTour(slug);
  if (!tour) notFound();

  const t = await getTranslations("pages.tourDetail");
  const tc = await getTranslations("common");
  /** Prefer siblings from the same zone, then top up with anything else. */
  const zoneKey = (tour.zone ?? tour.region).fr;
  const others = tours.filter((x) => x.id !== tour.id);
  const related = [
    ...others.filter((x) => (x.zone ?? x.region).fr === zoneKey),
    ...others.filter((x) => (x.zone ?? x.region).fr !== zoneKey),
  ].slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tr(tour.title, locale),
    description: tr(tour.summary, locale),
    image: `${SITE_URL}${tour.image}`,
    brand: { "@type": "Brand", name: BRAND },
    ...(tour.rating !== undefined && tour.reviews !== undefined
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: tour.rating,
            reviewCount: tour.reviews,
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      price: tour.priceMad,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${locale}/tours/${tour.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <header className="relative flex min-h-[70vh] items-end overflow-hidden pb-14 pt-32 sm:pb-20">
        <div className="absolute inset-0">
          <Media src={tour.image} alt={tr(tour.title, locale)} label={tour.id} rounded={false} priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/92 via-ink-900/45 to-ink-900/55" />
        <div className="container-wide relative">
          <Reveal>
            <nav className="mb-5 flex items-center gap-2 text-xs font-medium text-sand-100/70">
              <Link href="/" className="hover:text-sand-50">
                {BRAND}
              </Link>
              <span className="rtl:rotate-180">›</span>
              <Link href="/tours" className="hover:text-sand-50">
                {t("breadcrumb")}
              </Link>
              <span className="rtl:rotate-180">›</span>
              <span className="text-gold-300">{tr(tour.title, locale)}</span>
            </nav>
          </Reveal>
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gold-300">
            <MapPin className="h-4 w-4" />
            {tr(tour.region, locale)}
          </div>
          <h1 className="mt-3 max-w-3xl text-display font-bold leading-[1.05] text-white">
            {tr(tour.title, locale)}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sand-100/85">
            <span className="inline-flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-terracotta-300" />
              {tour.days} {tc("days")}
            </span>
            {tour.nights !== undefined && (
              <span className="inline-flex items-center gap-2 text-sm">
                <Moon className="h-4 w-4 text-terracotta-300" />
                {tour.nights} {tc("nights")}
              </span>
            )}
            {tour.rating !== undefined && (
              <span className="inline-flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                {tour.rating.toFixed(1)}
                {tour.reviews !== undefined && ` (${tour.reviews})`}
              </span>
            )}
            <span className="inline-flex items-center gap-2 text-sm">
              <Gauge className="h-4 w-4 text-terracotta-300" />
              {tr(tour.level, locale)}
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="py-16 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="min-w-0">
            {/* Overview */}
            <Reveal>
              <h2 className="text-h3 font-medium text-ink-900">{t("overview")}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-500">
                {tr(tour.summary, locale)}
              </p>
              {tour.flightIncluded === false && (
                <p className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                  <PlaneTakeoff className="mt-0.5 h-4 w-4 shrink-0" />
                  {t("flightNotice")}
                </p>
              )}
            </Reveal>

            {/* Highlights */}
            <div className="mt-12">
              <h2 className="text-h3 font-medium text-ink-900">{t("highlights")}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h, i) => (
                  <Reveal key={i} index={i} as="li">
                    <div className="flex items-start gap-3 rounded-2xl border border-sand-200 bg-sand-50 p-4">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta-500 text-sand-50">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-ink-800">{tr(h, locale)}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Itinerary timeline */}
            <div className="mt-12">
              <h2 className="text-h3 font-medium text-ink-900">{t("itinerary")}</h2>
              <ol className="mt-6 space-y-10 border-s border-sand-300 ps-6 rtl:border-s-0 rtl:border-e rtl:ps-0 rtl:pe-6">
                {tour.itinerary.map((step) => {
                  const shots = getDayImages(tour.slug, step.day);
                  return (
                    <Reveal key={step.day} index={step.day % 4} as="li" className="relative">
                      <span className="absolute -start-[calc(1.5rem+7px)] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-terracotta-500 bg-sand-50 rtl:-start-auto rtl:-end-[calc(1.5rem+7px)]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-500">
                        {t("day")} {step.day}
                      </span>
                      <h3 className="mt-1 text-lg font-medium text-ink-900">
                        {tr(step.title, locale)}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-500">
                        {tr(step.detail, locale)}
                      </p>
                      {shots.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {shots.map((shot) => (
                            <Media
                              key={shot.src}
                              src={shot.src}
                              alt={tr(shot.alt, locale)}
                              className="aspect-[4/3] h-auto"
                              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 44vw, 22vw"
                            />
                          ))}
                        </div>
                      )}
                    </Reveal>
                  );
                })}
              </ol>
            </div>

            {/* Hotels */}
            {tour.hotels?.length ? (
              <div className="mt-12">
                <h2 className="text-h3 font-medium text-ink-900">{t("hotels")}</h2>
                <ul className="mt-5 divide-y divide-sand-200 overflow-hidden rounded-2xl border border-sand-200">
                  {tour.hotels.map((h, i) => (
                    <li
                      key={i}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-sand-50 px-5 py-4"
                    >
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-900">
                        <Hotel className="h-4 w-4 shrink-0 text-terracotta-400" />
                        {tr(h.city, locale)}
                      </span>
                      {/* Latin hotel names keep their own direction inside the RTL page. */}
                      <span dir="ltr" className="flex-1 text-sm text-muted-500 rtl:text-end">
                        {h.name}
                      </span>
                      <span className="text-xs font-medium text-muted-500">
                        {h.nights} {tc("nights")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Departures */}
            {tour.departures?.length ? (
              <div className="mt-12">
                <h2 className="text-h3 font-medium text-ink-900">{t("departures")}</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tour.departures.map((d, i) => (
                    <li
                      key={i}
                      className="rounded-full border border-sand-300 bg-sand-50 px-4 py-2 text-sm text-ink-800"
                    >
                      {tr(d, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Pricing grid */}
            {tour.pricing?.length ? (
              <div className="mt-12">
                <h2 className="text-h3 font-medium text-ink-900">{t("pricing")}</h2>
                <p className="mt-2 text-sm text-muted-500">{t("pricingNote")}</p>
                <ul className="mt-5 divide-y divide-sand-200 overflow-hidden rounded-2xl border border-sand-200">
                  {tour.pricing.map((row, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-4 bg-sand-50 px-5 py-3.5"
                    >
                      <span className="text-sm text-ink-800">{tr(row.label, locale)}</span>
                      <span className="shrink-0 text-sm font-semibold text-clay-600">
                        {formatPrice(row.mad, locale)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Included / not included */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-h3 font-medium text-ink-900">{t("included")}</h2>
                <ul className="mt-5 space-y-3">
                  {(tour.included ?? []).length
                    ? tour.included!.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-800">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
                          {tr(item, locale)}
                        </li>
                      ))
                    : (["i1", "i2", "i3", "i4"] as const).map((k) => (
                        <li key={k} className="flex items-start gap-3 text-sm text-ink-800">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
                          {t(`includedList.${k}`)}
                        </li>
                      ))}
                </ul>
              </div>
              {tour.notIncluded?.length ? (
                <div>
                  <h2 className="text-h3 font-medium text-ink-900">{t("notIncluded")}</h2>
                  <ul className="mt-5 space-y-3">
                    {tour.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-500">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" />
                        {tr(item, locale)}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {/* Optional excursions */}
            {tour.options?.length ? (
              <div className="mt-12">
                <h2 className="text-h3 font-medium text-ink-900">{t("options")}</h2>
                <ul className="mt-5 divide-y divide-sand-200 overflow-hidden rounded-2xl border border-sand-200">
                  {tour.options.map((o, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-4 bg-sand-50 px-5 py-3.5"
                    >
                      <span className="inline-flex items-baseline gap-2 text-sm text-ink-800">
                        <Ticket className="h-4 w-4 shrink-0 translate-y-0.5 text-terracotta-400" />
                        {tr(o.label, locale)}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-clay-600">
                        {o.mad > 0 ? formatPrice(o.mad, locale) : t("onRequest")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Flight schedule */}
            {tour.flights?.length ? (
              <div className="mt-12">
                <h2 className="text-h3 font-medium text-ink-900">{t("flights")}</h2>
                {tour.airline && (
                  <p dir="ltr" className="mt-2 text-sm text-muted-500 rtl:text-end">
                    {tour.airline}
                  </p>
                )}
                <ul className="mt-5 divide-y divide-sand-200 overflow-hidden rounded-2xl border border-sand-200">
                  {tour.flights.map((f, i) => (
                    <li
                      key={i}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-sand-50 px-5 py-3.5"
                    >
                      <span className="inline-flex items-baseline gap-2 text-sm text-ink-800">
                        <PlaneTakeoff className="h-4 w-4 shrink-0 translate-y-0.5 text-terracotta-400" />
                        {tr(f.route, locale)}
                      </span>
                      <span
                        dir="ltr"
                        className="text-sm font-medium tabular-nums text-muted-500"
                      >
                        {f.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Visa */}
            {tour.visa ? (
              <div className="mt-12">
                <h2 className="text-h3 font-medium text-ink-900">{t("visa")}</h2>
                <p className="mt-4 flex items-start gap-3 rounded-2xl border border-sand-200 bg-sand-50 p-5 text-sm leading-relaxed text-ink-800">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400" />
                  {tr(tour.visa, locale)}
                </p>
              </div>
            ) : null}

            {/* Booking & cancellation terms — identical across the catalogue */}
            {tour.pricing?.length ? (
              <div className="mt-12">
                <h2 className="text-h3 font-medium text-ink-900">{t("terms")}</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-sand-200 bg-sand-50 p-5">
                    <h3 className="text-sm font-semibold text-ink-900">{t("payment")}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-500">
                      <li>{t("paymentList.p1")}</li>
                      <li>{t("paymentList.p2")}</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-sand-200 bg-sand-50 p-5">
                    <h3 className="text-sm font-semibold text-ink-900">{t("cancellation")}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-500">
                      <li>{t("cancellationList.c1")}</li>
                      <li>{t("cancellationList.c2")}</li>
                      <li>{t("cancellationList.c3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Sticky booking sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-[1.75rem] border border-sand-200 bg-sand-50 p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-500">
                    {tc("from")}
                  </span>
                  <p className="text-2xl font-semibold text-clay-600">
                    {formatPrice(tour.priceMad, locale)}
                  </p>
                  <span className="text-xs text-muted-500">{tc("perPerson")}</span>
                </div>
                {tour.rating !== undefined && <StarRating value={tour.rating} size={16} />}
              </div>

              <dl className="mt-6 space-y-3 border-y border-sand-200 py-5 text-sm">
                <Row icon={<Clock className="h-4 w-4" />} label={t("duration")}>
                  {tour.days} {tc("days")}
                  {tour.nights !== undefined && ` · ${tour.nights} ${tc("nights")}`}
                </Row>
                <Row icon={<CalendarRange className="h-4 w-4" />} label={t("bestPeriod")}>
                  {tr(tour.best, locale)}
                </Row>
                <Row icon={<Gauge className="h-4 w-4" />} label={t("level")}>
                  {tr(tour.level, locale)}
                </Row>
                {tour.flightIncluded !== undefined && (
                  <Row icon={<PlaneTakeoff className="h-4 w-4" />} label={t("flight")}>
                    {tour.flightIncluded ? (
                      tour.airline ? (
                        <span dir="ltr">{tour.airline}</span>
                      ) : (
                        tc("yesIncluded")
                      )
                    ) : (
                      tc("notIncluded")
                    )}
                  </Row>
                )}
                {tour.departureCity && (
                  <Row icon={<MapPin className="h-4 w-4" />} label={t("departureCity")}>
                    {tr(tour.departureCity, locale)}
                  </Row>
                )}
              </dl>

              {tour.pdf && (
                <a
                  href={tour.pdf}
                  download={`Tamesna-Voyages-${tour.slug}.pdf`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-azure-200 bg-azure-50 px-5 py-3 text-sm font-semibold text-azure-700 transition-colors hover:border-azure-400 hover:bg-azure-100 focus-ring"
                >
                  <FileDown className="h-4 w-4 shrink-0" />
                  {t("downloadPdf")}
                </a>
              )}

              <h3 className="mt-5 text-lg font-medium text-ink-900">
                {t("bookTitle")}
              </h3>
              <p className="mt-1 text-sm text-muted-500">{t("bookSubtitle")}</p>
              <div className="mt-4">
                <BookingForm defaultTour={tour.slug} compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="bg-dune py-20 sm:py-24">
        <div className="container-wide">
          <h2 className="text-h2 font-medium text-ink-900">{t("relatedTitle")}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.id} index={i}>
                <TourCard tour={r} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <dt className="inline-flex items-center gap-2 text-muted-500">
        <span className="text-terracotta-400">{icon}</span>
        {label}
      </dt>
      <dd className="font-medium text-ink-900">{children}</dd>
    </div>
  );
}
