"use client";

import { useEffect, useRef } from "react";

/**
 * SiteEffects — drives the reveal-on-scroll (.reveal / .line-mask → .in) and the
 * custom cursor dot. Mount once per page (inside the page body).
 */
export function SiteEffects({ showCursor = true }: { showCursor?: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);

  // reveal on scroll
  useEffect(() => {
    const raf = requestAnimationFrame(() =>
      document.querySelectorAll(".line-mask").forEach((m) => m.classList.add("in")),
    );
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((e) => io.observe(e));
    // safety: reveal everything after a beat in case observer misses
    const t = window.setTimeout(() => els.forEach((e) => e.classList.add("in")), 2600);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  // custom cursor
  useEffect(() => {
    if (!showCursor) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    if (!dot) return;
    let x = 0,
      y = 0,
      tx = 0,
      ty = 0,
      raf = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.classList.add("show");
    };
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t?.closest("a, button, .btn, [data-cursor], input, textarea, select")) dot.classList.add("active");
      else dot.classList.remove("active");
    };
    const onLeave = () => dot.classList.remove("show");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [showCursor]);

  if (!showCursor) return null;
  return <div className="cursor-dot" ref={dotRef} />;
}
