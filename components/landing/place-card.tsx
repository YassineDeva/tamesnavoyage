import Image from "next/image";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/** Portrait destination tile — badge, hover zoom, name/place + price. */
export function PlaceCard({
  image,
  name,
  place,
  price,
  currency,
  tag,
  fromLabel,
  className,
}: {
  image: string;
  name: string;
  place: string;
  price: number;
  currency: string;
  tag: string;
  fromLabel: string;
  className?: string;
}) {
  return (
    <Link
      href="/destinations"
      className={cn(
        "group relative block aspect-[3/4] overflow-hidden rounded-[1.6rem] focus-ring",
        className,
      )}
    >
      <Image
        src={image}
        alt={`${name} — ${place}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/15 to-transparent" />

      <span className="absolute start-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700 shadow-sm backdrop-blur">
        {tag}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="truncate text-xl font-bold text-white">{name}</h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-white/80">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{place}</span>
          </div>
        </div>
        <div className="shrink-0 text-end">
          <span className="block text-[10px] font-medium uppercase tracking-wide text-white/70">
            {fromLabel}
          </span>
          <span className="text-lg font-bold text-white">
            {price}&nbsp;{currency}
          </span>
        </div>
      </div>
    </Link>
  );
}
