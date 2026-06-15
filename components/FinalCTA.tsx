import Link from "next/link";
import { Icon } from "./icons";

export function FinalCTA() {
  return (
    <section className="bg-ink text-paper relative overflow-hidden">
      <div className="absolute -top-32 right-10 w-[380px] h-[380px] rounded-full bg-red/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[320px] h-[320px] rounded-full bg-gold/15 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-site px-6 lg:px-10 py-20 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[.18em] uppercase text-gold font-bold mb-4">// HABLEMOS</div>
            <h2 className="font-sans" style={{ fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 0.92, fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)" }}>
              ¿Listo para empacar
              <br />
              <span style={{ color: "#FDC42D" }}>tus antojos?</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link href="/contacto" className="btn btn-primary">Cotiza tu pedido <Icon.arrow className="w-4 h-4" /></Link>
            <a href="https://wa.me/525550875427" className="btn btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink"><Icon.wa className="w-4 h-4" /> WhatsApp directo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
