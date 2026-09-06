import type { LucideIcon } from "lucide-react";
import { theme } from "@presentation/styles/theme";

interface EyebrowLabelProps {
  icon: LucideIcon;
  children: string;
  tone?: "dark" | "light";
  style?: React.CSSProperties;
}

export function EyebrowLabel({ icon: Icon, children, tone = "light", style }: EyebrowLabelProps) {
  const color = tone === "dark" ? theme.color.onPrimaryLabel : theme.color.muted;

  return (
    <p
      style={{
        margin: "0 0 18px",
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        fontSize: 11,
        letterSpacing: "0.42em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      <Icon size={14} strokeWidth={1.8} />
      {children}
    </p>
  );
}
