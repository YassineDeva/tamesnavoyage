import localFont from "next/font/local";
import { Amiri, Cairo } from "next/font/google";

/**
 * Brand display face — BoucherieCursive-Bold (script) from the Tamesna Voyages
 * charte graphique. Used for headline accents & the wordmark.
 */
export const boucherie = localFont({
  src: "../app/fonts/BoucherieCursive-Bold.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "700",
  style: "normal",
});

/**
 * Brand text face — Catesque (humanist sans) from the charte graphique.
 * Used for body copy, UI and letterspaced overlines.
 */
export const catesque = localFont({
  src: "../app/fonts/Catesque-Medium.ttf",
  variable: "--font-sans",
  display: "swap",
  weight: "500",
  style: "normal",
});

/** Classical Naskh for AR display headlines (BoucherieCursive is Latin-only). */
export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-display",
  display: "swap",
});

/** Modern Arabic sans for AR body / UI. */
export const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const fontVariables = `${boucherie.variable} ${catesque.variable} ${amiri.variable} ${cairo.variable}`;
