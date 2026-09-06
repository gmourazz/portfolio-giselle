import type { ContactDraft } from "@domain/entities/ContactDraft";
import type { ProjectType } from "@domain/entities/ProjectType";
import type { MessagingGateway } from "@domain/repositories/MessagingGateway";
import { BuildContactMessage } from "@application/use-cases/BuildContactMessage";

export class SendContactRequest {
  constructor(
    private readonly messaging: MessagingGateway,
    private readonly buildMessage: BuildContactMessage = new BuildContactMessage(),
  ) {}

  execute(draft: ContactDraft, projectTypes: ProjectType[], phoneNumber: string): void {
    const message = this.buildMessage.execute(draft, projectTypes);
    this.messaging.openConversation(phoneNumber, message);
  }
}
