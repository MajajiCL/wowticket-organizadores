import type { Metadata, Viewport } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wowticket.cl"),
  title: "Vende Entradas Online Fácil y Seguro — Plataforma para Organizadores de Eventos | Wowticket",
  description:
    "Controla, gestiona y maximiza tus ingresos con la ticketera más ágil y con la comisión más baja del mercado. Comisión 10%, dinero en 24 horas hábiles y Ticket QR seguro.",
  keywords: [
    "ticketera chile", "vender entradas online", "eventos chile",
    "plataforma eventos", "entradas qr", "wowticket", "productoras chile",
  ],
  authors: [{ name: "WowTicket.cl" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "WowTicket.cl",
    title: "La Plataforma Creada para Organizadores de Eventos | Wowticket",
    description:
      "Controla, gestiona y maximiza tus ingresos con la ticketera más ágil y con la comisión más baja del mercado.",
    images: [{ url: "/logos/wowticket-color.png", width: 1890, height: 1417, alt: "WowTicket.cl" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Plataforma Creada para Organizadores de Eventos | Wowticket",
    description: "Comisión 10%, dinero en 24 horas hábiles y Ticket QR seguro.",
    images: ["/logos/wowticket-color.png"],
  },
  icons: { icon: `${PREFIX}/logos/favicon-192.png`, apple: `${PREFIX}/logos/favicon-192.png` },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${outfit.variable}`}>
      <body>
        {/* Activa las animaciones de entrada solo si hay JS (sin parpadeo, antes del paint) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
