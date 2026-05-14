"use client";

import { useEffect, useRef } from "react";

interface CursorDotProps {
  enabled?: boolean;
}

export function CursorDot({ enabled = true }: CursorDotProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = ref.current;
    if (!dot) return;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;
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
    const overInteractive = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest("a, button, .btn, [data-cursor], input, textarea, select")) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    };
    const onLeave = () => dot.classList.remove("show");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", overInteractive);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", overInteractive);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div className="cursor-dot" ref={ref} />;
}
