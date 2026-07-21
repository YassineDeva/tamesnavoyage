import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Tamesna Voyages horizontal lockup: globe + orbiting amber airplane mark,
 * script wordmark and letterspaced tagline. `tone` adapts to dark surfaces.
 */
export function Logo({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "light";
  className?: string;
}) {
  const t = useTranslations("meta");
  const name = tone === "light" ? "text-white" : "text-navy-600";

  return (
    <Link
      href="/"
      aria-label={t("brand")}
      className={cn("group inline-flex items-center gap-2.5 focus-ring", className)}
    >
      <GlobeMark className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:-rotate-6" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.35rem] leading-none", name)}>
          {t("brand")}
        </span>
        <span className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.34em] text-amber-500">
          Tourisme &amp; Events
        </span>
      </span>
    </Link>
  );
}

export function GlobeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      {/* orbiting trajectory */}
      <path
        d="M9 34 A16.5 16.5 0 1 1 40 21"
        stroke="#f4ab1b"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeDasharray="0.5 5.5"
      />
      {/* globe */}
      <circle cx="21" cy="26" r="13.5" fill="#2d88c5" />
      {/* ocean sheen */}
      <path
        d="M13 18.5A13.5 13.5 0 0 1 30 15.8"
        stroke="#9fe7f5"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* continents */}
      <path
        fill="#b8d670"
        d="M13.6 22.2c1.7-1.3 3.6-1 4.6.2 1 1.2.4 2.8-.9 3.6-1.7 1-3.2.8-4-.3-.9-1-1.1-2.5.3-3.5z"
      />
      <path
        fill="#b8d670"
        d="M23.4 27c1.5-.7 3.2.1 3.6 1.5.4 1.3-.4 2.4-1.8 2.7-1.7.4-3-.2-3.2-1.5-.2-1 .2-2.2 1.4-2.7z"
      />
      <path
        fill="#b8d670"
        d="M18.8 30.7c1-.2 1.8.3 1.9 1.2.1.7-.4 1.4-1.3 1.5-1 .1-1.7-.3-1.7-1.1 0-.6.3-1.4 1.1-1.6z"
      />
      {/* airplane at trajectory head */}
      <g transform="translate(29.5 5.5) scale(0.62)">
        <path
          fill="#f4ab1b"
          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        />
      </g>
    </svg>
  );
}
