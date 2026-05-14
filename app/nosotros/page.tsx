import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { ProductMockup } from "@/components/ProductMockup";
import { APLICACION } from "@/components/site-images";
import { ArrowIcon, LeafIcon, QuoteIcon } from "@/components/icons";

interface TimelineItem {
  y: string;
  t: string;
  b: string;
}

const TIMELINE: TimelineItem[] = [
  {
    y: "2009",
    t: "Empieza la imprenta",
    b: "Una sola máquina offset en un taller de 80 m² en Iztapalapa. El primer cliente: una taquería de la colonia.",
  },
  {
    y: "2013",
    t: "Llega el grado alimenticio",
    b: "Importamos el primer papel siliconado para hamburgueserías. Cambia el rumbo del negocio.",
  },
  {
    y: "2017",
    t: "Planta propia",
    b: "Mudamos a la nave de Ingenieros Mecánicos 91 — 1,200 m² entre producción, diseño y bodega.",
  },
  {
    y: "2020",
    t: "Línea biodegradable",
    b: "Toda la oferta migra a papel certificado FSC y tintas a base de agua. Sin sobrecosto al cliente.",
  },
  {
    y: "2023",
    t: "1,500 clientes activos",
    b: "Producimos para hamburgueserías, taquerías, heladerías, panaderías y dulcerías en 28 estados.",
  },
  {
    y: "2026",
    t: "Hoy",
    b: "Tres turnos de producción, 32 personas en equipo, 200,000 piezas mensuales en línea continua.",
  },
];

interface ValueItem {
  n: string;
  t: string;
  b: string;
}

const VALUES: ValueItem[] = [
  {
    n: "01",
    t: "Hecho aquí",
    b: "Producción 100% mexicana, en Iztapalapa. Cuando hablas a planta te contesta una persona real, no un call-center.",
  },
  {
    n: "02",
    t: "Bueno con el planeta",
    b: "Papel certificado, tintas a base de agua, residuos separados y reciclados. Sustentabilidad sin marketing.",
  },
  {
    n: "03",
    t: "Tirajes a tu medida",
    b: "500 piezas o 200,000 — los dos importan. La hamburguesería de barrio y la cadena de pizza salen iguales de prioritarias.",
  },
  {
    n: "04",
    t: "Hablamos claro",
    b: "Sin letras chiquitas, sin sorpresas en factura. Cotizamos lo que cobramos y entregamos lo que prometemos.",
  },
];

interface TeamStat {
  k: string;
  v: string;
  s: string;
}

const TEAM_STATS: TeamStat[] = [
  { k: "32", v: "Personas en planta", s: "Diseño, producción, calidad y logística" },
  { k: "1,200", v: "m² de planta", s: "Iztapalapa, CDMX" },
  { k: "3", v: "Turnos de producción", s: "Lun a Sáb 6:00 – 22:00" },
  { k: "200K", v: "Piezas / mes", s: "Capacidad instalada" },
];

interface CertItem {
  k: string;
  l: string;
  s: string;
}

const CERTS: CertItem[] = [
  { k: "FDA", l: "Grado alimenticio", s: "Papel y tintas aptos para contacto directo con alimentos." },
  { k: "FSC", l: "Cadena de custodia", s: "Papel proveniente de bosques manejados responsablemente." },
  { k: "ISO 14001", l: "Gestión ambiental", s: "Sistema de gestión de residuos certificado anualmente." },
  { k: "PROFEPA", l: "Cumplimiento", s: "Reporte mensual de emisiones y manejo de residuos peligrosos." },
];

