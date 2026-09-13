import { cn } from "@/lib/cn";
import { Small } from "./Typography";

/**
 * A clearly-flagged stand-in for an asset Noah hasn't supplied yet (a real
 * photo, a map embed, a certification badge). Never render stock imagery
 * pretending to be real — CLAUDE.md §5/§10 are explicit about this. The
 * `label` doubles as the alt-equivalent description a real asset would need.
 */
export function PlaceholderBlock({
  label,
  aspect = "aspect-[4/3]",
  className,
  dark = false,
}: {
  label: string;
  aspect?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        aspect,
        "flex items-center justify-center rounded-xl border-2 border-dashed p-6 text-center",
        dark
          ? "border-text-on-dark/25 bg-white/5 text-text-on-dark-secondary"
          : "border-rule bg-surface text-text-secondary",
        className,
      )}
    >
      <Small>{label}</Small>
    </div>
  );
}
