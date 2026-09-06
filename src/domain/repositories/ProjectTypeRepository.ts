import type { ProjectType } from "@domain/entities/ProjectType";

export interface ProjectTypeRepository {
  getAll(): ProjectType[];
}
