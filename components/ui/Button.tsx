import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-dark" | "ghost-2";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body font-semibold text-[16px] transition-colors duration-150 whitespace-nowrap";

const variants: Record<Variant, string> = {
  // The one CTA color on the whole site — "call now / act now."
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  // Secondary CTA over a dark hero scrim.
  outline: "border border-text-on-dark/60 text-text-on-dark hover:bg-text-on-dark/10",
  // Secondary CTA on a light background.
  "outline-dark": "border border-text-primary/30 text-text-primary hover:bg-text-primary/5",
  // Text link in the trust accent — never competes with an accent button on the same screen.
  "ghost-2": "text-accent-2 font-semibold hover:underline underline-offset-4",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  variant = "primary",
  href = "#",
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const isExternalScheme = /^(tel:|mailto:|https?:)/.test(href);

  if (isExternalScheme || href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
