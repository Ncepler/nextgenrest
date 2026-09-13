/** Tiny classname joiner — no need for clsx/tailwind-merge at this scale. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
