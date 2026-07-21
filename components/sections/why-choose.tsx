import { useTranslations } from "next-intl";
import { Sparkles, Compass, Gem, LifeBuoy } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/motion/reveal";

const items = [
  { key: "tailor", Icon: Sparkles },
  { key: "local", Icon: Compass },
  { key: "riads", Icon: Gem },
  { key: "care", Icon: LifeBuoy },
] as const;

/** Value-proposition row with zellige-accented feature cards. */
export function WhyChoose() {
  const t = useTranslations("home.why");

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          lede={t("subtitle")}
          align="center"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }, i) => (
            <Reveal key={key} index={i}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-sand-200 bg-sand-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta-200 hover:shadow-[var(--shadow-soft)]">
                <div className="zellige absolute -end-8 -top-8 h-28 w-28 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta-50 text-terracotta-500 transition-colors duration-500 group-hover:bg-terracotta-500 group-hover:text-sand-50">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-6 text-xl font-medium text-ink-900">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-500">
                  {t(`items.${key}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
