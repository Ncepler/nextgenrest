import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

/**
 * Top-of-page emergency strip (CLAUDE.md §6.4): a subtle background pulse,
 * present enough to read as "urgent, live" without looking broken. Sits
 * above the sticky Header on every page (non-sticky) so it never collides
 * with the header's own always-visible phone pill after scroll.
 */
export function EmergencyBanner() {
  return (
    <a
      href={PHONE_TEL}
      className="block animate-pulse-soft bg-accent px-4 py-2 text-center text-[13px] font-semibold text-on-accent md:text-[14px]"
    >
      24/7 Emergency Response — Call Now: {PHONE_DISPLAY}
    </a>
  );
}
