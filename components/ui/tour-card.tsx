import { useLocale, useTranslations } from "next-intl";
import {
  Clock,
  MapPin,
  ArrowUpRight,
  PlaneTakeoff,
  CalendarRange,
  FileDown,
  Moon,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Media } from "@/components/ui/media";
import { StarRating } from "@/components/ui/star-rating";
import { type Tour, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";
import { formatPrice, cn } from "@/lib/utils";

/**
 * Premium circuit card for the listing + related grids.
 *
 * The whole card links to the detail page via a stretched overlay rather than
 * a wrapping <Link>, so the brochure download can sit inside it without
 * nesting one interactive element in another.
 */
export function TourCard({ tour, className }: { tour: Tour; className?: string }) {
  const locale = useLocale() as Locale;
  const tc = useTranslations("common");
  const title = tr(tour.title, locale);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-surface-200 bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <Link
        href={`/tours/${tour.slug}`}
        aria-label={title}
        className="absolute inset-0 z-10 rounded-[1.75rem] focus-ring"
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <Media
          src={tour.image}
          alt={title}
          label={tour.id}
          rounded={false}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/45 to-transparent" />
        <span className="absolute start-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700 backdrop-blur">
          {tr(tour.level, locale)}
        </span>
        <span className="absolute end-4 top-4 inline-flex items-center gap-1 rounded-full bg-navy-900/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <Clock className="h-3.5 w-3.5" />
          {tour.days} {tc("days")}
        </span>
        {tour.flightIncluded === false && (
          <span className="absolute bottom-4 start-4 inline-flex items-center gap-1.5 rounded-full bg-amber-100/95 px-3 py-1 text-xs font-semibold text-amber-900 backdrop-blur">
            <PlaneTakeoff className="h-3.5 w-3.5" />
            {tc("flightNotIncluded")}
          </span>
        )}
        {/* A departure that cannot be booked yet says so on the photo, rather
            than letting the visitor discover it at the bottom of the form. */}
        {tour.status === "soon" && (
          <span className="absolute bottom-4 start-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-navy-900">
            {tc("statusSoon")}
          </span>
        )}
        {tour.status === "full" && (
          <span className="absolute bottom-4 start-4 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {tc("statusFull")}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-azure-600">
          <MapPin className="h-3.5 w-3.5" />
          {tr(tour.region, locale)}
        </div>
        <h3 className="mt-2 text-xl font-bold text-navy-700">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-500">
          {tr(tour.summary, locale)}
        </p>

        {/* For a pilgrimage the nights-per-holy-city split outranks every other
            fact on the card: "14 nuits" alone hides whether Makkah or Madinah
            gets the bulk of the stay. */}
        {tour.stay?.length ? (
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
            {tour.stay.map((leg, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-azure-600"
              >
                <Moon className="h-3.5 w-3.5 shrink-0" />
                {leg.nights} {tc("nights")} · {tr(leg.city, locale)}
                {leg.walk && (
                  <span className="text-muted-500">— {tr(leg.walk, locale)}</span>
                )}
              </li>
            ))}
          </ul>
        ) : tour.rating !== undefined ? (
          <div className="mt-5 flex items-center gap-2">
            <StarRating value={tour.rating} />
            <span className="text-xs font-semibold text-navy-700">{tour.rating.toFixed(1)}</span>
            {tour.reviews !== undefined && (
              <span className="text-xs text-muted-500">({tour.reviews})</span>
            )}
          </div>
        ) : tour.departures?.length ? (
          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-azure-600">
            <CalendarRange className="h-3.5 w-3.5" />
            {tour.departures.length > 1
              ? `${tour.departures.length} ${tc("departures")}`
              : tr(tour.departures[0], locale)}
          </div>
        ) : null}

        <div className="mt-5 flex items-end justify-between border-t border-surface-200 pt-5">
          <div>
            {tour.priceOnRequest ? (
              <>
                <span className="block text-[11px] uppercase tracking-wider text-muted-500">
                  {tc("price")}
                </span>
                <span className="text-lg font-bold text-navy-700">
                  {tc("onRequest")}
                </span>
              </>
            ) : (
              <>
                <span className="block text-[11px] uppercase tracking-wider text-muted-500">
                  {tc("from")}
                </span>
                <span className="text-lg font-bold text-navy-700">
                  {formatPrice(tour.priceMad, locale)}
                </span>
                <span className="text-xs text-muted-500"> {tc("perPerson")}</span>
              </>
            )}
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-azure-50 text-azure-600 transition-colors group-hover:bg-azure-500 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
          </span>
        </div>

        {tour.pdf && (
          <a
            href={tour.pdf}
            download={`Tamesna-Voyages-${tour.slug}.pdf`}
            className="relative z-20 mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-azure-200 bg-azure-50 px-4 py-2.5 text-xs font-semibold text-azure-700 transition-colors hover:border-azure-400 hover:bg-azure-100 focus-ring"
          >
            <FileDown className="h-4 w-4 shrink-0" />
            {tc("pdfProgram")}
          </a>
        )}
      </div>
    </article>
  );
}
