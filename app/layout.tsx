import type { Metadata } from "next";
import { Playfair_Display, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
      className={`${montserrat.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
