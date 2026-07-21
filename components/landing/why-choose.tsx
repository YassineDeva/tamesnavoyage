import type { ComponentType } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Globe, ThumbsUp, CalendarCheck, Percent, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";

type IconType = ComponentType<{ className?: string }>;

const FEATURES: { key: string; icon: IconType }[] = [
  { key: "choices", icon: Globe },
  { key: "trusted", icon: ThumbsUp },
  { key: "flexible", icon: CalendarCheck },
  { key: "deals", icon: Percent },
];

/** "Why Choose" — 2×2 feature grid beside a dark adventure image card. */
export function WhyChoose() {
  const t = useTranslations("landing.why");

  return (
    <section id="why" className="bg-surface-50 py-20 sm:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — heading + features */}
        <div>
          <Reveal>
            <h2 className="text-h2 font-bold text-ink-900">
              {t("titleLead")}{" "}
              <span className="text-script text-azure-500">{t("titleAccent")}</span>
            </h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-amber-500" />
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {FEATURES.map(({ key, icon: Icon }, i) => (
              <Reveal key={key} index={i} className="flex gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-azure-50 text-azure-600 ring-1 ring-azure-100">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-navy-700">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-500">
                    {t(`items.${key}.desc`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right — adventure card */}
        <Reveal index={1}>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] shadow-[0_36px_80px_-40px_rgba(5,63,92,0.55)] lg:min-h-[30rem]">
            <Image
              src="/media/adventure-beach.webp"
              alt={t("card.imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/35 to-navy-900/5" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <span className="eyebrow text-amber-400">{t("card.kicker")}</span>
              <h3 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white sm:text-3xl">
                {t("card.title")}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                {t("card.text")}
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-700 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-surface-100"
              >
                {t("card.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
