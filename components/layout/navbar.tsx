"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { navLinks, contact, variants } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { LocaleSwitcher } from "./locale-switcher";
import { ButtonLink } from "@/components/ui/button";

/**
 * Variant A — transparent-over-hero bar that condenses to a solid sand panel
 * on scroll, with an RTL-aware full-screen mobile drawer.
 */
export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Home has a dark full-bleed hero → start transparent with light text.
  // Hero variant "b" is light, so the bar stays solid there.
  const overHero = pathname === "/" && variants.hero !== "b";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const solid = scrolled || !overHero;
  const tone: "ink" | "sand" = solid ? "ink" : "sand";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-sand-200/70 bg-sand-50/85 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav className="container-wide flex h-[72px] items-center justify-between">
          <Logo tone={tone} />

          <ul
            className={cn(
              "hidden items-center gap-8 lg:flex",
              solid ? "text-ink-800" : "text-sand-50",
            )}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="group relative text-sm font-medium tracking-tight transition-opacity hover:opacity-100"
                  >
                    <span className={cn(active ? "opacity-100" : "opacity-80")}>
                      {t(link.key)}
                    </span>
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px bg-terracotta-500 transition-all duration-300 group-hover:w-full",
                        active ? "w-full" : "w-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={contact.phoneHref}
              className={cn(
                "hidden items-center gap-2 text-sm font-medium xl:flex",
                solid ? "text-ink-800" : "text-sand-50",
              )}
            >
              <Phone className="h-4 w-4 text-terracotta-400" />
              <span className="tabular-nums">{contact.phone}</span>
            </a>
            <div className="hidden sm:block">
              <LocaleSwitcher tone={tone} />
            </div>
            <ButtonLink href="/contact" size="sm" className="hidden md:inline-flex">
              {t("cta")}
            </ButtonLink>
            <button
              onClick={() => setOpen(true)}
              aria-label={t("menu")}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
                solid
                  ? "border-ink-900/15 text-ink-900"
                  : "border-sand-50/30 text-sand-50",
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
          <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-sand-50 shadow-2xl rtl:start-0 rtl:end-auto"
          >
            <div className="flex items-center justify-between border-b border-sand-200 px-6 py-5">
              <Logo />
              <button
                onClick={onClose}
                aria-label={t("close")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl text-ink-900 transition-colors hover:bg-sand-100"
                  >
                    {t(link.key)}
                    <span className="text-terracotta-400">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-sand-200 px-6 py-5">
              <LocaleSwitcher />
              <a href={contact.phoneHref} className="text-sm font-medium text-ink-800">
                {contact.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
