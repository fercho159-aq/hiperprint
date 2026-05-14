/* Hiperprint — Catálogo */

const { useState, useEffect, useMemo } = React;

const ITEMS = [
  { id: 1,  name: "Papel hamburguesa cuadros",     cat: "papel",     tone: "tortilla", rows: 1, sku: "P-040-CUA-01" },
  { id: 2,  name: "Caja pizza grande kraft",       cat: "cajas",     tone: "kraft",    rows: 2, sku: "C-PIZ-G-K-04" },
  { id: 3,  name: "Bolsa kraft asa cordón M",      cat: "bolsas",    tone: "deep",     rows: 1, sku: "B-K-AC-M-12" },
  { id: 4,  name: "Papel crepa impreso bicolor",   cat: "papel",     tone: "sage",     rows: 2, sku: "P-028-IMP-07" },
  { id: 5,  name: "Portavasos kraft hex",          cat: "papel",     tone: "kraft",    rows: 1, sku: "P-PV-HEX-02" },
  { id: 6,  name: "Caja hot dog rojo",             cat: "cajas",     tone: "tortilla", rows: 1, sku: "C-HD-R-03" },
  { id: 7,  name: "Bolsa pan kraft chica",         cat: "bolsas",    tone: "cream",    rows: 2, sku: "B-K-CHI-PAN-01" },
  { id: 8,  name: "Papel tacos cuadrille verde",   cat: "papel",     tone: "sage",     rows: 1, sku: "P-040-CUA-V-09" },
  { id: 9,  name: "Edición Día de Muertos 2025",   cat: "temporada", tone: "ink",      rows: 2, sku: "T-DM-2025-A" },
  { id: 10, name: "Línea helados pastel",          cat: "temporada", tone: "sage",     rows: 1, sku: "T-HEL-P-2026" },
  { id: 11, name: "Caja burger M kraft",           cat: "cajas",     tone: "kraft",    rows: 1, sku: "C-BU-M-K-01" },
  { id: 12, name: "Bolsa blanca premium L",        cat: "bolsas",    tone: "cream",    rows: 2, sku: "B-BL-PR-L-08" },
  { id: 13, name: "Papel periódico monocromo",     cat: "papel",     tone: "kraft",    rows: 1, sku: "P-040-PER-MO-11" },
  { id: 14, name: "Edición Navidad 2025",          cat: "temporada", tone: "tortilla", rows: 1, sku: "T-NV-2025-B" },
  { id: 15, name: "Caja postre ventana",           cat: "cajas",     tone: "cream",    rows: 1, sku: "C-PS-VEN-05" },
  { id: 16, name: "Bolsa entrega delivery",        cat: "bolsas",    tone: "deep",     rows: 2, sku: "B-K-DEL-XL-14" },
  { id: 17, name: "Papel hamburguesa periódico",   cat: "papel",     tone: "deep",     rows: 1, sku: "P-040-PER-22" },
  { id: 18, name: "Línea patrias 16 septiembre",   cat: "temporada", tone: "sage",     rows: 1, sku: "T-PA-2026-A" },
  { id: 19, name: "Caja pizza chica blanca",       cat: "cajas",     tone: "paper",    rows: 1, sku: "C-PIZ-C-BL-02" },
  { id: 20, name: "Bolsa baguette larga",          cat: "bolsas",    tone: "kraft",    rows: 1, sku: "B-K-BAG-L-06" },
];

const FILTERS = [
  { id: "todos",     label: "Todos",            count: 20 },
  { id: "papel",     label: "Papel",            count: 6 },
  { id: "cajas",     label: "Cajas",            count: 5 },
  { id: "bolsas",    label: "Bolsas",           count: 5 },
  { id: "temporada", label: "Línea temporada",  count: 4 },
];

