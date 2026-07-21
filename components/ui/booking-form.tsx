"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Check, Loader2, Send } from "lucide-react";
import { tours, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Trip inquiry / booking form. Wire `onSubmit` to Resend/API later. */
export function BookingForm({
  defaultTour,
  compact = false,
}: {
  defaultTour?: string;
  compact?: boolean;
}) {
  const t = useTranslations("booking");
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // TODO: POST to /api/booking (Resend). Simulated for now.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[1.75rem] border border-olive-300/50 bg-olive-500/10 p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-olive-500 text-sand-50">
          <Check className="h-7 w-7" />
        </span>
        <p className="font-display text-lg text-ink-900">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4", compact ? "" : "sm:grid-cols-2")}>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink-800">{t("name")}</span>
        <input required name="name" placeholder={t("namePlaceholder")} className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink-800">{t("email")}</span>
        <input required type="email" name="email" placeholder={t("emailPlaceholder")} className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink-800">{t("phone")}</span>
        <input name="phone" placeholder={t("phonePlaceholder")} className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink-800">{t("travelers")}</span>
        <input name="travelers" type="number" min={1} defaultValue={2} className={inputCls} />
      </label>
      <label className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="text-sm font-medium text-ink-800">{t("tour")}</span>
        <select name="tour" defaultValue={defaultTour ?? ""} className={inputCls}>
          <option value="">—</option>
          {tours.map((tour) => (
            <option key={tour.id} value={tour.slug}>
              {tr(tour.title, locale)}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="text-sm font-medium text-ink-800">{t("message")}</span>
        <textarea name="message" rows={4} placeholder={t("messagePlaceholder")} className={cn(inputCls, "h-auto resize-none py-3")} />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-terracotta-500 px-8 font-semibold text-sand-50 transition-all hover:bg-terracotta-600 disabled:opacity-70 sm:col-span-2"
      >
        {status === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4 rtl:-scale-x-100" />
        )}
        {status === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}

const inputCls =
  "h-12 w-full rounded-xl border border-sand-300 bg-sand-50 px-4 text-sm text-ink-900 outline-none transition-colors placeholder:text-muted-500 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/15";
