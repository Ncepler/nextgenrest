const ITEMS = [
  "24/7 Emergency Response",
  "Direct Insurance Billing",
  "NYC Tri-State Coverage",
  "Fire / Water / Mold / Asbestos",
];

/**
 * Proof strip, directly under the hero — static text on night-2 with
 * hairline dividers. These are fixed claims, not a live count, so there is
 * nothing to animate and the server-rendered HTML is always the true,
 * final text.
 */
export function ProofStrip() {
  return (
    <div className="on-dark bg-night-2">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y divide-line-dark px-6 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8">
        {ITEMS.map((item) => (
          <p
            key={item}
            className="py-5 text-center font-body text-[14px] font-semibold tabular-nums text-text-on-night-soft md:py-7 md:text-[15px]"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
