"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/** Newsletter capture with optimistic success state. Wire to Resend/API later. */
export function NewsletterForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const t = useTranslations("home.newsletter");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // TODO: POST /api/newsletter (Resend). Simulated for now.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("done");
  }

  const dark = tone === "dark";

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border p-1.5 transition-colors",
          dark
            ? "border-sand-100/20 bg-sand-50/5 focus-within:border-gold-400"
            : "border-ink-900/15 bg-sand-50 focus-within:border-terracotta-500",
        )}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("placeholder")}
          disabled={status === "done"}
          className={cn(
            "min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:opacity-60",
            dark ? "text-sand-50" : "text-ink-900",
          )}
        />
        <button
          type="submit"
          disabled={status !== "idle"}
          className={cn(
            "inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all",
            dark
              ? "bg-gold-400 text-ink-900 hover:bg-gold-300"
              : "bg-terracotta-500 text-sand-50 hover:bg-terracotta-600",
            "disabled:opacity-70",
          )}
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "done" && <Check className="h-4 w-4" />}
          {status === "idle" && t("button")}
          {status === "loading" && t("button")}
          {status === "done" && t("button")}
        </button>
      </div>
      <p className={cn("mt-3 text-xs", dark ? "text-sand-100/50" : "text-muted-500")}>
        {t("consent")}
      </p>
    </form>
  );
}
