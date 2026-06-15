"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./icons";

export type NavKey = "inicio" | "productos" | "catalogo" | "nosotros" | "clientes" | "contacto";

interface HeaderProps {
  current?: NavKey;
  dark?: boolean;
}

const LINKS: { href: string; key: NavKey; label: string }[] = [
  { href: "/", key: "inicio", label: "Inicio" },
  { href: "/productos", key: "productos", label: "Productos" },
  { href: "/catalogo", key: "catalogo", label: "Catálogo" },
  { href: "/nosotros", key: "nosotros", label: "Nosotros" },
  { href: "/clientes", key: "clientes", label: "Clientes" },
  { href: "/contacto", key: "contacto", label: "Contacto" },
];

function TopBar() {
  return (
    <div className="hidden md:block bg-ink text-paper/75 text-[12px]" style={{ letterSpacing: ".02em" }}>
      <div className="mx-auto max-w-site px-6 lg:px-10 flex items-center justify-between h-9 font-mono">
        <div className="flex items-center gap-6">
          <a href="tel:5550875427" className="hover:text-gold flex items-center gap-2"><Icon.phone className="w-3.5 h-3.5" /> 55 5087 5427</a>
          <a href="mailto:ventas@hiperprint.mx" className="hover:text-gold flex items-center gap-2"><Icon.mail className="w-3.5 h-3.5" /> ventas@hiperprint.mx</a>
          <a href="https://instagram.com/hiperprint.mx" className="hover:text-gold flex items-center gap-2"><Icon.ig className="w-3.5 h-3.5" /> @hiperprint.mx</a>
        </div>
        <div className="flex items-center gap-6 text-gold font-bold tracking-[.14em]">
          <span>BOX FOR FAST FOOD</span>
          <span className="hidden lg:inline text-paper/55 font-normal tracking-[.02em]">ENVÍOS CDMX · NACIONAL</span>
        </div>
      </div>
    </div>
  );
}

export function Header({ current = "inicio", dark = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const lightText = dark && !scrolled;
  const linkBase = lightText ? "text-paper/90" : "text-ink/85";
  return (
    <>
      <TopBar />
      <div className={`nav-shell sticky top-0 z-40 ${scrolled ? "bg-paper/95 backdrop-blur-md border-b border-ink/10 shadow-[0_2px_18px_-12px_rgba(0,0,0,0.4)]" : "bg-transparent"}`}>
        <nav className="mx-auto max-w-site px-6 lg:px-10 flex items-center justify-between h-[74px]">
          <Logo dark={lightText} withTagline />
          <ul className={`hidden lg:flex items-center gap-8 text-[14.5px] font-semibold ${linkBase}`}>
            {LINKS.map((l) => {
              const active = current === l.key;
              return (
                <li key={l.href}>
                  <Link href={l.href} className={`relative py-1 inline-block group ${active ? "text-red" : "hover:text-red"}`}>
                    {l.label}
                    <span className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-red transition-transform duration-300 origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/525550875427" className={`hidden sm:inline-flex w-11 h-11 items-center justify-center rounded-full border-2 transition ${lightText ? "border-paper/40 text-paper hover:bg-paper hover:text-ink" : "border-ink/15 text-red hover:bg-red hover:text-paper hover:border-red"}`} aria-label="WhatsApp">
              <Icon.wa className="w-4 h-4" />
            </a>
            <Link href="/contacto" className="btn btn-primary hidden sm:inline-flex !py-3 !px-6">
              Cotiza ahora <Icon.arrow className="w-4 h-4" />
            </Link>
            <button onClick={() => setOpen(true)} className={`lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-xl border-2 ${lightText ? "border-paper/40 text-paper" : "border-ink/15 text-ink"}`} aria-label="Abrir menú">
              <Icon.burger className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      <div className={`mobile-menu fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/50 ${open ? "opacity-100" : "opacity-0"} transition-opacity`} />
        <aside className={`absolute right-0 top-0 h-full w-[86%] max-w-[380px] bg-paper p-6 shadow-2xl transform ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between mb-10">
            <Logo withTagline />
            <button onClick={() => setOpen(false)} className="w-11 h-11 inline-flex items-center justify-center rounded-xl border-2 border-ink/15" aria-label="Cerrar menú"><Icon.x className="w-5 h-5" /></button>
          </div>
          <ul className="space-y-1">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <Link onClick={() => setOpen(false)} href={l.href} className={`block py-3.5 border-b border-ink/10 font-sans text-[28px] ${current === l.key ? "text-red" : ""}`} style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                  <span className="font-mono text-[11px] text-ink/40 mr-3">0{i + 1}</span>{l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center">Cotiza ahora <Icon.arrow className="w-4 h-4" /></Link>
            <a href="https://wa.me/525550875427" className="btn btn-secondary w-full justify-center"><Icon.wa className="w-4 h-4" /> WhatsApp</a>
          </div>
          <div className="mt-10 text-[13px] text-ink/55 font-mono space-y-1.5">
            <div>55 5087 5427</div>
            <div>ventas@hiperprint.mx</div>
            <div>@hiperprint.mx</div>
          </div>
        </aside>
      </div>
    </>
  );
}
