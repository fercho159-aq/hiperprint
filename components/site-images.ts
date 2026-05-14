// Centralized image references for the Hiperprint site.
// Sourced from /Users/fernandotrejo/Developer/Hiperprint/media-manifest.json.
// Edit here when reassigning a real photo to a section.

export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

// Logo / brand
export const LOGO_WORDMARK: SiteImage = {
  src: "/images/logo/hiperprintlogo-01-2.png",
  width: 2098,
  height: 576,
  alt: "Hiperprint",
};

export const LOGO_ISOTYPE: SiteImage = {
  src: "/images/logo/isologo-01.png",
  width: 505,
  height: 506,
  alt: "Hiperprint isologo",
};

// Product photography — food-grade paper variants
export const PAPEL_HERO: SiteImage = {
  src: "/images/home/papelgrado-02.png",
  width: 4167,
  height: 2842,
  alt: "Papel grado alimenticio Hiperprint con marca impresa, sosteniendo cono de comida",
};

export const PAPEL_CUADROS: SiteImage = {
  src: "/images/home/papelgradocuadros-02.png",
  width: 1925,
  height: 1313,
  alt: "Papel grado alimenticio a cuadros rojo y blanco",
};

export const PAPEL_BLANCO: SiteImage = {
  src: "/images/home/papelgradoblanco-02.png",
  width: 1925,
  height: 1313,
  alt: "Papel grado alimenticio liso blanco",
};

export const PAPEL_NAVIDAD: SiteImage = {
  src: "/images/home/papelgradonavidad2-01.png",
  width: 1929,
  height: 1322,
  alt: "Papel grado alimenticio edición Navidad",
};

export const PAPEL_NAVIDAD_2: SiteImage = {
  src: "/images/home/papelgradonavidad-01.png",
  width: 1929,
  height: 1322,
  alt: "Papel grado alimenticio temática Navidad",
};

export const PAPEL_MUERTOS: SiteImage = {
  src: "/images/home/papelgradodiamuertos2-02.png",
  width: 1925,
  height: 1313,
  alt: "Papel grado alimenticio edición Día de Muertos",
};

export const PAPEL_CONO: SiteImage = {
  src: "/images/home/papelgradocono-02.png",
  width: 1925,
  height: 1313,
  alt: "Cono de papel grado alimenticio con comida",
};

export const PAPEL_GENERICO: SiteImage = {
  src: "/images/home/papelgrado-02-1.png",
  width: 1925,
  height: 1313,
  alt: "Papel grado alimenticio impreso con marca",
};

export const PRODUCTO_NAVIDAD_REDES: SiteImage = {
  src: "/images/productos/papelnavidadredes-02.png",
  width: 3929,
  height: 3061,
  alt: "Papel grado alimenticio edición Navidad — galería de producto",
};

// Cajas y bolsas
export const CAJA: SiteImage = {
  src: "/images/home/caja-02.png",
  width: 1925,
  height: 1313,
  alt: "Caja personalizada para comida impresa con marca",
};

export const BOLSA: SiteImage = {
  src: "/images/home/bolsa-02.png",
  width: 1925,
  height: 1313,
  alt: "Bolsa de papel kraft impresa con marca",
};

export const BOLSA_BLAHO: SiteImage = {
  src: "/images/home/bolsablaho-02.png",
  width: 1925,
  height: 1313,
  alt: "Bolsa de papel impresa para la marca Blaho",
};

export const FLAUTAS: SiteImage = {
  src: "/images/home/flautas-02.png",
  width: 1925,
  height: 1313,
  alt: "Porta-flautas de papel personalizado",
};

export const PORTAVASO: SiteImage = {
  src: "/images/home/portavaso-02.png",
  width: 1925,
  height: 1313,
  alt: "Portavaso de papel personalizado",
};

