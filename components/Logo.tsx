import Image from "next/image";
import Link from "next/link";
import { LOGO_WORDMARK } from "./site-images";

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  // Same wordmark on light and dark backgrounds. The image is multi-color and reads
  // legibly on cream + on ink; the `dark` prop is kept for prop compatibility with
  // existing callers (Footer passes dark) and only adjusts a subtle filter.
  return (
    <Link
      href="/"
      className="inline-flex items-center group"
      aria-label="Hiperprint, inicio"
    >
      <Image
        src={LOGO_WORDMARK.src}
        alt={LOGO_WORDMARK.alt}
        width={LOGO_WORDMARK.width}
        height={LOGO_WORDMARK.height}
        priority
        sizes="(max-width: 768px) 140px, 170px"
        className={`h-9 w-auto md:h-10 ${dark ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
