/* Hiperprint — shared building blocks (Icon, Nav, Footer, ProductMockup, etc.) */

const { useState: __useState, useEffect: __useEffect, useRef: __useRef } = React;

/* ─────────────────────────────────────────── icons */
const Icon = {
  arrow: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  arrowLeft: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>),
  arrowDown: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M12 5v14M6 13l6 6 6-6"/></svg>),
  leaf: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 3c-9 1-15 6-15 14 0 2 1 4 1 4M21 3c-1 9-5 13-9 14M21 3c-4 1-7 3-9 5"/></svg>),
  recycle: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M7 8l-3 5 3 5M17 8l3 5-3 5M9 5l3-2 3 2M12 3v8M5 13h8M16 18l-4 0M11 11l-3 5h6"/></svg>),
  pin: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>),
  phone: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>),
  mail: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 7l9 7 9-7"/></svg>),
  ig: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>),
  fb: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M14 8h2.5V5H14c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9c0-.5.5-1 1-1z"/></svg>),
  wa: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>),
  check: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12.5l4 4 10-10"/></svg>),
  star: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2.5l2.6 6 6.4.5-4.9 4.2 1.5 6.3L12 16.2 6.4 19.5l1.5-6.3L3 9l6.4-.5z"/></svg>),
  brush: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 3l7 7-9 9-3-3M7 17l-3 4 4-3M9 12l3 3"/></svg>),
  truck: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7M6 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z"/></svg>),
  tag: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="7.5" r="1.3"/></svg>),
  layers: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/></svg>),
  award: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>),
  burger: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M4 8h16M4 16h16"/></svg>),
  x: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>),
  plus: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>),
  minus: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M5 12h14"/></svg>),
  quote: (p) => (<svg viewBox="0 0 32 32" fill="currentColor" {...p}><path d="M10 8c-3 0-6 3-6 7v9h9v-9H8c0-2 1-4 3-5l-1-2zm14 0c-3 0-6 3-6 7v9h9v-9h-5c0-2 1-4 3-5l-1-2z"/></svg>),
  factory: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 21V10l5 3V10l5 3V8l8-3v16H3zM7 17h2M11 17h2M15 17h2"/></svg>),
  heart: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-7 4.5-7 1.8 0 3.4 1 4.5 2.5C13.1 6 14.7 5 16.5 5 20 5 22.5 8.5 21 12c-2 4.5-9 9-9 9z"/></svg>),
  sun: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>),
};

/* ─────────────────────────────────────────── reveal-on-scroll */
function useReveal() {
  __useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────── cursor */
function CursorDot({ enabled = true }) {
  const ref = __useRef(null);
  __useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const dot = ref.current; if (!dot) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; dot.classList.add('show'); };
    const tick = () => { x += (tx - x) * 0.22; y += (ty - y) * 0.22; dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`; raf = requestAnimationFrame(tick); };
    const overInteractive = (e) => {
      const t = e.target;
      if (t.closest('a, button, .btn, [data-cursor], input, textarea, select')) dot.classList.add('active');
      else dot.classList.remove('active');
    };
    const onLeave = () => dot.classList.remove('show');
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', overInteractive);
    window.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseover', overInteractive); window.removeEventListener('mouseleave', onLeave); };
  }, [enabled]);
  if (!enabled) return null;
  return <div className="cursor-dot" ref={ref} />;
}

/* ─────────────────────────────────────────── product mockup */
function ProductMockup({ label, tone = "kraft", aspect = "4/3", className = "", note, children }) {
  const tones = {
    kraft:    "placeholder-kraft",
    cream:    "bg-cream",
    paper:    "bg-paper",
    sage:     "bg-sage/80",
    deep:     "bg-kraftDeep",
    tortilla: "bg-tortilla",
    ink:      "bg-ink",
  };
  const textColor = tone === "ink" || tone === "tortilla" || tone === "deep" ? "text-paper/80" : "text-ink/65";
  return (
    <div className={`${tones[tone]} ${className} relative w-full overflow-hidden rounded-lg fine-grain`} style={{ aspectRatio: aspect }}>
      {children}
      <div className={`absolute left-4 top-4 ${textColor}`}>
        <span className="placeholder-tag">{`// ${label}`}</span>
      </div>
      {note && <div className={`absolute right-4 bottom-4 ${textColor}`}><span className="placeholder-tag">{note}</span></div>}
    </div>
  );
}

/* ─────────────────────────────────────────── logo */
function Logo({ dark = false }) {
  const c = dark ? "#F5EFE0" : "#1A1A1A";
  return (
    <a href="index.html" className="inline-flex items-center gap-2.5 group" aria-label="Hiperprint, inicio">
      <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-md" style={{ background: "#3D5B3A" }}>
        <span className="font-serif text-paper text-[20px] leading-none" style={{ fontWeight: 800 }}>H</span>
        <span className="absolute -right-1 -bottom-1 w-2.5 h-2.5 rounded-sm" style={{ background: "#C84B31" }} />
      </span>
      <span className="font-serif text-[22px] tracking-tight" style={{ color: c, fontWeight: 700, letterSpacing: "-0.02em" }}>
        Hiperprint<span style={{ color: "#C84B31" }}>.</span>
      </span>
    </a>
  );
}

