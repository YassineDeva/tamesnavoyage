import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { navLinks, contact } from "@/lib/site";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { InstagramIcon, FacebookIcon } from "@/components/ui/social-icons";

/** Warm-dark footer with newsletter, sitemap columns and legal bar. */
export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tm = useTranslations("meta");
  const year = 2025;

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-sand-100">
      <div className="zellige absolute inset-0 opacity-[0.06]" aria-hidden />
      <div className="pointer-events-none absolute -top-32 start-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-terracotta-600/25 blur-[120px]" />

      <div className="container-wide relative">
        {/* Newsletter band */}
        <div className="grid gap-10 border-b border-sand-100/10 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-gold-400">{tm("tagline")}</p>
            <h2 className="font-display mt-3 text-h2 leading-tight">
              {t("newsletterTitle")}
            </h2>
          </div>
          <div className="md:justify-self-end md:w-full md:max-w-md">
            <NewsletterForm tone="dark" />
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <span className="font-display text-2xl font-semibold text-sand-50">
              {tm("brand")}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-sand-100/70">
              {t("tagline")}
            </p>
            <div className="mt-6 flex gap-3">
              <Social href={contact.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </Social>
              <Social href={contact.facebook} label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </Social>
              <Social href={`mailto:${contact.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </Social>
            </div>
          </div>

          <FooterCol title={t("explore")}>
            {navLinks.map((l) => (
              <FooterLink key={l.key} href={l.href}>
                {tn(l.key)}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={t("support")}>
            <FooterLink href="/contact">{tn("contact")}</FooterLink>
            <FooterLink href="/tours">{tn("tours")}</FooterLink>
            <li className="pt-1 text-sm text-sand-100/60">{t("legal")}</li>
            <li className="text-sm text-sand-100/60">{t("privacy")}</li>
            <li className="text-sm text-sand-100/60">{t("terms")}</li>
          </FooterCol>

          <FooterCol title={t("contact")}>
            <li className="flex items-start gap-3 text-sm text-sand-100/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400" />
              <span>{t("address")}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-sand-100/75">
              <Clock className="h-4 w-4 shrink-0 text-terracotta-400" />
              <span>{t("hours")}</span>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="text-sm font-medium tabular-nums text-sand-50 hover:text-gold-400"
              >
                {contact.phone}
              </a>
            </li>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-sand-100/10 py-8 text-xs text-sand-100/60 sm:flex-row">
          <p>
            © {year} {tm("brand")}. {t("rights")}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-sand-100/20 px-4 py-2 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            {t("backToTop")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow mb-5 text-gold-400">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-sand-100/75 transition-colors hover:text-sand-50"
      >
        {children}
      </Link>
    </li>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-100/20 text-sand-100 transition-all hover:border-terracotta-400 hover:bg-terracotta-500 hover:text-sand-50"
    >
      {children}
    </a>
  );
}
