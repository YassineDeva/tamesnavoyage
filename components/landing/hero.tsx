"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plane } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

/** Hero — split layout: badge + script headline + CTA on the left, photo right. */
export function Hero() {
  const t = useTranslations("landing.hero");

  return (
    <section id="top" className="relative overflow-hidden bg-hero-sky pt-28 sm:pt-32 lg:pt-36">
      <div
        className="dotted-field pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
        aria-hidden
      />
      {/* soft glow behind the photo */}
      <div
        className="pointer-events-none absolute -top-10 end-0 h-[36rem] w-[36rem] rounded-full bg-sky-300/40 blur-[120px]"
        aria-hidden
      />

      <div className="container-wide relative grid items-center gap-12 pb-32 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-44">
        {/* Left — copy */}
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-azure-200 bg-white/70 px-4 py-1.5 text-azure-700 shadow-sm backdrop-blur"
          >
            <Plane className="h-3.5 w-3.5 -rotate-45" />
            <span className="eyebrow text-[0.68rem]">{t("badge")}</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 text-hero font-semibold text-ink-900"
          >
            {t("titleLead")}
            <span className="text-script mt-1 block leading-[0.95] text-azure-500">
              {t("titleAccent")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-500 sm:text-lg"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-8"
          >
            <ButtonLink href="/tours" size="lg" withArrow>
              {t("cta")}
            </ButtonLink>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:ms-auto lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem] shadow-[0_44px_90px_-34px_rgba(5,63,92,0.55)] ring-1 ring-white/60">
            <Image
              src="/media/hero-santorini.webp"
              alt={t("imageAlt")}
              fill
              preload
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-[2.25rem] ring-1 ring-inset ring-navy-900/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
