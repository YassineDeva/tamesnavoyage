import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "./section-heading";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { experiences, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";

/** Signature experiences — tall editorial cards with reveal-on-hover copy. */
export function Experiences() {
  const t = useTranslations("home.experiences");
  const tc = useTranslations("common");
  const locale = useLocale() as Locale;

  return (
    <section className="bg-ink-900 py-24 text-sand-50 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          lede={t("subtitle")}
          tone="sand"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} index={i % 3}>
              <article className="group relative h-[26rem] overflow-hidden rounded-[1.75rem]">
                <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                  <Media
                    src={exp.image}
                    alt={tr(exp.title, locale)}
                    label={exp.id}
                    rounded={false}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/25 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                    {tr(exp.meta, locale)}
                  </span>
                  <h3 className="font-display mt-2 text-2xl font-medium">
                    {tr(exp.title, locale)}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-sand-100/80 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                    {tr(exp.desc, locale)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink href="/tours" variant="gold" withArrow>
            {tc("viewAll")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
