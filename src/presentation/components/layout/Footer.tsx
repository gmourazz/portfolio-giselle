import {
  GalleryHorizontalEnd,
  Instagram,
  LayoutGrid,
  Mail,
  MessageCircle,
  Send,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { theme } from "@presentation/styles/theme";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_SECTIONS, whatsappLink } from "@shared/constants";

const NAV_ICONS: Record<string, LucideIcon> = {
  sobre: UserRound,
  servicos: LayoutGrid,
  projetos: GalleryHorizontalEnd,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: `1px solid ${theme.color.line}`, background: theme.color.bgAlt }}>
      <div
        className="footer-grid"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(44px,6vw,64px) clamp(20px,5vw,64px) 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "clamp(28px,5vw,56px)",
        }}
      >
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Giselle Anjos" style={{ height: 46, width: "auto", marginBottom: 16 }} />
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: theme.color.text, maxWidth: "34ch" }}>
            Engenheira agrônoma e designer de interiores. Projetos residenciais, comerciais, móveis planejados e
            paisagismo para todo o Brasil.
          </p>
        </div>

        <div>
          <p style={{ margin: "0 0 16px", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: theme.color.muted }}>Navegação</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV_SECTIONS.map((section) => {
              const Icon = NAV_ICONS[section.id];
              return (
                <a key={section.id} href={`#${section.id}`} className="footer-link" style={{ fontSize: 14.5, color: theme.color.ink }}>
                  <Icon size={16} color={theme.color.primary} strokeWidth={1.8} /> {section.label}
                </a>
              );
            })}
            <a href="#contato" className="footer-link" style={{ fontSize: 14.5, color: theme.color.ink }}>
              <Send size={16} color={theme.color.primary} strokeWidth={1.8} /> Orçamento
            </a>
          </div>
        </div>

        <div>
          <p style={{ margin: "0 0 16px", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: theme.color.muted }}>Contato</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                alignSelf: "flex-start",
                padding: "11px 20px",
                background: theme.color.primary,
                color: theme.color.onPrimary,
                borderRadius: 100,
                fontSize: 13.5,
              }}
            >
              <MessageCircle size={16} /> Falar no WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="footer-link" style={{ fontSize: 14.5, color: theme.color.ink }}>
              <Instagram size={16} color={theme.color.primary} /> {INSTAGRAM_HANDLE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer-link" style={{ fontSize: 14.5, color: theme.color.ink }}>
              <Mail size={16} color={theme.color.primary} /> {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: `1px solid ${theme.color.line}`,
          padding: "18px clamp(20px,5vw,64px)",
          fontSize: 12.5,
          color: theme.color.textSoft,
          textAlign: "center",
        }}
      >
        © {year} Giselle Anjos · Todos os direitos reservados
      </div>
    </footer>
  );
}
