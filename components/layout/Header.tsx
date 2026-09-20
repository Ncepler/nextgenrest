"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, COMPANY_NAME } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";
import { OnCallClock } from "./OnCallClock";
import { MobileMenuSheet } from "./MobileMenuSheet";

/**
 * Header, all pages (CLAUDE.md §7). Two states, driven by an
 * IntersectionObserver on the hero section (id="hero"), not a scroll-Y
 * pixel threshold, so it holds correctly across viewport sizes: transparent
 * over the hero, translucent night material once the hero scrolls out.
 * Both states are dark — the header never becomes a light bar — so nav
 * text stays a single color throughout; only the background/border tween.
 * Pages with no #hero (every inner page) render permanently in the
 * material state, which is also correct there since their own intro band
 * is night-colored.
 */
export function Header() {
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(pathname === "/");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setOverHero(false);
      return;
    }
    setOverHero(true);
    let skippedFirst = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!skippedFirst) {
          skippedFirst = true;
          return;
        }
        setOverHero(entry.isIntersecting || window.scrollY < 50);
      },
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const solid = !overHero;

  return (
    <header
      className={cn(
        "on-dark transition-[background-color,border-color] duration-200 ease-out",
        solid ? "nav-material" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link
          href="/"
          className="min-w-0 shrink-0 truncate font-display text-lg font-bold tracking-tight text-text-on-night"
        >
          {COMPANY_NAME}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Site">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="font-body text-[15px] font-medium text-text-on-night-soft transition-colors hover:text-text-on-night"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <OnCallClock className="hidden min-[1100px]:inline-flex" />
          <span className="hidden lg:inline-flex">
            <Button href={PHONE_TEL} variant="primary">
              Call Now: {PHONE_DISPLAY}
            </Button>
          </span>

          {/* Mobile: logo + Menu only. No call button here — MobileCallBar
              is the single mobile call affordance, per the "one persistent
              call CTA per viewport" rule. */}
          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            className="press-feedback flex h-11 items-center gap-2 rounded-full px-3 text-text-on-night lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-body text-[15px] font-semibold">Menu</span>
          </button>
        </div>
      </div>

      <MobileMenuSheet open={menuOpen} onOpenChange={setMenuOpen} triggerRef={menuTriggerRef} />
    </header>
  );
}
