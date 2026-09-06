import type { Project } from "@domain/entities/Project";
import type { ProjectRepository } from "@domain/repositories/ProjectRepository";

export class GetShowcaseProjects {
  constructor(private readonly repository: ProjectRepository) {}

  execute(): Project[] {
    return this.repository.getAll();
  }
}
