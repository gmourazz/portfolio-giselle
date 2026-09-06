export interface MessagingGateway {
  openConversation(phoneNumber: string, message: string): void;
}
