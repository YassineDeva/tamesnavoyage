"use client";

import { Children, useCallback, useSyncExternalStore } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Horizontal card rail built on embla-carousel (same engine as the photo
 * gallery). Children are rendered on the server and wrapped in slides here,
 * so card data never has to cross into the client bundle.
 *
 * The arrows live in the header row rather than over the artwork — cards
 * carry badges in their top corners that an overlaid control would hide.
 *
 * By default four across from `xl`; below that the container is too narrow
 * for a card to stay readable, so it steps down to three, two, then one.
 */
export function CardSlider({
  children,
  header,
  action,
  labelPrev,
  labelNext,
  slideClassName = "sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]",
  controlsClassName,
}: {
  children: React.ReactNode;
  /** Title block, rendered at the start of the header row. */
  header?: React.ReactNode;
  /** Optional link rendered after the arrows. */
  action?: React.ReactNode;
  labelPrev: string;
  labelNext: string;
  /** Per-breakpoint slide widths. Every slide is full width until overridden. */
  slideClassName?: string;
  /**
   * Applied to the pair of arrows, not to `action`. Use it to drop them at
   * the breakpoint where every slide already fits — embla stops scrolling
   * there anyway.
   */
  controlsClassName?: string;
}) {
  const isRtl = useLocale() === "ar";
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    direction: isRtl ? "rtl" : "ltr",
  });
  const canPrev = useEmblaFlag(embla, (e) => e.canScrollPrev());
  const canNext = useEmblaFlag(embla, (e) => e.canScrollNext());

  const slides = Children.toArray(children);
  if (!slides.length) return null;

  return (
    <div>
      {(header || action) && (
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          {header}
          <div className="flex items-center gap-3">
            <div className={cn("flex items-center gap-3", controlsClassName)}>
              <Arrow
                side="start"
                label={labelPrev}
                disabled={!canPrev}
                onClick={() => embla?.scrollPrev()}
              />
              <Arrow
                side="end"
                label={labelNext}
                disabled={!canNext}
                onClick={() => embla?.scrollNext()}
              />
            </div>
            {action}
          </div>
        </div>
      )}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-me-5 flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={cn(
                "min-w-0 flex-[0_0_100%] pe-5",
                slideClassName,
              )}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Reads a boolean straight off the embla instance and re-reads it on every
 * scroll event. Subscribing beats mirroring into state: there is no render
 * where the arrows show a stale value, and no setState inside an effect.
 */
function useEmblaFlag(
  embla: EmblaCarouselType | undefined,
  read: (embla: EmblaCarouselType) => boolean,
) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!embla) return () => {};
      embla.on("select", onChange).on("reInit", onChange);
      return () => {
        embla.off("select", onChange).off("reInit", onChange);
      };
    },
    [embla],
  );

  return useSyncExternalStore(
    subscribe,
    () => (embla ? read(embla) : false),
    () => false,
  );
}

function Arrow({
  side,
  label,
  disabled,
  onClick,
}: {
  side: "start" | "end";
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = side === "start" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-700 transition-colors focus-ring",
        "hover:border-azure-500 hover:bg-azure-50 hover:text-azure-600",
        "disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      <Icon className="h-5 w-5 rtl:rotate-180" />
    </button>
  );
}
