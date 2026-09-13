import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** H1: 36px → 56px, line-height 1.15 (CLAUDE.md §6.2). */
export function H1({ children, className, as: Tag = "h1" }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold text-[36px] md:text-[56px] leading-[1.15] tracking-tight",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** H2: 28px → 40px, line-height 1.15. */
export function H2({ children, className, as: Tag = "h2" }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold text-[28px] md:text-[40px] leading-[1.15] tracking-tight",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** H3: 22px → 28px, line-height 1.15. */
export function H3({ children, className, as: Tag = "h3" }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold text-[22px] md:text-[28px] leading-[1.15]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Subhead/lead paragraph: sits under an H1, slightly larger than body. */
export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-body text-[17px] md:text-[19px] leading-[1.6]", className)}>
      {children}
    </p>
  );
}

/** Body copy: 16px → 17px, line-height 1.6. */
export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-body text-[16px] md:text-[17px] leading-[1.6]", className)}>
      {children}
    </p>
  );
}

/** Small/meta text: 13px → 14px. */
export function Small({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-body text-[13px] md:text-[14px] leading-[1.5]", className)}>
      {children}
    </span>
  );
}
