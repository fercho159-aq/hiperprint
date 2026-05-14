"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowIcon, ArrowLeftIcon, CheckIcon, WaIcon } from "../icons";
import { buildWhatsAppUrl } from "../whatsapp";

interface ContactForm {
  nombre: string;
  empresa: string;
  whatsapp: string;
  email: string;
  necesidad: keyof typeof PRODUCT_LABELS;
  volumen: string;
  fecha: string;
  mensaje: string;
  arte: "si" | "no" | "mas";
}

const PRODUCT_LABELS = {
  papel: "Papel grado alimenticio",
  cajas: "Cajas para comida",
  bolsas: "Bolsas de papel",
  temporada: "Línea de temporada",
  otro: "Otro / no estoy seguro",
} as const;

const ARTE_OPTIONS: { v: ContactForm["arte"]; l: string }[] = [
  { v: "si", l: "Sí, lo mando luego" },
  { v: "no", l: "No, ayúdenme" },
  { v: "mas", l: "Tengo logo, falta arte" },
];

export function BigForm() {
  const [form, setForm] = useState<ContactForm>({
    nombre: "",
    empresa: "",
    whatsapp: "",
    email: "",
    necesidad: "papel",
    volumen: "1-5000",
    fecha: "",
    mensaje: "",
    arte: "no",
  });
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const set =
    <K extends keyof ContactForm>(k: K) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value as ContactForm[K] }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.whatsapp) return;

    const arteLabel =
      form.arte === "si"
        ? "Lo mando luego"
        : form.arte === "no"
          ? "Necesito ayuda con el diseño"
          : "Tengo logo, falta arte";

    const lines: string[] = [
      "Hola Hiperprint 👋",
      "Me gustaría cotizar.",
      "",
      `Nombre: ${form.nombre}`,
    ];
    if (form.empresa) lines.push(`Empresa: ${form.empresa}`);
    lines.push(`WhatsApp: ${form.whatsapp}`);
    if (form.email) lines.push(`Email: ${form.email}`);
    lines.push(`Producto de interés: ${PRODUCT_LABELS[form.necesidad]}`);
    if (form.volumen) lines.push(`Volumen estimado: ${form.volumen}`);
    if (form.fecha) lines.push(`Fecha deseada: ${form.fecha}`);
    lines.push(`Arte/diseño: ${arteLabel}`);
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
  };

  return (
    <section id="cotizar" className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4 reveal">
            <div className="label-mono mb-3">{"// COTIZACIÓN EXPRESS"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
            >
              Llena el formulario.
              <br />
              <em className="font-medium text-leaf">Te respondemos hoy.</em>
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Cotización formal en menos de 24 h",
                "Asesoría de diseño sin compromiso",
                "Muestras físicas en CDMX sin costo",
                "Sin mínimo amarrado a contrato",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink/80 text-[15.5px]">
                  <span className="shrink-0 w-5 h-5 rounded-full border border-ink/20 inline-flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3 h-3 text-leaf" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-ink/15">
              <div className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/50 mb-4">
                ¿PREFIERES ESCRIBIR DIRECTO?
              </div>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-ink hover:text-leaf transition block font-bold"
                style={{
                  fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                +52 56 1158 1587
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-leaf font-medium"
              >
                <WaIcon className="w-4 h-4" /> Abrir WhatsApp <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-8 reveal bg-ink rounded-xl p-8 lg:p-12 text-paper relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-leaf/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-tortilla/15 blur-3xl pointer-events-none" />

            {!sent && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/55">
                    PASO
                  </span>
                  <div className="flex items-center gap-2">
                    {[1, 2].map((s) => (
                      <span
                        key={s}
                        className={`w-8 h-8 rounded-full inline-flex items-center justify-center font-mono text-[12px] ${
                          step === s
                            ? "bg-leaf text-paper"
                            : step > s
                              ? "bg-paper/15 text-paper/80"
                              : "border border-paper/20 text-paper/40"
                        }`}
                      >
                        {step > s ? <CheckIcon className="w-4 h-4" /> : s}
                      </span>
                    ))}
                  </div>
                  <span className="h-px flex-1 bg-paper/15" />
                  <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/55">
                    {step === 1 ? "TU PEDIDO" : "TUS DATOS"}
                  </span>
                </div>

                {step === 1 && (
                  <div className="space-y-7 relative">
                    <h3
                      className="font-serif font-bold"
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.05,
                      }}
                    >
                      ¿Qué necesitas imprimir?
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {(Object.entries(PRODUCT_LABELS) as [keyof typeof PRODUCT_LABELS, string][]).map(
                        ([k, v]) => (
                          <button
                            key={k}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, necesidad: k }))}
                            className={`text-left p-4 rounded-lg border transition ${
                              form.necesidad === k
                                ? "border-leaf bg-leaf/10"
                                : "border-paper/15 hover:border-paper/40"
                            }`}
                          >
                            <div
                              className="font-serif text-paper text-[15.5px] font-semibold"
                              style={{ letterSpacing: "-0.015em", lineHeight: 1.15 }}
                            >
                              {v}
                            </div>
                            <div className="mt-1 font-mono text-[10px] tracking-wider uppercase text-paper/50">
                              {k}
                            </div>
                          </button>
                        ),
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">
                          Volumen aproximado
                        </label>
                        <select
                          value={form.volumen}
                          onChange={set("volumen")}
                          className="field !bg-paper/95 !text-ink"
                        >
                          <option value="500-1000">500 a 1,000 piezas</option>
                          <option value="1-5000">1,000 a 5,000 piezas</option>
                          <option value="5-20000">5,000 a 20,000 piezas</option>
                          <option value="20-50000">20,000 a 50,000 piezas</option>
                          <option value="50000+">Más de 50,000 piezas</option>
                          <option value="recurrente">Recurrente / mensual</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">
                          ¿Para cuándo lo necesitas?
                        </label>
                        <input
                          type="text"
                          value={form.fecha}
                          onChange={set("fecha")}
                          className="field !bg-paper/95 !text-ink"
                          placeholder="Ej. en 3 semanas, fecha exacta o flexible"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">
                        ¿Ya tienes arte / diseño?
                      </label>
                      <div className="inline-flex rounded-md border border-paper/15 overflow-hidden">
                        {ARTE_OPTIONS.map((o) => (
                          <button
                            key={o.v}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, arte: o.v }))}
                            className={`px-4 py-2.5 text-[14px] font-medium transition ${
                              form.arte === o.v ? "bg-leaf text-paper" : "text-paper/70 hover:bg-paper/5"
                            }`}
                          >
                            {o.l}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">
                        Cuéntanos más (opcional)
                      </label>
                      <textarea
                        rows={3}
                        value={form.mensaje}
                        onChange={set("mensaje")}
                        className="field !bg-paper/95 !text-ink resize-none"
                        placeholder="Medidas, tintas, si quieres troquel especial, etc."
                      />
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-paper/15">
                      <span className="font-mono text-[11px] tracking-wider uppercase text-paper/50">
                        Paso 1 de 2
                      </span>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn btn-primary"
                      >
                        Continuar <ArrowIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 relative">
                    <h3
                      className="font-serif font-bold"
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.05,
                      }}
                    >
                      ¿Cómo te contactamos?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">
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
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">
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
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">
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
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">
                          Email
                        </label>
                        <input
                          value={form.email}
                          onChange={set("email")}
                          type="email"
                          className="field !bg-paper/95 !text-ink"
                          placeholder="tu@correo.com"
                        />
                      </div>
                    </div>

                    <div className="bg-paper/5 rounded-lg p-5 border border-paper/10">
                      <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/55 mb-2">
                        RESUMEN
                      </div>
                      <ul className="space-y-1 text-[14px] text-paper/85">
                        <li>
                          <span className="text-paper/55">Producto:</span>{" "}
                          <strong>{PRODUCT_LABELS[form.necesidad]}</strong>
                        </li>
                        <li>
                          <span className="text-paper/55">Volumen:</span>{" "}
                          <strong>{form.volumen}</strong>
                        </li>
                        <li>
                          <span className="text-paper/55">Cuándo:</span>{" "}
                          <strong>{form.fecha || "—"}</strong>
                        </li>
                        <li>
                          <span className="text-paper/55">Arte:</span>{" "}
                          <strong>
                            {form.arte === "si"
                              ? "Lo mando luego"
                              : form.arte === "no"
                                ? "Necesita armarlo"
                                : "Tengo logo, falta arte"}
                          </strong>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-paper/15">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-paper/70 hover:text-paper inline-flex items-center gap-2 text-[14px] font-medium"
                      >
                        <ArrowLeftIcon className="w-4 h-4" /> Volver
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        Enviar cotización <ArrowIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-paper/50 text-[12px] font-mono">
                      Al enviar aceptas nuestro{" "}
                      <a href="#" className="underline">
                        aviso de privacidad
                      </a>
                      .
                    </p>
                  </div>
                )}
              </>
            )}

            {sent && (
              <div className="text-center py-10 relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-leaf text-paper inline-flex items-center justify-center mb-6">
                  <CheckIcon className="w-8 h-8" />
                </div>
                <h3
                  className="font-serif font-bold"
                  style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", letterSpacing: "-0.02em" }}
                >
                  Abriendo WhatsApp…
                </h3>
                <p
                  className="mt-4 text-paper/75 max-w-md mx-auto text-[16px]"
                  style={{ lineHeight: 1.55 }}
                >
                  Tu mensaje ya viene pre-cargado. Si no se abre la app automáticamente,
                  toca el botón de WhatsApp en cualquier parte del sitio.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/catalogo" className="btn btn-primary">
                    Ver catálogo <ArrowIcon className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setStep(1);
                    }}
                    className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink"
                  >
                    Enviar otra
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
