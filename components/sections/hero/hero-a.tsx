"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { Media } from "@/components/ui/media";
import { ButtonLink } from "@/components/ui/button";
import { RevealWords } from "@/components/motion/reveal";

const HeroCanvas = dynamic(() => import("@/components/three/hero-canvas"), {
  ssr: false,
});

/** Variant A — immersive full-bleed hero with R3F dust + scroll parallax. */
export function HeroA() {
  const t = useTranslations("home.hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Parallax background image slot */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Media
          src="/media/hero/hero.jpg"
          alt="Dunes du Sahara marocain au coucher du soleil"
          label="Hero — Erg Chebbi golden hour"
          rounded={false}
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Warm cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/30 to-ink-900/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-transparent rtl:bg-gradient-to-l" />

      {/* 3D dust layer */}
      <div className="absolute inset-0 opacity-90">
        <HeroCanvas />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-wide relative flex h-full flex-col justify-end pb-24 pt-32 sm:justify-center sm:pb-0"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow mb-6 text-gold-300"
          >
            {t("eyebrow")}
          </motion.p>

          <h1 className="font-display text-hero font-medium text-sand-50">
            <span className="block">
              <RevealWords text={t("titleLine1")} />{" "}
              <span className="text-gradient-gold italic">
                <RevealWords text={t("titleAccent")} />
              </span>
            </span>
            <span className="mt-2 block text-[0.5em] font-normal leading-tight text-sand-100/85 sm:text-[0.42em]">
              <RevealWords text={t("titleLine2")} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-sand-100/85 sm:text-lg"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="/contact" size="lg" withArrow>
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

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-sand-50/15 pt-6"
          >
            {[t("stat1"), t("stat2"), t("stat3")].map((s) => (
              <div key={s} className="text-sand-50">
                <dd className="text-sm font-medium tracking-tight text-sand-100/85">{s}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-sand-100/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t("scroll")}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
