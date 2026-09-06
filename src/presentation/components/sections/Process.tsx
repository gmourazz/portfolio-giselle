import { ClipboardList, MessageCircleHeart, Route, Ruler, ScanEye } from "lucide-react";
import { Reveal } from "@presentation/components/common/Reveal";
import { EyebrowLabel } from "@presentation/components/common/EyebrowLabel";
import { theme } from "@presentation/styles/theme";

const STEPS = [
  { word: "um", icon: MessageCircleHeart, title: "Conversa inicial", text: "Entendo o espaço, a rotina da casa e o investimento disponível. Sem compromisso." },
  { word: "dois", icon: Ruler, title: "Medição e estudo", text: "Levantamento do ambiente, planta de layout e primeiras propostas de solução." },
  { word: "três", icon: ScanEye, title: "3D para aprovar", text: "Você vê o ambiente pronto em imagens realistas e ajustamos até ficar do seu jeito." },
  { word: "quatro", icon: ClipboardList, title: "Projeto executivo", text: "Detalhamento para marceneiro e obra, com lista de materiais e acompanhamento." },
];

export function Process() {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(52px,8vw,96px) clamp(20px,5vw,64px)" }}>
      <EyebrowLabel icon={Route}>Como funciona</EyebrowLabel>
      <h2
        style={{
          margin: "0 0 46px",
          fontFamily: theme.font.serif,
          fontWeight: 300,
          fontSize: "clamp(24px,3.6vw,44px)",
          lineHeight: 1.15,
          color: theme.color.ink,
          textWrap: "pretty",
        }}
      >
        Do primeiro contato ao projeto na sua mão
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "clamp(24px,4vw,44px)" }}>
        {STEPS.map((step, index) => (
          <Reveal key={step.word} delayMs={index * 90}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, borderTop: `1px solid ${theme.color.lineSoft}`, paddingTop: 20 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <span style={{ fontFamily: theme.font.script, fontSize: 34, color: theme.color.sage, lineHeight: 1 }}>{step.word}</span>
                <step.icon size={22} color={theme.color.primary} />
              </div>
              <h3 style={{ margin: 0, fontFamily: theme.font.serif, fontWeight: 400, fontSize: 22 }}>{step.title}</h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: theme.color.text }}>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
