import { GetShowcaseProjects } from "@application/use-cases/GetShowcaseProjects";
import { GetProjectTypes } from "@application/use-cases/GetProjectTypes";
import { BuildContactMessage } from "@application/use-cases/BuildContactMessage";
import { SendContactRequest } from "@application/use-cases/SendContactRequest";
import { StaticProjectRepository } from "@infrastructure/repositories/StaticProjectRepository";
import { StaticProjectTypeRepository } from "@infrastructure/repositories/StaticProjectTypeRepository";
import { WhatsAppMessagingGateway } from "@infrastructure/whatsapp/WhatsAppMessagingGateway";

const projectRepository = new StaticProjectRepository();
const projectTypeRepository = new StaticProjectTypeRepository();
const messagingGateway = new WhatsAppMessagingGateway();
const buildContactMessage = new BuildContactMessage();

export const container = {
  getShowcaseProjects: new GetShowcaseProjects(projectRepository),
  getProjectTypes: new GetProjectTypes(projectTypeRepository),
  buildContactMessage,
  sendContactRequest: new SendContactRequest(messagingGateway, buildContactMessage),
};
