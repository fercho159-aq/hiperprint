import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { HomeContactForm } from "@/components/home/HeroContactForm";
import { buildWhatsAppUrl } from "@/components/whatsapp";
import {
  BOLSA,
  BOLSA_BLAHO,
  CAJA,
  CLIENT_LOGOS,
  FLAUTAS,
  PAPEL_CUADROS,
  PAPEL_GENERICO,
  PAPEL_HERO,
  PAPEL_MUERTOS,
  PAPEL_NAVIDAD,
  PORTAVASO,
  type SiteImage,
} from "@/components/site-images";
import {
  ArrowDownIcon,
  ArrowIcon,
  AwardIcon,
  BrushIcon,
  LayersIcon,
  LeafIcon,
  MailIcon,
  PinIcon,
  PhoneIcon,
  QuoteIcon,
  RecycleIcon,
  StarIcon,
  TagIcon,
  TruckIcon,
} from "@/components/icons";

interface ProductCard {
  n: string;
  name: string;
  desc: string;
  tags: string[];
  image: SiteImage;
}

const PRODUCTS: ProductCard[] = [
  {
    n: "01",
    name: "Papel grado alimenticio",
    desc: "28 y 40 grs. Liso, a cuadros o impreso con tu marca. Resistente a grasa, seguro para contacto con alimentos.",
    tags: ["28 grs", "40 grs", "Impresión a color"],
    image: PAPEL_CUADROS,
  },
  {
    n: "02",
    name: "Cajas para comida",
    desc: "Hamburguesas, hot dogs, pizzas, crepas, postres. Armado rápido, troqueles a la medida.",
    tags: ["Kraft natural", "Blanco", "Troquel personalizado"],
    image: CAJA,
  },
  {
    n: "03",
    name: "Bolsas de papel",
    desc: "Kraft natural o blanco, con o sin asa, impresas a una o varias tintas. Para llevar y para vitrina.",
    tags: ["Con asa", "Sin asa", "1-4 tintas"],
    image: BOLSA,
  },
  {
    n: "04",
    name: "Línea de temporada",
    desc: "Día de Muertos, Navidad, San Valentín, fechas patrias. Diseños listos o a tu estilo, en tirajes cortos.",
    tags: ["Tiraje corto", "Diseños listos", "Edición limitada"],
    image: PAPEL_MUERTOS,
  },
];

type WhyIconKey = "tag" | "brush" | "layers" | "award" | "leaf" | "truck";

interface WhyItem {
  icon: WhyIconKey;
  title: string;
  body: string;
}

const WHY_ICONS: Record<WhyIconKey, (p: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  tag: TagIcon,
  brush: BrushIcon,
  layers: LayersIcon,
  award: AwardIcon,
  leaf: LeafIcon,
  truck: TruckIcon,
};

const WHY: WhyItem[] = [
  { icon: "tag", title: "Precios competitivos", body: "Sin sacrificar calidad. Cotizamos contra cualquier presupuesto real." },
  { icon: "brush", title: "Impresión personalizada", body: "Tu logo, tus colores, tu diseño. Una o varias tintas, a tu marca." },
  { icon: "layers", title: "Tirajes cortos y largos", body: "Desde 500 piezas para probar, hasta 200,000 al mes en producción continua." },
  { icon: "award", title: "Diseño incluido", body: "Si no tienes arte, lo hacemos contigo. Asesoría sin costo en tu primera orden." },
  { icon: "leaf", title: "Materias primas certificadas", body: "Papel grado alimenticio, tintas a base de agua y proveedores trazables." },
  { icon: "truck", title: "Entrega CDMX y nacional", body: "Flotilla propia en CDMX, paquetería confiable al resto de la república." },
];

interface GalleryItem {
  image: SiteImage;
  rows: number;
}

const GALLERY: GalleryItem[] = [
  { image: PAPEL_CUADROS, rows: 1 },
  { image: CAJA, rows: 2 },
  { image: BOLSA, rows: 1 },
  { image: PAPEL_MUERTOS, rows: 2 },
  { image: PORTAVASO, rows: 1 },
  { image: FLAUTAS, rows: 1 },
  { image: BOLSA_BLAHO, rows: 2 },
  { image: PAPEL_GENERICO, rows: 1 },
  { image: PAPEL_NAVIDAD, rows: 1 },
  { image: PAPEL_HERO, rows: 1 },
];

