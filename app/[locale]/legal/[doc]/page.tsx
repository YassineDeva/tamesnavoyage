import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";
import { buildMetadata, BRAND } from "@/lib/seo";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Link } from "@/i18n/navigation";
import { t as tr } from "@/lib/data";
import {
  legalDocs,
  getLegalDoc,
  identityRows,
  LEGAL_UPDATED,
  type LegalBlock,
} from "@/lib/legal";
import { locales, type Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; doc: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    legalDocs.map((d) => ({ locale, doc: d.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, doc } = (await params) as { locale: Locale; doc: string };
  const document = getLegalDoc(doc);
  if (!document) return {};
  return buildMetadata({
    locale,
    path: `/legal/${doc}`,
    title: `${tr(document.title, locale)} — ${BRAND}`,
    description: tr(document.summary, locale),
  });
}

export default async function LegalPage({ params }: Props) {
  const { locale, doc } = (await params) as { locale: Locale; doc: string };
  setRequestLocale(locale);
  const document = getLegalDoc(doc);
  if (!document) notFound();

  const t = await getTranslations("pages.legal");
  /* The CGV quote payment and cancellation terms straight from the circuit
     pages' own strings, so the two can never drift apart. */
  const td = await getTranslations("pages.tourDetail");

  const updated = new Intl.DateTimeFormat(locale === "ar" ? "ar-MA" : "fr-MA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(LEGAL_UPDATED));

  const others = legalDocs.filter((d) => d.slug !== document.slug);

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={tr(document.title, locale)}
        subtitle={tr(document.summary, locale)}
        breadcrumb={t("breadcrumb")}
        image="/media/lifestyle/team.jpg"
        imageLabel={tr(document.title, locale)}
      />

      <section className="py-16 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_18rem]">
          <article className="min-w-0 max-w-3xl">
            <p className="text-sm text-muted-500">
              {t("updated")} {updated}
            </p>

            {document.sections.map((section, i) => (
              <Reveal key={section.id} index={Math.min(i, 3)}>
                <section id={section.id} className="mt-12 scroll-mt-28 first:mt-10">
                  <h2 className="text-h3 font-medium text-ink-900">
                    {tr(section.heading, locale)}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.blocks.map((block, j) => (
                      <Block key={j} block={block} locale={locale} td={td} />
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}

            <p className="mt-14 rounded-2xl border border-sand-200 bg-sand-50 p-5 text-sm leading-relaxed text-muted-500">
              {t("contactNote")}{" "}
              <Link href="/contact" className="font-medium text-azure-600 hover:text-azure-700">
                {t("contactLink")}
              </Link>
              .
            </p>
          </article>

          {/* Jump between the three documents and within the current one. */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <nav className="rounded-[1.75rem] border border-sand-200 bg-sand-50 p-6">
              <h2 className="text-sm font-semibold text-ink-900">{t("onThisPage")}</h2>
              <ul className="mt-4 space-y-2.5">
                {document.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted-500 transition-colors hover:text-azure-600"
                    >
                      {tr(section.heading, locale)}
                    </a>
                  </li>
                ))}
              </ul>

              <h2 className="mt-7 border-t border-sand-200 pt-6 text-sm font-semibold text-ink-900">
                {t("otherDocs")}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {others.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/legal/${d.slug}`}
                      className="text-sm text-muted-500 transition-colors hover:text-azure-600"
                    >
                      {tr(d.title, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
    </>
  );
}

function Block({
  block,
  locale,
  td,
}: {
  block: LegalBlock;
  locale: Locale;
  td: (key: string) => string;
}) {
  if (block.kind === "p") {
    return (
      <p className="text-base leading-relaxed text-muted-500">
        {tr(block.text, locale)}
      </p>
    );
  }

  if (block.kind === "list" || block.kind === "i18nList") {
    const items =
      block.kind === "list"
        ? block.items.map((item) => tr(item, locale))
        : block.keys.map((key) => td(key));
    return (
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-ink-800">
            <Check className="mt-1 h-4 w-4 shrink-0 text-olive-500" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  /* Identity table — rows the operator has not filled in are absent. */
  const rows = identityRows(locale);
  return (
    <dl className="divide-y divide-sand-200 overflow-hidden rounded-2xl border border-sand-200">
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex flex-wrap items-baseline gap-x-4 gap-y-1 bg-sand-50 px-5 py-3.5"
        >
          <dt className="w-48 shrink-0 text-sm text-muted-500">
            {tr(row.label, locale)}
          </dt>
          <dd className="min-w-0 flex-1 text-sm font-medium text-ink-900">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
