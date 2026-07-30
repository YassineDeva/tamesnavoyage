import { Reveal } from "@/components/motion/reveal";
import type { FaqItem } from "@/lib/seo";

/**
 * Answers to the questions people actually type before they call. Rendered as
 * native <details> so every answer is in the HTML whether or not it is open —
 * collapsed-but-present is what both Google and the assistant crawlers read,
 * and it is also what the FAQPage markup is required to mirror.
 */
export function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-h2 font-medium text-ink-900">{title}</h2>
          </Reveal>

          <div className="mt-8 divide-y divide-sand-200 overflow-hidden rounded-[1.75rem] border border-sand-200 bg-sand-50">
            {items.map((item, i) => (
              <Reveal key={item.q} index={Math.min(i, 3)}>
                <details className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 focus-ring rounded-lg">
                    <h3 className="text-base font-medium text-ink-900">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden
                      className="mt-0.5 shrink-0 text-xl leading-none text-terracotta-500 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-500">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
