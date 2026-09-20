"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = { question: string; answer: string };

/**
 * Single-open FAQ accordion (CLAUDE.md §7). `paper-deep` background per
 * item, +/– icon rotates 45° on open (200ms — within the accordion
 * duration budget).
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="overflow-hidden rounded-xl bg-paper-deep">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left focus-visible:outline-offset-[-2px] md:px-6 md:py-5"
            >
              <span className="font-display text-[16px] font-bold text-ink md:text-[18px]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-200 ease-out",
                  isOpen && "rotate-45",
                )}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-[1.6] text-ink-soft md:px-6 md:pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
