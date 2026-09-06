import { useMemo, useState } from "react";
import type { ContactDraft } from "@domain/entities/ContactDraft";
import type { ProjectType } from "@domain/entities/ProjectType";
import { emptyContactDraft } from "@domain/entities/ContactDraft";
import { container } from "@infrastructure/container";

export function useContactForm(projectTypes: ProjectType[], phoneNumber: string) {
  const [draft, setDraft] = useState<ContactDraft>(() => emptyContactDraft(projectTypes[0].id));

  const previewMessage = useMemo(
    () => container.buildContactMessage.execute(draft, projectTypes),
    [draft, projectTypes],
  );

  const selectType = (projectTypeId: string) =>
    setDraft((current) => ({ ...current, projectTypeId }));
  const setName = (name: string) => setDraft((current) => ({ ...current, name }));
  const setPhone = (phone: string) => setDraft((current) => ({ ...current, phone }));
  const setMessage = (message: string) => setDraft((current) => ({ ...current, message }));

  const submit = () => container.sendContactRequest.execute(draft, projectTypes, phoneNumber);

  return { draft, previewMessage, selectType, setName, setPhone, setMessage, submit };
}
