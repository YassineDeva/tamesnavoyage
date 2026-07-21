"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Compass, Moon, Gem } from "lucide-react";
import { Media } from "@/components/ui/media";
import { ButtonLink } from "@/components/ui/button";
import { RevealWords } from "@/components/motion/reveal";

/**
 * Variant C — dark luxury, centered editorial. Full image, gold script accent
 * and a feature strip. Inspired by the "Hidden Gems" navy/gold reference.
 */
export function HeroC() {
  const t = useTranslations("home.hero");

  const features = [
    { Icon: Compass, label: t("stat1") },
    { Icon: Moon, label: t("stat2") },
    { Icon: Gem, label: t("stat3") },
  ];

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0">
        <Media
          src="/media/hero/hero.jpg"
          alt="Nuit étoilée sur le désert marocain"
          label="Hero C — starry desert night"
          rounded={false}
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-ink-900/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-ink-900/70" />
      <div className="zellige absolute inset-0 opacity-[0.06]" />

      <div className="container-wide relative py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rule-diamond mx-auto max-w-xs justify-center text-gold-400"
        >
          <span className="eyebrow">{t("eyebrow")}</span>
        </motion.div>

        <h1 className="font-display mx-auto mt-8 max-w-4xl text-hero font-medium leading-[0.95] text-sand-50">
          <RevealWords text={t("titleLine1")} />{" "}
          <span className="text-gradient-gold italic">
            <RevealWords text={t("titleAccent")} />
          </span>
          <span className="mt-4 block text-[0.4em] font-normal tracking-wide text-sand-100/85">
            <RevealWords text={t("titleLine2")} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-sand-100/80 sm:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <ButtonLink href="/contact" variant="gold" size="lg" withArrow>
            {t("ctaPrimary")}
          </ButtonLink>
          <ButtonLink
            href="/tours"
            variant="outline"
            size="lg"
            className="border-sand-50/40 text-sand-50 hover:border-sand-50 hover:bg-sand-50/10 hover:text-sand-50"
          >
            {t("ctaSecondary")}
          </ButtonLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-sand-50/15 pt-8"
        >
          {features.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-sand-100/85">
              <Icon className="h-5 w-5 text-gold-400" />
              <span className="text-xs font-medium sm:text-sm">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
