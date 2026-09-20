import Link from "next/link";
import type { Service } from "@/lib/site-data";

const ICONS: Record<string, React.ReactNode> = {
  "fire-damage-restoration": (
    <path d="M12 3s-4 4-4 8a4 4 0 008 0c0-1-.5-2-1-2.5.5 2-1 3-1.5 1.5-.5 1.5 1 2 .5 3.5A4 4 0 018 12c0 2.5 2 4.5 4 4.5s4-2 4-4.5c0-4-4-9-4-9z" />
  ),
  "water-damage-restoration": (
    <path d="M12 3s6 7 6 11.5a6 6 0 01-12 0C6 10 12 3 12 3z" />
  ),
  "flood-damage-recovery": (
    <path d="M3 17c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0M3 12c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0M6 7c2-2 4-3 6-3s4 1 6 3" />
  ),
  "mold-remediation": (
    <path d="M12 3a3 3 0 013 3c0 1-.5 1.5-1 2 1 .3 2 1.3 2 2.5A3 3 0 0113 13.5M12 3a3 3 0 00-3 3c0 1 .5 1.5 1 2-1 .3-2 1.3-2 2.5A3 3 0 0011 13.5m1-10.5v18" />
  ),
  "asbestos-abatement": (
    <path d="M4 20l8-14 8 14H4z M9 20l3-5 3 5" />
  ),
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="hover-lift group flex flex-col rounded-xl border border-line bg-paper p-6"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper-deep text-ink">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {ICONS[service.slug]}
        </svg>
      </span>
      <h3 className="mt-4 font-display text-[19px] font-bold text-ink">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-[15px] leading-[1.6] text-ink-soft">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-ink">
        Learn More
        <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
