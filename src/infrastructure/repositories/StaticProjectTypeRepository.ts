import type { ProjectType } from "@domain/entities/ProjectType";
import type { ProjectTypeRepository } from "@domain/repositories/ProjectTypeRepository";

const PROJECT_TYPES: ProjectType[] = [
  { id: "residencial", label: "Residencial", phrase: "um projeto residencial" },
  { id: "comercial", label: "Comercial", phrase: "um projeto comercial" },
  { id: "moveis", label: "Móveis planejados", phrase: "um projeto de móveis planejados" },
  { id: "paisagismo", label: "Paisagismo", phrase: "um projeto de paisagismo" },
  { id: "indefinido", label: "Ainda não sei", phrase: "um projeto (ainda definindo o tipo)" },
];

export class StaticProjectTypeRepository implements ProjectTypeRepository {
  getAll(): ProjectType[] {
    return PROJECT_TYPES;
  }
}
