import Link from "next/link";

interface LogoProps {
  dark?: boolean;
  withTagline?: boolean;
}

export function Logo({ dark = false, withTagline = false }: LogoProps) {
  const c = dark ? "#FFFDF7" : "#181513";
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="Hiperprint, inicio">
      <span
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
        style={{ background: "#181513" }}
      >
        <span className="block w-4 h-4 border-2 border-paper" style={{ transform: "rotate(45deg)" }} />
        <span className="absolute w-4 h-px bg-paper" />
        <span className="absolute w-px h-4 bg-paper" />
      </span>
      <span className="leading-none">
        <span
          className="block font-sans text-[22px] tracking-tight"
          style={{ color: c, fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Hiperprint<span style={{ color: "#E11D2A" }}>.</span>
        </span>
        {withTagline && (
          <span
            className="block font-mono text-[8.5px] tracking-[.34em] uppercase mt-0.5"
            style={{ color: dark ? "rgba(255,253,247,.6)" : "rgba(24,21,19,.5)" }}
          >
            Box for fast food
          </span>
        )}
      </span>
    </Link>
  );
}
