"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Briefcase, Users, Moon, Compass, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { services, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type IconType = ComponentType<{ className?: string }>;

const ICONS: Record<string, IconType> = {
  briefcase: Briefcase,
  users: Users,
  moon: Moon,
  compass: Compass,
};

/** Four service pillars as alternating image / content rows. */
export function ServicesGrid() {
  const locale = useLocale() as Locale;
  const t = useTranslations("pages.services");

  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow text-azure-500">{t("pillarsEyebrow")}</p>
          <h2 className="mt-4 max-w-2xl text-h2 font-bold leading-[1.08] text-navy-800">
            {t("pillarsTitle")}
          </h2>
          <span className="mt-5 block h-1 w-16 rounded-full bg-amber-500" />
        </Reveal>

        <div className="mt-14 space-y-16 sm:space-y-24">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Briefcase;
            const flip = i % 2 === 1;
            return (
              <div
                key={s.id}
                id={s.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <Reveal className={cn(flip && "lg:order-2")}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-[0_36px_80px_-42px_rgba(5,63,92,0.55)]">
                    <Image
                      src={s.image}
                      alt={tr(s.title, locale)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/45 to-transparent" />
                    <span className="absolute start-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-azure-600 shadow-lg">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                </Reveal>

                {/* Content */}
                <div className={cn(flip && "lg:order-1")}>
                  <Reveal index={1}>
                    <p className="eyebrow text-amber-500">{tr(s.tagline, locale)}</p>
                    <h3 className="mt-3 text-2xl font-bold text-navy-800 sm:text-3xl">
                      {tr(s.title, locale)}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-500">
                      {tr(s.description, locale)}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex items-center gap-3 text-sm font-medium text-navy-700"
                        >
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-olive-500/20 text-olive-700">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {tr(b, locale)}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
