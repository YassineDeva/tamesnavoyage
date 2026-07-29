"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global smooth-scroll layer. Drives Lenis from GSAP's ticker so Lenis and
 * ScrollTrigger stay in perfect sync. Disabled when the user prefers reduced
 * motion. Mount once, high in the tree.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    /**
     * Glide to in-page targets (#reserver on a circuit page) instead of
     * jumping. Lenis' own `anchors` option is the obvious tool and was tried
     * first, but its tween lands roughly 690px short of the target on about
     * one click in three; the native scroll is exact every time and already
     * honours the target's `scroll-margin-top`, which is what clears the
     * fixed header. Lenis sits idle during the glide and simply follows along
     * through its own scroll listener, so the two never fight.
     */
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const url = new URL(link.href);
      const here = window.location;
      if (url.origin !== here.origin || url.pathname !== here.pathname || !url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", url.hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
