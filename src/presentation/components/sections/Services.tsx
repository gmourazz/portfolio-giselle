import { Building2, Hammer, LayoutGrid, Sprout, Sofa } from "lucide-react";
import { Reveal } from "@presentation/components/common/Reveal";
import { EyebrowLabel } from "@presentation/components/common/EyebrowLabel";
import { theme } from "@presentation/styles/theme";

const SERVICES = [
  {
    number: "01",
    icon: Sofa,
    title: "Design de interiores",
    text: "Layout, acabamentos, iluminação e ambientação de casas e apartamentos, com pranchas e 3D para aprovar antes da obra.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Ambientes comerciais",
    text: "Clínicas, escritórios e salas de espera que comunicam a marca e funcionam para quem trabalha ali todos os dias.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Móveis planejados",
    text: "Marcenaria sob medida com detalhamento pronto para orçar: cotas, vistas e especificação de materiais.",
  },
  {
    number: "04",
    icon: Sprout,
    title: "Paisagismo",
    text: "Jardins, varandas e áreas externas com seleção de espécies feita por engenheira agrônoma — bonito e possível de manter.",
  },
];

export function Services() {
  return (
    <section id="servicos" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(52px,8vw,96px) clamp(20px,5vw,64px)" }}>
      <EyebrowLabel icon={LayoutGrid}>Serviços</EyebrowLabel>
      <h2
        style={{
          margin: "0 0 46px",
          fontFamily: theme.font.serif,
          fontWeight: 300,
          fontSize: "clamp(26px,3.6vw,44px)",
          lineHeight: 1.15,
          color: theme.color.ink,
          textWrap: "pretty",
        }}
      >
        O que eu posso desenhar para você
      </h2>
      <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))", gap: 1, background: theme.color.line, border: `1px solid ${theme.color.line}` }}>
        {SERVICES.map((service, index) => (
          <Reveal key={service.number} delayMs={index * 80}>
            <div className="service-card" style={{ background: theme.color.bg, padding: "34px 28px", display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: theme.font.serif, fontSize: 15, letterSpacing: "0.18em", color: theme.color.sage }}>{service.number}</span>
                <service.icon className="service-icon" size={26} color={theme.color.primary} />
              </div>
              <h3 style={{ margin: 0, fontFamily: theme.font.serif, fontWeight: 400, fontSize: 25, color: theme.color.ink }}>{service.title}</h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: theme.color.text }}>{service.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
