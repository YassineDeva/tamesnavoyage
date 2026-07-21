import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "../section-heading";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { destinations, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

/** Variant C — numbered editorial rows, alternating image / copy. */
export function ShowcaseC() {
  const t = useTranslations("home.destinations");
  const locale = useLocale() as Locale;

  return (
    <section className="py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} lede={t("subtitle")} />

        <div className="mt-16 divide-y divide-sand-200 border-y border-sand-200">
          {destinations.map((d, i) => (
            <Reveal key={d.id} index={i % 3}>
              <Link
                href="/destinations"
                className="group grid items-center gap-6 py-8 sm:grid-cols-[auto_1fr_auto] sm:gap-10"
              >
                <span className="font-display text-4xl text-terracotta-200 transition-colors group-hover:text-terracotta-500 sm:text-6xl">
                  0{i + 1}
                </span>

                <div className="flex items-center gap-6">
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-44">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <Media src={d.image} alt={tr(d.name, locale)} label={d.id} rounded={false} sizes="200px" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-terracotta-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {tr(d.region, locale)}
                    </div>
                    <h3 className="font-display mt-1 text-2xl font-medium text-ink-900 sm:text-3xl">
                      {tr(d.name, locale)}
                    </h3>
                    <p className="mt-1 max-w-md text-sm text-muted-500">{tr(d.blurb, locale)}</p>
                  </div>
                </div>

                <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-sand-300 text-ink-800 transition-all group-hover:border-terracotta-500 group-hover:bg-terracotta-500 group-hover:text-sand-50 sm:inline-flex">
                  <ArrowUpRight className="h-5 w-5 rtl:rotate-90" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/destinations" variant="outline" withArrow>
            {t("cta")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
