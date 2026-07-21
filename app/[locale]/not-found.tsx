import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("nav");
  return (
    <section className="zellige flex min-h-[80vh] items-center justify-center px-6 pt-24 text-center">
      <div>
        <p className="font-display text-[8rem] leading-none text-terracotta-300">404</p>
        <p className="mt-4 text-lg text-ink-800">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Cette page s'est perdue dans les dunes.
        </p>
        <p dir="rtl" className="mt-1 text-lg text-muted-500">
          ضاعت هذه الصفحة بين الكثبان.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" withArrow>
            {t("home")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
