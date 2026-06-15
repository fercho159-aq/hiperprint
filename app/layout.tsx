import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppFab } from "@/components/WhatsAppFab";

// Display + body — Archivo, a bold grotesque carrying the whole identity from
// chunky 900-weight headings down to body copy. Vibrant, commercial, flat.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// Mono — Space Mono for kickers, labels and spec tags.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiperprint.mx"),
  title: "Hiperprint — Empaques con sabor a México",
  description:
    "Impresión personalizada en papel, cajas y bolsas ecológicas para la industria de comida rápida.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Hiperprint — Empaques con sabor a México",
    description:
      "Impresión personalizada en papel, cajas y bolsas ecológicas para la industria de comida rápida.",
    images: ["/images/home/papelgrado-02.png"],
    locale: "es_MX",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es-MX"
      className={`${archivo.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans">
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
