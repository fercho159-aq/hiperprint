"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowIcon } from "../icons";
import { buildWhatsAppUrl } from "../whatsapp";

interface ContactForm {
  nombre: string;
  empresa: string;
  whatsapp: string;
  necesidad: string;
  mensaje: string;
}

const PRODUCT_LABELS: Record<string, string> = {
  papel: "Papel grado alimenticio",
  cajas: "Cajas para comida",
  bolsas: "Bolsas de papel",
  temporada: "Línea de temporada",
  otro: "Otro",
};

export function HomeContactForm() {
  const [form, setForm] = useState<ContactForm>({
    nombre: "",
    empresa: "",
    whatsapp: "",
    necesidad: "papel",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof ContactForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.whatsapp) return;

    const lines: string[] = [
      "Hola Hiperprint 👋",
      "Me gustaría cotizar.",
      "",
      `Nombre: ${form.nombre}`,
    ];
    if (form.empresa) lines.push(`Empresa: ${form.empresa}`);
    lines.push(`WhatsApp: ${form.whatsapp}`);
    lines.push(
      `Producto de interés: ${PRODUCT_LABELS[form.necesidad] ?? form.necesidad}`,
    );
    if (form.mensaje) {
      lines.push("");
      lines.push("Mensaje:");
      lines.push(form.mensaje);
    }

    const url = buildWhatsAppUrl(lines.join("\n"));
    setSent(true);
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="lg:col-span-7 reveal bg-navyDeep rounded-xl p-8 lg:p-12 text-paper relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terracotta/20 blur-3xl pointer-events-none" />
      <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/80 mb-6">
        {"// COTIZACIÓN EXPRESS"}
      </div>
      <h3
        className="font-serif font-bold"
        style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
      >
        Cuéntanos qué necesitas.
      </h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <div>
          <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/80 mb-2">
            Nombre
          </label>
          <input
            value={form.nombre}
            onChange={set("nombre")}
            required
            className="field !bg-paper/95 !text-ink"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/80 mb-2">
            Empresa
          </label>
          <input
            value={form.empresa}
            onChange={set("empresa")}
            className="field !bg-paper/95 !text-ink"
            placeholder="Tu negocio"
          />
        </div>
        <div>
          <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/80 mb-2">
            WhatsApp
          </label>
          <input
            value={form.whatsapp}
            onChange={set("whatsapp")}
            required
            type="tel"
            className="field !bg-paper/95 !text-ink"
            placeholder="55 0000 0000"
          />
        </div>
        <div>
          <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/80 mb-2">
            ¿Qué necesitas?
          </label>
          <select
            value={form.necesidad}
            onChange={set("necesidad")}
            className="field !bg-paper/95 !text-ink"
          >
            <option value="papel">Papel grado alimenticio</option>
            <option value="cajas">Cajas para comida</option>
            <option value="bolsas">Bolsas de papel</option>
            <option value="temporada">Línea de temporada</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/80 mb-2">
            Cuéntanos más <span className="opacity-60">(opcional)</span>
          </label>
          <textarea
            value={form.mensaje}
            onChange={set("mensaje")}
            rows={3}
            className="field !bg-paper/95 !text-ink resize-none"
            placeholder="Cantidad aproximada, fecha de entrega, si tienes arte listo…"
          />
        </div>
      </div>
      <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" className="btn btn-tortilla">
          {sent ? "Abriendo WhatsApp…" : "Enviar por WhatsApp"} <ArrowIcon className="w-4 h-4" />
        </button>
        <p className="text-paper/55 text-[13px] font-mono">
          Te llevamos a WhatsApp con el mensaje listo.
        </p>
      </div>
      <div
        aria-live="polite"
        className={`mt-5 text-terracotta text-[14px] font-mono transition-opacity ${sent ? "opacity-100" : "opacity-0"}`}
      >
        ✓ Abriendo WhatsApp con tu cotización…
      </div>
    </form>
  );
}
