"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { Media } from "@/components/ui/media";
import { ButtonLink } from "@/components/ui/button";
import { RevealWords } from "@/components/motion/reveal";

/**
 * Variant B — editorial split. Calm sand column + tall image panel, a floating
 * rating card. Inspired by the airy "Azure Escape / Wanderlust" references.
 */
export function HeroB() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-dune pt-[72px]">
      <div className="zellige absolute inset-0 opacity-[0.05]" />
      <div className="container-wide relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Text */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow text-terracotta-500"
          >
            {t("eyebrow")}
          </motion.p>
          <h1 className="font-display mt-6 text-hero font-medium leading-[0.98] text-ink-900">
            <RevealWords text={t("titleLine1")} />{" "}
            <span className="italic text-terracotta-500">
              <RevealWords text={t("titleAccent")} />
            </span>
            <span className="mt-3 block text-[0.42em] font-normal leading-tight text-muted-500">
              <RevealWords text={t("titleLine2")} />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 max-w-md text-base leading-relaxed text-muted-500 sm:text-lg"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <ButtonLink href="/contact" size="lg" withArrow>
              {t("ctaPrimary")}
            </ButtonLink>
            <ButtonLink href="/tours" variant="outline" size="lg">
              {t("ctaSecondary")}
            </ButtonLink>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-sand-300 pt-6 text-sm font-medium text-ink-800">
            <span>{t("stat1")}</span>
            <span>{t("stat2")}</span>
            <span>{t("stat3")}</span>
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full lg:aspect-[3/4]">
            <Media
              src="/media/hero/hero.jpg"
              alt="Riad marocain avec vue sur l'Atlas"
              label="Hero B — riad & Atlas"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -start-4 bottom-8 flex items-center gap-3 rounded-2xl border border-sand-200 bg-sand-50/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {["a", "b", "c"].map((k) => (
                <span key={k} className="h-9 w-9 rounded-full border-2 border-sand-50 bg-terracotta-200" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-medium text-ink-800">{t("stat3")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
