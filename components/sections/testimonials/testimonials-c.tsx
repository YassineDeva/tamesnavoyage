"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { Media } from "@/components/ui/media";
import { StarRating } from "@/components/ui/star-rating";
import { testimonials, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Variant C — single featured quote with avatar navigation. */
export function TestimonialsC() {
  const t = useTranslations("home.testimonials");
  const locale = useLocale() as Locale;
  const [i, setI] = useState(0);
  const active = testimonials[i];
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ink-900 py-24 text-sand-50 sm:py-32">
      <div className="container-wide">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" tone="sand" />

        <div className="relative mx-auto mt-14 max-w-3xl text-center">
          <Quote className="mx-auto h-12 w-12 text-terracotta-400 rtl:-scale-x-100" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-6 text-2xl leading-relaxed text-sand-50 sm:text-3xl"
            >
              “{tr(active.quote, locale)}”
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex flex-col items-center gap-1">
            <StarRating value={active.rating} size={16} />
            <p className="font-display mt-2 text-lg font-medium text-gold-400">{active.name}</p>
            <p className="text-sm text-sand-100/70">
              {tr(active.country, locale)} · {tr(active.trip, locale)}
            </p>
          </div>

          {/* Avatar nav */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <NavBtn onClick={() => go(-1)} aria-label="prev">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            </NavBtn>
            <div className="flex items-center gap-2">
              {testimonials.map((tst, idx) => (
                <button
                  key={tst.id}
                  onClick={() => setI(idx)}
                  aria-label={tst.name}
                  className={cn(
                    "relative h-11 w-11 overflow-hidden rounded-full ring-2 transition-all",
                    idx === i ? "ring-gold-400 scale-110" : "ring-transparent opacity-50 hover:opacity-90",
                  )}
                >
                  <Media src={tst.avatar} alt={tst.name} label={tst.name} rounded={false} sizes="44px" />
                </button>
              ))}
            </div>
            <NavBtn onClick={() => go(1)} aria-label="next">
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </NavBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavBtn({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-50/25 text-sand-50 transition-colors hover:border-gold-400 hover:text-gold-400"
      {...props}
    >
      {children}
    </button>
  );
}
