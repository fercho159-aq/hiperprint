/* Hiperprint — Contacto */

const { useState, useEffect } = React;

function Channels() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {[
            { i: "phone", k: "01", t: "Llámanos",    main: "55 5087 5427",          sub: "L–V 9:00–18:00 · Sáb 10–14",  href: "tel:5550875427" },
            { i: "wa",    k: "02", t: "WhatsApp",    main: "+52 55 5087 5427",     sub: "Respuesta promedio: 12 min",   href: "https://wa.me/525550875427" },
            { i: "mail",  k: "03", t: "Escríbenos",  main: "ventas@hiperprint.mx", sub: "Cotización en < 24 h",         href: "mailto:ventas@hiperprint.mx" },
          ].map((c, i) => {
            const IconC = Icon[c.i];
            return (
              <a key={c.k} href={c.href} className="reveal lift bg-cream rounded-xl p-8 border border-ink/8 block group" style={{ transitionDelay: `${i*70}ms` }}>
                <div className="flex items-center justify-between mb-7">
                  <span className="w-12 h-12 rounded-full bg-leaf text-paper inline-flex items-center justify-center"><IconC className="w-5 h-5" /></span>
                  <span className="label-mono">CANAL · {c.k}</span>
                </div>
                <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/55">{c.t}</div>
                <div className="mt-1 font-serif text-ink group-hover:text-leaf transition" style={{ fontWeight: 700, fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{c.main}</div>
                <div className="mt-3 text-ink/60 text-[14px]">{c.sub}</div>
                <div className="mt-5 inline-flex items-center gap-2 text-leaf text-[14px] font-medium opacity-0 group-hover:opacity-100 transition">
                  Abrir <Icon.arrow className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BigForm() {
  const [form, setForm] = useState({
    nombre: "", empresa: "", whatsapp: "", email: "", necesidad: "papel",
    volumen: "1-5000", fecha: "", mensaje: "", arte: "no",
  });
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(1);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.whatsapp) return;
    setSent(true);
  };
  const productLabels = {
    papel: "Papel grado alimenticio", cajas: "Cajas para comida",
    bolsas: "Bolsas de papel", temporada: "Línea de temporada", otro: "Otro / no estoy seguro",
  };

  return (
    <section id="cotizar" className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* side info */}
          <aside className="lg:col-span-4 reveal">
            <div className="label-mono mb-3">// COTIZACIÓN EXPRESS</div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
              Llena el formulario.<br/><em style={{ fontWeight: 500, color: "#3D5B3A" }}>Te respondemos hoy.</em>
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Cotización formal en menos de 24 h",
                "Asesoría de diseño sin compromiso",
                "Muestras físicas en CDMX sin costo",
                "Sin mínimo amarrado a contrato",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink/80 text-[15.5px]">
                  <span className="shrink-0 w-5 h-5 rounded-full border border-ink/20 inline-flex items-center justify-center mt-0.5"><Icon.check className="w-3 h-3 text-leaf" /></span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-ink/12">
              <div className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/50 mb-4">¿PREFIERES MARCAR?</div>
              <a href="tel:5550875427" className="font-serif text-ink hover:text-leaf transition block" style={{ fontWeight: 700, fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", letterSpacing: "-0.02em" }}>
                55 5087 5427
              </a>
              <a href="https://wa.me/525550875427" className="mt-3 inline-flex items-center gap-2 text-leaf font-medium"><Icon.wa className="w-4 h-4" /> WhatsApp directo <Icon.arrow className="w-4 h-4" /></a>
            </div>
          </aside>

          {/* form */}
          <form onSubmit={onSubmit} className="lg:col-span-8 reveal bg-ink rounded-xl p-8 lg:p-12 text-paper relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-leaf/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-tortilla/15 blur-3xl pointer-events-none" />

            {!sent && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/55">PASO</span>
                  <div className="flex items-center gap-2">
                    {[1,2].map((s) => (
                      <span key={s} className={`w-8 h-8 rounded-full inline-flex items-center justify-center font-mono text-[12px] ${step === s ? "bg-leaf text-paper" : step > s ? "bg-paper/15 text-paper/80" : "border border-paper/20 text-paper/40"}`}>
                        {step > s ? <Icon.check className="w-4 h-4" /> : s}
                      </span>
                    ))}
                  </div>
                  <span className="h-px flex-1 bg-paper/15" />
                  <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/55">{step === 1 ? "TU PEDIDO" : "TUS DATOS"}</span>
                </div>

                {step === 1 && (
                  <div className="space-y-7 relative">
                    <h3 className="font-serif" style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>¿Qué necesitas imprimir?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(productLabels).map(([k, v]) => (
                        <button key={k} type="button" onClick={() => setForm((f) => ({ ...f, necesidad: k }))} className={`text-left p-4 rounded-lg border transition ${form.necesidad === k ? "border-leaf bg-leaf/10" : "border-paper/15 hover:border-paper/40"}`}>
                          <div className="font-serif text-paper text-[15.5px]" style={{ fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.15 }}>{v}</div>
                          <div className="mt-1 font-mono text-[10px] tracking-wider uppercase text-paper/50">{k}</div>
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">Volumen aproximado</label>
                        <select value={form.volumen} onChange={set("volumen")} className="field !bg-paper/95 !text-ink">
                          <option value="500-1000">500 a 1,000 piezas</option>
                          <option value="1-5000">1,000 a 5,000 piezas</option>
                          <option value="5-20000">5,000 a 20,000 piezas</option>
                          <option value="20-50000">20,000 a 50,000 piezas</option>
                          <option value="50000+">Más de 50,000 piezas</option>
                          <option value="recurrente">Recurrente / mensual</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">¿Para cuándo lo necesitas?</label>
                        <input type="text" value={form.fecha} onChange={set("fecha")} className="field !bg-paper/95 !text-ink" placeholder="Ej. en 3 semanas, fecha exacta o flexible" />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">¿Ya tienes arte / diseño?</label>
                      <div className="inline-flex rounded-md border border-paper/15 overflow-hidden">
                        {[
                          { v: "si",  l: "Sí, lo mando luego" },
                          { v: "no",  l: "No, ayúdenme" },
                          { v: "mas", l: "Tengo logo, falta arte" },
                        ].map((o) => (
                          <button key={o.v} type="button" onClick={() => setForm((f) => ({ ...f, arte: o.v }))} className={`px-4 py-2.5 text-[14px] font-medium transition ${form.arte === o.v ? "bg-leaf text-paper" : "text-paper/70 hover:bg-paper/5"}`}>{o.l}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">Cuéntanos más (opcional)</label>
                      <textarea rows={3} value={form.mensaje} onChange={set("mensaje")} className="field !bg-paper/95 !text-ink resize-none" placeholder="Medidas, tintas, si quieres troquel especial, etc." />
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-paper/15">
                      <span className="font-mono text-[11px] tracking-wider uppercase text-paper/50">Paso 1 de 2</span>
                      <button type="button" onClick={() => setStep(2)} className="btn btn-primary !bg-leaf hover:!bg-[#4f7548]">Continuar <Icon.arrow className="w-4 h-4" /></button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 relative">
                    <h3 className="font-serif" style={{ fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>¿Cómo te contactamos?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">Nombre</label>
                        <input value={form.nombre} onChange={set("nombre")} required className="field !bg-paper/95 !text-ink" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">Empresa</label>
                        <input value={form.empresa} onChange={set("empresa")} className="field !bg-paper/95 !text-ink" placeholder="Tu negocio" />
                      </div>
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">WhatsApp</label>
                        <input value={form.whatsapp} onChange={set("whatsapp")} required type="tel" className="field !bg-paper/95 !text-ink" placeholder="55 0000 0000" />
                      </div>
                      <div>
                        <label className="block font-mono text-[10.5px] tracking-[.16em] uppercase text-paper/55 mb-2">Email</label>
                        <input value={form.email} onChange={set("email")} type="email" className="field !bg-paper/95 !text-ink" placeholder="tu@correo.com" />
                      </div>
                    </div>

                    <div className="bg-paper/5 rounded-lg p-5 border border-paper/10">
                      <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-paper/55 mb-2">RESUMEN</div>
                      <ul className="space-y-1 text-[14px] text-paper/85">
                        <li><span className="text-paper/55">Producto:</span> <strong>{productLabels[form.necesidad]}</strong></li>
                        <li><span className="text-paper/55">Volumen:</span> <strong>{form.volumen}</strong></li>
                        <li><span className="text-paper/55">Cuándo:</span> <strong>{form.fecha || "—"}</strong></li>
                        <li><span className="text-paper/55">Arte:</span> <strong>{form.arte === "si" ? "Lo mando luego" : form.arte === "no" ? "Necesita armarlo" : "Tengo logo, falta arte"}</strong></li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-paper/15">
                      <button type="button" onClick={() => setStep(1)} className="text-paper/70 hover:text-paper inline-flex items-center gap-2 text-[14px] font-medium"><Icon.arrowLeft className="w-4 h-4" /> Volver</button>
                      <button type="submit" className="btn btn-primary !bg-leaf hover:!bg-[#4f7548]">Enviar cotización <Icon.arrow className="w-4 h-4" /></button>
                    </div>
                    <p className="text-paper/50 text-[12px] font-mono">Al enviar aceptas nuestro <a href="#" className="underline">aviso de privacidad</a>.</p>
                  </div>
                )}
              </>
            )}

            {sent && (
              <div className="text-center py-10 relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-leaf text-paper inline-flex items-center justify-center mb-6"><Icon.check className="w-8 h-8" /></div>
                <h3 className="font-serif" style={{ fontWeight: 700, fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", letterSpacing: "-0.02em" }}>¡Cotización recibida!</h3>
                <p className="mt-4 text-paper/75 max-w-md mx-auto text-[16px]" style={{ lineHeight: 1.55 }}>
                  Te respondemos por WhatsApp y correo en menos de 24 horas. Mientras tanto, échale ojo a nuestro catálogo.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="catalogo.html" className="btn btn-primary !bg-leaf">Ver catálogo <Icon.arrow className="w-4 h-4" /></a>
                  <button type="button" onClick={() => { setSent(false); setStep(1); }} className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink">Enviar otra</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function VisitMap() {
  return (
    <section id="mapa" className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="label-mono mb-4">// VISÍTANOS</div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .98, fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}>
              La planta está abierta.<br/><em style={{ fontWeight: 500, color: "#3D5B3A" }}>Date una vuelta.</em>
            </h2>
            <p className="mt-6 text-ink/75 text-[16px]" style={{ lineHeight: 1.6 }}>
              Si quieres ver el papel, tocar las cajas y conocer cómo se imprime — agenda visita y te recibimos con café. Atendemos sin cita previa también, pero si avisas te enseñamos todo el proceso.
            </p>

            <dl className="mt-10 space-y-5">
              {[
                { k: "Dirección",    v: "Ingenieros Mecánicos 91, Nueva Rosita, Iztapalapa, CP 09420, CDMX." },
                { k: "Horario",      v: "L–V 9:00 a 18:00 · Sábado 10:00 a 14:00." },
                { k: "Estacionamiento", v: "Propio, sin costo para visitas." },
                { k: "Metro / camión",  v: "Metro Apatlaco (línea 8) · 14 min caminando." },
              ].map((it) => (
                <div key={it.k} className="border-t border-ink/12 pt-4">
                  <dt className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/45 mb-1.5">{it.k}</dt>
                  <dd className="font-serif text-ink text-[17px]" style={{ fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.4 }}>{it.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary">Cómo llegar <Icon.arrow className="w-4 h-4" /></a>
              <a href="contacto.html#cotizar" className="btn btn-secondary">Agendar visita</a>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="rounded-xl overflow-hidden border border-ink/12 relative bg-cream" style={{ aspectRatio: "4/3" }}>
              <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="300" fill="#F5EFE0" />
                {/* big roads */}
                <g stroke="#A67F5D" strokeWidth="2.5" fill="none" strokeLinecap="round">
                  <path d="M-10 110 Q200 90 410 130" />
                  <path d="M-10 220 L410 200" />
                  <path d="M90 -10 L130 310" />
                  <path d="M250 -10 L280 310" />
                </g>
                {/* secondary */}
                <g stroke="#A67F5D" strokeWidth="1" fill="none" opacity=".7">
                  <path d="M-10 60 L410 75" />
                  <path d="M-10 170 L410 160" />
                  <path d="M-10 270 L410 265" />
                  <path d="M30 -10 L60 310" />
                  <path d="M170 -10 L195 310" />
                  <path d="M330 -10 L355 310" />
                </g>
                {/* tertiary grid */}
                <g stroke="#A67F5D" strokeWidth=".4" fill="none" opacity=".5">
                  {Array.from({ length: 24 }).map((_, i) => <line key={`h${i}`} x1="-10" y1={i*13} x2="410" y2={i*13 + 3} />)}
                  {Array.from({ length: 30 }).map((_, i) => <line key={`v${i}`} y1="-10" x1={i*14} y2="310" x2={i*14 + 4} />)}
                </g>
                {/* blocks */}
                <g fill="#D4B896" opacity=".4">
                  <rect x="45" y="80" width="40" height="25" rx="2" />
                  <rect x="135" y="80" width="40" height="25" rx="2" />
                  <rect x="200" y="80" width="45" height="25" rx="2" />
                  <rect x="285" y="80" width="45" height="25" rx="2" />
                  <rect x="45" y="140" width="40" height="25" rx="2" />
                  <rect x="135" y="180" width="55" height="20" rx="2" />
                  <rect x="285" y="230" width="60" height="25" rx="2" />
                </g>
                {/* park */}
                <g fill="#9DB89A" opacity=".5">
                  <ellipse cx="335" cy="140" rx="35" ry="25" />
                </g>
                <text x="335" y="143" textAnchor="middle" className="font-mono" fill="#1A1A1A" opacity=".55" style={{ fontSize: 7, letterSpacing: ".1em" }}>PARQUE</text>
                {/* pin */}
                <g transform="translate(200,150)">
                  <circle r="32" fill="#3D5B3A" opacity=".12" />
                  <circle r="20" fill="#3D5B3A" opacity=".22" />
                  <circle r="10" fill="#3D5B3A" />
                  <circle r="3.5" fill="#F5EFE0" />
                  <rect x="-44" y="-58" width="88" height="22" rx="3" fill="#1A1A1A" />
                  <text x="0" y="-43" textAnchor="middle" className="font-mono" fill="#F5EFE0" style={{ fontSize: 8.5, letterSpacing: ".08em" }}>HIPERPRINT · 91</text>
                </g>
                {/* labels */}
                <text x="20" y="225" className="font-mono" fill="#1A1A1A" opacity=".55" style={{ fontSize: 7, letterSpacing: ".12em" }}>AV. APATLACO</text>
                <text x="100" y="290" className="font-mono" fill="#1A1A1A" opacity=".55" style={{ fontSize: 7, letterSpacing: ".12em" }}>ING. MECÁNICOS</text>
              </svg>
              <div className="absolute top-4 left-4 font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/60 bg-paper/85 px-3 py-1.5 rounded">PLANTA · CDMX</div>
              <div className="absolute bottom-4 right-4 font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/60 bg-paper/85 px-3 py-1.5 rounded">19.36°N · 99.07°W</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniFAQ() {
  const faqs = [
    { q: "¿Cuánto tarda la cotización?",   a: "Menos de 24 horas hábiles, formal y con desglose." },
    { q: "¿Cuál es el tiraje mínimo?",     a: "500 piezas en bolsas/cajas, 1,000 en papel y portavasos." },
    { q: "¿Hacen el arte sin costo?",      a: "Sí, en tu primera orden de 5,000+ piezas. Después manejamos tarifa preferencial." },
    { q: "¿Envían fuera de CDMX?",         a: "A toda la república, vía paqueterías confiables. El costo va en la cotización." },
  ];
  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <div className="label-mono mb-3">// LO RÁPIDO</div>
            <h2 className="font-serif text-ink" style={{ fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
              Las dudas más comunes.
            </h2>
          </div>
          <a href="productos.html#faq" className="hidden md:inline-flex items-center gap-2 font-medium text-leaf hover:gap-3 transition-all">Ver todas <Icon.arrow className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="reveal py-6 border-t border-ink/12" style={{ transitionDelay: `${i*60}ms` }}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/40">0{i+1}</span>
                <h3 className="font-serif text-ink text-[19px]" style={{ fontWeight: 600, letterSpacing: "-0.015em" }}>{f.q}</h3>
              </div>
              <p className="text-ink/70 text-[15px] pl-7" style={{ lineHeight: 1.55 }}>{f.a}</p>
            </div>
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
    <div id="top" data-screen-label="Contacto">
      <CursorDot />
      <Nav current="contacto" />
      <main>
        <PageHero
          kicker="HABLEMOS · RESPUESTA < 24H"
          title="Cuéntanos qué"
          italic="necesitas imprimir."
          breadcrumb="Contacto"
          lead="Tres canales abiertos y un formulario rápido. El que tú prefieras, el equipo de ventas te contesta el mismo día."
        />
        <Channels />
        <BigForm />
        <VisitMap />
        <MiniFAQ />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
