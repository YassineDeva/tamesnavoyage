import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/**
 * Central routing config shared by middleware, navigation helpers and the
 * request config. `fr` is the default (Francophone Morocco), `ar` is RTL.
 */
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  ar: "rtl",
};

export const localeLabels: Record<Locale, { native: string; short: string }> = {
  fr: { native: "Français", short: "FR" },
  ar: { native: "العربية", short: "AR" },
};
