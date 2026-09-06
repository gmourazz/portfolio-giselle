import type { MessagingGateway } from "@domain/repositories/MessagingGateway";

export class WhatsAppMessagingGateway implements MessagingGateway {
  openConversation(phoneNumber: string, message: string): void {
    const digits = phoneNumber.replace(/\D/g, "");
    const url = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  }
}
