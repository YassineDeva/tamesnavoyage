"use client";

import type { ComponentType } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Ticket, Car, Bed, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { alaCarteServices, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

type IconType = ComponentType<{ className?: string }>;

const ICONS: Record<string, IconType> = {
  ticket: Ticket,
  car: Car,
  bed: Bed,
  sparkles: Sparkles,
};

/** "Nos services voyages" — à-la-carte building blocks (billets, transport…). */
export function AlaCarteStrip() {
  const locale = useLocale() as Locale;
  const t = useTranslations("pages.services.alacarte");

  return (
    <section className="bg-surface-50 py-20 sm:py-28">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow text-azure-500">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-bold leading-[1.08] text-navy-800">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-500">
            {t("subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {alaCarteServices.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.id} index={i}>
                <article className="group h-full rounded-[1.75rem] border border-surface-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-azure-200 hover:shadow-[0_28px_60px_-38px_rgba(5,63,92,0.5)]">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-azure-50 text-azure-600 ring-1 ring-azure-100 transition-colors group-hover:bg-azure-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy-800">
                    {tr(s.label, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-500">
                    {tr(s.desc, locale)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
