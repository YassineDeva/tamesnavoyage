import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { tours, allDestinations } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

const routes = ["", "/destinations", "/services", "/tours", "/about", "/contact", "/testimonials"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE_URL}/${locale}${route}`,
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}${route}`]),
          ),
        },
      });
    }
    for (const tour of tours) {
      entries.push({
        url: `${SITE_URL}/${locale}/tours/${tour.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
    for (const dest of allDestinations) {
      entries.push({
        url: `${SITE_URL}/${locale}/destinations/${dest.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
