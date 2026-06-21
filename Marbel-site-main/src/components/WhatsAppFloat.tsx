import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-xl transition-transform hover:scale-110"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "var(--whatsapp)" }} />
    </a>
  );
}
