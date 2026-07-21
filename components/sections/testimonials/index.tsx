import { variants } from "@/lib/site";
import { TestimonialsA } from "./testimonials-a";
import { TestimonialsB } from "./testimonials-b";
import { TestimonialsC } from "./testimonials-c";

/**
 * Social-proof section. Flip `variants.testimonials` in lib/site.ts:
 *   a — three featured cards (default)
 *   b — infinite dual-row marquee
 *   c — featured quote with avatar navigation
 */
export function TestimonialsSection() {
  if (variants.testimonials === "b") return <TestimonialsB />;
  if (variants.testimonials === "c") return <TestimonialsC />;
  return <TestimonialsA />;
}
