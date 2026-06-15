import type { ReactNode } from "react";

interface ProductMockupProps {
  label?: string;
  src?: string;
  tone?: "kraft" | "cream" | "paper" | "sage" | "deep" | "tortilla" | "ink";
  aspect?: string;
  className?: string;
  note?: string;
  fit?: "cover" | "contain";
  bg?: string;
  children?: ReactNode;
}

export function ProductMockup({
  label,
  src,
  tone = "kraft",
  aspect = "4/3",
  className = "",
  note,
  fit = "cover",
  bg = "#FFFFFF",
  children,
}: ProductMockupProps) {
  if (src) {
    return (
      <div
        className={`${className} relative w-full overflow-hidden rounded-2xl`}
        style={{ aspectRatio: aspect === "auto" ? undefined : aspect, background: bg }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label || "Producto Hiperprint"}
          loading="lazy"
          className="lift-img absolute inset-0 w-full h-full"
          style={{ objectFit: fit }}
        />
        {children}
        {note && (
          <div className="absolute right-3 bottom-3">
            <span className="font-mono text-[10px] tracking-[.16em] uppercase text-ink/70 bg-paper/85 px-2 py-1 rounded">
              {note}
            </span>
          </div>
        )}
      </div>
    );
  }
  const tones: Record<string, string> = {
    kraft: "placeholder-kraft",
    cream: "bg-cream",
    paper: "bg-paper",
    sage: "bg-blue",
    deep: "bg-goldDeep",
    tortilla: "bg-red",
    ink: "bg-ink",
  };
  const textColor =
    tone === "ink" || tone === "tortilla" || tone === "deep" || tone === "sage"
      ? "text-paper/85"
      : "text-ink/65";
  return (
    <div
      className={`${tones[tone] || "placeholder-kraft"} ${className} relative w-full overflow-hidden rounded-2xl fine-grain`}
      style={{ aspectRatio: aspect === "auto" ? undefined : aspect }}
    >
      {children}
      <div className={`absolute left-4 top-4 ${textColor}`}>
        <span className="placeholder-tag">{`// ${label}`}</span>
      </div>
      {note && (
        <div className={`absolute right-4 bottom-4 ${textColor}`}>
          <span className="placeholder-tag">{note}</span>
        </div>
      )}
    </div>
  );
}
