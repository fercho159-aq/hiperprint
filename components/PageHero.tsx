import Link from "next/link";

type HeroBg = "gold" | "blue" | "red";

interface PageHeroProps {
  kicker: string;
  title: string;
  italic?: string;
  lead?: string;
  breadcrumb?: string;
  bg?: HeroBg;
}

const HERO_BG: Record<HeroBg, { bg: string; blob: string; text: string; sub: string; accent: string; crumb: string }> = {
  gold: { bg: "#FDC42D", blob: "#E11D2A", text: "#181513", sub: "rgba(24,21,19,.72)", accent: "#E11D2A", crumb: "rgba(24,21,19,.6)" },
  blue: { bg: "#1BA2DD", blob: "#FDC42D", text: "#FFFFFF", sub: "rgba(255,255,255,.88)", accent: "#FDC42D", crumb: "rgba(255,255,255,.78)" },
  red: { bg: "#E11D2A", blob: "#FDC42D", text: "#FFFFFF", sub: "rgba(255,255,255,.9)", accent: "#FDC42D", crumb: "rgba(255,255,255,.8)" },
};

export function PageHero({ kicker, title, italic, lead, breadcrumb, bg = "gold" }: PageHeroProps) {
  const c = HERO_BG[bg] || HERO_BG.gold;
  return (
    <section className="grain relative overflow-hidden" style={{ background: c.bg }}>
      <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: c.blob, opacity: 0.9 }} />
      <div className="absolute -bottom-48 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none" style={{ background: c.blob, opacity: 0.14 }} />
      <div className="mx-auto max-w-site px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28 relative">
        <div className="flex items-center gap-3 mb-10 font-mono text-[11px] tracking-[.18em] uppercase font-bold" style={{ color: c.crumb }}>
          <Link href="/" className="hover:opacity-70">Inicio</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: c.text }}>{breadcrumb || kicker}</span>
        </div>
        <div className="flex items-center gap-4 mb-7">
          <span className="font-mono text-[11px] tracking-[.18em] uppercase font-bold" style={{ color: c.text }}>{kicker}</span>
          <span className="h-0.5 flex-1 max-w-[160px]" style={{ background: c.text, opacity: 0.3 }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h1 className="lg:col-span-8 font-sans" style={{ color: c.text, fontWeight: 900, letterSpacing: "-0.035em", lineHeight: ".9", fontSize: "clamp(2.8rem, 7.5vw, 6.2rem)" }}>
            <span className="line-mask"><span style={{ transitionDelay: ".05s" }}>{title}</span></span>
            {italic && (
              <span className="line-mask"><span style={{ transitionDelay: ".18s", color: c.accent }}>{italic}</span></span>
            )}
          </h1>
          {lead && (
            <p className="lg:col-span-4 text-[17px] lg:text-[18px] lg:pb-3 font-medium" style={{ color: c.sub, lineHeight: 1.5 }}>{lead}</p>
          )}
        </div>
      </div>
    </section>
  );
}
