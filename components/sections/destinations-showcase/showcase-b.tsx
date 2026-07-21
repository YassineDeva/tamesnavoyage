import { useTranslations } from "next-intl";
import { SectionHeading } from "../section-heading";
import { DestinationCard } from "@/components/ui/destination-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { destinations } from "@/lib/data";

/** Variant B — horizontal snap-scroll gallery of tall destination cards. */
export function ShowcaseB() {
  const t = useTranslations("home.destinations");

  return (
    <section className="bg-dune py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} lede={t("subtitle")} />
      </div>

      <div className="mt-14">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 lg:px-[max(2.5rem,calc((100vw-84rem)/2+2.5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {destinations.map((d, i) => (
            <Reveal
              key={d.id}
              index={i % 4}
              className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[26rem]"
            >
              <DestinationCard destination={d} className="h-[30rem]" priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-wide mt-8 flex justify-center">
        <ButtonLink href="/destinations" variant="outline" withArrow>
          {t("cta")}
        </ButtonLink>
      </div>
    </section>
  );
}