/* ─────────────────────────────────────────── top-bar */
function TopBar() {
  return (
    <div className="hidden md:block bg-ink text-paper/75 text-[12px]" style={{ letterSpacing: '.02em' }}>
      <div className="mx-auto max-w-site px-6 lg:px-10 flex items-center justify-between h-9 font-mono">
        <div className="flex items-center gap-6">
          <a href="tel:5550875427" className="hover:text-paper flex items-center gap-2"><Icon.phone className="w-3.5 h-3.5" /> 55 5087 5427</a>
          <a href="mailto:ventas@hiperprint.mx" className="hover:text-paper flex items-center gap-2"><Icon.mail className="w-3.5 h-3.5" /> ventas@hiperprint.mx</a>
          <a href="https://instagram.com/hiperprint.mx" className="hover:text-paper flex items-center gap-2"><Icon.ig className="w-3.5 h-3.5" /> @hiperprint.mx</a>
        </div>
        <div className="flex items-center gap-6 text-paper/55">
          <span>L–V 9:00–18:00</span>
          <span className="hidden lg:inline">ENVÍOS CDMX · NACIONAL</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────── nav */
function Nav({ current = "inicio" }) {
  const [scrolled, setScrolled] = __useState(false);
  const [open, setOpen] = __useState(false);
  __useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { href: "index.html",      key: "inicio",    label: "Inicio" },
    { href: "productos.html",  key: "productos", label: "Productos" },
    { href: "catalogo.html",   key: "catalogo",  label: "Catálogo" },
    { href: "nosotros.html",   key: "nosotros",  label: "Nosotros" },
    { href: "clientes.html",   key: "clientes",  label: "Clientes" },
    { href: "contacto.html",   key: "contacto",  label: "Contacto" },
  ];
  return (
    <>
      <TopBar />
      <div className={`nav-shell sticky top-0 z-40 ${scrolled ? "bg-paper/92 backdrop-blur-md border-b border-ink/8 shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "bg-transparent"}`}>
        <nav className="mx-auto max-w-site px-6 lg:px-10 flex items-center justify-between h-[72px]">
          <Logo />
          <ul className="hidden lg:flex items-center gap-9 text-[14.5px] text-ink/85 font-medium">
            {links.map((l) => {
              const active = current === l.key;
              return (
                <li key={l.href}>
                  <a href={l.href} className={`relative py-1 inline-block group ${active ? "text-leaf" : "hover:text-leaf"}`}>
                    {l.label}
                    <span className={`absolute left-0 right-0 -bottom-0.5 h-px bg-leaf transition-transform duration-300 origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/525550875427" className="hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-full border border-ink/15 text-leaf hover:bg-leaf hover:text-paper hover:border-leaf transition" aria-label="WhatsApp">
              <Icon.wa className="w-4 h-4" />
            </a>
            <a href="contacto.html" className="btn btn-primary hidden sm:inline-flex">
              Cotiza ahora <Icon.arrow className="w-4 h-4" />
            </a>
            <button onClick={() => setOpen(true)} className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-md border border-ink/15" aria-label="Abrir menú">
              <Icon.burger className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      <div className={`mobile-menu fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/40 ${open ? "opacity-100" : "opacity-0"} transition-opacity`} />
        <aside className={`absolute right-0 top-0 h-full w-[86%] max-w-[380px] bg-paper p-6 shadow-2xl transform ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <button onClick={() => setOpen(false)} className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-ink/15" aria-label="Cerrar menú"><Icon.x className="w-5 h-5" /></button>
          </div>
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.href}>
                <a href={l.href} className={`block py-3.5 border-b border-ink/10 font-serif text-[28px] ${current === l.key ? "text-leaf" : ""}`} style={{ fontWeight: 600 }}>
                  <span className="font-mono text-[11px] text-ink/40 mr-3">0{i+1}</span>{l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <a href="contacto.html" className="btn btn-primary w-full justify-center">Cotiza ahora <Icon.arrow className="w-4 h-4" /></a>
            <a href="https://wa.me/525550875427" className="btn btn-secondary w-full justify-center"><Icon.wa className="w-4 h-4" /> WhatsApp</a>
          </div>
          <div className="mt-10 text-[13px] text-ink/55 font-mono space-y-1.5">
            <div>55 5087 5427</div>
            <div>ventas@hiperprint.mx</div>
            <div>@hiperprint.mx</div>
          </div>
        </aside>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────── footer */
function Footer() {
  const groups = [
    { title: "Productos", links: [
      { l: "Papel grado alimenticio", h: "productos.html#papel" },
      { l: "Cajas para comida", h: "productos.html#cajas" },
      { l: "Bolsas de papel", h: "productos.html#bolsas" },
      { l: "Línea de temporada", h: "productos.html#temporada" },
      { l: "Portavasos y servilletas", h: "productos.html" },
    ]},
    { title: "Empresa", links: [
      { l: "Nosotros", h: "nosotros.html" },
      { l: "Sustentabilidad", h: "nosotros.html#eco" },
      { l: "Clientes", h: "clientes.html" },
      { l: "Catálogo PDF", h: "catalogo.html" },
    ]},
    { title: "Contacto", links: [
      { l: "55 5087 5427", h: "tel:5550875427" },
      { l: "ventas@hiperprint.mx", h: "mailto:ventas@hiperprint.mx" },
      { l: "Iztapalapa, CDMX", h: "contacto.html#mapa" },
      { l: "Cotiza online", h: "contacto.html" },
    ]},
    { title: "Síguenos", links: [
      { l: "Instagram @hiperprint.mx", h: "https://instagram.com/hiperprint.mx" },
      { l: "Facebook /hiperprint", h: "#" },
      { l: "WhatsApp", h: "https://wa.me/525550875427" },
    ]},
  ];
  return (
    <footer className="bg-ink text-cream pt-20 pb-10">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-6 font-serif text-cream/90 text-[24px] lg:text-[28px]" style={{ fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Empaques con <em style={{ color: "#C84B31" }}>sabor</em> a México.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="https://wa.me/525550875427" className="w-11 h-11 rounded-full border border-cream/20 inline-flex items-center justify-center hover:bg-leaf hover:border-leaf transition" aria-label="WhatsApp"><Icon.wa className="w-4 h-4" /></a>
              <a href="https://instagram.com/hiperprint.mx" className="w-11 h-11 rounded-full border border-cream/20 inline-flex items-center justify-center hover:bg-tortilla hover:border-tortilla transition" aria-label="Instagram"><Icon.ig className="w-4 h-4" /></a>
              <a href="#" className="w-11 h-11 rounded-full border border-cream/20 inline-flex items-center justify-center hover:bg-kraftDeep hover:border-kraftDeep transition" aria-label="Facebook"><Icon.fb className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="font-mono text-[11px] tracking-[.16em] uppercase text-cream/45 mb-4">{g.title}</div>
                <ul className="space-y-2.5 text-[14.5px] text-cream/80">
                  {g.links.map((l) => (<li key={l.l}><a href={l.h} className="hover:text-paper transition">{l.l}</a></li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[11.5px] tracking-[.04em] text-cream/45">
          <span>© 2026 Hiperprint S.A. de C.V. · Todos los derechos reservados.</span>
          <span className="flex items-center gap-5">
            <a href="#" className="hover:text-cream">Aviso de privacidad</a>
            <a href="#" className="hover:text-cream">Términos</a>
            <span className="text-cream/30">CDMX · MX</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────── page hero (shared chrome) */
function PageHero({ kicker, title, italic, lead, breadcrumb }) {
  return (
    <section className="grain relative" style={{ background: "#D4B896" }}>
      <div className="mx-auto max-w-site px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="flex items-center gap-3 mb-10 font-mono text-[11px] tracking-[.18em] uppercase text-ink/60">
          <a href="index.html" className="hover:text-ink">Inicio</a>
          <span className="text-ink/30">/</span>
          <span className="text-ink">{breadcrumb || kicker}</span>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <span className="label-mono">{kicker}</span>
          <span className="h-px flex-1 max-w-[180px] bg-ink/20" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h1 className="lg:col-span-8 font-serif text-ink" style={{ fontWeight: 800, letterSpacing: "-0.035em", lineHeight: ".94", fontSize: "clamp(2.8rem, 7vw, 6rem)" }}>
            <span className="line-mask"><span style={{ animationDelay: ".05s" }}>{title}</span></span>
            {italic && <span className="line-mask"><span style={{ animationDelay: ".18s", fontStyle: "italic", fontWeight: 500, color: "#3D5B3A" }}>{italic}</span></span>}
          </h1>
          {lead && (
            <p className="lg:col-span-4 text-ink/75 text-[17px] lg:text-[18px] lg:pb-3" style={{ lineHeight: 1.5 }}>{lead}</p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── final CTA strip */
function FinalCTA() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/55 mb-4">// HABLEMOS</div>
            <h2 className="font-serif" style={{ fontWeight: 700, letterSpacing: "-0.03em", lineHeight: .96, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
              ¿Listo para imprimir<br/><em style={{ fontWeight: 500, color: "#C84B31" }}>algo bonito</em>?
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <a href="contacto.html" className="btn btn-primary">Cotiza tu pedido <Icon.arrow className="w-4 h-4" /></a>
            <a href="https://wa.me/525550875427" className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink"><Icon.wa className="w-4 h-4" /> WhatsApp directo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── export to window */
Object.assign(window, {
  Icon, useReveal, CursorDot, ProductMockup, Logo, TopBar, Nav, Footer, PageHero, FinalCTA,
});
