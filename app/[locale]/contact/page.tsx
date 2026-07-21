import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { BookingForm } from "@/components/ui/booking-form";
import { Reveal } from "@/components/motion/reveal";
import { InstagramIcon, FacebookIcon, WhatsappIcon } from "@/components/ui/social-icons";
import { contact } from "@/lib/site";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  return buildMetadata({
    locale: locale as Locale,
    path: "/contact",
    title: t("metaTitle"),
    description: t("metaDesc"),
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.contact");
  const tf = await getTranslations("footer");

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumb={t("breadcrumb")}
        image="/media/lifestyle/tea.jpg"
        imageLabel="Mint tea welcome in a riad"
      />

      <section className="py-20 sm:py-28">
        <div className="container-wide grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div>
            <p className="eyebrow text-terracotta-500">{t("infoTitle")}</p>
            <ul className="mt-8 space-y-6">
              <InfoRow icon={<MapPin className="h-5 w-5" />} title={t("addressLabel")}>
                {tf("address")}
              </InfoRow>
              <InfoRow icon={<Phone className="h-5 w-5" />} title={t("phoneLabel")}>
                <a href={contact.phoneHref} className="hover:text-terracotta-600">
                  {contact.phone}
                </a>
              </InfoRow>
              <InfoRow icon={<Mail className="h-5 w-5" />} title={t("emailLabel")}>
                <a href={`mailto:${contact.email}`} className="hover:text-terracotta-600">
                  {contact.email}
                </a>
              </InfoRow>
              <InfoRow icon={<Clock className="h-5 w-5" />} title={t("hoursTitle")}>
                {tf("hours")}
              </InfoRow>
            </ul>

            <div className="mt-8 flex gap-3">
              {[
                { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: contact.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`, label: "WhatsApp", Icon: WhatsappIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-300 text-ink-800 transition-all hover:border-terracotta-400 hover:bg-terracotta-500 hover:text-sand-50"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Location map */}
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-surface-200 shadow-[var(--shadow-soft)]">
              <iframe
                title={t("mapTitle")}
                src="https://maps.google.com/maps?q=Av.%20Ya%C3%A2koub%20El%20Mansour%2C%20Tamesna%2C%20T%C3%A9mara%2C%20Maroc&z=15&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <Reveal>
            <div className="rounded-[2rem] border border-sand-200 bg-sand-50 p-7 shadow-[var(--shadow-soft)] sm:p-9">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terracotta-50 text-terracotta-500">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-500">{title}</p>
        <p className="mt-1 text-base text-ink-900">{children}</p>
      </div>
    </li>
  );
}
