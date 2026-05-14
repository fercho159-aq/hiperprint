/* Hiperprint — Clientes */

const { useState, useEffect } = React;

const FEATURED = [
  {
    name: "Häagen-Dazs",
    industry: "Heladería",
    since: "2018",
    summary: "Servilletería, portavasos y cajas para sus aperturas en CDMX y Monterrey.",
    metric: "120K piezas / año",
    tone: "cream",
    mock: "haagen-dazs-papel.jpg",
  },
  {
    name: "Taquearte",
    industry: "Taquería",
    since: "2020",
    summary: "Papel cuadrille verde y bolsa kraft con asa para sucursales Roma, Condesa y Doctores.",
    metric: "60K piezas / mes",
    tone: "sage",
    mock: "taquearte-papel-bolsa.jpg",
  },
  {
    name: "Burguesía",
    industry: "Hamburguesería",
    since: "2021",
    summary: "Caja burger M con troquel a medida + papel impreso a tres tintas para línea regular.",
    metric: "40K cajas / mes",
    tone: "tortilla",
    mock: "burguesia-caja-papel.jpg",
  },
];

const ALL_CLIENTS = [
  "Price Shoes", "Häagen-Dazs", "El Bol", "Blaho", "Magic",
  "Taquearte", "Lidanys", "Chopy", "Capricho", "La Castellana",
  "La Parcela", "Burguesía", "Tizonsito", "Dulzone", "Los de María", "Pintoxs",
];

const INDUSTRIES = [
  { icon: "factory", n: "01", t: "Hamburgueserías",   c: 280, sample: ["Burguesía", "Magic", "Tizonsito"] },
  { icon: "tag",     n: "02", t: "Taquerías",         c: 420, sample: ["Taquearte", "El Bol", "La Parcela"] },
  { icon: "heart",   n: "03", t: "Heladerías",        c: 95,  sample: ["Häagen-Dazs", "Chopy", "Dulzone"] },
  { icon: "leaf",    n: "04", t: "Panaderías",        c: 210, sample: ["Capricho", "La Castellana", "Los de María"] },
  { icon: "sun",     n: "05", t: "Creperías y dulces",c: 75,  sample: ["Lidanys", "Pintoxs", "Blaho"] },
  { icon: "award",   n: "06", t: "Cadenas y franquicias", c: 18, sample: ["Price Shoes", "+ 17 más"] },
];

const TESTIMONIOS = [
  { who: "Mariana López", role: "Operaciones · Heladería en Polanco", quote: "Imprimimos con ellos desde 2018. Lo que más me gusta es que cuando hay urgencia, contestan. Eso vale más que cualquier descuento.", stars: 5 },
  { who: "Carlos Aguilar", role: "Dueño · Taquería en Roma", quote: "Pasamos de comprar papel genérico a uno con nuestro logo y cuadrille. Las propinas subieron. En serio.", stars: 5 },
  { who: "Sofía Reyes",   role: "Marketing · Cadena de burgers", quote: "Nos armaron arte para temporada en una semana. Ya no salimos a buscar otra imprenta para nada.", stars: 5 },
];

