import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { type Destination, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Destination tile with hover zoom, scrim, tag and reveal-on-hover blurb. */
export function DestinationCard({
  destination,
  className,
  priority,
}: {
  destination: Destination;
  className?: string;
  priority?: boolean;
}) {
  const locale = useLocale() as Locale;

  return (
    <Link
      href="/destinations"
      className={cn(
        "group relative block overflow-hidden rounded-[1.6rem] bg-navy-800 focus-ring",
        className,
      )}
    >
      <Image
        src={destination.image}
        alt={tr(destination.name, locale)}
        fill
        preload={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/15 to-transparent" />

      {destination.tag && (
        <span className="absolute start-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700 backdrop-blur">
          {tr(destination.tag, locale)}
        </span>
      )}

      <span className="absolute end-4 top-4 inline-flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
      </span>

      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-amber-300">
          <MapPin className="h-3.5 w-3.5" />
          {tr(destination.region, locale)}
        </div>
        <h3 className="mt-1.5 text-2xl font-bold text-white">
          {tr(destination.name, locale)}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
          {tr(destination.blurb, locale)}
        </p>
      </div>
    </Link>
  );
}
