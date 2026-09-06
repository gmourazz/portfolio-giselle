import { MessageCircle } from "lucide-react";
import { theme } from "@presentation/styles/theme";
import { whatsappLink } from "@shared/constants";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Conversar no WhatsApp"
      className="whatsapp-fab"
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 70,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: theme.color.primary,
        color: theme.color.onPrimary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 16px 32px -14px rgba(26,96,90,0.6)",
      }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
