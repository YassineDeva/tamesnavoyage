import { useTranslations } from "next-intl";
import { SectionHeading } from "../section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ButtonLink } from "@/components/ui/button";
import { testimonials } from "@/lib/data";

/** Variant B — infinite dual-row marquee (pauses on hover). */
export function TestimonialsB() {
  const t = useTranslations("home.testimonials");
  const rowOne = testimonials.slice(0, 3);
  const rowTwo = testimonials.slice(3, 6);

  return (
    <section className="zellige overflow-hidden py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" />
      </div>

      <div className="mt-14 flex flex-col gap-6">
        <MarqueeRow items={rowOne} duration="46s" />
        <MarqueeRow items={rowTwo} duration="58s" reverse />
      </div>

      <div className="mt-12 flex justify-center">
        <ButtonLink href="/testimonials" variant="outline" withArrow>
          {t("cta")}
        </ButtonLink>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  duration,
  reverse,
}: {
  items: typeof testimonials;
  duration: string;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden">
      <div
        className="marquee-track flex shrink-0 gap-6 pe-6"
        style={{
          animationName: "marquee",
          animationDuration: duration,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((item, i) => (
          <div key={`${item.id}-${i}`} className="w-[22rem] shrink-0 sm:w-[26rem]">
            <TestimonialCard item={item} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
