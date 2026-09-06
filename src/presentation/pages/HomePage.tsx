import { useMemo } from "react";
import { Header } from "@presentation/components/layout/Header";
import { Footer } from "@presentation/components/layout/Footer";
import { Hero } from "@presentation/components/sections/Hero";
import { Marquee } from "@presentation/components/sections/Marquee";
import { About } from "@presentation/components/sections/About";
import { Services } from "@presentation/components/sections/Services";
import { ProjectsCarousel } from "@presentation/components/sections/ProjectsCarousel";
import { Process } from "@presentation/components/sections/Process";
import { Contact } from "@presentation/components/sections/Contact";
import { WhatsAppFab } from "@presentation/components/common/WhatsAppFab";
import { useScrollProgress } from "@presentation/hooks/useScrollProgress";
import { useActiveSection } from "@presentation/hooks/useActiveSection";
import { container } from "@infrastructure/container";
import { NAV_SECTIONS } from "@shared/constants";

const SECTION_IDS = NAV_SECTIONS.map((section) => section.id);

export function HomePage() {
  const { progress, compact } = useScrollProgress();
  const activeSection = useActiveSection(SECTION_IDS);

  const projects = useMemo(() => container.getShowcaseProjects.execute(), []);
  const projectTypes = useMemo(() => container.getProjectTypes.execute(), []);

  return (
    <div style={{ background: "#FDF7EC", color: "#2B2B26", fontFamily: "'Jost',system-ui,sans-serif", fontWeight: 300 }}>
      <Header progress={progress} compact={compact} activeSection={activeSection} />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <ProjectsCarousel projects={projects} />
      <Process />
      <Contact projectTypes={projectTypes} />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
