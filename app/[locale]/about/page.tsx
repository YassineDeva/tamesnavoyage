import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return buildMetadata({
    locale: locale as Locale,
    path: "/about",
    title: t("metaTitle"),
    description: t("metaDesc"),
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.about");

  const values = ["v1", "v2", "v3"] as const;
  const stats = ["s1", "s2", "s3", "s4"] as const;

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("lede")}
        breadcrumb={t("breadcrumb")}
        image="/media/lifestyle/team.jpg"
        imageLabel="Tamesna team in the medina"
      />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5]">
              <Media
                src="/media/lifestyle/story.jpg"
                alt="Artisan marocain au travail"
                label="Artisan at work, Fès"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div>
            <p className="eyebrow text-terracotta-500">{t("storyTitle")}</p>
            <h2 className="mt-4 text-h2 font-bold leading-[1.05] text-navy-800">
              {t("title")}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-500 sm:text-lg">
              <Reveal index={1}>
                <p>{t("story1")}</p>
              </Reveal>
              <Reveal index={2}>
                <p>{t("story2")}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dune py-20 sm:py-28">
        <div className="container-wide">
          <p className="eyebrow text-terracotta-500">{t("valuesTitle")}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v} index={i}>
                <article className="h-full rounded-[1.75rem] border border-sand-200 bg-sand-50 p-8">
                  <span className="text-4xl text-terracotta-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-medium text-ink-900">
                    {t(`values.${v}t`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-500">
                    {t(`values.${v}d`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-8 rounded-[2rem] bg-ink-900 p-10 text-center sm:grid-cols-4 sm:p-14">
            {stats.map((s, i) => (
              <Reveal key={s} index={i}>
                <div>
                  <p className="text-4xl font-semibold text-gold-400 sm:text-5xl">
                    {t(`stats.${s}`)}
                  </p>
                  <p className="mt-2 text-sm text-sand-100/70">{t(`stats.${s}l`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-24 sm:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
