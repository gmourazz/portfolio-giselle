import type { ProjectType } from "@domain/entities/ProjectType";
import type { ProjectTypeRepository } from "@domain/repositories/ProjectTypeRepository";

export class GetProjectTypes {
  constructor(private readonly repository: ProjectTypeRepository) {}

  execute(): ProjectType[] {
    return this.repository.getAll();
  }
}
