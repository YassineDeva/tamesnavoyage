import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Clock, Phone, ArrowUp } from "lucide-react";
import { contact } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";

/** Deep-navy footer: brand lockup, sitemap, contact and legal bar. */
export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tm = useTranslations("meta");
  const year = 2026;

  const socials = [
    { href: contact.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: contact.twitter, label: "X", Icon: XIcon },
    { href: contact.youtube, label: "YouTube", Icon: YoutubeIcon },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-surface-100">
      <div
        className="dotted-field pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -top-24 start-1/2 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-azure-500/25 blur-[120px]" />

      <div className="container-wide relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <Image
              src="/brand/logo-dark.svg"
              alt={tm("brand")}
              width={132}
              height={132}
              className="h-28 w-28"
            />
            <p className="mt-4 text-sm leading-relaxed text-surface-100/70">
              {t("tagline")}
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-100/20 text-surface-100 transition-all hover:border-amber-400 hover:bg-amber-500 hover:text-navy-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title={t("explore")}>
            <FooterLink href="/destinations">{tn("destinations")}</FooterLink>
            <FooterLink href="/tours">{tn("tours")}</FooterLink>
            <FooterLink href="/testimonials">{tn("testimonials")}</FooterLink>
            <FooterLink href="/about">{tn("about")}</FooterLink>
          </FooterCol>

          <FooterCol title={t("support")}>
            <FooterLink href="/contact">{tn("contact")}</FooterLink>
            <li className="text-sm text-surface-100/60">{t("legal")}</li>
            <li className="text-sm text-surface-100/60">{t("privacy")}</li>
            <li className="text-sm text-surface-100/60">{t("terms")}</li>
          </FooterCol>

          <FooterCol title={t("contact")}>
            <li className="flex items-start gap-3 text-sm text-surface-100/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span>{t("address")}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-surface-100/75">
              <Clock className="h-4 w-4 shrink-0 text-amber-400" />
              <span>{t("hours")}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-amber-400" />
              <a
                href={contact.phoneHref}
                className="text-sm font-medium tabular-nums text-surface-50 hover:text-amber-400"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-amber-400" />
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-surface-50 hover:text-amber-400"
              >
                {contact.email}
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-surface-100/10 py-8 text-xs text-surface-100/60 sm:flex-row">
          <p>
            © {year} {tm("brand")}. {t("rights")}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-surface-100/20 px-4 py-2 transition-colors hover:border-amber-400 hover:text-amber-400"
          >
            {t("backToTop")}
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="eyebrow mb-5 text-amber-400">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-surface-100/75 transition-colors hover:text-surface-50"
      >
        {children}
      </Link>
    </li>
  );
}
