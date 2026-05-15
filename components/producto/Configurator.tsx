"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowIcon, CheckIcon, WaIcon } from "../icons";
import { buildWhatsAppUrl } from "../whatsapp";
import { CATEGORY_LABEL, type Product } from "@/lib/products";

interface Props {
  product: Product;
}

type Selection = Record<string, string>;

function defaultSelection(product: Product): Selection {
  return Object.fromEntries(product.config.map((f) => [f.id, f.options[0].id]));
}

function buildMessage(product: Product, sel: Selection): string {
  const lines = [
    `Hola Hiperprint, quiero cotizar:`,
    ``,
    `• Producto: ${product.name}`,
    `• SKU: ${product.sku}`,
    `• Categoría: ${CATEGORY_LABEL[product.cat]}`,
    ``,
    `Configuración:`,
  ];
  for (const field of product.config) {
    const opt = field.options.find((o) => o.id === sel[field.id]);
    if (!opt) continue;
    lines.push(`• ${field.label}: ${opt.label}`);
  }
  lines.push(``, `¿Me pasan precio y tiempos de entrega? Gracias.`);
  return lines.join("\n");
}

export function Configurator({ product }: Props) {
  const [sel, setSel] = useState<Selection>(() => defaultSelection(product));

  const message = useMemo(() => buildMessage(product, sel), [product, sel]);
  const waUrl = useMemo(() => buildWhatsAppUrl(message), [message]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      <div className="lg:col-span-6 reveal">
        <div className="relative overflow-hidden rounded-xl bg-cream aspect-square lg:aspect-[4/5]">
          <Image
            src={product.image.src}
            alt={`${product.name} — ${product.image.alt}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper/90 backdrop-blur">
            <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/55">
              SKU
            </span>
            <span className="font-mono text-[11.5px] text-ink font-semibold">
              {product.sku}
            </span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 reveal">
        <div className="label-mono mb-3">
          {`// LÍNEA · ${CATEGORY_LABEL[product.cat].toUpperCase()}`}
        </div>
        <h1
          className="font-serif text-ink font-bold"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.02,
          }}
        >
          {product.name}
        </h1>
        <p className="mt-4 text-ink/70 text-[16px]" style={{ lineHeight: 1.55 }}>
          {product.blurb}
        </p>

        <div className="mt-8 space-y-6">
          {product.config.map((field) => (
            <div key={field.id}>
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/45">
                  {field.label}
                </span>
                <span className="font-serif text-[14px] text-ink/80 font-semibold">
                  {field.options.find((o) => o.id === sel[field.id])?.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {field.options.map((opt) => {
                  const active = sel[field.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() =>
                        setSel((s) => ({ ...s, [field.id]: opt.id }))
                      }
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13.5px] transition ${
                        active
                          ? "bg-ink text-paper border border-ink"
                          : "bg-paper text-ink/80 border border-ink/15 hover:border-ink/40"
                      }`}
                    >
                      {active && <CheckIcon className="w-3.5 h-3.5" />}
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-ink/12 bg-cream p-5 lg:p-6">
          <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/45 mb-3">
            Resumen
          </div>
          <ul className="space-y-1.5 text-[14.5px] text-ink/80">
            {product.config.map((f) => (
              <li key={f.id} className="flex items-baseline justify-between gap-4">
                <span className="text-ink/60">{f.label}</span>
                <span className="font-serif font-semibold text-ink text-right">
                  {f.options.find((o) => o.id === sel[f.id])?.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1 justify-center"
          >
            <WaIcon className="w-4 h-4" /> Cotizar por WhatsApp{" "}
            <ArrowIcon className="w-4 h-4" />
          </a>
          <Link
            href="/catalogo"
            className="btn btn-secondary justify-center"
          >
            Volver al catálogo
          </Link>
        </div>

        <p className="mt-4 font-mono text-[11px] tracking-[.14em] uppercase text-ink/45">
          Respuesta en menos de 24 h hábiles · Sin compromiso
        </p>
      </div>
    </div>
  );
}
