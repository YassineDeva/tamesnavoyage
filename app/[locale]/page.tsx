import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/landing/hero";
import { SearchWidget } from "@/components/landing/search-widget";
import { TrustBar } from "@/components/landing/trust-bar";
import { PopularDestinations } from "@/components/landing/popular-destinations";
import { Services } from "@/components/landing/services";
import { WhyChoose } from "@/components/landing/why-choose";
import { Newsletter } from "@/components/landing/newsletter";

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
      <TrustBar />
      <PopularDestinations />
      <Services />
      <WhyChoose />
      <Newsletter />
    </>
  );
}
