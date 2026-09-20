import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-dark" | "ghost";

const base =
  "press-feedback inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body font-semibold text-[16px] tabular-nums whitespace-nowrap min-h-[44px]";

const variants: Record<Variant, string> = {
  // The one CTA color on the whole site — ember means "call now / act now,"
  // never diluted by appearing anywhere else.
  primary: "bg-ember text-white hover:bg-ember-hover",
  // Secondary CTA over a dark hero/night section.
  outline: "border border-text-on-night/50 text-text-on-night hover:bg-text-on-night/10",
  // Secondary CTA on paper.
  "outline-dark": "border border-ink/30 text-ink hover:bg-ink/5",
  // Plain text link, no color — the site's flat-link default.
  ghost: "font-semibold text-ink underline-offset-4 hover:underline",
};

function PhoneGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  showPhoneGlyph?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  variant = "primary",
  href = "#",
  showPhoneGlyph,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const isTel = href.startsWith("tel:");
  const isExternalScheme = /^(tel:|mailto:|https?:)/.test(href);
  const withGlyph = showPhoneGlyph ?? isTel;

  const content = (
    <>
      {withGlyph && <PhoneGlyph />}
      {children}
    </>
  );

  if (isExternalScheme || href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
