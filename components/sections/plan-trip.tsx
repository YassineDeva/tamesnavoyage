import { useTranslations } from "next-intl";
import { MessagesSquare, Route, PlaneTakeoff } from "lucide-react";
import { Media } from "@/components/ui/media";
import { Reveal, RevealWords } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

const steps = [
  { key: "step1", Icon: MessagesSquare },
  { key: "step2", Icon: Route },
  { key: "step3", Icon: PlaneTakeoff },
] as const;

/** Split "how it works" — bespoke trip planning in three steps. */
export function PlanTrip() {
  const t = useTranslations("home.plan");

  return (
    <section className="py-24 sm:py-32">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full">
            <Media
              src="/media/lifestyle/planning.jpg"
              alt="Voyageuse contemplant l'Atlas depuis une terrasse"
              label="Lifestyle — riad terrace, Atlas view"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating accent card */}
          <div className="absolute -bottom-6 end-6 max-w-[15rem] rounded-2xl border border-sand-200 bg-sand-50/95 p-5 shadow-[var(--shadow-soft)] backdrop-blur rtl:start-6 rtl:end-auto">
            <div className="rule-diamond mb-2 text-terracotta-400 before:hidden">
              <span className="eyebrow">Tamesna</span>
            </div>
            <p className="text-sm font-medium leading-snug text-ink-800">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>

        <div>
          <p className="eyebrow text-terracotta-500">{t("eyebrow")}</p>
          <h2 className="font-display mt-4 text-h2 font-medium leading-[1.05] text-ink-900">
            <RevealWords text={t("title")} />
          </h2>

          <ol className="mt-10 space-y-6">
            {steps.map(({ key, Icon }, i) => (
              <Reveal key={key} index={i} as="li">
                <div className="flex items-start gap-5">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terracotta-50 text-terracotta-500">
                    <Icon className="h-5 w-5" />
                    <span className="absolute -end-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-500 text-[10px] font-bold text-sand-50">
                      {i + 1}
                    </span>
                  </span>
                  <div className="pt-1.5">
                    <p className="font-display text-lg font-medium text-ink-900">
                      {t(key)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-10">
            <ButtonLink href="/contact" size="lg" withArrow>
              {t("cta")}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
