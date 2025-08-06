import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export function Section({ className = "", ariaLabel = "", children }: Props) {
  return (
    <section
      aria-label={ariaLabel}
      className={twMerge("container mb-16", className)}
    >
      {children}
    </section>
  );
}
