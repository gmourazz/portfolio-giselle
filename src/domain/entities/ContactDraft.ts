export interface ContactDraft {
  readonly projectTypeId: string;
  readonly name: string;
  readonly phone: string;
  readonly message: string;
}

export const emptyContactDraft = (projectTypeId: string): ContactDraft => ({
  projectTypeId,
  name: "",
  phone: "",
  message: "",
});
