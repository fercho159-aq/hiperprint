import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { FinalCTA } from "@/components/FinalCTA";
import { Configurator } from "@/components/producto/Configurator";
import { CATEGORY_LABEL, allSkus, getProduct } from "@/lib/products";

interface PageProps {
  params: Promise<{ sku: string }>;
}

export function generateStaticParams() {
  return allSkus().map((sku) => ({ sku }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sku } = await params;
  const product = getProduct(sku);
  if (!product) return { title: "Producto no encontrado · Hiperprint" };
  return {
    title: `${product.name} · Hiperprint`,
    description: product.blurb,
    openGraph: {
      title: `${product.name} · Hiperprint`,
      description: product.blurb,
      images: [product.image.src],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { sku } = await params;
  const product = getProduct(sku);
  if (!product) notFound();

  return (
    <div id="top" data-screen-label={`Producto · ${product.name}`}>
      <SiteEffects />
      <Header current="catalogo" />
      <main>
        <section className="bg-paper border-b border-ink/10">
          <div className="mx-auto max-w-site px-6 lg:px-10 pt-10 lg:pt-14 pb-4">
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[.18em] uppercase text-ink/60">
              <Link href="/" className="hover:text-ink">
                Inicio
              </Link>
              <span className="text-ink/30">/</span>
              <Link href="/catalogo" className="hover:text-ink">
                Catálogo
              </Link>
              <span className="text-ink/30">/</span>
              <span className="text-ink">{CATEGORY_LABEL[product.cat]}</span>
              <span className="text-ink/30">/</span>
              <span className="text-ink/75 truncate">{product.name}</span>
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-site px-6 lg:px-10 py-10 lg:py-16">
            <Configurator product={product} />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
