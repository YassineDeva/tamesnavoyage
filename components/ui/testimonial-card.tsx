import { useLocale } from "next-intl";
import { Quote } from "lucide-react";
import { Media } from "@/components/ui/media";
import { StarRating } from "@/components/ui/star-rating";
import { type Testimonial, t as tr } from "@/lib/data";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  item,
  className,
}: {
  item: Testimonial;
  className?: string;
}) {
  const locale = useLocale() as Locale;

  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-[1.75rem] border border-sand-200 bg-sand-50 p-8 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <Quote className="h-8 w-8 text-terracotta-300 rtl:-scale-x-100" />
      <blockquote className="font-display mt-4 flex-1 text-lg leading-relaxed text-ink-800">
        “{tr(item.quote, locale)}”
      </blockquote>
      <div className="mt-6 flex items-center gap-4 border-t border-sand-200 pt-6">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Media src={item.avatar} alt={item.name} label={item.name} rounded={false} sizes="48px" />
        </div>
        <div className="flex-1">
          <figcaption className="text-sm font-semibold text-ink-900">{item.name}</figcaption>
          <p className="text-xs text-muted-500">{tr(item.country, locale)}</p>
        </div>
        <div className="text-end">
          <StarRating value={item.rating} />
          <p className="mt-1 text-[11px] text-muted-500">{tr(item.trip, locale)}</p>
        </div>
      </div>
    </figure>
  );
}
