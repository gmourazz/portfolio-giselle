import { useState } from "react";
import { ArrowRight, GalleryHorizontalEnd, LayoutGrid, Menu, UserRound, X, type LucideIcon } from "lucide-react";
import { NAV_SECTIONS } from "@shared/constants";
import { theme } from "@presentation/styles/theme";

const NAV_ICONS: Record<string, LucideIcon> = {
  sobre: UserRound,
  servicos: LayoutGrid,
  projetos: GalleryHorizontalEnd,
};

interface HeaderProps {
  progress: number;
  compact: boolean;
  activeSection: string;
}

export function Header({ progress, compact, activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="header-enter"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(253,247,236,0.94)",
        backdropFilter: "blur(18px) saturate(1.2)",
        borderBottom: compact ? "1px solid rgba(43,43,38,0.08)" : "1px solid transparent",
        boxShadow: compact ? "0 12px 30px -22px rgba(43,43,38,0.6)" : "0 0 0 0 rgba(0,0,0,0)",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div style={{ height: 2, background: theme.color.primary, width: `${progress}%`, transition: "width 0.1s linear" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: `${compact ? 9 : 16}px clamp(16px,5vw,64px)`,
          maxWidth: 1180,
          margin: "0 auto",
          transition: "padding 0.4s ease",
        }}
      >
        <a href="#topo" style={{ display: "flex", alignItems: "center", lineHeight: 0 }}>
          <img
            src="/images/logo.png"
            alt="Giselle Anjos — Home Designer"
            className="header-logo"
            style={{ height: compact ? 40 : 54, width: "auto", transition: "height 0.4s ease" }}
          />
        </a>

        <nav className="nav-desktop" style={{ display: "flex", gap: "clamp(16px,3vw,34px)", alignItems: "center", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {NAV_SECTIONS.map((section) => {
            const active = activeSection === section.id;
            const Icon = NAV_ICONS[section.id];
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="nav-link"
                style={{ display: "inline-flex", alignItems: "center", gap: 7, color: active ? theme.color.primary : theme.color.text }}
              >
                <Icon className="nav-icon" size={14} strokeWidth={1.8} />
                <span>{section.label}</span>
                <span
                  style={{
                    position: "absolute",
                    left: 21,
                    bottom: 2,
                    height: 1,
                    width: active ? "calc(100% - 21px)" : "0%",
                    background: theme.color.primary,
                    transition: "width 0.35s ease",
                  }}
                />
              </a>
            );
          })}
          <a
            href="#contato"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "12px 22px",
              background: theme.color.primary,
              color: theme.color.onPrimary,
              borderRadius: 100,
              letterSpacing: "0.14em",
            }}
          >
            Orçamento <ArrowRight size={15} />
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="menu-toggle icon-btn"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: `1px solid ${theme.color.sageBorder}`,
            background: "transparent",
            color: theme.color.primary,
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="nav-mobile"
          style={{
            borderTop: `1px solid ${theme.color.line}`,
            padding: "14px clamp(16px,5vw,64px) 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            fontSize: 13,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          {NAV_SECTIONS.map((section) => {
            const active = activeSection === section.id;
            const Icon = NAV_ICONS[section.id];
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "13px 0", color: active ? theme.color.primary : theme.color.text }}
              >
                <Icon size={16} strokeWidth={1.8} />
                {section.label}
              </a>
            );
          })}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              marginTop: 10,
              padding: "14px 22px",
              background: theme.color.primary,
              color: theme.color.onPrimary,
              borderRadius: 100,
              letterSpacing: "0.14em",
            }}
          >
            Orçamento <ArrowRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
