import { Counter } from "@/components/ui/Counter";
import { Small } from "@/components/ui/Typography";

const ICONS = {
  clock: (
    <path d="M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: (
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  pin: (
    <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  flame: (
    <path d="M12 3s-4 4-4 8a4 4 0 008 0c0-1-.5-2-1-2.5.5 2-1 3-1.5 1.5-.5 1.5 1 2 .5 3.5A4 4 0 018 12c0 2.5 2 4.5 4 4.5s4-2 4-4.5c0-4-4-9-4-9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  ),
};

function Item({ icon, children }: { icon: keyof typeof ICONS; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-accent-2" aria-hidden="true">
        {ICONS[icon]}
      </svg>
      <Small className="font-semibold text-text-secondary">{children}</Small>
    </div>
  );
}

/** Trust strip, directly under the hero (CLAUDE.md §7). */
export function TrustStrip() {
  return (
    <div className="bg-surface">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-8 md:flex-row md:flex-wrap md:items-center md:justify-between md:px-8">
        <Item icon="clock">
          <Counter value={24} /> / 7 · <Counter value={365} /> Days a Year
        </Item>
        <Item icon="shield">Direct Insurance Billing</Item>
        <Item icon="pin">NYC Tri-State Coverage</Item>
        <Item icon="flame">Fire · Water · Mold · Asbestos</Item>
      </div>
    </div>
  );
}
