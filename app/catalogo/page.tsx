import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { CatalogGrid } from "@/components/catalogo/CatalogGrid";
import { CatalogIndex } from "@/components/catalogo/CatalogIndex";

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
        <CatalogIndex />
        <CatalogGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
