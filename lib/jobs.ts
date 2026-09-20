/**
 * Real completed-job before/after photo pairs, keyed by service slug.
 * Empty until Noah supplies real job photos — CLAUDE.md and the ground
 * rules are explicit that no stock or placeholder imagery ever ships.
 * The before/after slider on a service page renders only when this array
 * has an entry for that slug.
 */
export type JobPhoto = { src: string; alt: string };
export type JobPair = { serviceSlug: string; before: JobPhoto; after: JobPhoto };

export const JOBS: JobPair[] = [];
