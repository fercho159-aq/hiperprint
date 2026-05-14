import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/productos/FAQ";
import { ArrowIcon, CheckIcon } from "@/components/icons";
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
  PORTAVASO,
  PRODUCTO_NAVIDAD_REDES,
  type SiteImage,
} from "@/components/site-images";

interface MockMini {
  image: SiteImage;
  aspect: string;
}

interface SpecRow {
  k: string;
  v: string;
}

interface ProductLineData {
  id: string;
  n: string;
  name: string;
  tagline: string;
  desc: string;
  specs: SpecRow[];
  bullets: string[];
  mocks: MockMini[];
}

const LINES: ProductLineData[] = [
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
    bullets: [
      "Resiste grasas y temperaturas hasta 220°C",
      "Apto para hornos y freidoras",
      "Diseños listos: cuadros, periódico, marca propia",
    ],
    mocks: [
      { image: PAPEL_HERO, aspect: "4/5" },
      { image: PAPEL_CUADROS, aspect: "1/1" },
      { image: PAPEL_BLANCO, aspect: "1/1" },
    ],
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
    bullets: [
      "Más de 20 troqueles base disponibles",
      "Diseñamos tu troquel a la medida sin costo",
      "Compatible con holders y portavasos",
    ],
    mocks: [
      { image: CAJA, aspect: "4/5" },
      { image: FLAUTAS, aspect: "1/1" },
      { image: PORTAVASO, aspect: "1/1" },
    ],
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
    bullets: [
      "100% papel, sin plastificados",
      "Aguanta hasta 5 kg sin problema",
      "Branding visible a 5 metros",
    ],
    mocks: [
      { image: BOLSA, aspect: "4/5" },
      { image: BOLSA_BLAHO, aspect: "1/1" },
      { image: PAPEL_GENERICO, aspect: "1/1" },
    ],
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
    bullets: [
      "Diseños originales año con año",
      "Reservación de cupos en alta temporada",
      "Combo papel + bolsa + caja con descuento",
    ],
    mocks: [
      { image: PAPEL_MUERTOS, aspect: "4/5" },
      { image: PAPEL_NAVIDAD, aspect: "1/1" },
      { image: PRODUCTO_NAVIDAD_REDES, aspect: "1/1" },
    ],
  },
];

interface ProcessStep {
  n: string;
  t: string;
  b: string;
}

const PROCESS: ProcessStep[] = [
  {
    n: "01",
    t: "Cotizamos",
    b: "Mándanos medidas, tiraje y arte. Te respondemos con precio y tiempos en menos de 24 horas.",
  },
  {
    n: "02",
    t: "Diseñamos",
    b: "Si no tienes arte, lo armamos contigo. Te pasamos prueba digital antes de imprimir.",
  },
  {
    n: "03",
    t: "Producimos",
    b: "Imprimimos, troquelamos y armamos en planta propia. Control de calidad por lote.",
  },
  {
    n: "04",
    t: "Entregamos",
    b: "Flota propia en CDMX y paquetería confiable al resto del país. Bien estibado, sin maltratos.",
  },
];

interface ProductLineProps {
  line: ProductLineData;
  i: number;
}

function ProductLine({ line, i }: ProductLineProps) {
  const flip = i % 2 === 1;
  return (
    <section
      id={line.id}
      className={`${i === 0 ? "" : "border-t border-ink/10"} ${flip ? "bg-cream" : "bg-paper"}`}
    >
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""} reveal`}>
            <div className="grid grid-cols-6 gap-3">
              <div
                className="col-span-4 row-span-2 relative overflow-hidden rounded-lg bg-cream"
                style={{ aspectRatio: line.mocks[0].aspect }}
              >
                <Image
                  src={line.mocks[0].image.src}
                  alt={line.mocks[0].image.alt}
                  fill
                  sizes="(max-width: 1024px) 60vw, 32vw"
                  className="object-cover"
                />
              </div>
              <div
                className="col-span-2 relative overflow-hidden rounded-lg bg-cream"
                style={{ aspectRatio: line.mocks[1].aspect }}
              >
                <Image
                  src={line.mocks[1].image.src}
                  alt={line.mocks[1].image.alt}
                  fill
                  sizes="(max-width: 1024px) 30vw, 16vw"
                  className="object-cover"
                />
              </div>
              <div
                className="col-span-2 relative overflow-hidden rounded-lg bg-cream"
                style={{ aspectRatio: line.mocks[2].aspect }}
              >
                <Image
                  src={line.mocks[2].image.src}
                  alt={line.mocks[2].image.alt}
                  fill
                  sizes="(max-width: 1024px) 30vw, 16vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""} reveal`}>
            <div className="flex items-baseline gap-4 mb-4">
              <span
                className="stat-num text-ink/15"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1 }}
              >
                {line.n}
              </span>
              <span className="label-mono">LÍNEA · {line.id.toUpperCase()}</span>
            </div>
            <h2
              className="font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              {line.name}
            </h2>
            <p
              className="mt-4 font-serif text-ink/75 italic font-normal"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", lineHeight: 1.35 }}
            >
              {line.tagline}
            </p>
            <p className="mt-6 text-ink/75 text-[16.5px]" style={{ lineHeight: 1.6 }}>
              {line.desc}
            </p>

            <ul className="mt-6 space-y-2.5">
              {line.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink/80 text-[15.5px]">
                  <span className="shrink-0 w-5 h-5 rounded-full border border-ink/20 inline-flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3 h-3 text-leaf" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-0">
              {line.specs.map((s) => (
                <div key={s.k} className="py-3 border-t border-ink/15">
                  <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/45 mb-1">
                    {s.k}
                  </div>
                  <div
                    className="font-serif text-ink font-semibold text-base"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contacto" className="btn btn-primary">
                Cotizar esta línea <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link href="/catalogo" className="btn btn-secondary">
                Ver muestras
              </Link>
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
      <section className="bg-paper border-b border-ink/10 sticky top-[72px] z-30 backdrop-blur bg-paper/85">
        <div className="mx-auto max-w-site px-6 lg:px-10 py-3 flex gap-4 overflow-x-auto">
          {LINES.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="shrink-0 inline-flex items-center gap-2.5 px-3 py-2 rounded-full border border-ink/15 hover:border-ink/40 hover:bg-cream transition group"
            >
              <span className="font-mono text-[10.5px] tracking-[.16em] uppercase text-ink/45 group-hover:text-ink/70">
                {l.n}
              </span>
              <span className="font-serif text-[14.5px] text-ink font-semibold">{l.name}</span>
            </a>
          ))}
        </div>
      </section>
      {LINES.map((l, i) => (
        <ProductLine key={l.id} line={l} i={i} />
      ))}
    </>
  );
}

function Process() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-14 reveal">
          <div className="label-mono mb-4 text-paper/55">{"// CÓMO TRABAJAMOS"}</div>
          <h2
            className="font-serif font-bold"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
          >
            De la cotización a tu cocina,
            <br />
            <em className="font-medium text-sage">en cuatro pasos</em>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
          {PROCESS.map((p, i) => (
            <div
              key={p.n}
              className="reveal bg-ink p-8 lg:p-10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="stat-num text-paper/15"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                {p.n}
              </div>
              <h3
                className="mt-4 font-serif text-paper text-[26px] font-semibold"
                style={{ letterSpacing: "-0.015em" }}
              >
                {p.t}
              </h3>
              <p className="mt-3 text-paper/65 text-[14.5px]" style={{ lineHeight: 1.55 }}>
                {p.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductosPage() {
  return (
    <div id="top" data-screen-label="Productos">
      <SiteEffects />
      <Header current="productos" />
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
