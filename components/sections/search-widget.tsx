"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, CalendarDays, Users, Compass, Search } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { destinations, t as tr } from "@/lib/data";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Elevated booking bar that overlaps the hero. Routes to /tours on submit. */
export function SearchWidget() {
  const t = useTranslations("home.search");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [dest, setDest] = useState("");

  return (
    <div className="container-wide relative z-30 -mt-16 sm:-mt-14">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/tours");
        }}
        className="grain overflow-hidden rounded-[2rem] border border-sand-200/70 bg-sand-50/95 p-2 shadow-[0_30px_80px_-40px_rgba(96,38,23,0.5)] backdrop-blur-xl"
      >
        <div className="grid grid-cols-1 gap-1 md:grid-cols-[1.3fr_1fr_1fr_1fr_auto]">
          <Field icon={<MapPin className="h-4 w-4" />} label={t("destination")}>
            <select
              value={dest}
              onChange={(e) => setDest(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-ink-900 outline-none"
            >
              <option value="">{t("destinationPlaceholder")}</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.slug}>
                  {tr(d.name, locale)}
                </option>
              ))}
            </select>
          </Field>

          <Field icon={<CalendarDays className="h-4 w-4" />} label={t("date")} border>
            <input
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              placeholder={t("datePlaceholder")}
              className="w-full bg-transparent text-sm font-medium text-ink-900 outline-none placeholder:text-muted-500"
            />
          </Field>

          <Field icon={<Users className="h-4 w-4" />} label={t("travelers")} border>
            <span className="text-sm font-medium text-ink-900">{t("travelersValue")}</span>
          </Field>

          <Field icon={<Compass className="h-4 w-4" />} label={t("style")} border>
            <input
              type="text"
              placeholder={t("stylePlaceholder")}
              className="w-full bg-transparent text-sm font-medium text-ink-900 outline-none placeholder:text-muted-500"
            />
          </Field>

          <button
            type="submit"
            className="group m-1 inline-flex items-center justify-center gap-2 rounded-[1.5rem] bg-terracotta-500 px-6 py-4 text-sm font-semibold text-sand-50 transition-all hover:bg-terracotta-600 md:px-7"
          >
            <Search className="h-4 w-4" />
            <span>{t("submit")}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  icon,
  label,
  children,
  border,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-[1.5rem] px-5 py-3.5 transition-colors hover:bg-sand-100/70",
        border && "md:border-s md:border-sand-200 md:rounded-none",
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta-50 text-terracotta-500">
        {icon}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-500">
          {label}
        </span>
        <span className="min-w-0 truncate">{children}</span>
      </span>
    </div>
  );
}
