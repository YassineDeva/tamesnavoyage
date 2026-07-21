import type { ComponentType } from "react";
import { useTranslations } from "next-intl";
import { Tag, Headset, ShieldCheck, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

type IconType = ComponentType<{ className?: string }>;

const ITEMS: { key: string; icon: IconType }[] = [
  { key: "bestPrice", icon: Tag },
  { key: "support", icon: Headset },
  { key: "secure", icon: ShieldCheck },
  { key: "handpicked", icon: BadgeCheck },
];

/** Four reassurance features under the search bar. */
export function TrustBar() {
  const t = useTranslations("landing.trust");

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container-wide grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ key, icon: Icon }, i) => (
          <Reveal
            key={key}
            index={i}
            className="flex items-start gap-4 lg:px-2"
          >
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-azure-50 text-azure-600 ring-1 ring-azure-100">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-[15px] font-semibold text-navy-700">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-500">
                {t(`items.${key}.desc`)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
