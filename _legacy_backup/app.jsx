/* Hiperprint — Home page (uses shared.jsx) */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "asymmetric",
  "grain": 0.32,
  "showCursor": true,
  "promoBanner": true
}/*EDITMODE-END*/;

const { useState, useEffect } = React;

/* ─────────────────────────────────────────── data */
const PRODUCTS = [
  { n: "01", name: "Papel grado alimenticio", desc: "28 y 40 grs. Liso, a cuadros o impreso con tu marca. Resistente a grasa, seguro para contacto con alimentos.", tags: ["28 grs", "40 grs", "Impresión a color"], mock: { label: "papel-cuadros-rojo-blanco.jpg", tone: "tortilla" } },
  { n: "02", name: "Cajas para comida",       desc: "Hamburguesas, hot dogs, pizzas, crepas, postres. Armado rápido, troqueles a la medida.",                     tags: ["Kraft natural", "Blanco", "Troquel personalizado"], mock: { label: "caja-burger-kraft.jpg", tone: "kraft" } },
  { n: "03", name: "Bolsas de papel",         desc: "Kraft natural o blanco, con o sin asa, impresas a una o varias tintas. Para llevar y para vitrina.",          tags: ["Con asa", "Sin asa", "1-4 tintas"], mock: { label: "bolsa-kraft-asa.jpg", tone: "deep" } },
  { n: "04", name: "Línea de temporada",      desc: "Día de Muertos, Navidad, San Valentín, fechas patrias. Diseños listos o a tu estilo, en tirajes cortos.",     tags: ["Tiraje corto", "Diseños listos", "Edición limitada"], mock: { label: "linea-temporada-muertos.jpg", tone: "ink" } },
];

const WHY = [
  { icon: "tag",    title: "Precios competitivos",          body: "Sin sacrificar calidad. Cotizamos contra cualquier presupuesto real." },
  { icon: "brush",  title: "Impresión personalizada",       body: "Tu logo, tus colores, tu diseño. Una o varias tintas, a tu marca." },
  { icon: "layers", title: "Tirajes cortos y largos",       body: "Desde 500 piezas para probar, hasta 200,000 al mes en producción continua." },
  { icon: "award",  title: "Diseño incluido",               body: "Si no tienes arte, lo hacemos contigo. Asesoría sin costo en tu primera orden." },
  { icon: "leaf",   title: "Materias primas certificadas",  body: "Papel grado alimenticio, tintas a base de agua y proveedores trazables." },
  { icon: "truck",  title: "Entrega CDMX y nacional",       body: "Flotilla propia en CDMX, paquetería confiable al resto de la república." },
];

const CLIENTS = [
  "Price Shoes", "Häagen-Dazs", "El Bol", "Blaho", "Magic",
  "Taquearte", "Lidanys", "Chopy", "Capricho", "La Castellana",
  "La Parcela", "Burguesía", "Tizonsito", "Dulzone", "Los de María", "Pintoxs",
];

const GALLERY = [
  { label: "papel-burger-cuadros.jpg", tone: "tortilla", rows: 1 },
  { label: "caja-pizza-kraft-detalle.jpg", tone: "kraft", rows: 2 },
  { label: "bolsa-kraft-blanca-logo.jpg", tone: "cream", rows: 1 },
  { label: "papel-crepa-impreso.jpg", tone: "deep", rows: 2 },
  { label: "portavasos-kraft.jpg", tone: "kraft", rows: 1 },
  { label: "caja-hotdog-rojo.jpg", tone: "tortilla", rows: 1 },
  { label: "bolsa-pan-kraft.jpg", tone: "cream", rows: 2 },
  { label: "papel-tacos-cuadrille.jpg", tone: "sage", rows: 1 },
  { label: "edicion-muertos-2025.jpg", tone: "ink", rows: 1 },
  { label: "linea-helados-pastel.jpg", tone: "sage", rows: 1 },
];

