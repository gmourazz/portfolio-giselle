import type { Project } from "@domain/entities/Project";
import type { ProjectRepository } from "@domain/repositories/ProjectRepository";

const PROJECTS: Project[] = [
  { id: "quarto-casal", image: "/images/projetos/projeto-quarto5.jpeg", caption: "Quarto casal · Residencial" },
  { id: "suite-closet", image: "/images/projetos/suite5.png", caption: "Suíte com closet · Planejados" },
  { id: "atelie-costura", image: "/images/projeto-atelie-costura.png", caption: "Ateliê de costura · Otimização de espaço" },
  { id: "adega", image: "/images/projetos/adega.png", caption: "Adega · Marcenaria sob medida" },
  { id: "cozinha-compacta", image: "/images/projetos/cozinha1.png", caption: "Cozinha compacta · Residencial" },
  { id: "estante-bancada", image: "/images/projetos/escrivaninha.png", caption: "Estante e bancada · Marcenaria" },
];

export class StaticProjectRepository implements ProjectRepository {
  getAll(): Project[] {
    return PROJECTS;
  }
}
