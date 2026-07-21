import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";

/** Brand header band for inner pages — full-bleed photo under a navy wash. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  image = "/media/lifestyle/team.jpg",
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
    <header className="relative flex min-h-[56vh] items-end overflow-hidden bg-navy-800 pb-14 pt-32 sm:min-h-[64vh] sm:pb-20">
      <Image
        src={image}
        alt={imageLabel ?? title}
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/92 via-navy-900/55 to-navy-900/55" />
      <div className="dotted-field absolute inset-0 opacity-[0.12]" aria-hidden />

      <div className="container-wide relative">
        <Reveal>
          <nav className="mb-5 flex items-center gap-2 text-xs font-medium text-white/70">
            <Link href="/" className="transition-colors hover:text-white">
              {tm("brand")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            <span className="text-amber-300">{breadcrumb}</span>
          </nav>
        </Reveal>
        <p className="eyebrow mb-4 text-amber-400">{eyebrow}</p>
        <h1 className="max-w-3xl text-display font-bold leading-[1.05] text-white">
          {title}
        </h1>
        {subtitle && (
          <Reveal index={2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
