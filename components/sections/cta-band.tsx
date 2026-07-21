import { useTranslations } from "next-intl";
import { Reveal, RevealWords } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Media } from "@/components/ui/media";

/** Full-bleed sunset CTA band before the footer. */
export function CtaBand() {
  const t = useTranslations("home.cta");

  return (
    <section className="container-wide">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-sunset px-6 py-20 text-center sm:px-16 sm:py-28">
        <div className="absolute inset-0 opacity-30">
          <Media
            src="/media/hero/cta.jpg"
            alt=""
            label="CTA — caravan at dusk"
            rounded={false}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-clay-700/60 via-clay-600/50 to-ink-900/70" />
        <div className="zellige absolute inset-0 opacity-[0.08]" />

        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <p className="eyebrow text-gold-300">{t("eyebrow")}</p>
          </Reveal>
          <h2 className="font-display mt-5 text-display font-medium leading-[1.02] text-sand-50">
            <RevealWords text={t("title")} />
          </h2>
          <Reveal index={2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand-100/85 sm:text-lg">
              {t("subtitle")}
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="mt-9 flex justify-center">
              <ButtonLink href="/contact" variant="gold" size="lg" withArrow>
                {t("button")}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
