import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getTour, tours, type Tour } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { TourCard } from "@/components/ui/tour-card";

/**
 * Three programmes covering three countries and three price points, so the
 * homepage shows the range rather than one corner of the catalogue.
 */
const FEATURED = ["turquie-anatolie", "egypte-nil-hurghada", "italie-bella-italia"];

/** "Nos voyages organisés" — the sellable catalogue, right under the search bar. */
export function FeaturedTours() {
  const t = useTranslations("landing.tours");
  const featured = FEATURED.map((slug) => getTour(slug)).filter(
    (x): x is Tour => Boolean(x),
  );

  if (!featured.length) return null;

  return (
    <section id="voyages" className="bg-surface-50 py-16 sm:py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-azure-600">
                {t("eyebrow")}
              </span>
              <h2 className="mt-2 text-h2 font-bold text-ink-900">{t("title")}</h2>
              <p className="mt-2 max-w-xl text-muted-500">{t("subtitle")}</p>
            </div>
          </Reveal>
          <Reveal index={1}>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:border-azure-500 hover:bg-azure-50 hover:text-azure-600"
            >
              {t("viewAll", { count: tours.length })}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour, i) => (
            <Reveal key={tour.id} index={i}>
              <TourCard tour={tour} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
