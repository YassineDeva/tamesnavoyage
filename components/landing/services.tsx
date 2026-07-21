"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Briefcase, Users, Moon, Compass, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { services, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

type IconType = ComponentType<{ className?: string }>;

const ICONS: Record<string, IconType> = {
  briefcase: Briefcase,
  users: Users,
  moon: Moon,
  compass: Compass,
};

/** Homepage services teaser — 4 compact cards linking to /services. */
export function Services() {
  const locale = useLocale() as Locale;
  const t = useTranslations("home.servicesSection");

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="eyebrow text-azure-500">{t("eyebrow")}</p>
            <h2 className="mt-4 max-w-xl text-h2 font-bold leading-[1.08] text-ink-900">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-500">
              {t("subtitle")}
            </p>
          </Reveal>
          <Reveal index={1}>
            <ButtonLink href="/services" variant="outline" size="md" withArrow>
              {t("cta")}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Briefcase;
            return (
              <Reveal key={s.id} index={i}>
                <Link
                  href="/services"
                  className="group relative flex h-[20rem] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-navy-800 p-6 shadow-[0_28px_60px_-40px_rgba(5,63,92,0.6)]"
                >
                  <Image
                    src={s.image}
                    alt={tr(s.title, locale)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/45 to-navy-900/10" />
                  <div className="relative">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {tr(s.title, locale)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {tr(s.tagline, locale)}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-amber-300">
                      {t("cta")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
