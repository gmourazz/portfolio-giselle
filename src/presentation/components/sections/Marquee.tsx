import { Boxes, Hammer, MapPinned, Sofa, Sprout, type LucideIcon } from "lucide-react";
import { theme } from "@presentation/styles/theme";

const ITEMS: { label: string; icon: LucideIcon }[] = [
  { label: "Design de interiores", icon: Sofa },
  { label: "Marcenaria sob medida", icon: Hammer },
  { label: "Paisagismo", icon: Sprout },
  { label: "Projetos em 3D", icon: Boxes },
  { label: "Atendimento em todo o Brasil", icon: MapPinned },
];

function MarqueeGroup() {
  return (
    <>
      {ITEMS.map((item) => (
        <span
          key={item.label}
          className="marquee-chip"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginRight: 14,
            padding: "10px 20px 10px 16px",
            borderRadius: 100,
            border: `1px solid ${theme.color.line}`,
            background: theme.color.bg,
          }}
        >
          <item.icon size={16} color={theme.color.primary} strokeWidth={1.8} />
          <span
            style={{
              fontFamily: theme.font.serif,
              fontSize: "clamp(17px,2vw,22px)",
              fontWeight: 400,
              color: theme.color.accent,
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </span>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div className="marquee-mask" style={{ borderTop: `1px solid ${theme.color.line}`, borderBottom: `1px solid ${theme.color.line}`, overflow: "hidden", background: theme.color.bgAlt }}>
      <div className="marquee-track" style={{ display: "flex", width: "max-content", padding: "20px 0" }}>
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
