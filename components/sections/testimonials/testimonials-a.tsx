import { useTranslations } from "next-intl";
import { SectionHeading } from "../section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { testimonials } from "@/lib/data";

/** Variant A — three featured review cards with a link to the full wall. */
export function TestimonialsA() {
  const t = useTranslations("home.testimonials");

  return (
    <section className="zellige py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <Reveal index={1} className="shrink-0">
            <ButtonLink href="/testimonials" variant="outline" withArrow>
              {t("cta")}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((item, i) => (
            <Reveal key={item.id} index={i}>
              <TestimonialCard item={item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
