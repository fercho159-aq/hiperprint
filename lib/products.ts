import {
  BOLSA,
  BOLSA_BLAHO,
  CAJA,
  FLAUTAS,
  PAPEL_BLANCO,
  PAPEL_CUADROS,
  PAPEL_GENERICO,
  PAPEL_HERO,
  PAPEL_MUERTOS,
  PAPEL_NAVIDAD,
  PAPEL_NAVIDAD_2,
  PORTAVASO,
  PRODUCTO_NAVIDAD_REDES,
  type SiteImage,
} from "@/components/site-images";

export type ProductCategory = "papel" | "cajas" | "bolsas" | "temporada";

export interface ConfigOption {
  id: string;
  label: string;
  hint?: string;
}

export interface ConfigField {
  id: "size" | "qty" | "material" | "ink";
  label: string;
  options: ConfigOption[];
}

export interface Product {
  id: number;
  sku: string;
  name: string;
  cat: ProductCategory;
  image: SiteImage;
  rows: number;
  blurb: string;
  config: ConfigField[];
}

export const CATEGORY_LABEL: Record<ProductCategory, string> = {
  papel: "Papel",
  cajas: "Cajas",
  bolsas: "Bolsas",
  temporada: "Línea temporada",
};

const PAPEL_CONFIG: ConfigField[] = [
  {
    id: "size",
    label: "Tamaño",
    options: [
      { id: "30x30", label: "30 × 30 cm" },
      { id: "35x35", label: "35 × 35 cm" },
      { id: "40x40", label: "40 × 40 cm" },
    ],
  },
  {
    id: "qty",
    label: "Tiraje",
    options: [
      { id: "1000", label: "1,000 piezas" },
      { id: "2500", label: "2,500 piezas" },
      { id: "5000", label: "5,000 piezas" },
      { id: "10000", label: "10,000 piezas" },
    ],
  },
  {
    id: "material",
    label: "Gramaje",
    options: [
      { id: "28", label: "28 grs antigrasa" },
      { id: "40", label: "40 grs siliconado" },
    ],
  },
  {
    id: "ink",
    label: "Impresión",
    options: [
      { id: "blank", label: "Sin imprimir" },
      { id: "1c", label: "1 tinta" },
      { id: "2c", label: "2 tintas" },
      { id: "4c", label: "4 colores · base agua" },
    ],
  },
];

const CAJA_CONFIG: ConfigField[] = [
  {
    id: "size",
    label: "Tamaño",
    options: [
      { id: "ch", label: "Chica" },
      { id: "md", label: "Mediana" },
      { id: "gr", label: "Grande" },
      { id: "esp", label: "Especial / a medida" },
    ],
  },
  {
    id: "qty",
    label: "Tiraje",
    options: [
      { id: "500", label: "500 piezas" },
      { id: "1000", label: "1,000 piezas" },
      { id: "2500", label: "2,500 piezas" },
      { id: "5000", label: "5,000 piezas" },
    ],
  },
  {
    id: "material",
    label: "Material",
    options: [
      { id: "k12", label: "Kraft 12pt" },
      { id: "k14", label: "Kraft 14pt" },
      { id: "b18", label: "Blanco 18pt plastificado" },
    ],
  },
  {
    id: "ink",
    label: "Impresión",
    options: [
      { id: "blank", label: "Sin imprimir" },
      { id: "1c", label: "1 tinta" },
      { id: "4c", label: "4 colores" },
      { id: "fol", label: "4 colores + foil" },
    ],
  },
];

