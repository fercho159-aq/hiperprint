import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { CatalogGrid } from "@/components/catalogo/CatalogGrid";
import { CatalogIndex } from "@/components/catalogo/CatalogIndex";
import { ArrowDownIcon, WaIcon } from "@/components/icons";
import { buildWhatsAppUrl } from "@/components/whatsapp";

function CatalogDownloadCTA() {
  return (
    <section className="bg-paper border-b border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-10 lg:py-14">
        <div className="rounded-xl bg-cream border border-ink/10 px-6 py-8 lg:px-10 lg:py-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 reveal">
          <div className="flex-1">
            <div className="label-mono mb-2">{"// CATÁLOGO OFICIAL HIPERPRINT"}</div>
            <h2
              className="font-serif text-ink font-bold"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Descarga el catálogo en PDF.
            </h2>
            <p className="mt-3 text-ink/65 text-[15px]">
              Todas nuestras líneas en un solo documento. PDF oficial 2020 · ~2 MB.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
            <a
              href="/catalogo/catalogo-hiperprint-2020.pdf"
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
        <CatalogDownloadCTA />
        <CatalogIndex />
        <CatalogGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
