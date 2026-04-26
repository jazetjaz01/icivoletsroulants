import type { Metadata } from "next";
import { Outfit, Pinyon_Script, Monoton } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit", 
});

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton",
});

export const metadata: Metadata = {
  title: {
    default: "Icivoletsroulants.com | Réseau national de réparation de volets roulants",
    template: "%s | Icivoletsroulants.com France"
  },
  description: "Expert en réparation de volets roulants, stores, portails et portes de garage en France. Intervention rapide dans toute la France. Devis gratuit !",
  keywords: ["réparation volets roulants", "réparation stores", "réparation porte de garage", "réparation portails", "installation volets roulants"],
  metadataBase: new URL("https://www.icivoletsroulants.com"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prohabitation - Plaquiste et Peintre à Perpignan",
    description: "Travaux de plâtrerie, isolation et peinture dans le 66.",
    url: "https://www.prohabitation.com",
    siteName: "Prohabitation",
    locale: "fr_FR",
    type: "website",
  },
  // Tu peux ajouter ceci pour les mobiles
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" // Parfait
      className={`${outfit.variable} ${pinyon.variable} ${monoton.variable} font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <Navbar />
        {children}
             <Footer />
        </body>
    </html>
  );
}
