import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { Industries } from "@/components/clientes/Industries";
import { ArrowIcon, StarIcon } from "@/components/icons";
import {
  CLIENT_LOGOS,
  findClientLogo,
  PORTAVASO,
  PAPEL_HERO,
  CAJA,
  type SiteImage,
} from "@/components/site-images";

interface FeaturedClient {
  name: string;
  industry: string;
  since: string;
  summary: string;
  metric: string;
  image: SiteImage;
}

const FEATURED: FeaturedClient[] = [
  {
    name: "Häagen-Dazs",
    industry: "Heladería",
    since: "2018",
    summary: "Servilletería, portavasos y cajas para sus aperturas en CDMX y Monterrey.",
    metric: "120K piezas / año",
    image: PORTAVASO,
  },
  {
    name: "Taquearte",
    industry: "Taquería",
    since: "2020",
    summary:
      "Papel cuadrille verde y bolsa kraft con asa para sucursales Roma, Condesa y Doctores.",
    metric: "60K piezas / mes",
    image: PAPEL_HERO,
  },
  {
    name: "Burguesía",
    industry: "Hamburguesería",
    since: "2021",
    summary:
      "Caja burger M con troquel a medida + papel impreso a tres tintas para línea regular.",
    metric: "40K cajas / mes",
    image: CAJA,
  },
];

interface Testimonio {
  who: string;
  role: string;
  quote: string;
  stars: number;
}

const TESTIMONIOS: Testimonio[] = [
  {
    who: "Mariana López",
    role: "Operaciones · Heladería en Polanco",
    quote:
      "Imprimimos con ellos desde 2018. Lo que más me gusta es que cuando hay urgencia, contestan. Eso vale más que cualquier descuento.",
    stars: 5,
  },
  {
    who: "Carlos Aguilar",
    role: "Dueño · Taquería en Roma",
    quote:
      "Pasamos de comprar papel genérico a uno con nuestro logo y cuadrille. Las propinas subieron. En serio.",
    stars: 5,
  },
  {
    who: "Sofía Reyes",
    role: "Marketing · Cadena de burgers",
    quote:
      "Nos armaron arte para temporada en una semana. Ya no salimos a buscar otra imprenta para nada.",
    stars: 5,
  },
];

function Featured() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
          <div>
            <div className="label-mono mb-4">{"// CASOS DESTACADOS"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.03em", lineHeight: 1, fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              Tres marcas, tres historias.
            </h2>
          </div>
          <p
            className="text-ink/65 lg:max-w-sm text-[15.5px]"
            style={{ lineHeight: 1.55 }}
          >
            Algunos de los pedidos que cuentan mejor lo que sabemos hacer.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED.map((f, i) => (
            <article
              key={f.name}
              className="reveal lift bg-cream rounded-xl overflow-hidden border border-ink/10 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="overflow-hidden">
                <div className="lift-img relative bg-cream" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={f.image.src}
                    alt={f.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-[.16em] uppercase text-ink/45">
                    CLIENTE DESDE {f.since}
                  </span>
                  <span className="font-mono text-[11px] tracking-[.16em] uppercase text-leaf">
                    {f.industry}
                  </span>
                </div>
                {(() => {
                  const brand = findClientLogo(f.name);
                  return brand ? (
                    <div className="relative h-12 w-32 mb-2">
                      <Image
                        src={brand.src}
                        alt={`Logo de ${brand.name}`}
                        fill
                        sizes="128px"
                        className="object-contain object-left"
                      />
                    </div>
                  ) : null;
                })()}
                <h3
                  className="font-serif text-ink font-bold"
                  style={{
                    fontSize: "clamp(1.8rem, 2.8vw, 2.2rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1,
                  }}
                >
                  {f.name}
                </h3>
                <p className="mt-4 text-ink/75 text-[15px] flex-1" style={{ lineHeight: 1.55 }}>
                  {f.summary}
                </p>
                <div className="mt-6 pt-5 border-t border-ink/15 flex items-baseline justify-between">
                  <div>
                    <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/45 mb-1">
                      VOLUMEN
                    </div>
                    <div
                      className="font-serif text-ink font-bold text-[22px]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {f.metric}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-leaf font-medium text-[14px] inline-flex items-center gap-1.5"
                  >
                    Ver caso <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
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
          <div className="label-mono mb-4">
            {`// LISTA COMPLETA · ${CLIENT_LOGOS.length} DESTACADOS · +2,000 ACTIVOS`}
          </div>
          <h2
            className="font-serif text-ink font-bold"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Marcas que ya están empacando con nosotros.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-px bg-ink/10 border border-ink/10 rounded-lg overflow-hidden">
          {CLIENT_LOGOS.map((c, i) => (
            <div
              key={c.name}
              className="bg-paper aspect-[3/2] flex items-center justify-center p-6 group reveal hover:bg-cream transition relative"
              style={{ transitionDelay: `${(i % 8) * 30}ms` }}
            >
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition duration-500">
                <Image
                  src={c.src}
                  alt={`Logo de ${c.name}`}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                  className="object-contain"
                />
              </div>
              <span className="sr-only">{c.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-[11.5px] tracking-[.16em] uppercase text-ink/45">
          + 1,982 negocios más, de Tijuana a Mérida.
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
          <div className="label-mono mb-4">{"// LO QUE DICEN"}</div>
          <h2
            className="font-serif text-ink font-bold"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Sin filtros, sin retoques.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIOS.map((t, i) => (
            <figure
              key={i}
              className="reveal bg-paper rounded-xl p-7 lg:p-8 border border-ink/10 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-1 text-tortilla mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4" />
                ))}
              </div>
              <blockquote
                className="font-serif text-ink flex-1 font-medium"
                style={{
                  fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.4,
                }}
              >
                &quot;{t.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink/10">
                <div className="font-serif text-ink text-[16px] font-semibold">{t.who}</div>
                <div className="text-ink/60 text-[13px] font-mono tracking-wide mt-0.5">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ClientesPage() {
  return (
    <div id="top" data-screen-label="Clientes">
      <SiteEffects />
      <Header current="clientes" />
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