function Featured() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="label-mono mb-4">// CASOS DESTACADOS</div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
              Tres marcas, tres historias.
            </h2>
          </div>
          <p className="text-ink/65 lg:max-w-sm text-[15.5px]" style={{ lineHeight: 1.55 }}>
            Algunos de los pedidos que cuentan mejor lo que sabemos hacer.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED.map((f, i) => (
            <article key={f.name} className="reveal lift bg-cream rounded-xl overflow-hidden border border-ink/8 flex flex-col" style={{ transitionDelay: `${i*80}ms` }}>
              <div className="overflow-hidden"><div className="lift-img"><ProductMockup label={f.mock} tone={f.tone} aspect="4/3" /></div></div>
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-[.16em] uppercase text-ink/45">CLIENTE DESDE {f.since}</span>
                  <span className="font-mono text-[11px] tracking-[.16em] uppercase text-leaf">{f.industry}</span>
                </div>
                <h3 className="font-serif text-ink" style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 2.8vw, 2.2rem)", letterSpacing: "-0.025em", lineHeight: 1 }}>
                  {f.name}
                </h3>
                <p className="mt-4 text-ink/75 text-[15px] flex-1" style={{ lineHeight: 1.55 }}>{f.summary}</p>
                <div className="mt-6 pt-5 border-t border-ink/12 flex items-baseline justify-between">
                  <div>
                    <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/45 mb-1">VOLUMEN</div>
                    <div className="font-serif text-ink" style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>{f.metric}</div>
                  </div>
                  <a href="#" className="text-leaf font-medium text-[14px] inline-flex items-center gap-1.5">Ver caso <Icon.arrow className="w-4 h-4" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-14 reveal max-w-3xl">
          <div className="label-mono mb-4">// POR INDUSTRIA</div>
          <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Empacamos seis industrias.<br/>
            <em style={{ fontWeight: 500, color: "#3D5B3A" }}>Todas, comida.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* list */}
          <ul className="lg:col-span-7 space-y-px bg-ink/10 rounded-xl overflow-hidden">
            {INDUSTRIES.map((ind, i) => {
              const IconC = Icon[ind.icon];
              const isActive = i === active;
              return (
                <li key={ind.n}>
                  <button onClick={() => setActive(i)} className={`w-full text-left flex items-center gap-6 px-6 py-6 transition ${isActive ? "bg-paper" : "bg-cream hover:bg-paper/60"}`}>
                    <span className={`shrink-0 w-12 h-12 rounded-full inline-flex items-center justify-center transition ${isActive ? "bg-leaf text-paper" : "bg-paper text-leaf border border-ink/12"}`}><IconC className="w-5 h-5" /></span>
                    <span className="flex-1 flex items-baseline gap-4">
                      <span className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/40">{ind.n}</span>
                      <span className="font-serif text-ink" style={{ fontWeight: 600, fontSize: "clamp(1.2rem, 2vw, 1.6rem)", letterSpacing: "-0.015em" }}>{ind.t}</span>
                    </span>
                    <span className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/55 hidden sm:inline">{ind.c} negocios</span>
                    <span className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-ink/50 transition ${isActive ? "rotate-90" : ""}`}>
                      <Icon.arrow className="w-4 h-4" />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          {/* detail */}
          <div className="lg:col-span-5 reveal">
            <div className="bg-ink text-paper rounded-xl p-8 lg:p-10 sticky top-32">
              <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/50 mb-4">INDUSTRIA · {INDUSTRIES[active].n}</div>
              <h3 className="font-serif" style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                {INDUSTRIES[active].t}
              </h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="stat-num text-tortilla" style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)" }}>{INDUSTRIES[active].c}</span>
                <span className="text-paper/65 font-mono text-[12px] tracking-wider uppercase">negocios activos</span>
              </div>
              <div className="mt-6 pt-6 border-t border-paper/15">
                <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/50 mb-3">ALGUNAS MARCAS</div>
                <ul className="space-y-2">
                  {INDUSTRIES[active].sample.map((s) => (
                    <li key={s} className="font-serif text-paper text-[18px] flex items-center gap-3" style={{ fontWeight: 600 }}>
                      <span className="w-1.5 h-1.5 bg-tortilla rounded-full" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="contacto.html" className="mt-8 btn btn-primary !w-full justify-center">Cotiza para tu industria <Icon.arrow className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AllClients() {
  return (
    <section id="lista" className="bg-paper border-y border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-14 reveal">
          <div className="label-mono mb-4">// LISTA COMPLETA · 16 DESTACADOS · +2,000 ACTIVOS</div>
          <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Marcas que ya están empacando con nosotros.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-lg overflow-hidden">
          {ALL_CLIENTS.map((c, i) => (
            <div key={c} className="bg-paper aspect-[3/2] flex items-center justify-center p-6 group reveal hover:bg-cream transition" style={{ transitionDelay: `${(i % 8)*30}ms` }}>
              <span className="font-serif text-ink/40 group-hover:text-ink text-center transition-colors duration-500" style={{ fontWeight: 600, fontSize: "clamp(1rem, 2.2vw, 1.6rem)", letterSpacing: "-0.02em", fontStyle: i % 3 === 1 ? "italic" : "normal", lineHeight: 1.1 }}>
                {c}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-[11.5px] tracking-[.16em] uppercase text-ink/45">
          + 1,984 negocios más, de Tijuana a Mérida.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-kraft grain relative">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-14 reveal">
          <div className="label-mono mb-4">// LO QUE DICEN</div>
          <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Sin filtros, sin retoques.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIOS.map((t, i) => (
            <figure key={i} className="reveal bg-paper rounded-xl p-7 lg:p-8 border border-ink/8 flex flex-col" style={{ transitionDelay: `${i*80}ms` }}>
              <div className="flex items-center gap-1 text-tortilla mb-5">
                {Array.from({ length: t.stars }).map((_, j) => <Icon.star key={j} className="w-4 h-4" />)}
              </div>
              <blockquote className="font-serif text-ink flex-1" style={{ fontWeight: 500, fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", letterSpacing: "-0.01em", lineHeight: 1.4 }}>
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink/10">
                <div className="font-serif text-ink text-[16px]" style={{ fontWeight: 600 }}>{t.who}</div>
                <div className="text-ink/60 text-[13px] font-mono tracking-wide mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
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
    <div id="top" data-screen-label="Clientes">
      <CursorDot />
      <Nav current="clientes" />
      <main>
        <PageHero
          kicker="2,000+ NEGOCIOS · 28 ESTADOS"
          title="Empacamos para"
          italic="México que cocina."
          breadcrumb="Clientes"
          lead="Hamburgueserías, taquerías, heladerías, panaderías y cadenas. Aquí algunos de los que confían en nosotros."
        />
        <Featured />
        <Industries />
        <AllClients />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
