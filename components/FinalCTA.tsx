import Link from "next/link";
import { ArrowIcon, WaIcon } from "./icons";
import { buildWhatsAppUrl } from "./whatsapp";

export function FinalCTA() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/55 mb-4">
              {"// HABLEMOS"}
            </div>
            <h2
              className="font-serif font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.96, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              ¿Listo para imprimir
              <br />
              <em className="font-medium text-tortilla">algo bonito</em>?
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WaIcon className="w-4 h-4" /> Cotiza por WhatsApp <ArrowIcon className="w-4 h-4" />
            </a>
            <Link
              href="/contacto"
              className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink"
            >
              Ver formulario completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
