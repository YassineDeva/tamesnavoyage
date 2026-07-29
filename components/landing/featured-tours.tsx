import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { tours } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { TourCard } from "@/components/ui/tour-card";
import { CardSlider } from "@/components/ui/card-slider";

/** "Nos voyages organisés" — the whole catalogue as a rail, under the search bar. */
export function FeaturedTours() {
  const t = useTranslations("landing.tours");
  const tc = useTranslations("common");

  if (!tours.length) return null;

  return (
    <section id="voyages" className="bg-surface-50 py-16 sm:py-20">
      <div className="container-wide">
        <CardSlider
          labelPrev={tc("previous")}
          labelNext={tc("next")}
          header={
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-azure-600">
                  {t("eyebrow")}
                </span>
                <h2 className="mt-2 text-h2 font-bold text-ink-900">{t("title")}</h2>
                <p className="mt-2 max-w-xl text-muted-500">{t("subtitle")}</p>
              </div>
            </Reveal>
          }
          action={
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:border-azure-500 hover:bg-azure-50 hover:text-azure-600"
            >
              {t("viewAll", { count: tours.length })}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          }
        >
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} className="h-full" />
          ))}
        </CardSlider>
      </div>
    </section>
  );
}
