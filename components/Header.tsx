"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import {
  ArrowIcon,
  BurgerIcon,
  IgIcon,
  PhoneIcon,
  WaIcon,
  XIcon,
} from "./icons";
import { buildWhatsAppUrl } from "./whatsapp";

export type NavKey = "inicio" | "productos" | "catalogo" | "nosotros" | "clientes" | "contacto";

interface NavLink {
  href: string;
  key: NavKey;
  label: string;
}

const LINKS: NavLink[] = [
  { href: "/", key: "inicio", label: "Inicio" },
  { href: "/productos", key: "productos", label: "Productos" },
  { href: "/catalogo", key: "catalogo", label: "Catálogo" },
  { href: "/nosotros", key: "nosotros", label: "Nosotros" },
  { href: "/clientes", key: "clientes", label: "Clientes" },
  { href: "/contacto", key: "contacto", label: "Contacto" },
];

function TopBar() {
  return (
    <div className="hidden md:block bg-ink text-paper/75 text-[12px] tracking-[.02em]">
      <div className="mx-auto max-w-site px-6 lg:px-10 flex items-center justify-between h-9 font-mono">
        <div className="flex items-center gap-6">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper flex items-center gap-2"
          >
            <WaIcon className="w-3.5 h-3.5" /> WhatsApp +52 56 1158 1587
          </a>
          <a
            href={buildWhatsAppUrl("Hola Hiperprint, me gustaría llamarles.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper flex items-center gap-2"
          >
            <PhoneIcon className="w-3.5 h-3.5" /> Pedir llamada
          </a>
          <a
            href="https://instagram.com/hiperprint.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper flex items-center gap-2"
          >
            <IgIcon className="w-3.5 h-3.5" /> @hiperprint.mx
          </a>
        </div>
        <div className="flex items-center gap-6 text-paper/55">
          <span>L–V 9:00–18:00</span>
          <span className="hidden lg:inline">ENVÍOS CDMX · NACIONAL</span>
        </div>
      </div>
    </div>
  );
}

interface HeaderProps {
  current?: NavKey;
}

export function Header({ current = "inicio" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <div
        className={`nav-shell sticky top-0 z-40 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-site px-6 lg:px-10 flex items-center justify-between h-[72px]">
          <Logo />
          <ul className="hidden lg:flex items-center gap-9 text-[14.5px] text-ink/85 font-medium">
            {LINKS.map((l) => {
              const active = current === l.key;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative py-1 inline-block group ${active ? "text-leaf" : "hover:text-leaf"}`}
                  >
                    {l.label}
                    <span
                      className={`absolute left-0 right-0 -bottom-0.5 h-px bg-leaf transition-transform duration-300 origin-left ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-full border border-ink/15 text-leaf hover:bg-leaf hover:text-paper hover:border-leaf transition"
              aria-label="WhatsApp"
            >
              <WaIcon className="w-4 h-4" />
            </a>
            <Link href="/contacto" className="btn btn-primary hidden sm:inline-flex">
              Cotiza ahora <ArrowIcon className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-md border border-ink/15"
              aria-label="Abrir menú"
            >
              <BurgerIcon className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      <div className={`mobile-menu fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-[380px] bg-paper p-6 shadow-2xl transform transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-ink/15"
              aria-label="Cerrar menú"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          <ul className="space-y-1">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3.5 border-b border-ink/10 font-serif text-[28px] font-semibold ${
                    current === l.key ? "text-leaf" : ""
                  }`}
                >
                  <span className="font-mono text-[11px] text-ink/40 mr-3">0{i + 1}</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full justify-center"
            >
              Cotiza ahora <ArrowIcon className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full justify-center"
            >
              <WaIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-10 text-[13px] text-ink/55 font-mono space-y-1.5">
            <div>WhatsApp +52 56 1158 1587</div>
            <div>@hiperprint.mx</div>
          </div>
        </aside>
      </div>
    </>
  );
}
