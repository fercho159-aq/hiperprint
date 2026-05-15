"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowIcon, ArrowDownIcon, ArrowLeftIcon, WaIcon, XIcon } from "../icons";
import { buildWhatsAppUrl } from "../whatsapp";
import { CATEGORY_LABEL, PRODUCTS, type Product, type ProductCategory } from "@/lib/products";

interface CatalogFilter {
  id: ProductCategory | "todos";
  label: string;
  count: number;
}

const FILTERS: CatalogFilter[] = [
  { id: "todos", label: "Todos", count: PRODUCTS.length },
  { id: "papel", label: "Papel", count: PRODUCTS.filter((p) => p.cat === "papel").length },
  { id: "cajas", label: "Cajas", count: PRODUCTS.filter((p) => p.cat === "cajas").length },
  { id: "bolsas", label: "Bolsas", count: PRODUCTS.filter((p) => p.cat === "bolsas").length },
  { id: "temporada", label: "Línea temporada", count: PRODUCTS.filter((p) => p.cat === "temporada").length },
];

interface LightboxProps {
  item: Product | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-paper text-ink inline-flex items-center justify-center hover:bg-tortilla hover:text-paper transition"
        aria-label="Cerrar"
      >
        <XIcon className="w-5 h-5" />
      </button>
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-paper/90 text-ink inline-flex items-center justify-center hover:bg-paper transition"
        aria-label="Anterior"
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-paper/90 text-ink inline-flex items-center justify-center hover:bg-paper transition"
        aria-label="Siguiente"
      >
        <ArrowIcon className="w-5 h-5" />
      </button>
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 relative bg-cream rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <Image
            src={item.image.src}
            alt={`${item.name} — ${item.image.alt}`}
            fill
            sizes="(max-width: 1024px) 90vw, 60vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-2 text-paper">
          <span className="label-mono text-paper/55">
            {`// CATÁLOGO · ${item.cat.toUpperCase()}`}
          </span>
          <h3
            className="mt-3 font-serif font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {item.name}
          </h3>
          <p className="mt-3 text-paper/70 text-[14.5px]" style={{ lineHeight: 1.55 }}>
            {item.blurb}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-x-6 text-[14px]">
            <div>
              <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/45 mb-1">
                SKU
              </div>
              <div className="font-mono text-paper/90">{item.sku}</div>
            </div>
            <div>
              <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/45 mb-1">
                Categoría
              </div>
              <div className="font-serif text-paper font-semibold">
                {CATEGORY_LABEL[item.cat]}
              </div>
            </div>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/producto/${item.sku}`}
              className="btn btn-primary"
            >
              Configurar y cotizar <ArrowIcon className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppUrl(
                `Hola Hiperprint, me interesa cotizar el SKU ${item.sku} — ${item.name}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink"
            >
              <WaIcon className="w-4 h-4" /> WhatsApp directo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

type ViewMode = "masonry" | "grid";

export function CatalogGrid() {
  const [filter, setFilter] = useState<ProductCategory | "todos">("todos");
  const [view, setView] = useState<ViewMode>("masonry");
  const [lb, setLb] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (filter === "todos" ? PRODUCTS : PRODUCTS.filter((i) => i.cat === filter)),
    [filter],
  );

  const lbIndex = lb ? filtered.findIndex((i) => i.id === lb.id) : -1;
  const onPrev = () => setLb(filtered[(lbIndex - 1 + filtered.length) % filtered.length]);
  const onNext = () => setLb(filtered[(lbIndex + 1) % filtered.length]);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10 reveal">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition ${
                    active
                      ? "bg-ink text-paper"
                      : "bg-paper text-ink/80 border border-ink/15 hover:border-ink/40"
                  }`}
                >
                  <span className="font-medium text-[14px]">{f.label}</span>
                  <span
                    className={`font-mono text-[10.5px] tracking-wider ${active ? "text-paper/55" : "text-ink/40"}`}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[.16em] uppercase text-ink/50">
              Vista
            </span>
            <div className="inline-flex rounded-md border border-ink/15 overflow-hidden bg-paper">
              <button
                onClick={() => setView("masonry")}
                className={`px-3 py-2 font-mono text-[11px] tracking-wider uppercase ${
                  view === "masonry" ? "bg-ink text-paper" : "text-ink/70 hover:bg-cream"
                }`}
              >
                Masonry
              </button>
              <button
                onClick={() => setView("grid")}
                className={`px-3 py-2 font-mono text-[11px] tracking-wider uppercase ${
                  view === "grid" ? "bg-ink text-paper" : "text-ink/70 hover:bg-cream"
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 ${
            view === "masonry"
              ? "auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[210px]"
              : "auto-rows-[210px]"
          }`}
        >
          {filtered.map((it, i) => (
            <button
              key={it.id}
              onClick={() => setLb(it)}
              className={`reveal lift overflow-hidden rounded-lg group text-left ${
                view === "masonry" && it.rows === 2 ? "row-span-2" : ""
              }`}
              style={{ transitionDelay: `${(i % 8) * 40}ms` }}
            >
              <div className="relative h-full bg-cream">
                <div className="lift-img relative h-full w-full">
                  <Image
                    src={it.image.src}
                    alt={`${it.name} — ${it.image.alt}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="font-mono text-[10px] tracking-[.18em] uppercase text-paper/65">
                    {it.sku}
                  </div>
                  <div className="font-serif text-[15px] leading-tight mt-0.5 font-semibold">
                    {it.name}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-ink/60">
            No hay piezas en esta categoría aún.
          </div>
        )}

        <div className="mt-16 lg:mt-24 bg-paper rounded-xl p-8 lg:p-12 border border-ink/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal">
          <div className="lg:col-span-7">
            <div className="label-mono mb-3">{"// CATÁLOGO COMPLETO · PDF"}</div>
            <h3
              className="font-serif text-ink font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Descarga el catálogo completo con medidas, gramajes y precios.
            </h3>
            <p className="mt-4 text-ink/65 text-[15.5px]">
              PDF oficial Hiperprint · ~4.5 MB
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a
              href="/catalogo/catalogo-hiperprint-2021.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ArrowDownIcon className="w-4 h-4" /> Descargar PDF
            </a>
            <a
              href={buildWhatsAppUrl("Hola, me gustaría ver el catálogo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <WaIcon className="w-4 h-4" /> Ver por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Lightbox item={lb} onClose={() => setLb(null)} onPrev={onPrev} onNext={onNext} />
    </section>
  );
}
