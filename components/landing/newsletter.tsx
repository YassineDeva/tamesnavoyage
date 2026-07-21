"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Send, Check } from "lucide-react";
import { contact } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";

/** Blue newsletter band — capture + socials, closing the page. */
export function Newsletter() {
  const t = useTranslations("landing.newsletter");
  const [sent, setSent] = useState(false);

  const socials = [
    { href: contact.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: contact.twitter, label: "X", Icon: XIcon },
    { href: contact.youtube, label: "YouTube", Icon: YoutubeIcon },
  ];

  return (
    <section id="newsletter" className="bg-white pb-20 pt-4 sm:pb-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-azure relative overflow-hidden rounded-[2rem] px-6 py-10 shadow-[0_36px_80px_-42px_rgba(45,136,197,0.9)] sm:px-10 lg:px-14"
        >
          <div
            className="dotted-field pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]"
            aria-hidden
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr_auto] lg:gap-10">
            {/* Copy */}
            <div className="flex items-center gap-4">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white sm:inline-flex">
                <Send className="h-6 w-6 -rotate-12" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  {t("title")}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {t("subtitle")}
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex w-full items-center gap-1.5 rounded-full bg-white p-1.5 shadow-lg"
            >
              <input
                type="email"
                required
                disabled={sent}
                placeholder={t("placeholder")}
                aria-label={t("placeholder")}
                className="min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-navy-700 outline-none placeholder:text-muted-400"
              />
              <button
                type="submit"
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-navy-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 focus-ring"
              >
                {sent ? <Check className="h-4 w-4" /> : null}
                {sent ? t("done") : t("button")}
              </button>
            </form>

            {/* Socials */}
            <div className="flex items-center gap-2.5 lg:justify-self-end">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:bg-white hover:text-azure-600"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
