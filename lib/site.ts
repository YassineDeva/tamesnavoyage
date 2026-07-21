/**
 * Central site config: primary navigation, contact details and the featured
 * landing data. `variants` is preserved for the legacy multi-variant sections.
 */

export const navLinks = [
  { key: "home", href: "/" },
  { key: "destinations", href: "/destinations" },
  { key: "services", href: "/services" },
  { key: "tours", href: "/tours" },
  { key: "about", href: "/about" },
] as const;

export const contact = {
  phone: "+212 661 96 12 48",
  phoneHref: "tel:+212661961248",
  email: "contact@tamesnavoyages.ma",
  whatsapp: "+212 661 96 12 48",
  instagram: "https://instagram.com/tamesna.voyages",
  facebook: "https://facebook.com/tamesna.voyages",
  twitter: "https://x.com/tamesnavoyages",
  youtube: "https://youtube.com/@tamesnavoyages",
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

/** Active variant per legacy component. Retained for other routes. */
export const variants: VariantMap = {
  navbar: "a",
  hero: "a",
  destinations: "a",
  why: "a",
  testimonials: "a",
  footer: "a",
};
