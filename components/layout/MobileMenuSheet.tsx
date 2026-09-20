"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

/**
 * The mobile nav: a real <dialog>, not a hand-rolled overlay div — native
 * focus trap, Escape-to-close, and the rest of the page goes inert while
 * it's open, all for free from the platform. Entrance/exit animation is
 * CSS-only (see .menu-sheet in globals.css); this component only owns
 * open/close state and focus return to the trigger.
 */
export function MobileMenuSheet({
  open,
  onOpenChange,
  triggerRef,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Site menu"
      className="menu-sheet"
      onClose={() => {
        onOpenChange(false);
        triggerRef.current?.focus();
      }}
      onCancel={() => onOpenChange(false)}
    >
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold">Menu</span>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close menu"
            className="press-feedback flex h-11 w-11 items-center justify-center rounded-full text-text-on-night"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <a
          href={PHONE_TEL}
          className="press-feedback my-8 flex flex-col items-center justify-center rounded-2xl bg-ember py-8 text-center text-white"
        >
          <span className="text-[13px] font-semibold uppercase tracking-wide opacity-90">
            Call now
          </span>
          <span className="mt-1 font-display text-[40px] font-bold tabular-nums">
            {PHONE_DISPLAY}
          </span>
        </a>

        <nav aria-label="Site">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => onOpenChange(false)}
                  className="block rounded-lg px-2 py-3 font-display text-xl font-semibold text-text-on-night"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </dialog>
  );
}