/* ─────────────────────────────────────────── Hero */
function Hero({ variant }) {
  if (variant === "centered") {
    return (
      <section id="inicio" className="grain relative" style={{ background: "#D4B896" }}>
        <div className="mx-auto max-w-site px-6 lg:px-10 pt-20 pb-24 min-h-[88vh] flex flex-col justify-center items-center text-center">
          <span className="label-mono mb-8">ECO · HECHO EN MÉXICO · DESDE 2009</span>
          <h1 className="font-serif text-ink max-w-5xl" style={{ fontWeight: 800, letterSpacing: "-0.035em", lineHeight: ".94", fontSize: "clamp(3rem, 9vw, 8rem)" }}>
            <span className="line-mask"><span style={{ animationDelay: ".05s" }}>Empaques que cuentan</span></span>
            <span className="line-mask"><span style={{ animationDelay: ".18s" }}>tu <em className="not-italic" style={{ fontStyle: "italic", fontWeight: 500, color: "#3D5B3A" }}>historia</em>.</span></span>
          </h1>
          <p className="mt-8 text-[18px] lg:text-[20px] text-ink/75 max-w-2xl" style={{ lineHeight: 1.45 }}>
            Impresión personalizada en papel, cajas y bolsas ecológicas para la industria de comida rápida.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="contacto.html" className="btn btn-primary">Cotiza mi pedido <Icon.arrow className="w-4 h-4" /></a>
            <a href="catalogo.html" className="btn btn-secondary">Ver catálogo</a>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="inicio" className="grain relative" style={{ background: "#D4B896" }}>
      <div className="mx-auto max-w-site px-6 lg:px-10 pt-14 lg:pt-20 pb-20 lg:pb-28 min-h-[88vh] flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-10 lg:mb-14">
          <span className="label-mono">ECO · HECHO EN MÉXICO · DESDE 2009</span>
          <span className="h-px flex-1 max-w-[180px] bg-ink/20" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-ink" style={{ fontWeight: 800, letterSpacing: "-0.035em", lineHeight: ".92", fontSize: "clamp(3rem, 8vw, 7rem)" }}>
              <span className="line-mask"><span style={{ animationDelay: ".05s" }}>Empaques</span></span>
              <span className="line-mask"><span style={{ animationDelay: ".18s" }}>que cuentan</span></span>
              <span className="line-mask"><span style={{ animationDelay: ".30s" }}>tu <em className="not-italic" style={{ fontStyle: "italic", fontWeight: 500, color: "#3D5B3A" }}>historia</em>.</span></span>
            </h1>
            <p className="mt-8 text-[18px] lg:text-[20px] text-ink/75 max-w-[36rem]" style={{ lineHeight: 1.45 }}>
              Impresión personalizada en <strong className="text-ink font-semibold">papel, cajas y bolsas ecológicas</strong> para la industria de comida rápida. Más de 15 años empacando los antojos de México.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a href="contacto.html" className="btn btn-primary">Cotiza mi pedido <Icon.arrow className="w-4 h-4" /></a>
              <a href="catalogo.html" className="btn btn-secondary">Ver catálogo</a>
              <span className="hidden lg:flex items-center gap-2 ml-2 text-[13px] text-ink/55 font-mono">
                <span className="inline-block w-1.5 h-1.5 bg-leaf rounded-full animate-pulse" />
                Respuesta en menos de 24 h
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative grid grid-cols-6 gap-3" style={{ minHeight: 420 }}>
              <div className="col-span-4 row-span-2 relative"><ProductMockup label="caja-hamburguesa-kraft.jpg" tone="kraft" aspect="4/5" note="HERO · 01" /></div>
              <div className="col-span-2 relative -mt-6"><ProductMockup label="papel-cuadros-rojo.jpg" tone="tortilla" aspect="1/1" note="02" /></div>
              <div className="col-span-2 relative"><ProductMockup label="bolsa-kraft.jpg" tone="deep" aspect="1/1.1" note="03" /></div>
              <div className="col-span-3 relative -ml-3 translate-y-3"><ProductMockup label="portavasos-kraft.jpg" tone="cream" aspect="3/2" note="04" /></div>
              <div className="col-span-3 relative translate-y-2"><ProductMockup label="papel-tortilla-cuadros.jpg" tone="sage" aspect="3/2" note="05" /></div>
            </div>
            <div className="absolute -top-4 -left-4 lg:-left-10 rotate-[-6deg]">
              <div className="bg-paper rounded-full pl-1 pr-4 py-1 flex items-center gap-2.5 shadow-[0_18px_40px_-20px_rgba(40,30,15,.35)] border border-ink/8">
                <span className="w-9 h-9 rounded-full bg-leaf text-paper inline-flex items-center justify-center"><Icon.leaf className="w-4 h-4" /></span>
                <div className="text-left">
                  <div className="font-mono text-[10px] tracking-[.18em] text-ink/55 uppercase">100%</div>
                  <div className="font-serif text-[15px] -mt-0.5" style={{ fontWeight: 700 }}>Biodegradable</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 right-2 rotate-[4deg]">
              <div className="bg-tortilla text-paper rounded-full px-4 py-2 shadow-[0_18px_40px_-20px_rgba(200,75,49,.55)] flex items-center gap-2">
                <span className="font-serif" style={{ fontWeight: 700, fontSize: 16 }}>Hecho en México</span>
                <span className="w-1.5 h-1.5 rounded-full bg-paper/80" />
                <span className="font-mono text-[11px] tracking-[.15em] uppercase">MX</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-24 flex items-center gap-3 text-ink/55">
          <Icon.arrowDown className="w-4 h-4 animate-bounce" />
          <span className="label-mono">Sigue bajando · Conoce nuestros productos</span>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { num: "15+", label: "Años imprimiendo México", sub: "Desde 2009" },
    { num: "100+", label: "Productos en catálogo", sub: "Línea continua + temporadas" },
    { num: "2,000+", label: "Clientes que confían", sub: "De Tijuana a Mérida" },
  ];
  return (
    <section className="bg-cream border-y border-ink/8">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {items.map((it, i) => (
            <div key={i} className="reveal flex flex-col md:items-start gap-3 md:pl-8 md:border-l md:border-ink/15 first:md:border-l-0 first:md:pl-0">
              <div className="stat-num text-ink" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>{it.num}</div>
              <div className="font-serif text-[20px] lg:text-[22px] text-ink" style={{ fontWeight: 500, lineHeight: 1.2 }}>{it.label}</div>
              <div className="label-mono">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="productos" className="relative">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 reveal">
          <div>
            <div className="label-mono mb-4">// LO QUE HACEMOS</div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1, fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Cuatro líneas, <em style={{ color: "#3D5B3A", fontWeight: 500 }}>una sola obsesión</em>:<br/>
              papel bien impreso.
            </h2>
          </div>
          <p className="text-ink/70 lg:max-w-sm text-[16px] lg:text-[17px]" style={{ lineHeight: 1.55 }}>
            Diseñamos, troquelamos e imprimimos en planta propia. Tú decides el tiraje, el diseño y el papel; nosotros nos encargamos de lo demás.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <article key={p.n} className="reveal lift bg-paper rounded-xl border border-ink/8 overflow-hidden" style={{ transitionDelay: `${i*60}ms` }}>
              <div className="overflow-hidden"><div className="lift-img"><ProductMockup label={p.mock.label} tone={p.mock.tone} aspect="4/3" /></div></div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="label-mono">{p.n} · LÍNEA</span>
                  <span className="w-6 h-6 rounded-full border border-ink/15 inline-flex items-center justify-center text-ink/60"><Icon.plus className="w-3 h-3" /></span>
                </div>
                <h3 className="font-serif text-ink" style={{ fontWeight: 600, fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{p.name}</h3>
                <p className="mt-3 text-ink/70 text-[15.5px]" style={{ lineHeight: 1.55 }}>{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (<span key={t} className="inline-flex items-center px-3 py-1 rounded-full border border-ink/15 text-[12px] text-ink/70">{t}</span>))}
                </div>
                <a href="productos.html" className="mt-6 inline-flex items-center gap-2 font-medium text-leaf hover:gap-3 transition-all">Ver más <Icon.arrow className="w-4 h-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Eco() {
  const items = [
    { icon: "leaf",    title: "100% natural",                  body: "Papeles celulósicos sin recubrimientos plásticos." },
    { icon: "recycle", title: "Biodegradable y reciclable",    body: "Composta en 90 días en condiciones industriales." },
    { icon: "pin",     title: "Producción local en CDMX",      body: "Planta propia en Iztapalapa, cadena de suministro corta." },
  ];
  return (
    <section className="relative grain" style={{ background: "#9DB89A" }}>
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 reveal">
            <span className="pill-eco mb-8"><Icon.leaf className="w-3.5 h-3.5" /> Compromiso eco</span>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .96, fontSize: "clamp(2.6rem, 6vw, 5.2rem)" }}>
              Buenos con tu comida.<br/><em style={{ fontWeight: 500 }}>Buenos</em> con el planeta.
            </h2>
            <p className="mt-8 text-ink/80 text-[17px] lg:text-[19px] max-w-[36rem]" style={{ lineHeight: 1.55 }}>
              Nuestros empaques son <strong className="font-semibold">biodegradables, reciclables y hechos con materias primas naturales</strong>. Papel grado alimenticio certificado, tintas a base de agua y adhesivos sin solventes. Empacar rico no tiene por qué costarle al planeta.
            </p>
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <span className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">CERTIFICACIONES</span>
              <span className="px-3 py-1.5 bg-paper/60 rounded-md font-mono text-[12px] tracking-wider">FDA · GRADO ALIMENTICIO</span>
              <span className="px-3 py-1.5 bg-paper/60 rounded-md font-mono text-[12px] tracking-wider">FSC · PAPEL TRAZABLE</span>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-1 reveal">
            {items.map((it, i) => {
              const IconC = Icon[it.icon];
              return (
                <div key={i} className="flex items-start gap-5 py-7 border-b border-ink/15 last:border-b-0">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-paper text-leaf inline-flex items-center justify-center"><IconC className="w-5 h-5" /></div>
                  <div>
                    <div className="font-serif text-[22px] text-ink" style={{ fontWeight: 600, letterSpacing: "-0.015em" }}>{it.title}</div>
                    <div className="mt-1 text-ink/75 text-[15px]" style={{ lineHeight: 1.55 }}>{it.body}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="nosotros" className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-5 reveal">
            <div className="label-mono mb-4">// POR QUÉ HIPERPRINT</div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
              Imprenta de pueblo,<br/><em style={{ fontWeight: 500, color: "#C84B31" }}>capacidad</em> industrial.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6 reveal">
            <p className="text-ink/75 text-[17px] lg:text-[18px]" style={{ lineHeight: 1.6 }}>
              Llevamos quince años empacando hamburgueserías, taquerías, heladerías y panaderías de toda la república. Conocemos el oficio, hablamos tu idioma y respondemos como si fueras nuestro único cliente. Esa es la diferencia.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16">
          {WHY.map((w, i) => {
            const IconC = Icon[w.icon];
            return (
              <div key={i} className="reveal py-8 border-t border-ink/12 flex gap-5" style={{ transitionDelay: `${i*60}ms` }}>
                <div className="shrink-0 w-11 h-11 rounded-full border border-ink/15 inline-flex items-center justify-center text-leaf"><IconC className="w-5 h-5" /></div>
                <div>
                  <div className="font-mono text-[11px] tracking-[.16em] uppercase text-ink/40 mb-1.5">0{i+1}</div>
                  <h3 className="font-serif text-ink text-[22px]" style={{ fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{w.title}</h3>
                  <p className="mt-2 text-ink/70 text-[14.5px]" style={{ lineHeight: 1.55 }}>{w.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="catalogo" className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 reveal">
          <div>
            <div className="label-mono mb-4">// CATÁLOGO</div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>Trabajos recientes.</h2>
          </div>
          <a href="catalogo.html" className="btn btn-secondary self-start lg:self-auto">Ver catálogo completo <Icon.arrow className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[140px] md:auto-rows-[170px] lg:auto-rows-[200px]">
          {GALLERY.map((g, i) => (
            <div key={i} className={`reveal lift overflow-hidden rounded-lg ${g.rows === 2 ? "row-span-2" : ""}`} style={{ transitionDelay: `${i*40}ms` }}>
              <div className="lift-img h-full"><ProductMockup label={g.label} tone={g.tone} aspect="auto" className="!h-full" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const all = [...CLIENTS, ...CLIENTS];
  return (
    <section id="clientes" className="bg-paper border-y border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 pt-20 pb-6 lg:pt-28 lg:pb-10">
        <div className="text-center mb-12 reveal">
          <div className="label-mono mb-4">// CLIENTES · 2009–2026</div>
          <h2 className="font-serif text-ink mx-auto" style={{ fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, fontSize: "clamp(1.8rem, 3.8vw, 3rem)", maxWidth: "30ch" }}>
            Marcas que ya están empacando con nosotros.
          </h2>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        <div className="marquee-track flex gap-12 pb-16" style={{ width: "max-content" }}>
          {all.map((c, i) => (
            <span key={i} className="font-serif text-ink/35 hover:text-ink whitespace-nowrap transition-colors duration-500" style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)", fontWeight: 600, letterSpacing: "-0.02em", fontStyle: i % 3 === 1 ? "italic" : "normal" }}>
              {c}<span className="ml-12 text-ink/15">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="grain relative" style={{ background: "#D4B896" }}>
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto reveal">
          <Icon.quote className="w-12 h-12 text-leaf mb-6" />
          <blockquote className="font-serif text-ink" style={{ fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.1, fontSize: "clamp(1.8rem, 4.5vw, 3.6rem)" }}>
            "La calidad del papel y la rapidez para imprimir nuestro logo nos sorprendió. Ya no buscamos a nadie más."
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-leaf text-paper inline-flex items-center justify-center font-serif" style={{ fontWeight: 700, fontSize: 20 }}>RM</div>
            <div>
              <div className="font-serif text-ink text-[18px]" style={{ fontWeight: 600 }}>Roberto Méndez</div>
              <div className="text-ink/65 text-[14px] font-mono tracking-wide">Hamburguesería · CDMX · Cliente desde 2021</div>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-1 text-tortilla">
              {[0,1,2,3,4].map(i => <Icon.star key={i} className="w-4 h-4" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promo({ show }) {
  if (!show) return null;
  return (
    <section className="bg-tortilla text-paper relative overflow-hidden">
      <div className="absolute inset-0 opacity-[.08] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 20h40M20 0v40' stroke='%23fff' stroke-width='.5'/></svg>\")" }} />
      <div className="mx-auto max-w-site px-6 lg:px-10 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 relative">
        <span className="font-mono text-[11px] tracking-[.22em] uppercase bg-paper text-tortilla px-3 py-1.5 rounded-full self-start">PROMO · MAYO 2026</span>
        <div className="flex-1">
          <h3 className="font-serif" style={{ fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1, fontSize: "clamp(2rem, 5vw, 4.2rem)" }}>
            Este mes: <em style={{ fontWeight: 500 }}>el diseño no se paga.</em>
          </h3>
          <p className="mt-3 text-paper/85 text-[16px] lg:text-[17px] max-w-2xl">En tu primera orden de 5,000 piezas o más, nuestro equipo creativo arma tu arte sin costo extra. Aplica en papel, cajas y bolsas.</p>
        </div>
        <a href="contacto.html" className="btn btn-tortilla shrink-0">Aprovéchalo <Icon.arrow className="w-4 h-4" /></a>
      </div>
    </section>
  );
}

function ContactCTA() {
  const [form, setForm] = useState({ nombre: "", empresa: "", whatsapp: "", necesidad: "papel", mensaje: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.whatsapp) return;
    setSent(true); setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contacto" className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="reveal mb-14">
          <div className="label-mono mb-4">// HABLEMOS</div>
          <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2.6rem, 6vw, 5rem)" }}>
            ¿Listo para imprimir<br/><em style={{ fontWeight: 500, color: "#3D5B3A" }}>algo bonito</em>?
          </h2>
          <p className="mt-6 text-ink/70 text-[17px] lg:text-[18px] max-w-2xl" style={{ lineHeight: 1.55 }}>
            Cuéntanos qué necesitas y te respondemos con cotización formal en menos de 24 horas. Si prefieres, marca o escríbenos directo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 space-y-3 reveal">
            <a href="tel:5550875427" className="lift block bg-cream rounded-xl p-7 border border-ink/8">
              <div className="flex items-start justify-between"><div className="w-12 h-12 rounded-full bg-leaf text-paper inline-flex items-center justify-center"><Icon.phone className="w-5 h-5" /></div><span className="label-mono">CANAL 01</span></div>
              <div className="mt-6 font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">Llámanos</div>
              <div className="mt-1 font-serif text-ink" style={{ fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}>55 5087 5427</div>
              <div className="mt-2 text-ink/60 text-[14px]">L–V 9:00 a 18:00 h</div>
            </a>
            <a href="mailto:ventas@hiperprint.mx" className="lift block bg-cream rounded-xl p-7 border border-ink/8">
              <div className="flex items-start justify-between"><div className="w-12 h-12 rounded-full bg-leaf text-paper inline-flex items-center justify-center"><Icon.mail className="w-5 h-5" /></div><span className="label-mono">CANAL 02</span></div>
              <div className="mt-6 font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">Escríbenos</div>
              <div className="mt-1 font-serif text-ink" style={{ fontWeight: 700, fontSize: "clamp(1.4rem, 2.6vw, 2rem)", letterSpacing: "-0.02em" }}>ventas@hiperprint.mx</div>
              <div className="mt-2 text-ink/60 text-[14px]">Respuesta &lt; 24 h</div>
            </a>
            <div className="lift block bg-cream rounded-xl p-7 border border-ink/8">
              <div className="flex items-start justify-between"><div className="w-12 h-12 rounded-full bg-leaf text-paper inline-flex items-center justify-center"><Icon.pin className="w-5 h-5" /></div><span className="label-mono">CANAL 03</span></div>
              <div className="mt-6 font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">Visítanos</div>
              <div className="mt-1 font-serif text-ink text-[20px]" style={{ fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.25 }}>
                Ingenieros Mecánicos 91,<br/>Nueva Rosita, Iztapalapa, CDMX
              </div>
              <div className="mt-5 rounded-md overflow-hidden border border-ink/10 relative" style={{ aspectRatio: "3/1" }}>
                <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                  <rect width="300" height="100" fill="#F5EFE0" />
                  <g stroke="#A67F5D" strokeWidth=".8" fill="none">
                    <path d="M-10 30 L320 50" /><path d="M-10 70 L320 60" />
                    <path d="M40 -10 L80 110" /><path d="M120 -10 L160 110" /><path d="M220 -10 L260 110" />
                  </g>
                  <g stroke="#A67F5D" strokeWidth=".3" fill="none" opacity=".5">
                    <path d="M-10 20 L320 35" /><path d="M-10 85 L320 78" />
                    <path d="M0 -10 L25 110" /><path d="M190 -10 L215 110" /><path d="M275 -10 L300 110" />
                  </g>
                  <g transform="translate(150,52)">
                    <circle r="12" fill="#3D5B3A" opacity=".18" /><circle r="6" fill="#3D5B3A" /><circle r="2" fill="#F5EFE0" />
                  </g>
                </svg>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] tracking-[.16em] uppercase text-ink/50 bg-paper/70 px-2 py-0.5 rounded">19.36°N · 99.07°W</span>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="lg:col-span-7 reveal bg-ink rounded-xl p-8 lg:p-12 text-paper relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-leaf/15 blur-3xl pointer-events-none" />
            <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/55 mb-6">// COTIZACIÓN EXPRESS</div>
            <h3 className="font-serif" style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Cuéntanos qué necesitas.</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 relative">
              <div><label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">Nombre</label><input value={form.nombre} onChange={set("nombre")} required className="field !bg-paper/95 !text-ink" placeholder="Tu nombre" /></div>
              <div><label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">Empresa</label><input value={form.empresa} onChange={set("empresa")} className="field !bg-paper/95 !text-ink" placeholder="Tu negocio" /></div>
              <div><label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">WhatsApp</label><input value={form.whatsapp} onChange={set("whatsapp")} required type="tel" className="field !bg-paper/95 !text-ink" placeholder="55 0000 0000" /></div>
              <div><label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">¿Qué necesitas?</label>
                <select value={form.necesidad} onChange={set("necesidad")} className="field !bg-paper/95 !text-ink">
                  <option value="papel">Papel grado alimenticio</option><option value="cajas">Cajas para comida</option>
                  <option value="bolsas">Bolsas de papel</option><option value="temporada">Línea de temporada</option><option value="otro">Otro</option>
                </select>
              </div>
              <div className="md:col-span-2"><label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">Cuéntanos más <span className="opacity-60">(opcional)</span></label>
                <textarea value={form.mensaje} onChange={set("mensaje")} rows={3} className="field !bg-paper/95 !text-ink resize-none" placeholder="Cantidad aproximada, fecha de entrega, si tienes arte listo…" />
              </div>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
              <button type="submit" className="btn btn-primary !bg-leaf hover:!bg-[#4f7548]">{sent ? "¡Recibido!" : "Enviar cotización"} <Icon.arrow className="w-4 h-4" /></button>
              <p className="text-paper/55 text-[13px] font-mono">Al enviar aceptas nuestro <a href="#" className="underline underline-offset-2 hover:text-paper">aviso de privacidad</a>.</p>
            </div>
            <div aria-live="polite" className={`mt-5 text-leaf text-[14px] font-mono transition-opacity ${sent ? "opacity-100" : "opacity-0"}`}>✓ Cotización enviada. Te respondemos en menos de 24 horas.</div>
          </form>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();
  useEffect(() => { document.documentElement.style.setProperty('--grain-opacity', String(t.grain)); }, [t.grain]);
  return (
    <div id="top" data-screen-label="Hiperprint · Home">
      <CursorDot enabled={t.showCursor} />
      <Nav current="inicio" />
      <main>
        <Hero variant={t.heroVariant} />
        <Stats />
        <Products />
        <Eco />
        <Why />
        <Gallery />
        <Clients />
        <Testimonial />
        <Promo show={t.promoBanner} />
        <ContactCTA />
      </main>
      <Footer />
      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Variante" value={t.heroVariant} options={["asymmetric", "centered"]} onChange={(v) => setTweak("heroVariant", v)} />
        <TweakSection label="Textura" />
        <TweakSlider label="Grano de papel" value={t.grain} min={0} max={0.7} step={0.02} onChange={(v) => setTweak("grain", v)} />
        <TweakSection label="Interacción" />
        <TweakToggle label="Cursor circular" value={t.showCursor} onChange={(v) => setTweak("showCursor", v)} />
        <TweakToggle label="Banner promo" value={t.promoBanner} onChange={(v) => setTweak("promoBanner", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
