import { variants } from "@/lib/site";
import { ShowcaseA } from "./showcase-a";
import { ShowcaseB } from "./showcase-b";
import { ShowcaseC } from "./showcase-c";

/**
 * Flagship-destinations showcase. Flip `variants.destinations` in lib/site.ts:
 *   a — asymmetric bento grid (default)
 *   b — horizontal snap-scroll gallery
 *   c — numbered editorial rows
 */
export function DestinationsShowcase() {
  if (variants.destinations === "b") return <ShowcaseB />;
  if (variants.destinations === "c") return <ShowcaseC />;
  return <ShowcaseA />;
}
