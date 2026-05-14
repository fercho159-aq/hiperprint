import Link from "next/link";
import { Logo } from "./Logo";
import { FbIcon, IgIcon, WaIcon } from "./icons";
import { buildWhatsAppUrl } from "./whatsapp";

const WA_URL = buildWhatsAppUrl();
const WA_CATALOGO = buildWhatsAppUrl("Hola Hiperprint, me gustaría ver el catálogo.");

interface FooterLink {
  l: string;
  h: string;
  external?: boolean;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
}

const GROUPS: FooterGroup[] = [
  {
    title: "Productos",
    links: [
      { l: "Papel grado alimenticio", h: "/productos#papel" },
      { l: "Cajas para comida", h: "/productos#cajas" },
      { l: "Bolsas de papel", h: "/productos#bolsas" },
      { l: "Línea de temporada", h: "/productos#temporada" },
      { l: "Portavasos y servilletas", h: "/productos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { l: "Nosotros", h: "/nosotros" },
      { l: "Sustentabilidad", h: "/nosotros#eco" },
      { l: "Clientes", h: "/clientes" },
      { l: "Catálogo PDF", h: "/catalogo" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { l: "WhatsApp +52 56 1158 1587", h: WA_URL, external: true },
      { l: "Pedir catálogo PDF", h: WA_CATALOGO, external: true },
      { l: "Iztapalapa, CDMX", h: "/contacto#mapa" },
      { l: "Cotiza online", h: "/contacto" },
    ],
  },
  {
    title: "Síguenos",
    links: [
      { l: "Instagram @hiperprint.mx", h: "https://instagram.com/hiperprint.mx", external: true },
      { l: "Facebook /hiperprint", h: "#", external: true },
      { l: "WhatsApp", h: WA_URL, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-10">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo dark />
            <p
              className="mt-6 font-serif text-cream/90 text-[24px] lg:text-[28px] font-medium"
              style={{ letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              Empaques con <em className="text-tortilla">sabor</em> a México.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-cream/20 inline-flex items-center justify-center hover:bg-leaf hover:border-leaf transition"
                aria-label="WhatsApp"
              >
                <WaIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/hiperprint.mx"
                className="w-11 h-11 rounded-full border border-cream/20 inline-flex items-center justify-center hover:bg-tortilla hover:border-tortilla transition"
                aria-label="Instagram"
              >
                <IgIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-cream/20 inline-flex items-center justify-center hover:bg-kraftDeep hover:border-kraftDeep transition"
                aria-label="Facebook"
              >
                <FbIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <div className="font-mono text-[11px] tracking-[.16em] uppercase text-cream/45 mb-4">
                  {g.title}
                </div>
                <ul className="space-y-2.5 text-[14.5px] text-cream/80">
                  {g.links.map((l) =>
                    l.external ? (
                      <li key={l.l}>
                        <a href={l.h} className="hover:text-paper transition">
                          {l.l}
                        </a>
                      </li>
                    ) : (
                      <li key={l.l}>
                        <Link href={l.h} className="hover:text-paper transition">
                          {l.l}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[11.5px] tracking-[.04em] text-cream/45">
          <span>© 2026 Hiperprint S.A. de C.V. · Todos los derechos reservados.</span>
          <span className="flex items-center gap-5">
            <a href="#" className="hover:text-cream">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:text-cream">
              Términos
            </a>
            <span className="text-cream/30">CDMX · MX</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
