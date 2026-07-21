import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { StarRating } from "@/components/ui/star-rating";
import { type Tour, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";
import { formatPrice, cn } from "@/lib/utils";

/** Premium circuit card for the listing + related grids. */
export function TourCard({ tour, className }: { tour: Tour; className?: string }) {
  const locale = useLocale() as Locale;
  const tc = useTranslations("common");

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-surface-200 bg-white shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] focus-ring",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.image}
          alt={tr(tour.title, locale)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/45 to-transparent" />
        <span className="absolute start-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700 backdrop-blur">
          {tr(tour.level, locale)}
        </span>
        <span className="absolute end-4 top-4 inline-flex items-center gap-1 rounded-full bg-navy-900/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <Clock className="h-3.5 w-3.5" />
          {tour.days} {tc("days")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-azure-600">
          <MapPin className="h-3.5 w-3.5" />
          {tr(tour.region, locale)}
        </div>
        <h3 className="mt-2 text-xl font-bold text-navy-700">
          {tr(tour.title, locale)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-500">
          {tr(tour.summary, locale)}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <StarRating value={tour.rating} />
          <span className="text-xs font-semibold text-navy-700">{tour.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-500">({tour.reviews})</span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-surface-200 pt-5">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-muted-500">
              {tc("from")}
            </span>
            <span className="text-lg font-bold text-navy-700">
              {formatPrice(tour.priceMad, locale)}
            </span>
            <span className="text-xs text-muted-500"> {tc("perPerson")}</span>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-azure-50 text-azure-600 transition-colors group-hover:bg-azure-500 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
          </span>
        </div>
      </div>
    </Link>
  );
}
