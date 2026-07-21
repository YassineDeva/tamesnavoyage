"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string };

/**
 * Brand-styled photo gallery built on embla-carousel (the engine behind
 * shadcn/ui's Carousel). RTL-aware, with arrows and dot navigation.
 */
export function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    direction: isRtl ? "rtl" : "ltr",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  if (images.length === 0) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[2rem]" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%] sm:flex-[0_0_66%] sm:pe-4">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-navy-800">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => embla?.scrollPrev()}
        className="absolute start-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-700 shadow-lg backdrop-blur transition-colors hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => embla?.scrollNext()}
        className="absolute end-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-700 shadow-lg backdrop-blur transition-colors hover:bg-white"
      >
        <ChevronRight className="h-5 w-5 rtl:rotate-180" />
      </button>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {snaps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === selected ? "w-7 bg-azure-500" : "w-2 bg-navy-900/20 hover:bg-navy-900/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
