"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowIcon,
  AwardIcon,
  FactoryIcon,
  HeartIcon,
  LeafIcon,
  SunIcon,
  TagIcon,
} from "../icons";

type IndustryIconKey = "factory" | "tag" | "heart" | "leaf" | "sun" | "award";

interface Industry {
  icon: IndustryIconKey;
  n: string;
  t: string;
  c: number;
  sample: string[];
}

const ICONS: Record<IndustryIconKey, (p: React.SVGProps<SVGSVGElement>) => ReactNode> = {
  factory: FactoryIcon,
  tag: TagIcon,
  heart: HeartIcon,
  leaf: LeafIcon,
  sun: SunIcon,
  award: AwardIcon,
};

const INDUSTRIES: Industry[] = [
  { icon: "factory", n: "01", t: "Hamburgueserías", c: 280, sample: ["Burguesía", "Magic", "Tizonsito"] },
  { icon: "tag", n: "02", t: "Taquerías", c: 420, sample: ["Taquearte", "El Bol", "La Parcela"] },
  { icon: "heart", n: "03", t: "Heladerías", c: 95, sample: ["Häagen-Dazs", "Chopy", "Dulzone"] },
  { icon: "leaf", n: "04", t: "Panaderías", c: 210, sample: ["Capricho", "La Castellana", "Los de María"] },
  { icon: "sun", n: "05", t: "Creperías y dulces", c: 75, sample: ["Lidanys", "Pintoxs", "Blaho"] },
  { icon: "award", n: "06", t: "Cadenas y franquicias", c: 18, sample: ["Price Shoes", "+ 17 más"] },
];

export function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-site px-6 lg:px-10 py-24 lg:py-32">
        <div className="mb-14 reveal max-w-3xl">
          <div className="label-mono mb-4">{"// POR INDUSTRIA"}</div>
          <h2
            className="font-serif text-ink font-bold"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.98, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Empacamos seis industrias.
            <br />
            <em className="font-medium text-leaf">Todas, comida.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ul className="lg:col-span-7 space-y-px bg-ink/10 rounded-xl overflow-hidden">
            {INDUSTRIES.map((ind, i) => {
              const IconC = ICONS[ind.icon];
              const isActive = i === active;
              return (
                <li key={ind.n}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full text-left flex items-center gap-6 px-6 py-6 transition ${
                      isActive ? "bg-paper" : "bg-cream hover:bg-paper/60"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-12 h-12 rounded-full inline-flex items-center justify-center transition ${
                        isActive ? "bg-leaf text-paper" : "bg-paper text-leaf border border-ink/15"
                      }`}
                    >
                      <IconC className="w-5 h-5" />
                    </span>
                    <span className="flex-1 flex items-baseline gap-4">
                      <span className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/40">
                        {ind.n}
                      </span>
                      <span
                        className="font-serif text-ink font-semibold"
                        style={{
                          fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        {ind.t}
                      </span>
                    </span>
                    <span className="font-mono text-[11px] tracking-[.18em] uppercase text-ink/55 hidden sm:inline">
                      {ind.c} negocios
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-ink/50 transition ${
                        isActive ? "rotate-90" : ""
                      }`}
                    >
                      <ArrowIcon className="w-4 h-4" />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="lg:col-span-5 reveal">
            <div className="bg-ink text-paper rounded-xl p-8 lg:p-10 sticky top-32">
              <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/50 mb-4">
                INDUSTRIA · {INDUSTRIES[active].n}
              </div>
              <h3
                className="font-serif font-bold"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                {INDUSTRIES[active].t}
              </h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span
                  className="stat-num text-tortilla"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)" }}
                >
                  {INDUSTRIES[active].c}
                </span>
                <span className="text-paper/65 font-mono text-[12px] tracking-wider uppercase">
                  negocios activos
                </span>
              </div>
              <div className="mt-6 pt-6 border-t border-paper/15">
                <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/50 mb-3">
                  ALGUNAS MARCAS
                </div>
                <ul className="space-y-2">
                  {INDUSTRIES[active].sample.map((s) => (
                    <li
                      key={s}
                      className="font-serif text-paper text-[18px] flex items-center gap-3 font-semibold"
                    >
                      <span className="w-1.5 h-1.5 bg-tortilla rounded-full" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contacto" className="mt-8 btn btn-primary !w-full justify-center">
                Cotiza para tu industria <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