const BOLSA_CONFIG: ConfigField[] = [
  {
    id: "size",
    label: "Tamaño",
    options: [
      { id: "ch", label: "Chica" },
      { id: "md", label: "Mediana" },
      { id: "gr", label: "Grande" },
      { id: "esp", label: "Especial / a medida" },
    ],
  },
  {
    id: "qty",
    label: "Tiraje",
    options: [
      { id: "500", label: "500 piezas" },
      { id: "1000", label: "1,000 piezas" },
      { id: "2500", label: "2,500 piezas" },
      { id: "5000", label: "5,000 piezas" },
    ],
  },
  {
    id: "material",
    label: "Papel · asa",
    options: [
      { id: "k80-c", label: "Kraft 80 grs · cordón" },
      { id: "k100-c", label: "Kraft 100 grs · cordón" },
      { id: "k120-p", label: "Kraft 120 grs · plana" },
      { id: "bl-c", label: "Blanca 100 grs · cordón" },
    ],
  },
  {
    id: "ink",
    label: "Impresión",
    options: [
      { id: "blank", label: "Sin imprimir" },
      { id: "1c", label: "1 tinta" },
      { id: "2c", label: "2 tintas" },
      { id: "4c", label: "4 colores" },
    ],
  },
];

const TEMP_CONFIG: ConfigField[] = [
  {
    id: "size",
    label: "Pieza",
    options: [
      { id: "papel", label: "Papel 35×35" },
      { id: "bolsa", label: "Bolsa mediana" },
      { id: "caja", label: "Caja burger" },
      { id: "combo", label: "Combo papel + bolsa + caja" },
    ],
  },
  {
    id: "qty",
    label: "Tiraje",
    options: [
      { id: "500", label: "500 piezas" },
      { id: "1000", label: "1,000 piezas" },
      { id: "2500", label: "2,500 piezas" },
    ],
  },
  {
    id: "material",
    label: "Diseño",
    options: [
      { id: "base", label: "Diseño base catálogo" },
      { id: "marca", label: "Diseño base + mi marca" },
      { id: "custom", label: "Diseño 100% personalizado" },
    ],
  },
  {
    id: "ink",
    label: "Acabado",
    options: [
      { id: "std", label: "Impresión estándar" },
      { id: "foil", label: "Con foil metálico" },
      { id: "rel", label: "Con relieve / hot stamping" },
    ],
  },
];

function configFor(cat: ProductCategory): ConfigField[] {
  if (cat === "papel") return PAPEL_CONFIG;
  if (cat === "cajas") return CAJA_CONFIG;
  if (cat === "bolsas") return BOLSA_CONFIG;
  return TEMP_CONFIG;
}

