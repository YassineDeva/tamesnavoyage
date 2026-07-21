import { useTranslations } from "next-intl";
import { SectionHeading } from "../section-heading";
import { DestinationCard } from "@/components/ui/destination-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { destinations } from "@/lib/data";

/** Variant A — asymmetric bento grid of flagship destinations. */
export function ShowcaseA() {
  const t = useTranslations("home.destinations");

  return (
    <section className="bg-dune py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            lede={t("subtitle")}
          />
          <Reveal index={2} className="shrink-0">
            <ButtonLink href="/destinations" variant="outline" withArrow>
              {t("cta")}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[240px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          <Reveal className="col-span-2 row-span-2 lg:col-span-2" index={0}>
            <DestinationCard destination={destinations[0]} className="h-full" priority />
          </Reveal>
          <Reveal className="col-span-2" index={1}>
            <DestinationCard destination={destinations[1]} className="h-full" />
          </Reveal>
          <Reveal index={2}>
            <DestinationCard destination={destinations[2]} className="h-full" />
          </Reveal>
          <Reveal index={3}>
            <DestinationCard destination={destinations[3]} className="h-full" />
          </Reveal>
          <Reveal className="col-span-2 lg:col-span-2" index={4}>
            <DestinationCard destination={destinations[4]} className="h-full" />
          </Reveal>
          <Reveal className="col-span-2 lg:col-span-2" index={5}>
            <DestinationCard destination={destinations[5]} className="h-full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
