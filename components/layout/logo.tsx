import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

/** Eight-point Moroccan star mark + wordmark. `tone` adapts to dark heroes. */
export function Logo({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "sand";
  className?: string;
}) {
  const t = useTranslations("meta");
  const text = tone === "sand" ? "text-sand-50" : "text-ink-900";

  return (
    <Link
      href="/"
      aria-label={t("brand")}
      className={cn("group inline-flex items-center gap-2.5 focus-ring", className)}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <Star className="h-9 w-9 text-terracotta-500 transition-transform duration-500 group-hover:rotate-45" />
        <span className="absolute h-1.5 w-1.5 rounded-full bg-gold-400" />
      </span>
      <span className={cn("flex flex-col leading-none", text)}>
        <span className="font-display text-lg font-semibold tracking-tight">
          {t("brand")}
        </span>
        <span className="text-[9px] font-medium uppercase tracking-[0.32em] opacity-60">
          Maroc
        </span>
      </span>
    </Link>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 2l4.5 4.5L31 5l-1.5 6.5L36 16l-6.5 4L31 26l-6.5-1.5L20 31l-4.5-6.5L9 26l1.5-6L4 16l6.5-4.5L9 5l6.5 1.5L20 2z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