export const APLICACION: SiteImage = {
  src: "/images/home/4-APLICACION.png",
  width: 1083,
  height: 1209,
  alt: "Aplicación: comida servida en empaques Hiperprint",
};

// Slider backgrounds
export const SLIDE_1: SiteImage = {
  src: "/images/home/fondoslider-02.png",
  width: 1925,
  height: 1313,
  alt: "Hiperprint — fondo hero 1",
};

export const SLIDE_2: SiteImage = {
  src: "/images/home/fondoslider4-02.png",
  width: 1925,
  height: 1313,
  alt: "Hiperprint — fondo hero 2",
};

export const SLIDE_3: SiteImage = {
  src: "/images/home/fondoslider8-01.png",
  width: 1929,
  height: 1322,
  alt: "Hiperprint — fondo hero 3",
};

// Icon-style product shots (used as accent images / value props)
export const ICONO_1: SiteImage = {
  src: "/images/home/icono-02.png",
  width: 473,
  height: 309,
  alt: "Hiperprint — icono de sección",
};

export const ICONO_2: SiteImage = {
  src: "/images/home/icono-02-1.png",
  width: 391,
  height: 396,
  alt: "Hiperprint — icono de sección",
};

export const ICONO_VENTAS: SiteImage = {
  src: "/images/home/ventas-02.png",
  width: 335,
  height: 396,
  alt: "Hiperprint — icono de ventas",
};

export const ICONO_MUNDO: SiteImage = {
  src: "/images/home/mundo-02.png",
  width: 335,
  height: 443,
  alt: "Hiperprint — icono mundo / alcance nacional",
};

// Client / brand logos. Order: alphabetical by brand display name.
export interface ClientLogo {
  src: string;
  width: number;
  height: number;
  name: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Blaho", src: "/images/clientes/blaho-01.png", width: 706, height: 433 },
  { name: "Burguesía", src: "/images/clientes/burguesia-01.png", width: 706, height: 433 },
  { name: "Capricho", src: "/images/clientes/capricho-02.png", width: 705, height: 429 },
  { name: "Choper", src: "/images/clientes/choper-01.png", width: 706, height: 433 },
  { name: "Chopy", src: "/images/clientes/chopy-01.png", width: 706, height: 433 },
  { name: "Dulzone", src: "/images/clientes/dulzone-01.png", width: 706, height: 433 },
  { name: "El Bol", src: "/images/clientes/elbol-01.png", width: 706, height: 433 },
  { name: "Flautas", src: "/images/clientes/flautas-01.png", width: 706, height: 433 },
  { name: "Häagen-Dazs", src: "/images/clientes/hagendaz-02.png", width: 705, height: 429 },
  { name: "La Castellana", src: "/images/clientes/castellana-02.png", width: 705, height: 429 },
  { name: "La Parcela", src: "/images/clientes/parcela-02.png", width: 705, height: 429 },
  { name: "Lidanys", src: "/images/clientes/lidanys-01.png", width: 706, height: 433 },
  { name: "Los de María", src: "/images/clientes/losdemaria-01.png", width: 706, height: 433 },
  { name: "Magic", src: "/images/clientes/magic-02.png", width: 705, height: 429 },
  { name: "Pintoxs", src: "/images/clientes/pintoxs-01.png", width: 706, height: 433 },
  { name: "Price Shoes", src: "/images/clientes/priceshoes-02.png", width: 705, height: 429 },
  { name: "Taquearte", src: "/images/clientes/taquearte-02.png", width: 705, height: 429 },
  { name: "Tizonsito", src: "/images/clientes/tizonsito-01.png", width: 706, height: 433 },
];

export function findClientLogo(name: string): ClientLogo | undefined {
  const normalized = name.toLowerCase();
  return CLIENT_LOGOS.find(
    (l) =>
      l.name.toLowerCase() === normalized ||
      l.name.toLowerCase().replace(/[^a-z]/g, "") === normalized.replace(/[^a-z]/g, ""),
  );
}
