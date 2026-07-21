"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks, contact } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { LocaleSwitcher } from "./locale-switcher";

/**
 * Sticky top bar. Transparent over the hero — dark text on the light home
 * hero, light text over the dark inner-page headers — condensing to a frosted
 * white panel on scroll.
 */
export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Home has a light hero; every other route opens on a dark image header.
  const overDarkHero = pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled;
  const light = !solid && overDarkHero; // light text over dark hero

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-surface-200/70 bg-white/85 shadow-[0_12px_34px_-24px_rgba(5,63,92,0.5)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav className="container-wide flex h-[74px] items-center justify-between gap-4">
          <Logo tone={light ? "light" : "ink"} />

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.key + link.href}>
                <NavItem
                  href={link.href}
                  active={pathname === link.href}
                  light={light}
                >
                  {t(link.key)}
                </NavItem>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <a href={contact.phoneHref} className="hidden items-center gap-2.5 xl:flex">
              <span
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                  light ? "bg-white/15 text-white" : "bg-azure-50 text-azure-600",
                )}
              >
                <Phone className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className={cn("text-[11px]", light ? "text-white/70" : "text-muted-500")}>
                  {t("needHelp")}
                </span>
                <span className={cn("text-sm font-semibold tabular-nums", light ? "text-white" : "text-navy-700")}>
                  {contact.phone}
                </span>
              </span>
            </a>

            <div className="hidden sm:block">
              <LocaleSwitcher tone={light ? "sand" : "ink"} />
            </div>

            <Link
              href="/contact"
              aria-label={t("cta")}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-ring",
                light
                  ? "bg-white text-navy-700 hover:bg-surface-100"
                  : "bg-navy-600 text-white hover:bg-azure-600",
              )}
            >
              <User className="h-[18px] w-[18px]" />
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label={t("menu")}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
                light ? "border-white/30 text-white" : "border-navy-900/12 text-navy-700",
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function NavItem({
  href,
  active,
  light,
  children,
}: {
  href: string;
  active?: boolean;
  light?: boolean;
  children: ReactNode;
}) {
  const cls = cn(
    "group relative inline-block text-sm font-medium tracking-tight transition-colors",
    light ? "text-white/90 hover:text-white" : "text-navy-700 hover:text-azure-600",
  );
  const underline = (
    <span
      className={cn(
        "absolute -bottom-1.5 start-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full",
        light ? "bg-white" : "bg-azure-500",
        active ? "w-full" : "w-0",
      )}
    />
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {children}
        {underline}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <span className={cn(active && (light ? "text-white" : "text-azure-600"))}>
        {children}
      </span>
      {underline}
    </Link>
  );
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useTranslations("nav");
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          <div
            className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl rtl:start-0 rtl:end-auto"
          >
            <div className="flex items-center justify-between border-b border-surface-200 px-6 py-5">
              <Logo />
              <button
                onClick={onClose}
                aria-label={t("close")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/12 text-navy-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key + link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.06 }}
                >
                  <DrawerLink href={link.href} onClose={onClose}>
                    {t(link.key)}
                  </DrawerLink>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-surface-200 px-6 py-5">
              <LocaleSwitcher />
              <a
                href={contact.phoneHref}
                className="text-sm font-semibold tabular-nums text-navy-700"
              >
                {contact.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DrawerLink({
  href,
  onClose,
  children,
}: {
  href: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const cls =
    "flex items-center justify-between rounded-2xl px-4 py-4 font-display text-3xl text-navy-700 transition-colors hover:bg-surface-100";
  const arrow = <span className="text-amber-500 rtl:rotate-180">→</span>;
  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={onClose} className={cls}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClose} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}
