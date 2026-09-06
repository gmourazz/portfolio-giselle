import {
  ArrowRight,
  Building2,
  Hammer,
  HelpCircle,
  Instagram,
  LayoutGrid,
  Mail,
  MessageCircle,
  MessageSquareText,
  Phone,
  Send,
  Sofa,
  Sprout,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@presentation/components/common/Reveal";
import { EyebrowLabel } from "@presentation/components/common/EyebrowLabel";
import { useContactForm } from "@presentation/hooks/useContactForm";
import { theme } from "@presentation/styles/theme";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_NUMBER, whatsappLink } from "@shared/constants";
import type { ProjectType } from "@domain/entities/ProjectType";

interface ContactProps {
  projectTypes: ProjectType[];
}

const TYPE_ICONS: Record<string, LucideIcon> = {
  residencial: Sofa,
  comercial: Building2,
  moveis: Hammer,
  paisagismo: Sprout,
  indefinido: HelpCircle,
};

function StepLabel({ number, icon: Icon, children }: { number: string; icon: LucideIcon; children: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 10.5, letterSpacing: "0.28em", textTransform: "uppercase", color: theme.color.muted }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: theme.color.primary,
          color: theme.color.onPrimary,
          fontSize: 10,
          letterSpacing: 0,
        }}
      >
        {number}
      </span>
      <Icon size={13} strokeWidth={1.8} />
      {children}
    </span>
  );
}

export function Contact({ projectTypes }: ContactProps) {
  const { draft, previewMessage, selectType, setName, setPhone, setMessage, submit } = useContactForm(
    projectTypes,
    WHATSAPP_NUMBER,
  );

  return (
    <section id="contato" style={{ background: theme.color.primary, position: "relative" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(52px,8vw,96px) clamp(20px,5vw,64px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(32px,5vw,64px)",
          alignItems: "start",
        }}
      >
        <Reveal>
          <div style={{ color: theme.color.onPrimarySoft }}>
            <EyebrowLabel icon={Send} tone="dark">Orçamento</EyebrowLabel>
            <h2 style={{ margin: "0 0 22px", fontFamily: theme.font.serif, fontWeight: 300, fontSize: "clamp(30px,4.4vw,48px)", lineHeight: 1.12, textWrap: "pretty" }}>
              Me conte sobre
              <br />o seu espaço
            </h2>
            <p style={{ margin: "0 0 30px", fontSize: 16.5, lineHeight: 1.7, color: theme.color.onPrimaryMuted, maxWidth: "42ch", textWrap: "pretty" }}>
              Você preenche, eu recebo tudo pronto no WhatsApp. Veja abaixo a mensagem que vai chegar para mim:
            </p>

            <div style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: "20px 20px 20px 6px", padding: "20px 22px", maxWidth: 430 }}>
              <p style={{ margin: "0 0 10px", fontSize: 10.5, letterSpacing: "0.28em", textTransform: "uppercase", color: theme.color.onPrimaryLabel }}>Prévia da mensagem</p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: theme.color.onPrimary, whiteSpace: "pre-line" }}>{previewMessage}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 34, fontSize: 16 }}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="contact-link"
                style={{ display: "flex", alignItems: "center", gap: 10, color: theme.color.onPrimary, borderBottom: "1px solid rgba(255,255,255,0.22)", padding: "12px 0" }}
              >
                <MessageCircle size={17} /> WhatsApp +55 62 9953-1824
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="contact-link"
                style={{ display: "flex", alignItems: "center", gap: 10, color: theme.color.onPrimary, borderBottom: "1px solid rgba(255,255,255,0.22)", padding: "12px 0" }}
              >
                <Mail size={17} /> {CONTACT_EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                className="contact-link"
                style={{ display: "flex", alignItems: "center", gap: 10, color: theme.color.onPrimary, borderBottom: "1px solid rgba(255,255,255,0.22)", padding: "12px 0" }}
              >
                <Instagram size={17} /> {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <div style={{ background: theme.color.bg, padding: "clamp(24px,3.4vw,38px)", borderRadius: 26, boxShadow: "0 30px 70px -40px rgba(0,0,0,0.5)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <StepLabel number="1" icon={LayoutGrid}>Tipo de projeto</StepLabel>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                  {projectTypes.map((type) => {
                    const active = draft.projectTypeId === type.id;
                    const TypeIcon = TYPE_ICONS[type.id] ?? HelpCircle;
                    return (
                      <button
                        key={type.id}
                        onClick={() => selectType(type.id)}
                        className={`pill-btn${active ? " is-active" : ""}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          width: "auto",
                          flex: "0 0 auto",
                          whiteSpace: "nowrap",
                          padding: "11px 18px",
                          borderRadius: 100,
                          fontSize: 14.5,
                          lineHeight: 1.3,
                          cursor: "pointer",
                          border: `1px solid ${active ? theme.color.primary : theme.color.line}`,
                          background: active ? theme.color.primary : theme.color.inputBg,
                          color: active ? theme.color.onPrimary : theme.color.text,
                        }}
                      >
                        <TypeIcon size={15} strokeWidth={1.8} style={{ flexShrink: 0 }} />
                        <span style={{ whiteSpace: "nowrap" }}>{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <StepLabel number="2" icon={UserRound}>Seus dados</StepLabel>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 10 }}>
                  <div style={{ position: "relative" }}>
                    <UserRound size={17} color={theme.color.muted} style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                    <input
                      value={draft.name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Seu nome"
                      className="input-field"
                      style={{ width: "100%", padding: "15px 20px 15px 48px", border: `1px solid ${theme.color.line}`, background: theme.color.inputBg, borderRadius: 100, fontSize: 16, color: theme.color.ink }}
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    <Phone size={16} color={theme.color.muted} style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                    <input
                      value={draft.phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      placeholder="Seu WhatsApp"
                      className="input-field"
                      style={{ width: "100%", padding: "15px 20px 15px 48px", border: `1px solid ${theme.color.line}`, background: theme.color.inputBg, borderRadius: 100, fontSize: 16, color: theme.color.ink }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <StepLabel number="3" icon={MessageSquareText}>Sobre o espaço</StepLabel>
                <div style={{ position: "relative" }}>
                  <MessageSquareText size={16} color={theme.color.muted} style={{ position: "absolute", left: 20, top: 18, pointerEvents: "none" }} />
                  <textarea
                    value={draft.message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Ex.: quarto e closet de 14m², quero começar em março"
                    className="input-field"
                    style={{ width: "100%", padding: "16px 20px 16px 48px", border: `1px solid ${theme.color.line}`, background: theme.color.inputBg, borderRadius: 22, fontSize: 16, lineHeight: 1.55, color: theme.color.ink, resize: "vertical" }}
                  />
                </div>
              </div>

              <button
                onClick={submit}
                className="btn-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  padding: "19px 24px",
                  background: theme.color.primary,
                  color: theme.color.onPrimary,
                  border: "none",
                  borderRadius: 100,
                  fontSize: 14,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Abrir conversa no WhatsApp <ArrowRight size={18} />
              </button>
              <p style={{ margin: "-8px 0 0", fontSize: 13, lineHeight: 1.6, color: theme.color.textSoft, textAlign: "center" }}>
                Abre o WhatsApp da Giselle com a mensagem já escrita.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
