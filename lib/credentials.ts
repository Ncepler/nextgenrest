/**
 * Real, client-confirmed licenses and certifications only. Empty until
 * Noah confirms specific credentials — never invent a license number or
 * certifying body. The About page credentials row renders only when this
 * array is non-empty.
 */
export type Credential = { label: string; issuer?: string };

export const CREDENTIALS: Credential[] = [];
