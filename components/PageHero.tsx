import Link from "next/link";

interface PageHeroProps {
  kicker: string;
  title: string;
  italic?: string;
  lead?: string;
  breadcrumb?: string;
}

export function PageHero({ kicker, title, italic, lead, breadcrumb }: PageHeroProps) {
  return (
    <section className="grain relative bg-kraft">
      <div className="mx-auto max-w-site px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="flex items-center gap-3 mb-10 font-mono text-[11px] tracking-[.18em] uppercase text-ink/60">
          <Link href="/" className="hover:text-ink">
            Inicio
          </Link>
          <span className="text-ink/30">/</span>
          <span className="text-ink">{breadcrumb || kicker}</span>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <span className="label-mono">{kicker}</span>
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
