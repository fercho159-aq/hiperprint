"use client";

import { useState } from "react";
import { ArrowIcon, MinusIcon, PlusIcon, WaIcon } from "../icons";
import { buildWhatsAppUrl } from "../whatsapp";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "¿Cuál es el tiraje mínimo?",
    a: "500 piezas en bolsas y cajas, 1,000 en papel y portavasos. Líneas de temporada manejamos cupos especiales desde 500.",
  },
  {
    q: "¿Diseñan el arte sin costo?",
    a: "Sí — en tu primera orden de 5,000 piezas o más nuestro equipo arma el arte sin costo. Después manejamos tarifa preferencial.",
  },
  {
    q: "¿Hacen muestras físicas?",
    a: "Mandamos muestras de papel y referencias de troquel sin costo a CDMX. Foráneos solo pagan paquetería.",
  },
  {
    q: "¿Cuánto tarda mi primer pedido?",
    a: "Entre 8 y 18 días hábiles según el producto. Reordenes salen 30% más rápido porque ya tenemos el troquel y arte aprobados.",
  },
  {
    q: "¿Manejan facturación?",
    a: "Sí, facturamos electrónico con todos los requisitos del SAT. Recibimos transferencia, depósito y tarjeta.",
  },
  {
    q: "¿Entregan fuera de CDMX?",
    a: "A toda la república con paqueterías confiables (Estafeta, DHL, Paquetexpress). Cotización incluye costo de envío.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal">
            <div className="label-mono mb-4">{"// PREGUNTAS"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{
                letterSpacing: "-0.03em",
                lineHeight: 0.98,
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              }}
            >
              Lo que más nos preguntan.
            </h2>
            <p className="mt-6 text-ink/65 text-[15.5px]" style={{ lineHeight: 1.55 }}>
              ¿No encuentras tu duda? Mándanos WhatsApp, te respondemos directo.
            </p>
            <a
              href={buildWhatsAppUrl("Hola Hiperprint, tengo una duda.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-medium text-leaf hover:gap-3 transition-all"
            >
              <WaIcon className="w-4 h-4" /> Pregúntanos por WhatsApp <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-8">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-ink/15 reveal">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                >
                  <span
                    className="font-serif text-ink text-[20px] lg:text-[22px] font-semibold"
                    style={{ letterSpacing: "-0.015em", lineHeight: 1.25 }}
                  >
                    {f.q}
                  </span>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-ink/20 inline-flex items-center justify-center text-ink/60 group-hover:bg-leaf group-hover:text-paper group-hover:border-leaf transition">
                    {open === i ? (
                      <MinusIcon className="w-4 h-4" />
                    ) : (
                      <PlusIcon className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    open === i ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-ink/75 text-[16px] max-w-2xl" style={{ lineHeight: 1.6 }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
