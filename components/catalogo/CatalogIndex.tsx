"use client";

interface CategoryEntry {
  id: string;
  label: string;
  count: number;
}

const CATS: CategoryEntry[] = [
  { id: "papel", label: "Papel", count: 6 },
  { id: "cajas", label: "Cajas", count: 5 },
  { id: "bolsas", label: "Bolsas", count: 5 },
  { id: "temporada", label: "Línea temporada", count: 4 },
];

export function CatalogIndex() {
  return (
    <section className="bg-paper border-b border-ink/10">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {CATS.map((c, i) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: window.scrollY + 200, behavior: "smooth" });
              }}
              className="reveal flex items-baseline gap-3 group"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span
                className="stat-num text-ink/15 group-hover:text-leaf transition-colors"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                0{i + 1}
              </span>
              <div>
                <div
                  className="font-serif text-ink text-[20px] font-semibold"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  {c.label}
                </div>
                <div className="font-mono text-[11px] tracking-wider uppercase text-ink/50">
                  {c.count} piezas
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
