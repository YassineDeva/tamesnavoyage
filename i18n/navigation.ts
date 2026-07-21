import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation primitives. Always import `Link` / `useRouter`
 * from here (never from `next/link`) so the active locale prefix is kept.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
