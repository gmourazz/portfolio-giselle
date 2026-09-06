export const WHATSAPP_NUMBER = "556299531824";
export const CONTACT_EMAIL = "agronomagiselle@hotmail.com";
export const INSTAGRAM_HANDLE = "@giselleanjosdesigners";
export const INSTAGRAM_URL = "https://instagram.com/giselleanjosdesigners";

export const DEFAULT_WHATSAPP_MESSAGE = "Oi, Giselle! Vim pelo seu site e quero saber mais sobre um projeto.";

export const whatsappLink = (message: string = DEFAULT_WHATSAPP_MESSAGE): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const NAV_SECTIONS = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
] as const;

