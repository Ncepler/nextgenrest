/**
 * Shared motion tokens for Framer Motion call sites. These are the exact
 * same curves declared as CSS custom properties / Tailwind `ease-*`
 * utilities in app/globals.css — kept here as one source of truth so a JS
 * animation and a CSS transition never drift into two different curves.
 */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;
