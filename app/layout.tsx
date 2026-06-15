import type { Metadata } from "next";
import { Big_Shoulders_Display, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppFab } from "@/components/WhatsAppFab";

// Body — a clean, slightly characterful grotesque. Reads well at small sizes
// across the catalogue's dense spec lists.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Display — industrial, condensed, high-impact. Echoes the bold print-shop
// headings of the corporate catalogue (S 001, "Material", "Características").
const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
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
      className={`${hanken.variable} ${bigShoulders.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
