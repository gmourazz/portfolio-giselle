import type { Project } from "@domain/entities/Project";

export interface ProjectRepository {
  getAll(): Project[];
}
