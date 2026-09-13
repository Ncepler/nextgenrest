/**
 * Single source of truth for every fact, service, area, and nav link on the
 * site. Never re-type the phone number, email, or a service/area list
 * anywhere else — import from here. Facts below come from CLAUDE.md §2 only.
 */

export const PHONE_DISPLAY = "516.491.1601";
export const PHONE_TEL = "tel:15164911601";
export const EMAIL = "info@nextgenrest.com";
export const EMAIL_MAILTO = "mailto:info@nextgenrest.com";
export const SITE_URL = "https://nextgenrest.com";
export const COMPANY_NAME = "Next Generation Restoration";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  h1: string;
  intro: string;
  included: string[];
  /** Set for the one service page cross-linking to a sister brand. */
  note?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "fire-damage-restoration",
    name: "Fire Damage Restoration",
    shortDescription:
      "Structural repair, soot and smoke cleanup, full recovery from fire loss.",
    h1: "Fire Damage Restoration",
    intro:
      "Fire damage rarely stays contained to what actually burned — smoke, soot, and water from suppression efforts spread the damage further than the flames ever reached. We handle the complete recovery: structural repair, soot and smoke removal, odor treatment, and full restoration of the affected space.",
    included: [
      "Structural repair",
      "Soot and smoke cleanup",
      "Smoke odor removal",
      "Content cleaning",
      "Full rebuild coordination",
    ],
  },
  {
    slug: "water-damage-restoration",
    name: "Water Damage Restoration",
    shortDescription:
      "Extraction, drying, and dehumidification for leaks and floods alike.",
    h1: "Water Damage Restoration",
    intro:
      "Whether it's a slow leak you just discovered or a burst pipe flooding a room in minutes, water damage gets worse the longer it sits. Our team responds fast with extraction, drying, and dehumidification to stop the damage before it spreads — and before it turns into mold.",
    included: [
      "Water extraction",
      "Structural drying",
      "Dehumidification",
      "Moisture monitoring",
      "Mold-prevention treatment",
    ],
  },
  {
    slug: "flood-damage-recovery",
    name: "Flood Damage Recovery",
    shortDescription:
      "Full-scale cleanup and restoration after major flooding events.",
    h1: "Flood Damage Recovery",
    intro:
      "Flooding brings its own set of problems beyond standard water damage — larger volumes, contamination risk, and damage across an entire property rather than one room. We bring the scale of response a flood actually requires, from initial cleanup through full restoration.",
    included: [
      "Large-scale water removal",
      "Contamination assessment",
      "Structural drying",
      "Full property restoration",
    ],
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    shortDescription:
      "Identification, containment, and removal, plus prevention going forward.",
    h1: "Mold Remediation",
    intro:
      "Mold spreads fast and often starts somewhere you can't see — behind a wall, under flooring, inside ductwork. We find it, contain it so it can't spread further during removal, remove it completely, and put treatments in place to keep it from coming back.",
    included: [
      "Mold inspection",
      "Containment",
      "Removal",
      "Prevention treatment",
      "Post-remediation verification",
    ],
    note: "See also: SporesRUs, our dedicated mold-specialist brand, for deep mold-only expertise. [Cross-link once that site is live.]",
  },
  {
    slug: "asbestos-abatement",
    name: "Asbestos Abatement",
    shortDescription: "Safe removal handled to strict health and safety standards.",
    h1: "Asbestos Abatement",
    intro:
      "Older properties often have asbestos in places you'd never expect — insulation, flooring, ceiling tile. Removing it safely requires strict adherence to health and safety standards, which is exactly how our team handles every job, start to finish.",
    included: [
      "Asbestos testing",
      "Safe containment",
      "Certified removal",
      "Disposal compliant with health and safety regulations",
    ],
  },
];

export type ServiceArea = {
  id: string;
  name: string;
  blurb: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: "nyc-boroughs",
    name: "NYC Boroughs",
    blurb: "Manhattan, Brooklyn, Queens, the Bronx, and Staten Island",
  },
  {
    id: "long-island",
    name: "Long Island",
    blurb: "Nassau County and Suffolk County",
  },
  {
    id: "westchester",
    name: "Westchester County",
    blurb: "Westchester County",
  },
  {
    id: "new-jersey",
    name: "New Jersey",
    blurb: "Including Bergen County",
  },
  {
    id: "connecticut",
    name: "Connecticut",
    blurb: "Including Fairfield County",
  },
];

export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/insurance-claims", label: "Insurance Claims" },
  { href: "/renovation-rebuild", label: "Renovation" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
];

export const FOOTER_SERVICE_LINKS: NavLink[] = [
  ...SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  { href: "/insurance-claims", label: "Insurance Claims" },
  { href: "/renovation-rebuild", label: "Renovation & Rebuild" },
];

export const FOOTER_AREA_LINKS: NavLink[] = SERVICE_AREAS.map((a) => ({
  href: `/service-areas#${a.id}`,
  label: a.name,
}));
