import type { ReactNode } from "react";

export type MockupTone = "kraft" | "cream" | "paper" | "sage" | "deep" | "tortilla" | "ink";

interface ProductMockupProps {
  label: string;
  tone?: MockupTone;
  aspect?: string;
  className?: string;
  note?: string;
  children?: ReactNode;
}

const TONES: Record<MockupTone, string> = {
  kraft: "placeholder-kraft",
  cream: "bg-cream",
  paper: "bg-paper",
  sage: "bg-sage/80",
  deep: "bg-kraftDeep",
  tortilla: "bg-tortilla",
  ink: "bg-ink",
};

// Tones with dark surfaces need light text. sage/deep/tortilla/ink all alias to
// dark brand colors (navy, terracotta, ink) after the brand-palette migration.
const DARK_TONES: MockupTone[] = ["sage", "deep", "tortilla", "ink"];

export function ProductMockup({
  label,
  tone = "kraft",
  aspect = "4/3",
  className = "",
  note,
  children,
}: ProductMockupProps) {
  const textColor = DARK_TONES.includes(tone) ? "text-paper/80" : "text-ink/65";
  return (
    <div
      className={`${TONES[tone]} ${className} relative w-full overflow-hidden rounded-lg fine-grain`}
      style={{ aspectRatio: aspect }}
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
