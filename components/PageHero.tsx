import Link from "next/link";

type Accent = "carmin" | "cyan" | "amarillo";

interface PageHeroProps {
  kicker: string;
  title: string;
  italic?: string;
  lead?: string;
  breadcrumb?: string;
  /** Brand accent for the swoosh + kicker pill. Mirrors the catalogue's
   *  alternating coloured pages so each inner page has its own identity. */
  accent?: Accent;
}

const ACCENT: Record<Accent, { swoosh: string; pillBg: string; pillText: string }> = {
  carmin: { swoosh: "swoosh-carmin", pillBg: "#c8102e", pillText: "#ffffff" },
  cyan: { swoosh: "swoosh-cyan", pillBg: "#29abe2", pillText: "#ffffff" },
  amarillo: { swoosh: "swoosh-amarillo", pillBg: "#fdb913", pillText: "#17213b" },
};

export function PageHero({
  kicker,
  title,
  italic,
  lead,
  breadcrumb,
  accent = "carmin",
}: PageHeroProps) {
  const a = ACCENT[accent];
  return (
    <section className="grain marble relative overflow-hidden bg-kraft">
      {/* Corporate motifs — sweeping curve, rombo texture and corner wedge */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="swoosh swoosh-ring hidden lg:block absolute"
          style={{ width: 640, height: 640, right: -160, top: -200 }}
        />
        <div
          className={`swoosh ${a.swoosh} hidden lg:block absolute`}
          style={{ width: 520, height: 520, right: -220, top: -160, opacity: 0.12 }}
        />
        <div
          className="pattern-rombo hidden lg:block absolute"
          style={{
            width: 180,
            top: 0,
            bottom: 0,
            right: 0,
            opacity: 0.5,
            WebkitMaskImage: "linear-gradient(270deg,#000,transparent)",
            maskImage: "linear-gradient(270deg,#000,transparent)",
          }}
        />
        <span className="corner-wedge" style={{ left: 0, bottom: 0 }} />
      </div>
      <div className="mx-auto max-w-site px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28 relative" style={{ zIndex: 1 }}>
        <div className="flex items-center gap-3 mb-10 font-mono text-[11px] tracking-[.18em] uppercase text-ink/60">
          <Link href="/" className="hover:text-ink">
            Inicio
          </Link>
          <span className="text-ink/30">/</span>
          <span className="text-ink">{breadcrumb || kicker}</span>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <span
            className="pill-eco"
            style={{ background: a.pillBg, color: a.pillText }}
          >
            {kicker}
          </span>
          <span className="h-px flex-1 max-w-[180px] bg-ink/20" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h1
            className="lg:col-span-8 font-serif text-ink font-extrabold"
            style={{ letterSpacing: "-0.035em", lineHeight: ".94", fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            <span className="line-mask">
              <span style={{ animationDelay: ".05s" }}>{title}</span>
            </span>
            {italic && (
              <span className="line-mask">
                <span
                  className="font-medium italic text-leaf"
                  style={{ animationDelay: ".18s" }}
                >
                  {italic}
                </span>
              </span>
            )}
          </h1>
          {lead && (
            <p
              className="lg:col-span-4 text-ink/75 text-[17px] lg:text-[18px] lg:pb-3"
              style={{ lineHeight: 1.5 }}
            >
              {lead}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
