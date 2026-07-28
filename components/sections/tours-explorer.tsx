"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { tours, t as tr, type Tour, type TourKind } from "@/lib/data";
import { TourCard } from "@/components/ui/tour-card";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Zone the tour is filed under — falls back to its region when unset. */
const zoneOf = (tour: Tour) => tour.zone ?? tour.region;

/** Filterable circuit grid with animated re-layout. */
export function ToursExplorer() {
  const t = useTranslations("pages.tours");
  const locale = useLocale() as Locale;
  const [zone, setZone] = useState<string>("all");
  const [kind, setKind] = useState<TourKind | "all">("all");

  const zones = useMemo(() => {
    const map = new Map<string, string>();
    for (const tour of tours) map.set(zoneOf(tour).fr, tr(zoneOf(tour), locale));
    return Array.from(map, ([key, label]) => ({ key, label }));
  }, [locale]);

  /** Only surface the type switch once both kinds are actually in the catalogue. */
  const hasKinds = useMemo(
    () => new Set(tours.map((x) => x.kind).filter(Boolean)).size > 1,
    [],
  );

  const filtered = tours.filter(
    (x) =>
      (zone === "all" || zoneOf(x).fr === zone) &&
      (kind === "all" || x.kind === kind),
  );

  return (
    <section className="py-16 sm:py-24">
      <div className="container-wide">
        <div className="mb-5 flex flex-wrap items-center gap-2.5">
          <Chip active={zone === "all"} onClick={() => setZone("all")}>
            {t("all")}
          </Chip>
          {zones.map((z) => (
            <Chip key={z.key} active={zone === z.key} onClick={() => setZone(z.key)}>
              {z.label}
            </Chip>
          ))}
          <span className="ms-auto text-sm text-muted-500">
            {filtered.length} {t("resultsLabel")}
          </span>
        </div>

        {hasKinds && (
          <div className="mb-10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-500">
              {t("kindLabel")}
            </span>
            <Chip small active={kind === "all"} onClick={() => setKind("all")}>
              {t("all")}
            </Chip>
            <Chip small active={kind === "circuit"} onClick={() => setKind("circuit")}>
              {t("kindCircuit")}
            </Chip>
            <Chip small active={kind === "sejour"} onClick={() => setKind("sejour")}>
              {t("kindSejour")}
            </Chip>
          </div>
        )}

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

        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted-500">{t("empty")}</p>
        )}
      </div>
    </section>
  );
}

function Chip({
  active,
  onClick,
  small,
  children,
}: {
  active: boolean;
  onClick: () => void;
  small?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border font-medium transition-all focus-ring",
        small ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
        active
          ? "border-azure-500 bg-azure-500 text-white"
          : "border-surface-300 text-navy-700 hover:border-azure-300 hover:bg-azure-50",
      )}
    >
      {children}
    </button>
  );
}