function Intro() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 reveal">
            <span className="label-mono">{"// QUIENES SOMOS"}</span>
            <h2
              className="mt-4 font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)" }}
            >
              Imprimimos los <em className="font-medium text-tortilla">antojos</em> de México desde 2009.
            </h2>
            <div
              className="mt-8 space-y-5 text-ink/75 text-[17px] lg:text-[18px]"
              style={{ lineHeight: 1.6 }}
            >
              <p>
                Hiperprint empezó como un taller chiquito en Iztapalapa con una idea simple: las
                hamburgueserías, taquerías y heladerías de México merecían empaques tan buenos como los de
                cualquier cadena gringa, pero hechos aquí y con papel que sí se compostara.
              </p>
              <p>
                Quince años después seguimos en la misma colonia — solo que ahora con planta propia, 32
                personas y producción para más de 2,000 negocios al año. Lo único que no ha cambiado es que
                cuando hablas, contesta alguien que conoce el oficio.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 reveal">
            <div className="relative bg-cream rounded-lg overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src={APLICACION.src}
                alt={APLICACION.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 font-mono text-[11px] tracking-wider uppercase text-ink/55 flex items-center justify-between">
              <span>Ingenieros Mecánicos 91</span>
              <span>Iztapalapa, CDMX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="bg-cream relative">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-16 reveal max-w-3xl">
          <div className="label-mono mb-4">{"// LÍNEA DE TIEMPO"}</div>
          <h2
            className="font-serif text-ink font-bold"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            De una máquina
            <br />
            <em className="font-medium text-leaf">a una planta entera</em>.
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-px bg-ink/15" />
          <ol className="space-y-12 lg:space-y-16">
            {TIMELINE.map((m, i) => {
              const right = i % 2 === 0;
              return (
                <li
                  key={m.y}
                  className="reveal relative md:grid md:grid-cols-2 md:gap-12"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="absolute left-[10px] md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-leaf ring-4 ring-cream" />
                  <div
                    className={`pl-12 md:pl-0 ${
                      right ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"
                    }`}
                  >
                    <div
                      className="stat-num text-tortilla"
                      style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)" }}
                    >
                      {m.y}
                    </div>
                    <h3
                      className="mt-2 font-serif text-ink font-semibold"
                      style={{
                        fontSize: "clamp(1.4rem, 2.3vw, 1.9rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                      }}
                    >
                      {m.t}
                    </h3>
                    <p className="mt-3 text-ink/70 text-[15.5px]" style={{ lineHeight: 1.55 }}>
                      {m.b}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-12 reveal max-w-3xl">
          <div className="label-mono mb-4">{"// CÓMO PENSAMOS"}</div>
          <h2
            className="font-serif text-ink font-bold"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Cuatro reglas que no negociamos.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
          {VALUES.map((v, i) => (
            <div
              key={v.n}
              className="bg-paper p-8 lg:p-12 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="stat-num text-ink/15"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                >
                  {v.n}
                </span>
                <span className="font-mono text-[11px] tracking-[.16em] uppercase text-ink/45">
                  REGLA · {v.n}
                </span>
              </div>
              <h3
                className="font-serif text-ink font-semibold"
                style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {v.t}
              </h3>
              <p className="mt-4 text-ink/70 text-[16px]" style={{ lineHeight: 1.6 }}>
                {v.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Planta() {
  return (
    <section id="planta" className="grain relative bg-kraft">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <span className="label-mono">{"// LA PLANTA"}</span>
            <h2
              className="mt-4 font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              1,200 m² de papel,
              <br />
              tinta y café.
            </h2>
            <p className="mt-6 text-ink/75 text-[16.5px]" style={{ lineHeight: 1.6 }}>
              Nuestra planta en Iztapalapa concentra todo: pre-prensa, impresión offset y flexográfica,
              troquelado, armado y bodega. Sin maquila externa, sin intermediarios. Tu pedido nunca sale de
              la casa hasta que va contigo.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
              {TEAM_STATS.map((s) => (
                <div key={s.k}>
                  <div
                    className="stat-num text-ink"
                    style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
                  >
                    {s.k}
                  </div>
                  <div
                    className="font-serif text-ink mt-1 font-semibold text-base"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {s.v}
                  </div>
                  <div className="font-mono text-[11px] tracking-wider uppercase text-ink/55 mt-1">
                    {s.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-4 row-span-2">
                <ProductMockup
                  label="planta-area-produccion.jpg"
                  tone="ink"
                  aspect="4/5"
                  note="PRODUCCIÓN"
                />
              </div>
              <div className="col-span-2">
                <ProductMockup label="planta-troqueladora.jpg" tone="deep" aspect="1/1" note="TROQUEL" />
              </div>
              <div className="col-span-2">
                <ProductMockup
                  label="planta-equipo-diseno.jpg"
                  tone="cream"
                  aspect="1/1"
                  note="DISEÑO"
                />
              </div>
              <div className="col-span-3">
                <ProductMockup
                  label="planta-rollos-papel.jpg"
                  tone="kraft"
                  aspect="3/2"
                  note="MATERIA PRIMA"
                />
              </div>
              <div className="col-span-3">
                <ProductMockup
                  label="planta-bodega-envio.jpg"
                  tone="sage"
                  aspect="3/2"
                  note="LOGÍSTICA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcoSection() {
  return (
    <section id="eco" className="bg-leaf text-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 reveal">
            <span className="pill-eco !bg-paper/15 !text-paper">
              <LeafIcon className="w-3.5 h-3.5" /> Sustentabilidad
            </span>
            <h2
              className="mt-6 font-serif font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.96, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              No es marketing.
              <br />
              <em className="font-medium text-kraft">Es operación</em>.
            </h2>
            <div
              className="mt-8 space-y-5 text-paper/85 text-[16.5px] lg:text-[17px]"
              style={{ lineHeight: 1.65 }}
            >
              <p>
                Desde 2020 el 100% de nuestro papel viene de bosques con cadena de custodia FSC. Las tintas
                son a base de agua, los adhesivos sin solventes y el recorte se devuelve a la papelera para
                reciclaje continuo.
              </p>
              <p>
                Medimos. Reportamos. Y publicamos los datos cada año en nuestro reporte de sustentabilidad.
                Si quieres verlo antes de cotizar, te lo pasamos sin pena.
              </p>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 font-medium text-paper hover:gap-3 transition-all"
            >
              Descargar reporte 2025 <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-5 reveal">
            <div className="space-y-px bg-paper/15">
              {CERTS.map((c) => (
                <div key={c.k} className="bg-leaf p-6 flex items-start gap-5">
                  <div className="shrink-0 w-16 text-center">
                    <div
                      className="font-serif text-paper font-bold"
                      style={{ fontSize: 22, letterSpacing: "-0.02em" }}
                    >
                      {c.k}
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-paper text-[18px] font-semibold">{c.l}</div>
                    <div className="text-paper/65 text-[14px] mt-1">{c.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal order-2 lg:order-1">
            <QuoteIcon className="w-10 h-10 text-tortilla mb-4" />
            <blockquote
              className="font-serif text-ink font-medium"
              style={{
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
              }}
            >
              &quot;Empezamos imprimiendo volantes de taquería. Hoy una caja nuestra puede llegar a un food
              court en Mérida o a un puesto en Tlatelolco. Lo bonito es que las dos nos importan igual.&quot;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-leaf text-paper inline-flex items-center justify-center font-serif font-bold text-lg">
                AH
              </div>
              <div>
                <div className="font-serif text-ink text-[18px] font-semibold">
                  Alejandro Hernández
                </div>
                <div className="text-ink/60 text-[14px] font-mono tracking-wide">
                  Fundador · Hiperprint
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 reveal order-1 lg:order-2">
            <ProductMockup
              label="fundador-piso-planta.jpg"
              tone="deep"
              aspect="4/3"
              note="EQUIPO · 2026"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function NosotrosPage() {
  return (
    <div id="top" data-screen-label="Nosotros">
      <SiteEffects />
      <Header current="nosotros" />
      <main>
        <PageHero
          kicker="DESDE 2009 · IZTAPALAPA"
          title="Una imprenta"
          italic="mexicana, completa."
          breadcrumb="Nosotros"
          lead="15 años, una planta propia y un equipo que cree que un buen empaque empieza con respetar al cliente y al planeta."
        />
        <Intro />
        <Timeline />
        <Values />
        <Planta />
        <EcoSection />
        <Founders />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
