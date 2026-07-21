import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import * as React from "react";

type Variant = "primary" | "ghost" | "outline" | "gold" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-ring disabled:opacity-50 disabled:pointer-events-none will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-azure-500 text-white hover:bg-azure-600 shadow-[0_14px_34px_-12px_rgba(45,136,197,0.6)] hover:shadow-[0_18px_42px_-12px_rgba(45,136,197,0.7)] hover:-translate-y-0.5",
  gold:
    "bg-amber-500 text-ink-900 hover:bg-amber-400 shadow-[0_14px_34px_-12px_rgba(244,171,27,0.55)] hover:-translate-y-0.5",
  white:
    "bg-white text-navy-700 hover:bg-surface-100 shadow-[0_14px_34px_-14px_rgba(5,63,92,0.4)] hover:-translate-y-0.5",
  outline:
    "border border-navy-900/15 text-navy-700 hover:border-azure-500 hover:text-azure-600 hover:bg-azure-50",
  ghost: "text-navy-700 hover:text-azure-600",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[15px]",
  lg: "h-14 px-9 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {withArrow && <Arrow />}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}

/** Circular arrow badge like the reference CTAs ("Explore Now →"). */
export function Arrow() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
      <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
    </span>
  );
}
