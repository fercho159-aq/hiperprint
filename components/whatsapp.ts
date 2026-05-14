// Central WhatsApp helpers for Hiperprint.
// Phone (E.164 without +) — scraped from the official Hiperprint site.
export const WHATSAPP_PHONE = "5215611581587";

const DEFAULT_TEXT = "Hola Hiperprint, me interesa cotizar.";

export function buildWhatsAppUrl(text: string = DEFAULT_TEXT): string {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}
