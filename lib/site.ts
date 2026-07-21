/**
 * Central site config: primary navigation + which visual VARIANT of each
 * multi-variant component is active. Every marquee component ships 3 variants
 * (a/b/c) inspired by the reference set; flip a key here to preview another.
 */

export const navLinks = [
  { key: "destinations", href: "/destinations" },
  { key: "tours", href: "/tours" },
  { key: "testimonials", href: "/testimonials" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export const contact = {
  phone: "+212 5 24 00 00 00",
  phoneHref: "tel:+212524000000",
  email: "bonjour@tamesnavoyage.com",
  whatsapp: "+212 6 00 00 00 00",
  instagram: "https://instagram.com/tamesnavoyage",
  facebook: "https://facebook.com/tamesnavoyage",
};

export type Variant = "a" | "b" | "c";

type VariantMap = {
  navbar: Variant;
  hero: Variant;
  destinations: Variant;
  why: Variant;
  testimonials: Variant;
  footer: Variant;
};

/** Active variant per component. Change to preview alternates. */
export const variants: VariantMap = {
  navbar: "a",
  hero: "a",
  destinations: "a",
  why: "a",
  testimonials: "a",
  footer: "a",
};
