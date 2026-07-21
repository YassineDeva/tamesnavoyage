import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/sections/hero";
import { SearchWidget } from "@/components/sections/search-widget";
import { DestinationsShowcase } from "@/components/sections/destinations-showcase";
import { WhyChoose } from "@/components/sections/why-choose";
import { PlanTrip } from "@/components/sections/plan-trip";
import { Experiences } from "@/components/sections/experiences";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <SearchWidget />
      <DestinationsShowcase />
      <WhyChoose />
      <PlanTrip />
      <Experiences />
      <TestimonialsSection />
      <div className="py-24 sm:py-28">
        <CtaBand />
      </div>
    </>
  );
}
