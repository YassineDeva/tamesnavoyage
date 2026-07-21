"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Deterministic warm gradient from a seed string (stable across renders). */
function seededWarm(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const base = 12 + (h % 34); // 12–46deg → terracotta/amber/olive band
  const from = `hsl(${base} 62% 46%)`;
  const mid = `hsl(${(base + 14) % 360} 48% 32%)`;
  const to = `hsl(${(base + 200) % 360} 30% 18%)`;
  const angle = 120 + (h % 90);
  return `linear-gradient(${angle}deg, ${from}, ${mid} 55%, ${to})`;
}

/**
 * Image slot for Higgsfield Soul 2.0 renders. Drop a real file at `src` under
 * /public and it shows; until then an on-brand zellige gradient placeholder
 * renders (with a subtle art-direction label in dev). Zero code change when
 * assets land.
 */
export function Media({
  src,
  alt,
  fill = true,
  width,
  height,
  className,
  sizes,
  priority,
  label,
  rounded = true,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  label?: string;
  rounded?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ink-800",
        rounded && "rounded-xl2",
        fill ? "h-full w-full" : "",
        className,
      )}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          priority={priority}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          aria-label={alt}
          role="img"
          className="grain absolute inset-0"
          style={{ backgroundImage: seededWarm(src + alt) }}
        >
          <div className="zellige absolute inset-0 opacity-20 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
          {process.env.NODE_ENV !== "production" && (label || alt) ? (
            <span className="absolute bottom-2 left-2 rounded-full bg-ink-900/50 px-2.5 py-1 text-[10px] font-medium tracking-wide text-sand-100/90 backdrop-blur-sm">
              Soul 2.0 · {label ?? alt}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
