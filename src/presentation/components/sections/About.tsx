import { Boxes, Layers, MapPinned, Sparkles, UserRound } from "lucide-react";
import { Reveal } from "@presentation/components/common/Reveal";
import { EyebrowLabel } from "@presentation/components/common/EyebrowLabel";
import { theme } from "@presentation/styles/theme";

const STATS = [
  { icon: Boxes, value: "3D", label: "Você vê antes de executar" },
  { icon: Layers, value: "4", label: "Frentes: interiores, comercial, móveis e jardim" },
  { icon: MapPinned, value: "BR", label: "Projetos online para todo o país" },
  { icon: UserRound, value: "1:1", label: "Atendimento direto comigo" },
];

export function About() {
  return (
    <section id="sobre" style={{ background: theme.color.primary, color: theme.color.onPrimarySoft, overflow: "hidden" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(52px,8vw,96px) clamp(20px,5vw,64px)" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "clamp(36px,6vw,80px)",
            alignItems: "center",
          }}
        >
          <Reveal>
            <div className="portrait-frame on-dark" style={{ position: "relative", maxWidth: 340 }}>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: 24,
                  overflow: "hidden",
                  aspectRatio: "4 / 5",
                  boxShadow: "0 30px 60px -30px rgba(0,0,0,0.5)",
                }}
              >
                <img src="/images/sobre-giselle.jpeg" alt="Giselle Anjos" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  zIndex: 2,
                  left: -14,
                  bottom: -18,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: theme.color.bg,
                  color: theme.color.accent,
                  borderRadius: 100,
                  padding: "10px 18px",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  boxShadow: "0 18px 34px -20px rgba(0,0,0,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                <Sparkles size={13} /> Engenheira Agrônoma
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div>
              <EyebrowLabel icon={UserRound} tone="dark">Sobre mim</EyebrowLabel>
              <h2 style={{ margin: "0 0 22px", fontFamily: theme.font.serif, fontWeight: 300, fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.15, textWrap: "pretty" }}>
                Dois olhares no mesmo projeto: o técnico e o afetivo.
              </h2>
              <p style={{ margin: "0 0 16px", fontSize: 16.5, lineHeight: 1.7, color: theme.color.onPrimaryMuted, maxWidth: "54ch", textWrap: "pretty" }}>
                Sou a Giselle: engenheira agrônoma de formação e designer de interiores por paixão. Antes de desenhar
                plantas de decoração, aprendi a ler a terra entender luz, clima e como cada espaço é realmente
                vivido. Foi esse olhar técnico que trouxe pro design de interiores, unindo o rigor de quem calcula ao
                cuidado de quem imagina.
              </p>
              <p style={{ margin: "0 0 16px", fontSize: 16.5, lineHeight: 1.7, color: theme.color.onPrimaryMuted, maxWidth: "54ch", textWrap: "pretty" }}>
                Cada projeto começa por como você vive o espaço a rotina da casa, quem passa por ali, o que incomoda
                e o que traz conforto e termina em marcenaria, iluminação e paisagismo pensados sob medida, com
                3D pra você aprovar antes de qualquer martelada.
              </p>
              <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: theme.color.onPrimaryMuted, maxWidth: "54ch", textWrap: "pretty" }}>
                Atendo clientes de todo o Brasil, sempre de perto mesmo à distância: te guio com calma em cada
                medida, acompanho cada escolha do seu lado e entrego tudo pronto em arquivo do primeiro esboço
                ao detalhamento pra obra.
              </p>
            </div>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "clamp(18px,2.4vw,28px)",
            marginTop: "clamp(48px,7vw,76px)",
            paddingTop: "clamp(36px,5vw,52px)",
            borderTop: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delayMs={index * 90}>
              <div
                className="stat-chip"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  padding: "18px 16px",
                  borderRadius: 18,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <stat.icon size={19} color={theme.color.onPrimary} strokeWidth={1.8} />
                </div>
                <div>
                  <p style={{ margin: "0 0 4px", fontFamily: theme.font.serif, fontSize: 32, lineHeight: 1, color: theme.color.onPrimary }}>{stat.value}</p>
                  <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5, color: theme.color.onPrimaryLabel }}>{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
