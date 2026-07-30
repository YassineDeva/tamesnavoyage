import { useTranslations } from "next-intl";
import { ArrowRight, ShieldCheck, BookOpen, FileCheck, Users } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { omra } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { TourCard } from "@/components/ui/tour-card";
import { CardSlider } from "@/components/ui/card-slider";

const TRUST = [
  { key: "visa", Icon: FileCheck },
  { key: "insurance", Icon: ShieldCheck },
  { key: "guide", Icon: Users },
  { key: "rituals", Icon: BookOpen },
] as const;

/**
 * "Omra & pèlerinage" — the pilgrimage packages, given their own navy band on
 * the homepage.
 *
 * Deliberately not folded into the circuits rail: an Omra buyer is not browsing
 * summer holidays, and the calm dark band signals that before a word is read.
 * The trust strip underneath answers the four questions every pilgrim asks
 * before price — visa, insurance, guide, rites — because the fares themselves
 * are quoted on request.
 */
export function Omra() {
  const t = useTranslations("landing.omra");
  const tc = useTranslations("common");

  if (!omra.length) return null;

  return (
    <section id="omra" className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div className="dotted-field absolute inset-0 opacity-[0.12]" aria-hidden />

      <div className="container-wide relative">
        {/* Three across once they fit; a rail below that, where they don't. */}
        <CardSlider
          labelPrev={tc("previous")}
          labelNext={tc("next")}
          tone="dark"
          slideClassName="sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
          controlsClassName="lg:hidden"
          header={
            <Reveal>
              <div>
                <p className="eyebrow text-amber-300">{t("eyebrow")}</p>
                <h2 className="mt-4 max-w-2xl text-h2 font-bold leading-[1.08] text-white">
                  {t("title")}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                  {t("subtitle")}
                </p>
              </div>
            </Reveal>
          }
          action={
            <Link
              href="/omra"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-amber-300 hover:bg-amber-300 hover:text-navy-900"
            >
              {t("viewAll", { count: omra.length })}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          }
        >
          {omra.map((pkg, i) => (
            <Reveal key={pkg.id} index={i} className="h-full">
              <TourCard tour={pkg} className="h-full" />
            </Reveal>
          ))}
        </CardSlider>

        {/* What is settled even while the fare is not */}
        <Reveal index={2}>
          <ul className="mt-10 grid gap-4 rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map(({ key, Icon }) => (
              <li key={key} className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-300/15 text-amber-300 ring-1 ring-amber-300/25">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">
                    {t(`trust.${key}.title`)}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/60">
                    {t(`trust.${key}.desc`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 text-center text-xs text-white/50">{t("footnote")}</p>
      </div>
    </section>
  );
}
