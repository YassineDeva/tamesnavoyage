/** Central site config: primary navigation and contact details. */

export const navLinks = [
  { key: "home", href: "/" },
  { key: "destinations", href: "/destinations" },
  { key: "services", href: "/services" },
  { key: "tours", href: "/tours" },
  { key: "omra", href: "/omra" },
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

