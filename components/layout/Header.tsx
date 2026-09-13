"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, COMPANY_NAME } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";

/**
 * Header, all pages (CLAUDE.md §7). Positioned by its parent (a fixed
 * wrapper in the root layout, alongside EmergencyBanner) so it can sit
 * transparent-over-hero until 80px of scroll, then solid `bg` with a
 * `rule` bottom border. The phone pill stays visible at all times — no
 * exceptions, per CLAUDE.md §10.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "transition-colors duration-300",
        scrolled
          ? "bg-bg border-b border-rule"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-6 py-4 md:px-8">
        <Link
          href="/"
          className={cn(
            "min-w-0 truncate font-display text-base font-semibold tracking-tight sm:text-lg",
            scrolled ? "text-text-primary" : "text-text-on-dark",
          )}
        >
          {COMPANY_NAME}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-[15px] font-medium transition-colors hover:opacity-80",
                scrolled ? "text-text-secondary" : "text-text-on-dark-secondary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Visibility toggles live on a wrapper, not Button's own
              className — Button's base already hardcodes `inline-flex`,
              which wins the cascade over an unprefixed `hidden` passed
              alongside it (Tailwind orders same-layer utilities by name,
              not by source order), so `hidden` would silently never
              apply. Wrapping keeps Button's base untouched. */}
          <span className="hidden sm:inline-flex">
            <Button href={PHONE_TEL} variant="primary">
              Call Now: {PHONE_DISPLAY}
            </Button>
          </span>
          <span className="sm:hidden">
            <Button href={PHONE_TEL} variant="primary" className="px-4!">
              Call
            </Button>
          </span>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full md:hidden",
              scrolled ? "text-text-primary" : "text-text-on-dark",
            )}
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-rule bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-[16px] font-medium text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
