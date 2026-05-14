/* Hiperprint — Productos */

const { useState, useEffect } = React;

const LINES = [
  {
    id: "papel",
    n: "01",
    name: "Papel grado alimenticio",
    tagline: "El que sostiene la hamburguesa, el taco, la crepa.",
    desc: "Papel siliconado y antigrasa de 28 y 40 grs. Aprobado para contacto directo con alimentos. Liso, a cuadros clásicos o impreso a todo color con tu marca.",
    specs: [
      { k: "Gramaje", v: "28 grs · 40 grs" },
      { k: "Acabado", v: "Antigrasa · Siliconado" },
      { k: "Tamaños", v: "30×30 · 35×35 · 40×40 cm" },
      { k: "Tirajes", v: "Desde 1,000 piezas" },
      { k: "Tintas", v: "1 a 4 colores · base agua" },
      { k: "Tiempo", v: "8–12 días hábiles" },
    ],
    bullets: ["Resiste grasas y temperaturas hasta 220°C", "Apto para hornos y freidoras", "Diseños listos: cuadros, periódico, marca propia"],
    mocks: [
      { label: "papel-cuadros-rojo.jpg", tone: "tortilla", aspect: "4/5" },
      { label: "papel-burger-impreso.jpg", tone: "kraft", aspect: "1/1" },
      { label: "papel-periodico-detalle.jpg", tone: "cream", aspect: "1/1" },
    ],
    accent: "#C84B31",
  },
  {
    id: "cajas",
    n: "02",
    name: "Cajas para comida",
    tagline: "Una caja que abre bien, cierra mejor y se ve aún mejor.",
    desc: "Cajas troqueladas para hamburguesa, hot dog, pizza, crepa, pollo, postres y boxed-lunch. Armado intuitivo, ventana opcional y opción kraft natural o blanco brillante.",
    specs: [
      { k: "Materiales", v: "Cartoncillo 12pt · 14pt · 18pt" },
      { k: "Acabados", v: "Kraft natural · Blanco · Plastificado" },
      { k: "Troqueles", v: "Estándar + personalizado" },
      { k: "Tirajes", v: "Desde 500 piezas" },
      { k: "Ventana", v: "PLA biodegradable opcional" },
      { k: "Tiempo", v: "12–18 días hábiles" },
    ],
    bullets: ["Más de 20 troqueles base disponibles", "Diseñamos tu troquel a la medida sin costo", "Compatible con holders y portavasos"],
    mocks: [
      { label: "caja-burger-armada.jpg", tone: "kraft", aspect: "4/5" },
      { label: "caja-hotdog-rojo.jpg", tone: "tortilla", aspect: "1/1" },
      { label: "caja-pizza-mediana.jpg", tone: "deep", aspect: "1/1" },
    ],
    accent: "#A67F5D",
  },
  {
    id: "bolsas",
    n: "03",
    name: "Bolsas de papel",
    tagline: "De vitrina a calle, sin perder la marca en el camino.",
    desc: "Bolsa kraft natural o blanca, con o sin asa de cordón, fondo cuadrado o plano. Impresión a una o varias tintas con tu marca. Resistente, tronadora y bonita.",
    specs: [
      { k: "Papel", v: "Kraft 80 / 100 / 120 grs" },
      { k: "Colores", v: "Natural · Blanco · Negro" },
      { k: "Asas", v: "Cordón · Plana · Sin asa" },
      { k: "Tamaños", v: "Chica · Mediana · Grande · Especial" },
      { k: "Tintas", v: "1 a 4 colores" },
      { k: "Tiempo", v: "10–15 días hábiles" },
    ],
    bullets: ["100% papel, sin plastificados", "Aguanta hasta 5 kg sin problema", "Branding visible a 5 metros"],
    mocks: [
      { label: "bolsa-kraft-asa-cordon.jpg", tone: "deep", aspect: "4/5" },
      { label: "bolsa-blanca-logo.jpg", tone: "cream", aspect: "1/1" },
      { label: "bolsa-mediana-tienda.jpg", tone: "kraft", aspect: "1/1" },
    ],
    accent: "#3D5B3A",
  },
  {
    id: "temporada",
    n: "04",
    name: "Línea de temporada",
    tagline: "Empaques que también celebran.",
    desc: "Ediciones limitadas para Día de Muertos, Navidad, San Valentín, fechas patrias y Mundial. Diseños listos para usar o personalizados a tu marca, en tirajes cortos.",
    specs: [
      { k: "Fechas", v: "Muertos · Navidad · 14 Feb · 16 Sep" },
      { k: "Productos", v: "Papel · Cajas · Bolsas · Portavasos" },
      { k: "Tiraje mín.", v: "500 piezas (especial)" },
      { k: "Diseños", v: "Catálogo listo + personalización" },
      { k: "Personalización", v: "Tu marca sobre nuestro diseño" },
      { k: "Tiempo", v: "10 días en temporada" },
    ],
    bullets: ["Diseños originales año con año", "Reservación de cupos en alta temporada", "Combo papel + bolsa + caja con descuento"],
    mocks: [
      { label: "linea-muertos-2025.jpg", tone: "ink", aspect: "4/5" },
      { label: "linea-navidad-rojo.jpg", tone: "tortilla", aspect: "1/1" },
      { label: "linea-patrias-tricolor.jpg", tone: "sage", aspect: "1/1" },
    ],
    accent: "#1A1A1A",
  },
];

