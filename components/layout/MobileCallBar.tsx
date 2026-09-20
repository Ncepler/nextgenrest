"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";

/**
 * Sticky mobile call bar — the single mobile call affordance (the header
 * carries no call button below `lg`). Slides in after 200px of scroll so
 * the hero's own CTA gets the first click, and hides whenever a section
 * already carrying its own big call button is in view (the closing CTA
 * band, the footer) so two "Call Now" targets never compete on screen at
 * once. Hiding while the mobile menu is open is handled in CSS
 * (`html:has(.menu-sheet[open]) .mobile-call-bar`), since the menu and this
 * bar live in different parts of the tree.
 */
export function MobileCallBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [redundant, setRedundant] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-call-redundant]"));
    if (targets.length === 0) {
      setRedundant(false);
      return;
    }
    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        }
        setRedundant(intersecting.size > 0);
      },
      { threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div
      className={cn(
        "mobile-call-bar fixed inset-x-0 bottom-0 z-50 bg-night p-3 transition-transform duration-300 ease-out lg:hidden",
        "pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]",
        visible && !redundant ? "translate-y-0" : "translate-y-full",
      )}
    >
      <Button href={PHONE_TEL} variant="primary" className="w-full">
        Call Now: {PHONE_DISPLAY}
      </Button>
    </div>
  );
}
