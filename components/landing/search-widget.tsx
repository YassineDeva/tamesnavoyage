"use client";

import { useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Plane,
  BedDouble,
  Compass,
  Package,
  MapPin,
  Calendar,
  Users,
  Search,
} from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type IconType = ComponentType<{ className?: string }>;

const TABS: { key: string; icon: IconType }[] = [
  { key: "flights", icon: Plane },
  { key: "hotels", icon: BedDouble },
  { key: "tours", icon: Compass },
  { key: "packages", icon: Package },
];

/** Floating tabbed booking bar that overlaps the hero. */
export function SearchWidget() {
  const t = useTranslations("landing.search");
  const router = useRouter();
  const [tab, setTab] = useState("flights");

  return (
    <section id="search" className="relative z-20 -mt-24 lg:-mt-28">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[1.85rem] bg-white p-3 shadow-[0_36px_80px_-40px_rgba(5,63,92,0.5)] ring-1 ring-surface-200 sm:p-4"
        >
          {/* Tabs */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {TABS.map(({ key, icon: Icon }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-ring",
                    active
                      ? "bg-azure-50 text-azure-700"
                      : "text-muted-500 hover:bg-surface-100 hover:text-navy-700",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {t(`tabs.${key}`)}
                </button>
              );
            })}
          </div>

          {/* Fields */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/tours");
            }}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[repeat(5,minmax(0,1fr))_auto] lg:gap-0 lg:rounded-3xl lg:ring-1 lg:ring-surface-200 lg:divide-x lg:divide-surface-200 rtl:lg:divide-x-reverse"
          >
            <Field icon={MapPin} label={t("from")}>
              <input
                defaultValue={t("fromValue")}
                aria-label={t("from")}
                className="w-full bg-transparent text-sm font-semibold text-navy-700 outline-none"
              />
            </Field>
            <Field icon={MapPin} label={t("to")}>
              <input
                placeholder={t("toPlaceholder")}
                aria-label={t("to")}
                className="w-full bg-transparent text-sm font-semibold text-navy-700 outline-none placeholder:font-medium placeholder:text-muted-400"
              />
            </Field>
            <Field icon={Calendar} label={t("depart")}>
              <input
                defaultValue={t("departValue")}
                aria-label={t("depart")}
                className="w-full bg-transparent text-sm font-semibold text-navy-700 outline-none"
              />
            </Field>
            <Field icon={Calendar} label={t("return")}>
              <input
                defaultValue={t("returnValue")}
                aria-label={t("return")}
                className="w-full bg-transparent text-sm font-semibold text-navy-700 outline-none"
              />
            </Field>
            <Field icon={Users} label={t("travelers")}>
              <input
                defaultValue={t("travelersValue")}
                aria-label={t("travelers")}
                className="w-full bg-transparent text-sm font-semibold text-navy-700 outline-none"
              />
            </Field>

            <div className="p-1.5 sm:col-span-2 lg:col-span-1 lg:flex lg:items-center lg:p-2">
              <button
                type="submit"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-azure-500 px-6 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(45,136,197,0.7)] transition-all hover:bg-azure-600 focus-ring lg:h-full"
              >
                <Search className="h-4 w-4" />
                {t("submit")}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: IconType;
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex cursor-text items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-surface-50 lg:rounded-none">
      <Icon className="h-5 w-5 shrink-0 text-azure-500" />
      <span className="flex min-w-0 flex-col">
        <span className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-400">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}