function Hero() {
  return (
    <section id="inicio" className="grain relative bg-kraft">
      <div className="mx-auto max-w-site px-6 lg:px-10 pt-14 lg:pt-20 pb-20 lg:pb-28 min-h-[88vh] flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-10 lg:mb-14">
          <span className="label-mono">ECO · HECHO EN MÉXICO · DESDE 2009</span>
          <span className="h-px flex-1 max-w-[180px] bg-ink/20" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <h1
              className="font-serif text-ink font-extrabold"
              style={{ letterSpacing: "-0.035em", lineHeight: ".92", fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              <span className="line-mask">
                <span style={{ animationDelay: ".05s" }}>Empaques</span>
              </span>
              <span className="line-mask">
                <span style={{ animationDelay: ".18s" }}>que cuentan</span>
              </span>
              <span className="line-mask">
                <span style={{ animationDelay: ".30s" }}>
                  tu <em className="italic font-medium text-leaf">historia</em>.
                </span>
              </span>
            </h1>
            <p
              className="mt-8 text-[18px] lg:text-[20px] text-ink/75 max-w-[36rem]"
              style={{ lineHeight: 1.45 }}
            >
              Impresión personalizada en{" "}
              <strong className="text-ink font-semibold">papel, cajas y bolsas ecológicas</strong> para la
              industria de comida rápida. Más de 15 años empacando los antojos de México.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link href="/contacto" className="btn btn-primary">
                Cotiza mi pedido <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link href="/catalogo" className="btn btn-secondary">
                Ver catálogo
              </Link>
              <span className="hidden lg:flex items-center gap-2 ml-2 text-[13px] text-ink/55 font-mono">
                <span className="inline-block w-1.5 h-1.5 bg-leaf rounded-full animate-pulse" />
                Respuesta en menos de 24 h
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative grid grid-cols-6 gap-3" style={{ minHeight: 420 }}>
              <div className="col-span-4 row-span-2 relative overflow-hidden rounded-lg bg-cream" style={{ aspectRatio: "4/5" }}>
                <Image
                  src={PAPEL_HERO.src}
                  alt={PAPEL_HERO.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 relative -mt-6 overflow-hidden rounded-lg bg-cream" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={PAPEL_CUADROS.src}
                  alt={PAPEL_CUADROS.alt}
                  fill
                  sizes="(max-width: 1024px) 30vw, 15vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 relative overflow-hidden rounded-lg bg-cream" style={{ aspectRatio: "1/1.1" }}>
                <Image
                  src={BOLSA.src}
                  alt={BOLSA.alt}
                  fill
                  sizes="(max-width: 1024px) 30vw, 15vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-3 relative -ml-3 translate-y-3 overflow-hidden rounded-lg bg-cream" style={{ aspectRatio: "3/2" }}>
                <Image
                  src={PORTAVASO.src}
                  alt={PORTAVASO.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-3 relative translate-y-2 overflow-hidden rounded-lg bg-cream" style={{ aspectRatio: "3/2" }}>
                <Image
                  src={FLAUTAS.src}
                  alt={FLAUTAS.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -left-4 lg:-left-10 rotate-[-6deg]">
              <div className="bg-paper rounded-full pl-1 pr-4 py-1 flex items-center gap-2.5 shadow-[0_18px_40px_-20px_rgba(40,30,15,.35)] border border-ink/10">
                <span className="w-9 h-9 rounded-full bg-leaf text-paper inline-flex items-center justify-center">
                  <LeafIcon className="w-4 h-4" />
                </span>
                <div className="text-left">
                  <div className="font-mono text-[10px] tracking-[.18em] text-ink/55 uppercase">100%</div>
                  <div className="font-serif text-[15px] -mt-0.5 font-bold">Biodegradable</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 right-2 rotate-[4deg]">
              <div className="bg-tortilla text-paper rounded-full px-4 py-2 shadow-[0_18px_40px_-20px_rgba(200,75,49,.55)] flex items-center gap-2">
                <span className="font-serif font-bold text-base">Hecho en México</span>
                <span className="w-1.5 h-1.5 rounded-full bg-paper/80" />
                <span className="font-mono text-[11px] tracking-[.15em] uppercase">MX</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-24 flex items-center gap-3 text-ink/55">
          <ArrowDownIcon className="w-4 h-4 animate-bounce" />
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
    <section className="bg-cream border-y border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="reveal flex flex-col md:items-start gap-3 md:pl-8 md:border-l md:border-ink/15 first:md:border-l-0 first:md:pl-0"
            >
              <div className="stat-num text-ink" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
                {it.num}
              </div>
              <div
                className="font-serif text-[20px] lg:text-[22px] text-ink font-medium"
                style={{ lineHeight: 1.2 }}
              >
                {it.label}
              </div>
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
            <div className="label-mono mb-4">{"// LO QUE HACEMOS"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.025em", lineHeight: 1, fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Cuatro líneas, <em className="font-medium text-leaf">una sola obsesión</em>:<br />
              papel bien impreso.
            </h2>
          </div>
          <p
            className="text-ink/70 lg:max-w-sm text-[16px] lg:text-[17px]"
            style={{ lineHeight: 1.55 }}
          >
            Diseñamos, troquelamos e imprimimos en planta propia. Tú decides el tiraje, el diseño y el
            papel; nosotros nos encargamos de lo demás.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.n}
              className="reveal lift bg-paper rounded-xl border border-ink/10 overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="overflow-hidden">
                <div className="lift-img relative bg-cream" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="label-mono">{p.n} · LÍNEA</span>
                  <span className="w-6 h-6 rounded-full border border-ink/15 inline-flex items-center justify-center text-ink/60">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="w-3 h-3">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </div>
                <h3
                  className="font-serif text-ink font-semibold"
                  style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
                >
                  {p.name}
                </h3>
                <p className="mt-3 text-ink/70 text-[15.5px]" style={{ lineHeight: 1.55 }}>
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1 rounded-full border border-ink/15 text-[12px] text-ink/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/productos"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-leaf hover:gap-3 transition-all"
                >
                  Ver más <ArrowIcon className="w-4 h-4" />
                </Link>
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
    { Icon: LeafIcon, title: "100% natural", body: "Papeles celulósicos sin recubrimientos plásticos." },
    { Icon: RecycleIcon, title: "Biodegradable y reciclable", body: "Composta en 90 días en condiciones industriales." },
    { Icon: PinIcon, title: "Producción local en CDMX", body: "Planta propia en Iztapalapa, cadena de suministro corta." },
  ];
  return (
    <section className="relative grain bg-cream border-y border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 reveal">
            <span className="pill-eco mb-8">
              <LeafIcon className="w-3.5 h-3.5" /> Compromiso eco
            </span>
            <h2
              className="font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.96, fontSize: "clamp(2.6rem, 6vw, 5.2rem)" }}
            >
              Buenos con tu comida.
              <br />
              <em className="font-medium">Buenos</em> con el planeta.
            </h2>
            <p
              className="mt-8 text-ink/80 text-[17px] lg:text-[19px] max-w-[36rem]"
              style={{ lineHeight: 1.55 }}
            >
              Nuestros empaques son{" "}
              <strong className="font-semibold">
                biodegradables, reciclables y hechos con materias primas naturales
              </strong>
              . Papel grado alimenticio certificado, tintas a base de agua y adhesivos sin solventes.
              Empacar rico no tiene por qué costarle al planeta.
            </p>
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <span className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">
                CERTIFICACIONES
              </span>
              <span className="px-3 py-1.5 bg-paper border border-ink/10 rounded-md font-mono text-[12px] tracking-wider text-ink/80">
                FDA · GRADO ALIMENTICIO
              </span>
              <span className="px-3 py-1.5 bg-paper border border-ink/10 rounded-md font-mono text-[12px] tracking-wider text-ink/80">
                FSC · PAPEL TRAZABLE
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-1 reveal">
            {items.map((it, i) => {
              const IconC = it.Icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-5 py-7 border-b border-ink/15 last:border-b-0"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-paper text-leaf inline-flex items-center justify-center">
                    <IconC className="w-5 h-5" />
                  </div>
                  <div>
                    <div
                      className="font-serif text-[22px] text-ink font-semibold"
                      style={{ letterSpacing: "-0.015em" }}
                    >
                      {it.title}
                    </div>
                    <div className="mt-1 text-ink/75 text-[15px]" style={{ lineHeight: 1.55 }}>
                      {it.body}
                    </div>
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
            <div className="label-mono mb-4">{"// POR QUÉ HIPERPRINT"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Imprenta de pueblo,
              <br />
              <em className="font-medium text-tortilla">capacidad</em> industrial.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6 reveal">
            <p
              className="text-ink/75 text-[17px] lg:text-[18px]"
              style={{ lineHeight: 1.6 }}
            >
              Llevamos quince años empacando hamburgueserías, taquerías, heladerías y panaderías de toda la
              república. Conocemos el oficio, hablamos tu idioma y respondemos como si fueras nuestro único
              cliente. Esa es la diferencia.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16">
          {WHY.map((w, i) => {
            const IconC = WHY_ICONS[w.icon];
            return (
              <div
                key={i}
                className="reveal py-8 border-t border-ink/15 flex gap-5"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="shrink-0 w-11 h-11 rounded-full border border-ink/15 inline-flex items-center justify-center text-leaf">
                  <IconC className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] tracking-[.16em] uppercase text-ink/40 mb-1.5">
                    0{i + 1}
                  </div>
                  <h3
                    className="font-serif text-ink text-[22px] font-semibold"
                    style={{ letterSpacing: "-0.015em", lineHeight: 1.2 }}
                  >
                    {w.title}
                  </h3>
                  <p className="mt-2 text-ink/70 text-[14.5px]" style={{ lineHeight: 1.55 }}>
                    {w.body}
                  </p>
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
            <div className="label-mono mb-4">{"// CATÁLOGO"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 1, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Trabajos recientes.
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="btn btn-secondary self-start lg:self-auto"
          >
            Ver catálogo completo <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[140px] md:auto-rows-[170px] lg:auto-rows-[200px]">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`reveal lift overflow-hidden rounded-lg bg-cream ${g.rows === 2 ? "row-span-2" : ""}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="lift-img relative h-full w-full">
                <Image
                  src={g.image.src}
                  alt={g.image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  // Use real client logos. Duplicate for the marquee loop.
  const featured = CLIENT_LOGOS.slice(0, 12);
  const track = [...featured, ...featured];
  return (
    <section id="clientes" className="bg-paper border-y border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 pt-20 pb-6 lg:pt-28 lg:pb-10">
        <div className="text-center mb-12 reveal">
          <div className="label-mono mb-4">{"// CLIENTES · 2009–2026"}</div>
          <h2
            className="font-serif text-ink mx-auto font-semibold"
            style={{
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              maxWidth: "30ch",
            }}
          >
            Marcas que ya están empacando con nosotros.
          </h2>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        <div
          className="marquee-track flex items-center gap-16 lg:gap-20 pb-16"
          style={{ width: "max-content" }}
        >
          {track.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="relative h-14 lg:h-16 w-32 lg:w-40 shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-500"
            >
              <Image
                src={c.src}
                alt={`Logo de ${c.name}`}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="grain relative bg-kraft">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto reveal">
          <QuoteIcon className="w-12 h-12 text-leaf mb-6" />
          <blockquote
            className="font-serif text-ink font-medium"
            style={{
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              fontSize: "clamp(1.8rem, 4.5vw, 3.6rem)",
            }}
          >
            &quot;La calidad del papel y la rapidez para imprimir nuestro logo nos sorprendió. Ya no buscamos a
            nadie más.&quot;
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-leaf text-paper inline-flex items-center justify-center font-serif font-bold text-xl">
              RM
            </div>
            <div>
              <div className="font-serif text-ink text-[18px] font-semibold">Roberto Méndez</div>
              <div className="text-ink/65 text-[14px] font-mono tracking-wide">
                Hamburguesería · CDMX · Cliente desde 2021
              </div>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-1 text-tortilla">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="w-4 h-4" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Promo() {
  return (
    <section className="bg-tortilla text-paper relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[.08] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 20h40M20 0v40' stroke='%23fff' stroke-width='.5'/></svg>\")",
        }}
      />
      <div className="mx-auto max-w-site px-6 lg:px-10 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 relative">
        <span className="font-mono text-[11px] tracking-[.22em] uppercase bg-paper text-tortilla px-3 py-1.5 rounded-full self-start">
          PROMO · MAYO 2026
        </span>
        <div className="flex-1">
          <h3
            className="font-serif font-bold"
            style={{ letterSpacing: "-0.025em", lineHeight: 1, fontSize: "clamp(2rem, 5vw, 4.2rem)" }}
          >
            Este mes: <em className="font-medium">el diseño no se paga.</em>
          </h3>
          <p className="mt-3 text-paper/85 text-[16px] lg:text-[17px] max-w-2xl">
            En tu primera orden de 5,000 piezas o más, nuestro equipo creativo arma tu arte sin costo extra.
            Aplica en papel, cajas y bolsas.
          </p>
        </div>
        <Link href="/contacto" className="btn btn-tortilla shrink-0">
          Aprovéchalo <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contacto" className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="reveal mb-14">
          <div className="label-mono mb-4">{"// HABLEMOS"}</div>
          <h2
            className="font-serif text-ink font-bold"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            ¿Listo para imprimir
            <br />
            <em className="font-medium text-leaf">algo bonito</em>?
          </h2>
          <p
            className="mt-6 text-ink/70 text-[17px] lg:text-[18px] max-w-2xl"
            style={{ lineHeight: 1.55 }}
          >
            Cuéntanos qué necesitas y te respondemos con cotización formal en menos de 24 horas. Si prefieres,
            marca o escríbenos directo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 space-y-3 reveal">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="lift block bg-cream rounded-xl p-7 border border-ink/10"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-full bg-leaf text-paper inline-flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <span className="label-mono">CANAL 01</span>
              </div>
              <div className="mt-6 font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">
                WhatsApp directo
              </div>
              <div
                className="mt-1 font-serif text-ink font-bold"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}
              >
                +52 56 1158 1587
              </div>
              <div className="mt-2 text-ink/60 text-[14px]">Respuesta promedio: 12 min</div>
            </a>
            <a
              href={buildWhatsAppUrl("Hola Hiperprint, me gustaría que me llamen.")}
              target="_blank"
              rel="noopener noreferrer"
              className="lift block bg-cream rounded-xl p-7 border border-ink/10"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-full bg-leaf text-paper inline-flex items-center justify-center">
                  <MailIcon className="w-5 h-5" />
                </div>
                <span className="label-mono">CANAL 02</span>
              </div>
              <div className="mt-6 font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">
                Pedir que te llamemos
              </div>
              <div
                className="mt-1 font-serif text-ink font-bold"
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)", letterSpacing: "-0.02em" }}
              >
                Agendar llamada
              </div>
              <div className="mt-2 text-ink/60 text-[14px]">L–V 9:00 a 18:00 h</div>
            </a>
            <div className="lift block bg-cream rounded-xl p-7 border border-ink/10">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-full bg-leaf text-paper inline-flex items-center justify-center">
                  <PinIcon className="w-5 h-5" />
                </div>
                <span className="label-mono">CANAL 03</span>
              </div>
              <div className="mt-6 font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">
                Visítanos
              </div>
              <div
                className="mt-1 font-serif text-ink text-[20px] font-semibold"
                style={{ letterSpacing: "-0.015em", lineHeight: 1.25 }}
              >
                Ingenieros Mecánicos 91,
                <br />
                Nueva Rosita, Iztapalapa, CDMX
              </div>
              <div
                className="mt-5 rounded-md overflow-hidden border border-ink/10 relative"
                style={{ aspectRatio: "3/1" }}
              >
                <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                  <rect width="300" height="100" fill="#F7F1E6" />
                  <g stroke="#C25B2E" strokeWidth=".8" fill="none">
                    <path d="M-10 30 L320 50" />
                    <path d="M-10 70 L320 60" />
                    <path d="M40 -10 L80 110" />
                    <path d="M120 -10 L160 110" />
                    <path d="M220 -10 L260 110" />
                  </g>
                  <g stroke="#C25B2E" strokeWidth=".3" fill="none" opacity=".5">
                    <path d="M-10 20 L320 35" />
                    <path d="M-10 85 L320 78" />
                    <path d="M0 -10 L25 110" />
                    <path d="M190 -10 L215 110" />
                    <path d="M275 -10 L300 110" />
                  </g>
                  <g transform="translate(150,52)">
                    <circle r="12" fill="#1F2A55" opacity=".18" />
                    <circle r="6" fill="#1F2A55" />
                    <circle r="2" fill="#F7F1E6" />
                  </g>
                </svg>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] tracking-[.16em] uppercase text-ink/50 bg-paper/70 px-2 py-0.5 rounded">
                  19.36°N · 99.07°W
                </span>
              </div>
            </div>
          </div>
          <HomeContactForm />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div id="top" data-screen-label="Hiperprint · Home">
      <SiteEffects />
      <Header current="inicio" />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Eco />
        <Why />
        <Gallery />
        <Clients />
        <Testimonial />
        <Promo />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
