"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { Icon } from "@/components/icons";
import { ProductMockup } from "@/components/ProductMockup";
import { SiteEffects } from "@/components/SiteEffects";
import { HP_PRODUCTS, HP_CATS, type HpProduct } from "@/lib/products";

const ITEMS = HP_PRODUCTS;
const FILTERS = HP_CATS.map((c) => ({ ...c, count: c.id === "todos" ? ITEMS.length : ITEMS.filter((i) => i.cat === c.id).length }));
const CAT_LABEL = (id: string) => (HP_CATS.find((c) => c.id === id) || ({} as { label?: string })).label || id;

function Lightbox({ item, onClose, onPrev, onNext }: { item: HpProduct | null; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ink/88 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10">
      <button onClick={onClose} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-paper text-ink inline-flex items-center justify-center hover:bg-red hover:text-paper transition" aria-label="Cerrar"><Icon.x className="w-5 h-5" /></button>
      <button onClick={onPrev} className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-paper/90 text-ink inline-flex items-center justify-center hover:bg-paper transition" aria-label="Anterior"><Icon.arrowLeft className="w-5 h-5" /></button>
      <button onClick={onNext} className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-paper/90 text-ink inline-flex items-center justify-center hover:bg-paper transition" aria-label="Siguiente"><Icon.arrow className="w-5 h-5" /></button>
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 bg-paper rounded-2xl overflow-hidden"><ProductMockup src={item.img} label={item.name} aspect="4/3" fit="cover" /></div>
        <div className="lg:col-span-2 text-paper">
          <span className="font-mono text-[11px] tracking-[.18em] uppercase font-bold text-gold">{item.id} · {CAT_LABEL(item.cat)}</span>
          <h3 className="mt-3 font-sans" style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>{item.name}</h3>
          <p className="mt-4 text-paper/75 text-[15.5px]" style={{ lineHeight: 1.55 }}>{item.desc}</p>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-[14px]">
            <div><div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/45 mb-1">SKU</div><div className="font-mono text-paper/90">{item.id}</div></div>
            <div><div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/45 mb-1">Material</div><div className="font-sans text-paper" style={{ fontWeight: 700 }}>Cartulina kraft · sulfatada</div></div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.feats.map((f) => (<span key={f} className="inline-flex items-center px-3 py-1 rounded-full bg-paper/10 border border-paper/20 text-[12px] text-paper/85">{f}</span>))}
          </div>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="btn btn-primary">Cotizar esta pieza <Icon.arrow className="w-4 h-4" /></Link>
            <a href="https://wa.me/525550875427" className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink"><Icon.wa className="w-4 h-4" /> WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CatalogGrid() {
  const [filter, setFilter] = useState("todos");
  const [lb, setLb] = useState<HpProduct | null>(null);

  const filtered = useMemo(() => filter === "todos" ? ITEMS : ITEMS.filter((i) => i.cat === filter), [filter]);
  const lbIndex = lb ? filtered.findIndex((i) => i.id === lb.id) : -1;
  const onPrev = () => setLb(filtered[(lbIndex - 1 + filtered.length) % filtered.length]);
  const onNext = () => setLb(filtered[(lbIndex + 1) % filtered.length]);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-16 lg:py-24">
        {/* filter bar */}
        <div className="flex flex-wrap gap-2 mb-10 reveal">
          {FILTERS.map((f) => {
            const active = f.id === filter;
            return (
              <button key={f.id} onClick={() => setFilter(f.id)} className={`inline-flex items-center gap-2 px-5 py-3 rounded-full transition font-bold text-[14px] ${active ? "bg-red text-paper" : "bg-paper text-ink/80 border-2 border-ink/12 hover:border-ink/40"}`}>
                {f.label}
                <span className={`font-mono text-[10.5px] tracking-wider ${active ? "text-paper/70" : "text-ink/40"}`}>{f.count}</span>
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {filtered.map((it, i) => (
            <button
              key={it.id}
              onClick={() => setLb(it)}
              className="reveal lift overflow-hidden rounded-2xl group text-left bg-paper"
              style={{ transitionDelay: `${(i % 8) * 40}ms` }}
            >
              <div className="relative">
                <ProductMockup src={it.img} label={it.name} aspect="1/1" fit="cover" />
                <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[.14em] uppercase font-bold text-ink bg-gold px-2 py-1 rounded-full">{it.id}</span>
              </div>
              <div className="p-4 flex items-center justify-between gap-2">
                <div>
                  <div className="font-sans text-ink text-[15.5px] leading-tight" style={{ fontWeight: 800, letterSpacing: "-0.015em" }}>{it.name}</div>
                  <div className="font-mono text-[10.5px] tracking-[.14em] uppercase text-ink/45 mt-1">{CAT_LABEL(it.cat)}</div>
                </div>
                <span className="shrink-0 w-8 h-8 rounded-full bg-ink text-paper inline-flex items-center justify-center group-hover:bg-red transition"><Icon.plus className="w-4 h-4" /></span>
              </div>
            </button>
          ))}
        </div>

        {/* download row */}
        <div className="mt-16 lg:mt-24 bg-ink text-paper rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal relative overflow-hidden">
          <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
          <div className="lg:col-span-7 relative">
            <div className="font-mono text-[11px] tracking-[.18em] uppercase font-bold text-gold mb-3">// CATÁLOGO COMPLETO · PDF</div>
            <h3 className="font-sans" style={{ fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em", lineHeight: 1.02 }}>
              Descarga el catálogo con medidas, materiales y especificaciones.
            </h3>
            <p className="mt-4 text-paper/65 text-[15.5px]">Box for fast food · última actualización: 2026</p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end relative">
            <a href="/catalogo/catalogo-hiperprint-2025.pdf" target="_blank" rel="noreferrer" className="btn btn-primary"><Icon.arrowDown className="w-4 h-4" /> Descargar PDF</a>
            <Link href="/contacto" className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink">Pide muestras</Link>
          </div>
        </div>
      </div>

      <Lightbox item={lb} onClose={() => setLb(null)} onPrev={onPrev} onNext={onNext} />
    </section>
  );
}

function CatalogIndex() {
  const cats = FILTERS.slice(1);
  return (
    <section className="bg-paper border-b border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {cats.map((c, i) => (
            <div key={c.id} className="reveal flex items-baseline gap-3 group" style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="stat-num text-ink/12 group-hover:text-red transition-colors" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)" }}>0{i + 1}</span>
              <div>
                <div className="font-sans text-ink text-[20px]" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>{c.label}</div>
                <div className="font-mono text-[11px] tracking-wider uppercase text-ink/50">{c.count} piezas</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div id="top" data-screen-label="Catálogo">
      <SiteEffects />
      <Header current="catalogo" />
      <main>
        <PageHero
          kicker="CATÁLOGO · BOX FOR FAST FOOD"
          title="Todo lo que"
          italic="empacamos."
          breadcrumb="Catálogo"
          bg="blue"
          lead="Cajas, contenedores, charolas y conos en cartulina kraft y sulfatada. Filtra, abre cualquier pieza y pídela directo."
        />
        <CatalogIndex />
        <CatalogGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
