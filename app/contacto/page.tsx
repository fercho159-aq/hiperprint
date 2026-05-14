import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { PageHero } from "@/components/PageHero";
import { BigForm } from "@/components/contacto/BigForm";
import { ArrowIcon, Icons, type IconName } from "@/components/icons";

interface ChannelEntry {
  i: IconName;
  k: string;
  t: string;
  main: string;
  sub: string;
  href: string;
}

const CHANNELS: ChannelEntry[] = [
  {
    i: "phone",
    k: "01",
    t: "Llámanos",
    main: "55 5087 5427",
    sub: "L–V 9:00–18:00 · Sáb 10–14",
    href: "tel:5550875427",
  },
  {
    i: "wa",
    k: "02",
    t: "WhatsApp",
    main: "+52 55 5087 5427",
    sub: "Respuesta promedio: 12 min",
    href: "https://wa.me/525550875427",
  },
  {
    i: "mail",
    k: "03",
    t: "Escríbenos",
    main: "ventas@hiperprint.mx",
    sub: "Cotización en < 24 h",
    href: "mailto:ventas@hiperprint.mx",
  },
];

function Channels() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {CHANNELS.map((c, i) => {
            const IconC = Icons[c.i];
            return (
              <a
                key={c.k}
                href={c.href}
                className="reveal lift bg-cream rounded-xl p-8 border border-ink/10 block group"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="w-12 h-12 rounded-full bg-leaf text-paper inline-flex items-center justify-center">
                    <IconC className="w-5 h-5" />
                  </span>
                  <span className="label-mono">CANAL · {c.k}</span>
                </div>
                <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/55">
                  {c.t}
                </div>
                <div
                  className="mt-1 font-serif text-ink group-hover:text-leaf transition font-bold"
                  style={{
                    fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {c.main}
                </div>
                <div className="mt-3 text-ink/60 text-[14px]">{c.sub}</div>
                <div className="mt-5 inline-flex items-center gap-2 text-leaf text-[14px] font-medium opacity-0 group-hover:opacity-100 transition">
                  Abrir <ArrowIcon className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface VisitDetail {
  k: string;
  v: string;
}

const VISIT_DETAILS: VisitDetail[] = [
  {
    k: "Dirección",
    v: "Ingenieros Mecánicos 91, Nueva Rosita, Iztapalapa, CP 09420, CDMX.",
  },
  { k: "Horario", v: "L–V 9:00 a 18:00 · Sábado 10:00 a 14:00." },
  { k: "Estacionamiento", v: "Propio, sin costo para visitas." },
  { k: "Metro / camión", v: "Metro Apatlaco (línea 8) · 14 min caminando." },
];

function VisitMap() {
  return (
    <section id="mapa" className="bg-paper">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="label-mono mb-4">{"// VISÍTANOS"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{
                letterSpacing: "-0.03em",
                lineHeight: 0.98,
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              }}
            >
              La planta está abierta.
              <br />
              <em className="font-medium text-leaf">Date una vuelta.</em>
            </h2>
            <p className="mt-6 text-ink/75 text-[16px]" style={{ lineHeight: 1.6 }}>
              Si quieres ver el papel, tocar las cajas y conocer cómo se imprime — agenda visita y te
              recibimos con café. Atendemos sin cita previa también, pero si avisas te enseñamos todo el
              proceso.
            </p>

            <dl className="mt-10 space-y-5">
              {VISIT_DETAILS.map((it) => (
                <div key={it.k} className="border-t border-ink/15 pt-4">
                  <dt className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/45 mb-1.5">
                    {it.k}
                  </dt>
                  <dd
                    className="font-serif text-ink text-[17px] font-medium"
                    style={{ letterSpacing: "-0.01em", lineHeight: 1.4 }}
                  >
                    {it.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Cómo llegar <ArrowIcon className="w-4 h-4" />
              </a>
              <Link href="/contacto#cotizar" className="btn btn-secondary">
                Agendar visita
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div
              className="rounded-xl overflow-hidden border border-ink/15 relative bg-cream"
              style={{ aspectRatio: "4/3" }}
            >
              <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="300" fill="#F5EFE0" />
                <g stroke="#A67F5D" strokeWidth="2.5" fill="none" strokeLinecap="round">
                  <path d="M-10 110 Q200 90 410 130" />
                  <path d="M-10 220 L410 200" />
                  <path d="M90 -10 L130 310" />
                  <path d="M250 -10 L280 310" />
                </g>
                <g stroke="#A67F5D" strokeWidth="1" fill="none" opacity=".7">
                  <path d="M-10 60 L410 75" />
                  <path d="M-10 170 L410 160" />
                  <path d="M-10 270 L410 265" />
                  <path d="M30 -10 L60 310" />
                  <path d="M170 -10 L195 310" />
                  <path d="M330 -10 L355 310" />
                </g>
                <g stroke="#A67F5D" strokeWidth=".4" fill="none" opacity=".5">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line key={`h${i}`} x1="-10" y1={i * 13} x2="410" y2={i * 13 + 3} />
                  ))}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <line key={`v${i}`} y1="-10" x1={i * 14} y2="310" x2={i * 14 + 4} />
                  ))}
                </g>
                <g fill="#D4B896" opacity=".4">
                  <rect x="45" y="80" width="40" height="25" rx="2" />
                  <rect x="135" y="80" width="40" height="25" rx="2" />
                  <rect x="200" y="80" width="45" height="25" rx="2" />
                  <rect x="285" y="80" width="45" height="25" rx="2" />
                  <rect x="45" y="140" width="40" height="25" rx="2" />
                  <rect x="135" y="180" width="55" height="20" rx="2" />
                  <rect x="285" y="230" width="60" height="25" rx="2" />
                </g>
                <g fill="#9DB89A" opacity=".5">
                  <ellipse cx="335" cy="140" rx="35" ry="25" />
                </g>
                <text
                  x="335"
                  y="143"
                  textAnchor="middle"
                  className="font-mono"
                  fill="#1A1A1A"
                  opacity=".55"
                  style={{ fontSize: 7, letterSpacing: ".1em" }}
                >
                  PARQUE
                </text>
                <g transform="translate(200,150)">
                  <circle r="32" fill="#3D5B3A" opacity=".12" />
                  <circle r="20" fill="#3D5B3A" opacity=".22" />
                  <circle r="10" fill="#3D5B3A" />
                  <circle r="3.5" fill="#F5EFE0" />
                  <rect x="-44" y="-58" width="88" height="22" rx="3" fill="#1A1A1A" />
                  <text
                    x="0"
                    y="-43"
                    textAnchor="middle"
                    className="font-mono"
                    fill="#F5EFE0"
                    style={{ fontSize: 8.5, letterSpacing: ".08em" }}
                  >
                    HIPERPRINT · 91
                  </text>
                </g>
                <text
                  x="20"
                  y="225"
                  className="font-mono"
                  fill="#1A1A1A"
                  opacity=".55"
                  style={{ fontSize: 7, letterSpacing: ".12em" }}
                >
                  AV. APATLACO
                </text>
                <text
                  x="100"
                  y="290"
                  className="font-mono"
                  fill="#1A1A1A"
                  opacity=".55"
                  style={{ fontSize: 7, letterSpacing: ".12em" }}
                >
                  ING. MECÁNICOS
                </text>
              </svg>
              <div className="absolute top-4 left-4 font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/60 bg-paper/85 px-3 py-1.5 rounded">
                PLANTA · CDMX
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/60 bg-paper/85 px-3 py-1.5 rounded">
                19.36°N · 99.07°W
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MiniFaqItem {
  q: string;
  a: string;
}

const MINI_FAQS: MiniFaqItem[] = [
  { q: "¿Cuánto tarda la cotización?", a: "Menos de 24 horas hábiles, formal y con desglose." },
  {
    q: "¿Cuál es el tiraje mínimo?",
    a: "500 piezas en bolsas/cajas, 1,000 en papel y portavasos.",
  },
  {
    q: "¿Hacen el arte sin costo?",
    a: "Sí, en tu primera orden de 5,000+ piezas. Después manejamos tarifa preferencial.",
  },
  {
    q: "¿Envían fuera de CDMX?",
    a: "A toda la república, vía paqueterías confiables. El costo va en la cotización.",
  },
];

function MiniFAQ() {
  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <div className="label-mono mb-3">{"// LO RÁPIDO"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{ letterSpacing: "-0.02em", lineHeight: 1, fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Las dudas más comunes.
            </h2>
          </div>
          <Link
            href="/productos#faq"
            className="hidden md:inline-flex items-center gap-2 font-medium text-leaf hover:gap-3 transition-all"
          >
            Ver todas <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {MINI_FAQS.map((f, i) => (
            <div
              key={i}
              className="reveal py-6 border-t border-ink/15"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-[10.5px] tracking-[.18em] uppercase text-ink/40">
                  0{i + 1}
                </span>
                <h3
                  className="font-serif text-ink text-[19px] font-semibold"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  {f.q}
                </h3>
              </div>
              <p className="text-ink/70 text-[15px] pl-7" style={{ lineHeight: 1.55 }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactoPage() {
  return (
    <div id="top" data-screen-label="Contacto">
      <SiteEffects />
      <Header current="contacto" />
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
