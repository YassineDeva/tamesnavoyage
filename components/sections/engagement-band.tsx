"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const ITEMS = ["e1", "e2", "e3", "e4", "e5"] as const;

/** Dark navy commitment band: the 5 engagements + the "999+" figure. */
export function EngagementBand() {
  const t = useTranslations("pages.services.engagement");

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
      <div className="dotted-field pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden />
      <div className="pointer-events-none absolute -top-24 end-0 h-72 w-[36rem] rounded-full bg-azure-500/20 blur-[130px]" />

      <div className="container-wide relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        {/* Left — heading + figure */}
        <div>
          <Reveal>
            <p className="eyebrow text-amber-400">{t("eyebrow")}</p>
            <h2 className="mt-4 text-h2 font-bold leading-[1.08]">{t("title")}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
              {t("subtitle")}
            </p>
          </Reveal>
          <Reveal index={1}>
            <div className="mt-9 flex items-baseline gap-4">
              <span className="text-6xl font-bold text-amber-400 sm:text-7xl">
                {t("stat")}
              </span>
              <span className="max-w-[8rem] text-sm uppercase tracking-wide text-white/70">
                {t("statLabel")}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right — engagement list */}
        <ul className="grid gap-4">
          {ITEMS.map((k, i) => (
            <Reveal key={k} index={i}>
              <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive-500 text-navy-900">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-[15px] leading-relaxed text-white/90">
                  {t(`items.${k}`)}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
