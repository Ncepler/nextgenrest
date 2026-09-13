import { cn } from "@/lib/cn";

/**
 * Reusable insurance-trust callout (CLAUDE.md §7) — a contained card, not
 * full-bleed, in the accent-2 (trust/water) tint. Appears on Home, every
 * service page, and /insurance-claims. Build once, use everywhere.
 */
export function InsuranceValueStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-accent-2/20 bg-accent-2/10 px-6 py-6 md:px-8 md:py-7",
        className,
      )}
    >
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-4">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-2 text-on-accent"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="font-display text-[18px] font-semibold leading-[1.3] text-accent-2 md:text-[20px]">
          We deal with your insurance company so you don&apos;t have to.
        </p>
      </div>
    </div>
  );
}
