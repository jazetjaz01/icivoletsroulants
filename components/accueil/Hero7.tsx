"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

export default function Hero7() {
  return (
    <section className="w-full bg-teal-700 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* --- LOGO & SLOGAN --- */}
        <div className="flex items-center gap-4 border-white/20 md:border-r md:pr-8">
          {/* Ajout de l'icône ici */}
          <div className="flex-shrink-0">
            <Image 
              src="/images/accueil/logo-white-400.jpg" 
              alt="Logo réparation volets roulants"
              width={70}  
              height={70} 
              // brightness-0 invert permet de passer le logo en blanc pour le fond sombre
              className="h-8 w-auto md:h-12 brightness-0 invert" 
              priority 
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold md:text-3xl tracking-widest text-white ">
              icivoletsroulants
            </span>
            <span className="text-[10px] md:text-xs font-medium leading-tight mt-1 opacity-90 max-w-[200px]">
              réseau réparateurs de volets roulants
            </span>
          </div>
        </div>

        {/* --- TEXTE D'AIDE --- */}
        <div className="flex-1 text-center md:text-left space-y-1">
          <h3 className="text-lg md:text-xl font-bold">
            Une question ? Besoin d’aide ?
          </h3>
          <p className="text-sm md:text-base font-medium opacity-95">
            Notre service clients est à votre écoute.
          </p>
          <p className="text-[12px] md:text-sm opacity-80 italic">
            Du lundi au vendredi de 8h à 20h et le samedi de 8h à 18h.
          </p>
        </div>

        {/* --- NUMÉRO DE TÉLÉPHONE --- */}
        <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
          <Phone className="size-6 fill-white" />
          <span className="text-2xl md:text-3xl font-bold tracking-tight">
            06 16 22 46 82
          </span>
        </div>

      </div>
    </section>
  );
}