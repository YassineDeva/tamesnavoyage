"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { locales, localeLabels, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Compact FR / AR toggle that preserves the current route + params. */
export function LocaleSwitcher({ tone = "ink" }: { tone?: "ink" | "sand" }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const active = useLocale();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === active) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- params are compatible with the current route
        { pathname, params },
        { locale: next },
      );
    });
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 text-xs font-semibold",
        tone === "sand" ? "border-sand-50/30 text-sand-50" : "border-ink-900/15 text-ink-900",
        isPending && "opacity-60",
      )}
    >
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchTo(loc)}
          aria-pressed={active === loc}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors focus-ring",
            active === loc
              ? "bg-terracotta-500 text-sand-50"
              : "opacity-70 hover:opacity-100",
          )}
        >
          {localeLabels[loc].short}
        </button>
      ))}
    </div>
  );
}
