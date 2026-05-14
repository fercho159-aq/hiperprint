"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowIcon, ArrowDownIcon, ArrowLeftIcon, WaIcon, XIcon } from "../icons";
import {
  BOLSA,
  BOLSA_BLAHO,
  CAJA,
  FLAUTAS,
  PAPEL_BLANCO,
  PAPEL_CUADROS,
  PAPEL_GENERICO,
  PAPEL_HERO,
  PAPEL_MUERTOS,
  PAPEL_NAVIDAD,
  PAPEL_NAVIDAD_2,
  PORTAVASO,
  PRODUCTO_NAVIDAD_REDES,
  type SiteImage,
} from "../site-images";

interface CatalogItem {
  id: number;
  name: string;
  cat: string;
  image: SiteImage;
  rows: number;
  sku: string;
}

interface CatalogFilter {
  id: string;
  label: string;
  count: number;
}

const ITEMS: CatalogItem[] = [
  { id: 1, name: "Papel hamburguesa cuadros", cat: "papel", image: PAPEL_CUADROS, rows: 1, sku: "P-040-CUA-01" },
  { id: 2, name: "Caja pizza grande kraft", cat: "cajas", image: CAJA, rows: 2, sku: "C-PIZ-G-K-04" },
  { id: 3, name: "Bolsa kraft asa cordón M", cat: "bolsas", image: BOLSA, rows: 1, sku: "B-K-AC-M-12" },
  { id: 4, name: "Papel crepa impreso bicolor", cat: "papel", image: PAPEL_GENERICO, rows: 2, sku: "P-028-IMP-07" },
  { id: 5, name: "Portavasos kraft hex", cat: "papel", image: PORTAVASO, rows: 1, sku: "P-PV-HEX-02" },
  { id: 6, name: "Caja hot dog rojo", cat: "cajas", image: FLAUTAS, rows: 1, sku: "C-HD-R-03" },
  { id: 7, name: "Bolsa pan kraft chica", cat: "bolsas", image: BOLSA_BLAHO, rows: 2, sku: "B-K-CHI-PAN-01" },
  { id: 8, name: "Papel tacos cuadrille verde", cat: "papel", image: PAPEL_BLANCO, rows: 1, sku: "P-040-CUA-V-09" },
  { id: 9, name: "Edición Día de Muertos 2025", cat: "temporada", image: PAPEL_MUERTOS, rows: 2, sku: "T-DM-2025-A" },
  { id: 10, name: "Línea helados pastel", cat: "temporada", image: PRODUCTO_NAVIDAD_REDES, rows: 1, sku: "T-HEL-P-2026" },
  { id: 11, name: "Caja burger M kraft", cat: "cajas", image: CAJA, rows: 1, sku: "C-BU-M-K-01" },
  { id: 12, name: "Bolsa blanca premium L", cat: "bolsas", image: BOLSA, rows: 2, sku: "B-BL-PR-L-08" },
  { id: 13, name: "Papel periódico monocromo", cat: "papel", image: PAPEL_HERO, rows: 1, sku: "P-040-PER-MO-11" },
  { id: 14, name: "Edición Navidad 2025", cat: "temporada", image: PAPEL_NAVIDAD, rows: 1, sku: "T-NV-2025-B" },
  { id: 15, name: "Caja postre ventana", cat: "cajas", image: FLAUTAS, rows: 1, sku: "C-PS-VEN-05" },
  { id: 16, name: "Bolsa entrega delivery", cat: "bolsas", image: BOLSA_BLAHO, rows: 2, sku: "B-K-DEL-XL-14" },
  { id: 17, name: "Papel hamburguesa periódico", cat: "papel", image: PAPEL_GENERICO, rows: 1, sku: "P-040-PER-22" },
  { id: 18, name: "Línea patrias 16 septiembre", cat: "temporada", image: PAPEL_NAVIDAD_2, rows: 1, sku: "T-PA-2026-A" },
  { id: 19, name: "Caja pizza chica blanca", cat: "cajas", image: CAJA, rows: 1, sku: "C-PIZ-C-BL-02" },
  { id: 20, name: "Bolsa baguette larga", cat: "bolsas", image: BOLSA, rows: 1, sku: "B-K-BAG-L-06" },
];

const FILTERS: CatalogFilter[] = [
  { id: "todos", label: "Todos", count: 20 },
  { id: "papel", label: "Papel", count: 6 },
  { id: "cajas", label: "Cajas", count: 5 },
  { id: "bolsas", label: "Bolsas", count: 5 },
  { id: "temporada", label: "Línea temporada", count: 4 },
];

interface LightboxProps {
  item: CatalogItem | null;
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
                {FILTERS.find((f) => f.id === item.cat)?.label}
              </div>
            </div>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="btn btn-primary">
              Cotizar este ítem <ArrowIcon className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/525550875427"
              className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink"
            >
              <WaIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

type ViewMode = "masonry" | "grid";

export function CatalogGrid() {
  const [filter, setFilter] = useState("todos");
  const [view, setView] = useState<ViewMode>("masonry");
  const [lb, setLb] = useState<CatalogItem | null>(null);

  const filtered = useMemo(
    () => (filter === "todos" ? ITEMS : ITEMS.filter((i) => i.cat === filter)),
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
              12 MB · Última actualización: marzo 2026
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a href="#" className="btn btn-primary">
              <ArrowDownIcon className="w-4 h-4" /> Descargar PDF
            </a>
            <Link href="/contacto" className="btn btn-secondary">
              Pide muestras físicas
            </Link>
          </div>
        </div>
      </div>

      <Lightbox item={lb} onClose={() => setLb(null)} onPrev={onPrev} onNext={onNext} />
    </section>
  );
}
