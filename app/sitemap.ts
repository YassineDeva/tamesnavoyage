import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { allTours, allDestinations } from "@/lib/data";
import { SITE_URL, CONTENT_UPDATED } from "@/lib/seo";

const routes = [
  "",
  "/destinations",
  "/services",
  "/tours",
  "/omra",
  "/about",
  "/contact",
  "/testimonials",
];

/**
 * The hreflang set has to be byte-identical to the one `buildMetadata` puts in
 * the <head>: Google merges the two sources and, where a language points at two
 * different URLs, drops that pair instead of guessing. Same locales, same
 * x-default, same absolute form.
 */
function alternates(path: string) {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
  ) as Record<string, string>;
  languages["x-default"] = `${SITE_URL}/fr${path}`;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
        alternates: alternates(route),
      });
    }
    for (const tour of allTours) {
      entries.push({
        url: `${SITE_URL}/${locale}/tours/${tour.slug}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternates(`/tours/${tour.slug}`),
      });
    }
    for (const dest of allDestinations) {
      entries.push({
        url: `${SITE_URL}/${locale}/destinations/${dest.slug}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternates(`/destinations/${dest.slug}`),
      });
    }
  }

  /* The legal documents are `noindex`, so they are deliberately absent: a
     sitemap should only advertise URLs we actually want in the index. */
  return entries;
}
