import { WHATSAPP_PHONE, buildWhatsAppUrl } from "./whatsapp";

const DEFAULT_TEXT = "Hola Hiperprint, me interesa cotizar.";

export function WhatsAppFab() {
  return (
    <a
      href={buildWhatsAppUrl(DEFAULT_TEXT)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp Hiperprint (+${WHATSAPP_PHONE})`}
      className="fixed bottom-5 right-5 z-[2147483600] inline-flex h-14 w-14 items-center justify-center rounded-full shadow-[0_10px_28px_-6px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7"
        fill="#FFFFFF"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.95 2.722.95.36 0 .658-.064.872-.224a3.122 3.122 0 0 0 1.117-1.49v-.072c0-.6-.717-.918-1.06-1.075-.715-.33-1.604-.916-1.918-.916z" />
        <path d="M16.063 0C7.215 0 .047 7.168.047 16.016c0 2.84.747 5.62 2.164 8.06L0 32l8.137-2.13c2.348 1.275 4.99 1.962 7.682 1.962h.007C24.673 31.832 32 24.665 32 15.816c0-4.286-1.802-8.317-4.846-11.36C24.11 1.41 20.34 0 16.063 0zm9.262 25.252c-2.467 2.467-5.748 3.825-9.252 3.827h-.007c-2.396 0-4.745-.644-6.797-1.86l-.487-.288-5.06 1.325 1.35-4.93-.318-.504a13.105 13.105 0 0 1-2.01-7.005C2.755 8.484 8.732 2.526 16.077 2.526a13.4 13.4 0 0 1 9.528 3.948 13.39 13.39 0 0 1 3.945 9.528c-.003 7.343-5.962 13.302-13.225 13.25z" />
      </svg>
    </a>
  );
}