function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
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
    <div className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10">
      <button onClick={onClose} className="absolute top-6 right-6 w-11 h-11 rounded-full bg-paper text-ink inline-flex items-center justify-center hover:bg-tortilla hover:text-paper transition" aria-label="Cerrar"><Icon.x className="w-5 h-5" /></button>
      <button onClick={onPrev} className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-paper/90 text-ink inline-flex items-center justify-center hover:bg-paper transition" aria-label="Anterior"><Icon.arrowLeft className="w-5 h-5" /></button>
      <button onClick={onNext} className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-paper/90 text-ink inline-flex items-center justify-center hover:bg-paper transition" aria-label="Siguiente"><Icon.arrow className="w-5 h-5" /></button>
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3"><ProductMockup label={item.name + ".jpg"} tone={item.tone} aspect="4/3" /></div>
        <div className="lg:col-span-2 text-paper">
          <span className="label-mono" style={{ color: "rgba(245,239,224,.55)" }}>// CATÁLOGO · {item.cat.toUpperCase()}</span>
          <h3 className="mt-3 font-serif" style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>{item.name}</h3>
          <div className="mt-5 grid grid-cols-2 gap-x-6 text-[14px]">
            <div><div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/45 mb-1">SKU</div><div className="font-mono text-paper/90">{item.sku}</div></div>
            <div><div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/45 mb-1">Categoría</div><div className="font-serif text-paper" style={{ fontWeight: 600 }}>{FILTERS.find(f => f.id === item.cat)?.label}</div></div>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="contacto.html" className="btn btn-primary">Cotizar este ítem <Icon.arrow className="w-4 h-4" /></a>
            <a href="https://wa.me/525550875427" className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink"><Icon.wa className="w-4 h-4" /> WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CatalogGrid() {
  const [filter, setFilter] = useState("todos");
  const [view, setView] = useState("masonry"); // masonry | grid
  const [lb, setLb] = useState(null);

  const filtered = useMemo(() => filter === "todos" ? ITEMS : ITEMS.filter(i => i.cat === filter), [filter]);
  const lbIndex = lb ? filtered.findIndex(i => i.id === lb.id) : -1;
  const onPrev = () => setLb(filtered[(lbIndex - 1 + filtered.length) % filtered.length]);
  const onNext = () => setLb(filtered[(lbIndex + 1) % filtered.length]);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-16 lg:py-24">
        {/* filter bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10 reveal">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = f.id === filter;
              return (
                <button key={f.id} onClick={() => setFilter(f.id)} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition ${active ? "bg-ink text-paper" : "bg-paper text-ink/80 border border-ink/15 hover:border-ink/40"}`}>
                  <span className="font-medium text-[14px]">{f.label}</span>
                  <span className={`font-mono text-[10.5px] tracking-wider ${active ? "text-paper/55" : "text-ink/40"}`}>{f.count}</span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[.16em] uppercase text-ink/50">Vista</span>
            <div className="inline-flex rounded-md border border-ink/15 overflow-hidden bg-paper">
              <button onClick={() => setView("masonry")} className={`px-3 py-2 font-mono text-[11px] tracking-wider uppercase ${view === "masonry" ? "bg-ink text-paper" : "text-ink/70 hover:bg-cream"}`}>Masonry</button>
              <button onClick={() => setView("grid")} className={`px-3 py-2 font-mono text-[11px] tracking-wider uppercase ${view === "grid" ? "bg-ink text-paper" : "text-ink/70 hover:bg-cream"}`}>Grid</button>
            </div>
          </div>
        </div>

        {/* grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 ${view === "masonry" ? "auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[210px]" : "auto-rows-[210px]"}`}>
          {filtered.map((it, i) => (
            <button
              key={it.id}
              onClick={() => setLb(it)}
              className={`reveal lift overflow-hidden rounded-lg group text-left ${view === "masonry" && it.rows === 2 ? "row-span-2" : ""}`}
              style={{ transitionDelay: `${(i % 8)*40}ms` }}
            >
              <div className="relative h-full">
                <div className="lift-img h-full"><ProductMockup label={it.name + ".jpg"} tone={it.tone} aspect="auto" className="!h-full" /></div>
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="font-mono text-[10px] tracking-[.18em] uppercase text-paper/65">{it.sku}</div>
                  <div className="font-serif text-[15px] leading-tight mt-0.5" style={{ fontWeight: 600 }}>{it.name}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-ink/60">No hay piezas en esta categoría aún.</div>
        )}

        {/* download row */}
        <div className="mt-16 lg:mt-24 bg-paper rounded-xl p-8 lg:p-12 border border-ink/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal">
          <div className="lg:col-span-7">
            <div className="label-mono mb-3">// CATÁLOGO COMPLETO · PDF</div>
            <h3 className="font-serif text-ink" style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Descarga el catálogo completo con medidas, gramajes y precios.
            </h3>
            <p className="mt-4 text-ink/65 text-[15.5px]">12 MB · Última actualización: marzo 2026</p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a href="#" className="btn btn-primary"><Icon.arrowDown className="w-4 h-4" /> Descargar PDF</a>
            <a href="contacto.html" className="btn btn-secondary">Pide muestras físicas</a>
          </div>
        </div>
      </div>

      <Lightbox item={lb} onClose={() => setLb(null)} onPrev={onPrev} onNext={onNext} />
    </section>
  );
}

function CatalogIndex() {
  // numeric editorial breakdown
  const cats = FILTERS.slice(1);
  return (
    <section className="bg-paper border-b border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {cats.map((c, i) => (
            <a key={c.id} href={`#${c.id}`} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.scrollY + 200, behavior: "smooth" }); }} className="reveal flex items-baseline gap-3 group" style={{ transitionDelay: `${i*70}ms` }}>
              <span className="stat-num text-ink/15 group-hover:text-leaf transition-colors" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>0{i+1}</span>
              <div>
                <div className="font-serif text-ink text-[20px]" style={{ fontWeight: 600, letterSpacing: "-0.015em" }}>{c.label}</div>
                <div className="font-mono text-[11px] tracking-wider uppercase text-ink/50">{c.count} piezas</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  useReveal();
  useEffect(() => { document.documentElement.style.setProperty('--grain-opacity', '0.32'); }, []);
  return (
    <div id="top" data-screen-label="Catálogo">
      <CursorDot />
      <Nav current="catalogo" />
      <main>
        <PageHero
          kicker="CATÁLOGO · MZO 2026"
          title="Todo lo que"
          italic="hemos impreso."
          breadcrumb="Catálogo"
          lead="100+ piezas activas entre papel, cajas, bolsas y temporada. Filtra, navega, abre cualquier pieza y pídela directo."
        />
        <CatalogIndex />
        <CatalogGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
