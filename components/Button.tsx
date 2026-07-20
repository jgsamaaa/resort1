import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2.5 px-9 py-4 text-[11px] uppercase tracking-[0.28em] transition-all duration-300";

const variants = {
  primary:
    "bg-ember-500 font-semibold text-pine-950 hover:bg-ember-400 hover:shadow-xl hover:shadow-ember-500/20",
  outline:
    "border border-mist-100/40 text-mist-100 hover:border-ember-400 hover:text-ember-400",
  outlineDark:
    "border border-pine-950/30 text-pine-950 hover:border-clay-600 hover:bg-pine-950 hover:text-cream-50",
  ghost:
    "border border-ember-500/70 text-ember-400 hover:bg-ember-500 hover:text-pine-950",
} as const;

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ariaLabel,
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
