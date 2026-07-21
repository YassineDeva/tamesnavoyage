import { variants } from "@/lib/site";
import { HeroA } from "./hero-a";
import { HeroB } from "./hero-b";
import { HeroC } from "./hero-c";

/**
 * Active hero variant. Flip `variants.hero` in `lib/site.ts` to switch:
 *   a — immersive full-bleed + R3F dust (default)
 *   b — editorial split (light)
 *   c — dark luxury, centered
 */
export function Hero() {
  if (variants.hero === "b") return <HeroB />;
  if (variants.hero === "c") return <HeroC />;
  return <HeroA />;
}

/** Whether the active home hero has a dark backdrop (drives navbar tone). */
export const heroIsDark = variants.hero !== "b";