const RAW: Omit<Product, "config">[] = [
  { id: 1, sku: "P-040-CUA-01", name: "Papel hamburguesa cuadros", cat: "papel", image: PAPEL_CUADROS, rows: 1, blurb: "Clásico cuadros rojo y blanco. Antigrasa 40 grs. Listo para hamburguesa, hot dog o taco." },
  { id: 2, sku: "C-PIZ-G-K-04", name: "Caja pizza grande kraft", cat: "cajas", image: CAJA, rows: 2, blurb: "Caja kraft 14pt troquelada. Armado en 3 segundos. Ventilación lateral incluida." },
  { id: 3, sku: "B-K-AC-M-12", name: "Bolsa kraft asa cordón M", cat: "bolsas", image: BOLSA, rows: 1, blurb: "Bolsa kraft 100 grs con asa de cordón reforzada. Aguanta 5 kg sin problema." },
  { id: 4, sku: "P-028-IMP-07", name: "Papel crepa impreso bicolor", cat: "papel", image: PAPEL_GENERICO, rows: 2, blurb: "Papel 28 grs siliconado. Impresión bicolor base agua para crepa, taco o postre." },
  { id: 5, sku: "P-PV-HEX-02", name: "Portavasos kraft hex", cat: "papel", image: PORTAVASO, rows: 1, blurb: "Portavasos kraft hexagonal para 2 o 4 vasos. Troquel rígido, branding visible." },
  { id: 6, sku: "C-HD-R-03", name: "Caja hot dog rojo", cat: "cajas", image: FLAUTAS, rows: 1, blurb: "Caja troquelada hot dog. Rojo flexo · interior blanco. Armado plano." },
  { id: 7, sku: "B-K-CHI-PAN-01", name: "Bolsa pan kraft chica", cat: "bolsas", image: BOLSA_BLAHO, rows: 2, blurb: "Bolsa kraft 80 grs fondo plano para panadería. Ventana opcional." },
  { id: 8, sku: "P-040-CUA-V-09", name: "Papel tacos cuadrille verde", cat: "papel", image: PAPEL_BLANCO, rows: 1, blurb: "Papel 40 grs antigrasa, cuadrille verde sobre crudo. Ideal taquería." },
  { id: 9, sku: "T-DM-2025-A", name: "Edición Día de Muertos 2025", cat: "temporada", image: PAPEL_MUERTOS, rows: 2, blurb: "Línea Día de Muertos. Papel picado, cempasúchil y catrinas. Tiraje limitado." },
  { id: 10, sku: "T-HEL-P-2026", name: "Línea helados pastel", cat: "temporada", image: PRODUCTO_NAVIDAD_REDES, rows: 1, blurb: "Línea verano helados, paleta pastel. Vasos, cucharas y servilletas a juego." },
  { id: 11, sku: "C-BU-M-K-01", name: "Caja burger M kraft", cat: "cajas", image: CAJA, rows: 1, blurb: "Caja burger mediana kraft 14pt. Cierre seguro, ventilación lateral." },
  { id: 12, sku: "B-BL-PR-L-08", name: "Bolsa blanca premium L", cat: "bolsas", image: BOLSA, rows: 2, blurb: "Bolsa blanca 120 grs asa cordón. Acabado premium para boutique de comida." },
  { id: 13, sku: "P-040-PER-MO-11", name: "Papel periódico monocromo", cat: "papel", image: PAPEL_HERO, rows: 1, blurb: "Papel 40 grs estampado periódico monocromo. Estilo retro americano." },
  { id: 14, sku: "T-NV-2025-B", name: "Edición Navidad 2025", cat: "temporada", image: PAPEL_NAVIDAD, rows: 1, blurb: "Línea Navidad 2025: rojo, verde y foil oro. Papel, bolsa y caja a juego." },
  { id: 15, sku: "C-PS-VEN-05", name: "Caja postre ventana", cat: "cajas", image: FLAUTAS, rows: 1, blurb: "Caja postre con ventana PLA biodegradable. Muestra el producto sin abrir." },
  { id: 16, sku: "B-K-DEL-XL-14", name: "Bolsa entrega delivery", cat: "bolsas", image: BOLSA_BLAHO, rows: 2, blurb: "Bolsa kraft XL fondo cuadrado para delivery. Aguanta envío caliente." },
  { id: 17, sku: "P-040-PER-22", name: "Papel hamburguesa periódico", cat: "papel", image: PAPEL_GENERICO, rows: 1, blurb: "Papel 40 grs antigrasa con estampado periódico, estilo diner americano." },
  { id: 18, sku: "T-PA-2026-A", name: "Línea patrias 16 septiembre", cat: "temporada", image: PAPEL_NAVIDAD_2, rows: 1, blurb: "Línea fiestas patrias. Verde, blanco y rojo. Para temporada septiembre." },
  { id: 19, sku: "C-PIZ-C-BL-02", name: "Caja pizza chica blanca", cat: "cajas", image: CAJA, rows: 1, blurb: "Caja pizza chica cartoncillo blanco plastificado. Personal o porción individual." },
  { id: 20, sku: "B-K-BAG-L-06", name: "Bolsa baguette larga", cat: "bolsas", image: BOLSA, rows: 1, blurb: "Bolsa kraft larga para baguette o pan artesanal. Ventana lateral opcional." },
];

export const PRODUCTS: Product[] = RAW.map((p) => ({ ...p, config: configFor(p.cat) }));

export function getProduct(sku: string): Product | undefined {
  return PRODUCTS.find((p) => p.sku === sku);
}

export function allSkus(): string[] {
  return PRODUCTS.map((p) => p.sku);
}
