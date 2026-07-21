import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getDestination, type Destination } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { DestinationCard } from "@/components/ui/destination-card";

/** Curated mix of Moroccan roots + international reach. */
const FEATURED = ["marrakech", "bali", "maldives", "turquie"];

/** "Popular Destinations" — heading + View All + four real destination cards. */
export function PopularDestinations() {
  const t = useTranslations("landing.destinations");
  const featured = FEATURED.map((slug) => getDestination(slug)).filter(
    (d): d is Destination => Boolean(d),
  );

  return (
    <section id="destinations" className="bg-white py-16 sm:py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <h2 className="text-h2 font-bold text-ink-900">{t("title")}</h2>
              <PlaneTrail className="hidden h-6 w-24 text-amber-500 sm:block" />
            </div>
          </Reveal>
          <Reveal index={1}>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:border-azure-500 hover:bg-azure-50 hover:text-azure-600"
            >
              {t("viewAll")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((d, i) => (
            <Reveal key={d.id} index={i}>
              <DestinationCard
                destination={d}
                className="aspect-[3/4]"
                priority={i < 2}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Dotted flight trail + plane, echoing the brand's trajectory motif. */
function PlaneTrail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 20 C 26 20, 40 6, 70 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="1 5"
      />
      <path
        fill="currentColor"
        d="M74 2.5 78.5 6l-3.6 3.4-.7-2.5-3-.9 2.9-1 .6-2.5z"
        transform="translate(2 0)"
      />
    </svg>
  );
}
