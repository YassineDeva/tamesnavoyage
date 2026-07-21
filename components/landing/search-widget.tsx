"use client";

import { useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { MapPin, Compass, Users, Search, ChevronDown } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import {
  destinations,
  internationalDestinations,
  services,
  t as tr,
} from "@/lib/data";
import type { Locale } from "@/i18n/routing";

type IconType = ComponentType<{ className?: string }>;

/**
 * Trip-finder that overlaps the hero. Real fields tied to the agency's own
 * offering: pick a destination (Morocco or international) and a trip type
 * (the four services), then route to the matching page.
 */
export function SearchWidget() {
  const t = useTranslations("landing.search");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [dest, setDest] = useState("");
  const [type, setType] = useState("");
  const [pax, setPax] = useState("t2");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dest) router.push(`/destinations/${dest}`);
    else if (type) router.push(`/services#${type}`);
    else router.push("/destinations");
  };

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
          <p className="mb-3 px-2 text-sm font-semibold text-navy-700">
            {t("title")}
          </p>

          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto] lg:gap-0 lg:rounded-3xl lg:ring-1 lg:ring-surface-200 lg:divide-x lg:divide-surface-200 rtl:lg:divide-x-reverse"
          >
            <SelectField icon={MapPin} label={t("destination")}>
              <select
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                aria-label={t("destination")}
                className="w-full cursor-pointer appearance-none bg-transparent text-sm font-semibold text-navy-700 outline-none"
              >
                <option value="">{t("destinationAny")}</option>
                <optgroup label={t("morocco")}>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.slug}>
                      {tr(d.name, locale)}
                    </option>
                  ))}
                </optgroup>
                <optgroup label={t("international")}>
                  {internationalDestinations.map((d) => (
                    <option key={d.id} value={d.slug}>
                      {tr(d.name, locale)}
                    </option>
                  ))}
                </optgroup>
              </select>
            </SelectField>

            <SelectField icon={Compass} label={t("tripType")}>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                aria-label={t("tripType")}
                className="w-full cursor-pointer appearance-none bg-transparent text-sm font-semibold text-navy-700 outline-none"
              >
                <option value="">{t("tripTypeAny")}</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {tr(s.title, locale)}
                  </option>
                ))}
              </select>
            </SelectField>

            <SelectField icon={Users} label={t("travelers")}>
              <select
                value={pax}
                onChange={(e) => setPax(e.target.value)}
                aria-label={t("travelers")}
                className="w-full cursor-pointer appearance-none bg-transparent text-sm font-semibold text-navy-700 outline-none"
              >
                {(["t1", "t2", "t3", "t4"] as const).map((k) => (
                  <option key={k} value={k}>
                    {t(`travelersOptions.${k}`)}
                  </option>
                ))}
              </select>
            </SelectField>

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

function SelectField({
  icon: Icon,
  label,
  children,
}: {
  icon: IconType;
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="relative flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-surface-50 lg:rounded-none">
      <Icon className="h-5 w-5 shrink-0 text-azure-500" />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-400">
          {label}
        </span>
        {children}
      </span>
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-400" />
    </label>
  );
}
