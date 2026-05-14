import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { CatalogGrid } from "@/components/catalogo/CatalogGrid";
import { CatalogIndex } from "@/components/catalogo/CatalogIndex";
import { ArrowDownIcon, WaIcon } from "@/components/icons";
import { buildWhatsAppUrl } from "@/components/whatsapp";

const CatalogFlipbook = dynamic(() => import("@/components/catalogo/CatalogFlipbook"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl bg-navyDeep text-paper p-12 lg:p-16 text-center min-h-[420px] flex flex-col items-center justify-center gap-6">
      <div className="w-14 h-14 rounded-full border-2 border-paper/15 border-t-terracotta animate-spin" />
      <p className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/80">
        Preparando el flipbook…
      </p>
    </div>
  ),
});

function CatalogFlipbookSection() {
  return (
    <section className="bg-paper border-b border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-12 lg:py-16">
        <div className="reveal mb-8 lg:mb-10 text-center max-w-2xl mx-auto">
          <div className="label-mono mb-3">{"// CATÁLOGO OFICIAL HIPERPRINT"}</div>
          <h2
            className="font-serif text-ink font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Hojea el catálogo <em className="font-medium text-terracotta">igual que en papel</em>.
          </h2>
          <p className="mt-3 text-ink/65 text-[15.5px]">
            Pasa cada página con un toque. PDF oficial 2021 · ~4.5 MB.
          </p>
        </div>

        <div className="reveal max-w-6xl xl:max-w-7xl mx-auto">
          <CatalogFlipbook />
        </div>

        <div className="reveal mt-10 lg:mt-12 flex flex-col items-center gap-4">
          <p className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/55">
            ¿Prefieres descargarlo?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/catalogo/catalogo-hiperprint-2021.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ArrowDownIcon className="w-4 h-4" /> Descargar catálogo PDF
            </a>
            <a
              href={buildWhatsAppUrl("Hola, me gustaría ver el catálogo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tortilla"
            >
              <WaIcon className="w-4 h-4" /> Ver catálogo por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CatalogoPage() {
  return (
    <div id="top" data-screen-label="Catálogo">
      <SiteEffects />
      <Header current="catalogo" />
      <main>
        <PageHero
          kicker="CATÁLOGO · MZO 2026"
          title="Todo lo que"
          italic="hemos impreso."
          breadcrumb="Catálogo"
          lead="100+ piezas activas entre papel, cajas, bolsas y temporada. Filtra, navega, abre cualquier pieza y pídela directo."
        />
        <CatalogFlipbookSection />
        <CatalogIndex />
        <CatalogGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
