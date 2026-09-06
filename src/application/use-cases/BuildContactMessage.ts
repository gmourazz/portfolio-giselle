import type { ContactDraft } from "@domain/entities/ContactDraft";
import type { ProjectType } from "@domain/entities/ProjectType";

export class BuildContactMessage {
  execute(draft: ContactDraft, projectTypes: ProjectType[]): string {
    const type = projectTypes.find((t) => t.id === draft.projectTypeId) ?? projectTypes[0];
    const name = draft.name.trim();
    const greeting = name ? `Oi, Giselle! Aqui é ${name}.` : "Oi, Giselle!";

    let text = `${greeting} Vim pelo seu site e tenho interesse em ${type.phrase}.`;
    if (draft.message.trim()) text += `\n${draft.message.trim()}`;
    return text;
  }
}