const PROCESS = [
  { n: "01", t: "Cotizamos",     b: "Mándanos medidas, tiraje y arte. Te respondemos con precio y tiempos en menos de 24 horas." },
  { n: "02", t: "Diseñamos",     b: "Si no tienes arte, lo armamos contigo. Te pasamos prueba digital antes de imprimir." },
  { n: "03", t: "Producimos",    b: "Imprimimos, troquelamos y armamos en planta propia. Control de calidad por lote." },
  { n: "04", t: "Entregamos",    b: "Flota propia en CDMX y paquetería confiable al resto del país. Bien estibado, sin maltratos." },
];

function ProductLine({ line, i }) {
  const flip = i % 2 === 1;
  return (
    <section id={line.id} className={`${i === 0 ? "" : "border-t border-ink/10"} ${flip ? "bg-cream" : "bg-paper"}`}>
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-28">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 ${flip ? "lg:flex-row-reverse" : ""}`}>
          {/* mocks */}
          <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""} reveal`}>
            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-4 row-span-2"><ProductMockup label={line.mocks[0].label} tone={line.mocks[0].tone} aspect={line.mocks[0].aspect} note={`LÍNEA · ${line.n}`} /></div>
              <div className="col-span-2"><ProductMockup label={line.mocks[1].label} tone={line.mocks[1].tone} aspect={line.mocks[1].aspect} /></div>
              <div className="col-span-2"><ProductMockup label={line.mocks[2].label} tone={line.mocks[2].tone} aspect={line.mocks[2].aspect} /></div>
            </div>
          </div>
          {/* copy */}
          <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""} reveal`}>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="stat-num text-ink/15" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1 }}>{line.n}</span>
              <span className="label-mono">LÍNEA · {line.id.toUpperCase()}</span>
            </div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              {line.name}
            </h2>
            <p className="mt-4 font-serif text-ink/75 italic" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", fontWeight: 400, lineHeight: 1.35 }}>
              {line.tagline}
            </p>
            <p className="mt-6 text-ink/75 text-[16.5px]" style={{ lineHeight: 1.6 }}>{line.desc}</p>

            <ul className="mt-6 space-y-2.5">
              {line.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink/80 text-[15.5px]">
                  <span className="shrink-0 w-5 h-5 rounded-full border border-ink/20 inline-flex items-center justify-center mt-0.5"><Icon.check className="w-3 h-3 text-leaf" /></span>
                  {b}
                </li>
              ))}
            </ul>

            {/* specs grid */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-0">
              {line.specs.map((s) => (
                <div key={s.k} className="py-3 border-t border-ink/15">
                  <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/45 mb-1">{s.k}</div>
                  <div className="font-serif text-ink" style={{ fontWeight: 600, fontSize: "16px", letterSpacing: "-0.01em" }}>{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="contacto.html" className="btn btn-primary">Cotizar esta línea <Icon.arrow className="w-4 h-4" /></a>
              <a href="catalogo.html" className="btn btn-secondary">Ver muestras</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lines() {
  return (
    <>
      {/* line index / jump nav */}
      <section className="bg-paper border-b border-ink/10 sticky top-[72px] z-30 backdrop-blur bg-paper/85">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-3 flex gap-4 overflow-x-auto">
          {LINES.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="shrink-0 inline-flex items-center gap-2.5 px-3 py-2 rounded-full border border-ink/12 hover:border-ink/40 hover:bg-cream transition group">
              <span className="font-mono text-[10.5px] tracking-[.16em] uppercase text-ink/45 group-hover:text-ink/70">{l.n}</span>
              <span className="font-serif text-[14.5px] text-ink" style={{ fontWeight: 600 }}>{l.name}</span>
            </a>
          ))}
        </div>
      </section>
      {LINES.map((l, i) => <ProductLine key={l.id} line={l} i={i} />)}
    </>
  );
}

function Process() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-14 reveal">
          <div className="label-mono mb-4" style={{ color: "rgba(245,239,224,.55)" }}>// CÓMO TRABAJAMOS</div>
          <h2 className="font-serif" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
            De la cotización a tu cocina,<br/><em style={{ fontWeight: 500, color: "#9DB89A" }}>en cuatro pasos</em>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
          {PROCESS.map((p, i) => (
            <div key={p.n} className="reveal bg-ink p-8 lg:p-10" style={{ transitionDelay: `${i*80}ms` }}>
              <div className="stat-num text-paper/15" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>{p.n}</div>
              <h3 className="mt-4 font-serif text-paper text-[26px]" style={{ fontWeight: 600, letterSpacing: "-0.015em" }}>{p.t}</h3>
              <p className="mt-3 text-paper/65 text-[14.5px]" style={{ lineHeight: 1.55 }}>{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "¿Cuál es el tiraje mínimo?", a: "500 piezas en bolsas y cajas, 1,000 en papel y portavasos. Líneas de temporada manejamos cupos especiales desde 500." },
    { q: "¿Diseñan el arte sin costo?", a: "Sí — en tu primera orden de 5,000 piezas o más nuestro equipo arma el arte sin costo. Después manejamos tarifa preferencial." },
    { q: "¿Hacen muestras físicas?", a: "Mandamos muestras de papel y referencias de troquel sin costo a CDMX. Foráneos solo pagan paquetería." },
    { q: "¿Cuánto tarda mi primer pedido?", a: "Entre 8 y 18 días hábiles según el producto. Reordenes salen 30% más rápido porque ya tenemos el troquel y arte aprobados." },
    { q: "¿Manejan facturación?", a: "Sí, facturamos electrónico con todos los requisitos del SAT. Recibimos transferencia, depósito y tarjeta." },
    { q: "¿Entregan fuera de CDMX?", a: "A toda la república con paqueterías confiables (Estafeta, DHL, Paquetexpress). Cotización incluye costo de envío." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal">
            <div className="label-mono mb-4">// PREGUNTAS</div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}>
              Lo que más nos preguntan.
            </h2>
            <p className="mt-6 text-ink/65 text-[15.5px]" style={{ lineHeight: 1.55 }}>¿No encuentras tu duda? Mándanos WhatsApp, te respondemos directo.</p>
            <a href="https://wa.me/525550875427" className="mt-6 inline-flex items-center gap-2 font-medium text-leaf hover:gap-3 transition-all"><Icon.wa className="w-4 h-4" /> Pregúntanos por WhatsApp <Icon.arrow className="w-4 h-4" /></a>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-ink/12 reveal">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full py-6 flex items-center justify-between gap-6 text-left group">
                  <span className="font-serif text-ink text-[20px] lg:text-[22px]" style={{ fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.25 }}>{f.q}</span>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-ink/20 inline-flex items-center justify-center text-ink/60 group-hover:bg-leaf group-hover:text-paper group-hover:border-leaf transition">
                    {open === i ? <Icon.minus className="w-4 h-4" /> : <Icon.plus className="w-4 h-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-ink/75 text-[16px] max-w-2xl" style={{ lineHeight: 1.6 }}>{f.a}</p>
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

function App() {
  useReveal();
  useEffect(() => { document.documentElement.style.setProperty('--grain-opacity', '0.32'); }, []);
  return (
    <div id="top" data-screen-label="Productos">
      <CursorDot />
      <Nav current="productos" />
      <main>
        <PageHero
          kicker="LÍNEAS · 04"
          title="Cuatro líneas,"
          italic="una sola obsesión."
          breadcrumb="Productos"
          lead="Papel, cajas, bolsas y temporada. Cada línea fabricada en planta propia, con tirajes cortos y largos, a tu marca o con nuestros diseños base."
        />
        <Lines />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
