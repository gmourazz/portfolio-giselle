import { ArrowRight, Boxes, GalleryHorizontalEnd, MapPin, Sofa } from "lucide-react";
import { Reveal } from "@presentation/components/common/Reveal";
import { theme } from "@presentation/styles/theme";

export function Hero() {
  return (
    <section
      id="topo"
      className="hero-grid"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(24px,5vw,56px) clamp(20px,5vw,64px) clamp(40px,8vw,88px)",
        display: "grid",
        gridTemplateColumns: "1fr 1.05fr",
        gap: "clamp(32px,6vw,72px)",
        alignItems: "center",
      }}
    >
      <Reveal>
        <div>
          <div style={{ margin: "0 0 22px", display: "flex", flexDirection: "column", gap: 8, fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: theme.color.muted }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Sofa size={12} strokeWidth={1.8} /> Design de interiores
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="blink-dot" />
              <MapPin size={12} strokeWidth={1.8} /> Atendimento em todo o Brasil
            </span>
          </div>
          <h1
            style={{
              margin: "0 0 24px",
              fontFamily: theme.font.serif,
              fontWeight: 300,
              fontSize: "clamp(38px,5.8vw,62px)",
              lineHeight: 1.06,
              letterSpacing: "-0.015em",
              color: theme.color.ink,
              textWrap: "pretty",
            }}
          >
            Ambientes pensados para a sua rotina
            <span style={{ fontFamily: theme.font.script, color: theme.color.muted }}> .</span>
          </h1>
          <p style={{ margin: "0 0 34px", maxWidth: "44ch", fontSize: 17, lineHeight: 1.7, color: theme.color.text, textWrap: "pretty" }}>
            Chega de projeto bonito que não parece a sua casa. Eu penso cada ambiente pra combinar com a sua
            rotina de verdade e mostro tudo em 3D antes de qualquer parede sair do lugar. Vem conhecer meu
            trabalho feito com carinho, do primeiro esboço à entrega.
          </p>
          <div className="hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <a
              href="#contato"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 30px",
                background: theme.color.primary,
                color: theme.color.onPrimary,
                borderRadius: 100,
                fontSize: 14,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Quero meu projeto <ArrowRight size={16} />
            </a>
            <a
              href="#projetos"
              className="btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 30px",
                border: `1px solid ${theme.color.sageBorder}`,
                color: theme.color.accent,
                borderRadius: 100,
                fontSize: 14,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Ver projetos <GalleryHorizontalEnd size={16} />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delayMs={150}>
        <div className="portrait-frame" style={{ position: "relative", minHeight: "clamp(400px,42vw,560px)" }}>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              borderRadius: 28,
              overflow: "hidden",
              background: "#EDE7D8",
              boxShadow: "0 40px 80px -40px rgba(43,43,38,0.5)",
            }}
          >
            <img src="/images/hero-main.png" alt="Ambiente projetado por Giselle Anjos" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          <div
            className="float-badge"
            style={{
              position: "absolute",
              zIndex: 2,
              left: -22,
              bottom: -26,
              width: "42%",
              aspectRatio: "1",
              borderRadius: "50%",
              overflow: "hidden",
              border: "8px solid #FDF7EC",
              background: "#E2E7DA",
              boxShadow: "0 24px 50px -28px rgba(43,43,38,0.5)",
            }}
          >
            <img src="/images/hero-round.png" alt="Giselle Anjos" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          <div
            style={{
              position: "absolute",
              zIndex: 2,
              right: 16,
              top: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(253,247,236,0.94)",
              backdropFilter: "blur(6px)",
              borderRadius: 100,
              padding: "11px 20px",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: theme.color.accent,
              boxShadow: "0 14px 30px -18px rgba(43,43,38,0.4)",
            }}
          >
            <Boxes size={14} /> Projetos em 3D
          </div>
        </div>
      </Reveal>
    </section>
  );
}
