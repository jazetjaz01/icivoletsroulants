import type { Metadata } from "next";

import Hero1 from "@/components/actualite/Hero1";
import Blog from "@/components/blog";
import Hero2 from "@/components/accueil/Hero2";

export const metadata: Metadata = {
  title: "Actualités & Conseils réparation volets roulants | Icivoletsroulants",
  description: "Découvrez l'actualité de notre réseau national de réparation de volets roulants",
  keywords: ["blog réparation volets roulants", "réparation stores", "réparation portes de garage", "réparation moteur portail"],
};

export default function ActualitesPage() {
  // Données structurées pour un Blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Le Blog de Icivoletsroulants",
    "description": "Réseau national de réparation de volets roulants",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Icivoletsroulants",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perpignan",
        "postalCode": "66100",
        "addressCountry": "FR"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-200 font-sans">
        <main className="flex flex-col">
        
          <Hero1 />
          <Hero2 />
          <Blog />
        </main>
      </div>
    </>
  );
}