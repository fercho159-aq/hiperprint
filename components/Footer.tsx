import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./icons";

const GROUPS = [
  {
    title: "Productos",
    links: [
      { l: "Cajas para comida", h: "/productos#cajas" },
      { l: "Contenedores", h: "/productos#contenedores" },
      { l: "Charolas y conos", h: "/productos#charolas" },
      { l: "Línea de temporada", h: "/productos#temporada" },
      { l: "Catálogo completo", h: "/catalogo" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { l: "Nosotros", h: "/nosotros" },
      { l: "Sustentabilidad", h: "/nosotros#eco" },
      { l: "Clientes", h: "/clientes" },
      { l: "Catálogo", h: "/catalogo" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { l: "55 5087 5427", h: "tel:5550875427" },
      { l: "ventas@hiperprint.mx", h: "mailto:ventas@hiperprint.mx" },
      { l: "Iztapalapa, CDMX", h: "/contacto#mapa" },
      { l: "Cotiza online", h: "/contacto" },
    ],
  },
  {
    title: "Síguenos",
    links: [
      { l: "Instagram @hiperprint.mx", h: "https://instagram.com/hiperprint.mx" },
      { l: "Facebook /hiperprint", h: "#" },
      { l: "WhatsApp", h: "https://wa.me/525550875427" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper/90 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-red/15 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-site px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo dark withTagline />
            <p className="mt-6 font-sans text-paper text-[26px] lg:text-[30px]" style={{ fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              Empaques fabricados <span style={{ color: "#FDC42D" }}>en México</span>.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="https://wa.me/525550875427" className="w-11 h-11 rounded-full border-2 border-paper/20 inline-flex items-center justify-center hover:bg-red hover:border-red transition" aria-label="WhatsApp"><Icon.wa className="w-4 h-4" /></a>
              <a href="https://instagram.com/hiperprint.mx" className="w-11 h-11 rounded-full border-2 border-paper/20 inline-flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition" aria-label="Instagram"><Icon.ig className="w-4 h-4" /></a>
              <a href="#" className="w-11 h-11 rounded-full border-2 border-paper/20 inline-flex items-center justify-center hover:bg-blue hover:border-blue transition" aria-label="Facebook"><Icon.fb className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <div className="font-mono text-[11px] tracking-[.16em] uppercase text-gold mb-4 font-bold">{g.title}</div>
                <ul className="space-y-2.5 text-[14.5px] text-paper/75">
                  {g.links.map((l) =>
                    l.h.startsWith("/") ? (
                      <li key={l.l}><Link href={l.h} className="hover:text-paper transition">{l.l}</Link></li>
                    ) : (
                      <li key={l.l}><a href={l.h} className="hover:text-paper transition">{l.l}</a></li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[11.5px] tracking-[.04em] text-paper/45">
          <span>© 2026 Hiperprint S.A. de C.V. · Todos los derechos reservados.</span>
          <span className="flex items-center gap-5">
            <a href="#" className="hover:text-paper">Aviso de privacidad</a>
            <a href="#" className="hover:text-paper">Términos</a>
            <span className="text-paper/30">CDMX · MX</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
