import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

/** Eyebrow + editorial title + optional lede, with a diamond rule. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "start",
  tone = "ink",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "start" | "center";
  tone?: "ink" | "sand";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "rule-diamond mb-4",
              align === "center" ? "justify-center" : "justify-start",
              "before:hidden after:hidden sm:before:block",
            )}
          >
            <span className="eyebrow text-terracotta-500">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal index={1}>
        <h2
          className={cn(
            "font-display text-h2 font-medium leading-[1.05]",
            tone === "sand" ? "text-sand-50" : "text-ink-900",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal index={2}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "sand" ? "text-sand-100/75" : "text-muted-500",
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
