"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { tours, t as tr } from "@/lib/data";
import { TourCard } from "@/components/ui/tour-card";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Filterable circuit grid with animated re-layout. */
export function ToursExplorer() {
  const t = useTranslations("pages.tours");
  const locale = useLocale() as Locale;
  const [region, setRegion] = useState<string>("all");

  const regions = useMemo(() => {
    const map = new Map<string, string>();
    for (const tour of tours) map.set(tour.region.fr, tr(tour.region, locale));
    return Array.from(map, ([key, label]) => ({ key, label }));
  }, [locale]);

  const filtered =
    region === "all" ? tours : tours.filter((x) => x.region.fr === region);

  return (
    <section className="py-16 sm:py-24">
      <div className="container-wide">
        <div className="mb-10 flex flex-wrap items-center gap-2.5">
          <Chip active={region === "all"} onClick={() => setRegion("all")}>
            {t("all")}
          </Chip>
          {regions.map((r) => (
            <Chip key={r.key} active={region === r.key} onClick={() => setRegion(r.key)}>
              {r.label}
            </Chip>
          ))}
          <span className="ms-auto text-sm text-muted-500">
            {filtered.length} {t("resultsLabel")}
          </span>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tour) => (
              <motion.div
                key={tour.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <TourCard tour={tour} className="h-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-all focus-ring",
        active
          ? "border-azure-500 bg-azure-500 text-white"
          : "border-surface-300 text-navy-700 hover:border-azure-300 hover:bg-azure-50",
      )}
    >
      {children}
    </button>
  );
}
