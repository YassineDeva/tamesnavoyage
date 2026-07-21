import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import * as React from "react";

type Variant = "primary" | "ghost" | "outline" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-ring disabled:opacity-50 disabled:pointer-events-none will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta-500 text-sand-50 hover:bg-terracotta-600 shadow-[0_10px_30px_-10px_rgba(163,63,35,0.6)] hover:shadow-[0_16px_40px_-12px_rgba(163,63,35,0.7)] hover:-translate-y-0.5",
  gold:
    "bg-gold-400 text-ink-900 hover:bg-gold-300 shadow-[0_10px_30px_-10px_rgba(193,145,58,0.55)] hover:-translate-y-0.5",
  outline:
    "border border-ink-900/20 text-ink-900 hover:border-terracotta-500 hover:text-terracotta-600 hover:bg-terracotta-50",
  ghost: "text-ink-900 hover:text-terracotta-600",
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

function Arrow() {
  return (
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
  );
}
