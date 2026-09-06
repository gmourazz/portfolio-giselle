import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@presentation/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  style?: CSSProperties;
  className?: string;
}

export function Reveal({ children, delayMs = 0, style, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delayMs}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
