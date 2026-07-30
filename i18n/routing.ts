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
  /**
   * next-intl would otherwise also emit hreflang as a `Link:` response header,
   * built from the *request* host. That is a second, competing source of the
   * same annotations — and where the request host does not match
   * NEXT_PUBLIC_SITE_URL (preview deploys, www vs apex), Google sees one
   * language pointing at two URLs and discards the pair. The canonical set
   * lives in `buildMetadata` and the sitemap, which agree with each other.
   */
  alternateLinks: false,
});

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  ar: "rtl",
};

export const localeLabels: Record<Locale, { native: string; short: string }> = {
  fr: { native: "Français", short: "FR" },
  ar: { native: "العربية", short: "AR" },
};
