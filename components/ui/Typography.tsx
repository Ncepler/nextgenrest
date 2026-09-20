import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** H1: clamp(2.75rem, 6.4vw + 1rem, 6.5rem), tight leading, negative tracking. */
export function H1({ children, className, as: Tag = "h1" }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-bold leading-[1.0] tracking-[-0.02em]",
        "text-[clamp(2.75rem,6.4vw+1rem,6.5rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** H2: clamp(2rem, 3.4vw + 1rem, 3.75rem). */
export function H2({ children, className, as: Tag = "h2" }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-bold leading-[1.02] tracking-[-0.02em]",
        "text-[clamp(2rem,3.4vw+1rem,3.75rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** H3: 22px → 28px. */
export function H3({ children, className, as: Tag = "h3" }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-bold leading-[1.1] tracking-[-0.01em] text-[22px] md:text-[28px]",
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
    <p className={cn("max-w-[62ch] font-body text-[17px] leading-[1.6] md:text-[19px]", className)}>
      {children}
    </p>
  );
}

/** Body copy: 17px, line-height 1.6, capped at a 62ch measure. */
export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("max-w-[62ch] font-body text-[17px] leading-[1.6]", className)}>{children}</p>
  );
}

/** Small/meta text: 13px → 14px. */
export function Small({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-body text-[13px] leading-[1.5] md:text-[14px]", className)}>
      {children}
    </span>
  );
}
