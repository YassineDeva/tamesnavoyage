"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const easeExpo = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeExpo, delay: i * 0.08 },
  }),
};

/** Fade-and-rise on scroll into view. `index` staggers siblings. */
export function Reveal({
  children,
  className,
  index = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion[as] as React.ComponentType<any>;
  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
