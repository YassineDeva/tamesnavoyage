import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Assistant crawlers are named individually and allowed on purpose. Each one is
 * a separate user-agent, and a blanket block would quietly remove the agency
 * from the answers those assistants give when somebody asks them for an Omra
 * operator in Morocco.
 */
const ASSISTANT_CRAWLERS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        /* Form handlers only — the legal pages are deliberately *not* blocked
           here. They carry `noindex`, and a crawler that is forbidden to fetch
           them can never read that tag, which is how blocked URLs end up
           indexed as bare links anyway. */
        disallow: "/api/",
      },
      { userAgent: ASSISTANT_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
