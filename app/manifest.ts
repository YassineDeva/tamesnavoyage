import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/seo";
import { defaultLocale } from "@/i18n/routing";

/** PWA manifest — French is the default locale, so the app opens on /fr. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND} — Tourisme & Events`,
    short_name: BRAND,
    description:
      "Agence de voyages & d'événementiel à Tamesna — circuits, hôtels et vols pour explorer le monde.",
    start_url: `/${defaultLocale}`,
    scope: "/",
    display: "standalone",
    background_color: "#f6fafd",
    theme_color: "#053f5c",
    lang: defaultLocale,
    dir: "ltr",
    categories: ["travel", "lifestyle"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
