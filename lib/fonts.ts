import { Fraunces, Manrope, Amiri, Cairo } from "next/font/google";

/** Editorial display serif for FR headlines (variable optical sizing). */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

/** Clean humanist sans for FR body / UI. */
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/** Classical Naskh for AR display headlines. */
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

export const fontVariables = `${fraunces.variable} ${manrope.variable} ${amiri.variable} ${cairo.variable}`;
