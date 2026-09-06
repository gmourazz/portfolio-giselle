import { ChevronLeft, ChevronRight, GalleryHorizontalEnd, Instagram } from "lucide-react";
import { Reveal } from "@presentation/components/common/Reveal";
import { EyebrowLabel } from "@presentation/components/common/EyebrowLabel";
import { useCarousel } from "@presentation/hooks/useCarousel";
import { theme } from "@presentation/styles/theme";
import { INSTAGRAM_URL } from "@shared/constants";
import type { Project } from "@domain/entities/Project";

const GAP = 20;

interface ProjectsCarouselProps {
  projects: Project[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const { viewportRef, page, pages, cardWidthCss, shiftCss, next, prev, goTo, onTouchStart, onTouchEnd } = useCarousel(
    projects.length,
    GAP,
  );

  return (
    <section id="projetos" style={{ background: theme.color.bgSection }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(52px,8vw,96px) clamp(20px,5vw,64px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
          <Reveal>
            <div>
              <EyebrowLabel icon={GalleryHorizontalEnd}>Projetos</EyebrowLabel>
              <h2 style={{ margin: 0, fontFamily: theme.font.serif, fontWeight: 300, fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.15, color: theme.color.ink, maxWidth: "22ch", textWrap: "pretty" }}>
                Uma seleção recente
              </h2>
            </div>
          </Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", borderBottom: `1px solid ${theme.color.sageBorder}`, paddingBottom: 4 }}
            >
              <Instagram size={14} /> Ver tudo no Instagram
            </a>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={prev}
                aria-label="Anterior"
                className="icon-btn"
                style={{ width: 46, height: 46, borderRadius: "50%", border: `1px solid ${theme.color.sageBorder}`, background: "transparent", color: theme.color.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Próximo"
                className="icon-btn"
                style={{ width: 46, height: 46, borderRadius: "50%", border: `1px solid ${theme.color.sageBorder}`, background: "transparent", color: theme.color.primary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div ref={viewportRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ overflow: "hidden", margin: "0 -4px", padding: "0 4px" }}>
          <div style={{ display: "flex", gap: GAP, transform: `translateX(${shiftCss})`, transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)", willChange: "transform" }}>
            {projects.map((project) => (
              <figure key={project.id} className="project-figure" style={{ flex: `0 0 ${cardWidthCss}`, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ aspectRatio: "4 / 3", borderRadius: 12, overflow: "hidden", background: "#EFE9DA", border: `1px solid ${theme.color.line}` }}>
                  <img src={project.image} alt={project.caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <figcaption style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: theme.color.text }}>{project.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 34 }}>
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Página ${i + 1}`}
              style={{
                height: 8,
                padding: 0,
                border: "none",
                cursor: "pointer",
                borderRadius: 100,
                transition: "all 0.35s ease",
                width: i === page ? 30 : 8,
                background: i === page ? theme.color.primary : theme.color.sageBorder,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
