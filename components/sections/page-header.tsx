import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Media } from "@/components/ui/media";
import { RevealWords, Reveal } from "@/components/motion/reveal";

/** Compact editorial header for inner pages, sits below the fixed navbar. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  image = "/media/hero/inner.jpg",
  imageLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
  image?: string;
  imageLabel?: string;
}) {
  const tm = useTranslations("meta");

  return (
    <header className="relative flex min-h-[62vh] items-end overflow-hidden pb-14 pt-32 sm:min-h-[70vh] sm:pb-20">
      <div className="absolute inset-0">
        <Media src={image} alt={title} label={imageLabel ?? title} rounded={false} priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/45 to-ink-900/60" />
      <div className="zellige absolute inset-0 opacity-[0.06]" />

      <div className="container-wide relative">
        <Reveal>
          <nav className="mb-5 flex items-center gap-2 text-xs font-medium text-sand-100/70">
            <Link href="/" className="hover:text-sand-50">
              {tm("brand")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            <span className="text-gold-300">{breadcrumb}</span>
          </nav>
        </Reveal>
        <p className="eyebrow mb-4 text-gold-300">{eyebrow}</p>
        <h1 className="font-display max-w-3xl text-display font-medium leading-[1.02] text-sand-50">
          <RevealWords text={title} />
        </h1>
        {subtitle && (
          <Reveal index={2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sand-100/85 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
