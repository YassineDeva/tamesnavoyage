import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

/** Deep-navy CTA band before the footer / page end. */
export function CtaBand() {
  const t = useTranslations("home.cta");

  return (
    <section className="container-wide">
      <div className="bg-deep relative overflow-hidden rounded-[2.5rem] px-6 py-20 text-center sm:px-16 sm:py-24">
        <div
          className="dotted-field absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 start-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-azure-500/30 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <p className="eyebrow text-amber-300">{t("eyebrow")}</p>
          </Reveal>
          <h2 className="mt-5 text-display font-bold leading-[1.05] text-white">
            {t("title")}
          </h2>
          <Reveal index={2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
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
