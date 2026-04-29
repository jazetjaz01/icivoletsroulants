"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
// Importation du nouveau composant de recherche
import { HeroSearch } from "../HeroSearch";

export default function Hero1() {
  return (
    <section className="relative w-full overflow-hidden bg-background border-b min-h-[600px]">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:h-[700px] relative">
        
        {/* --- Colonne IMAGE (Gauche) --- */}
        <div className="relative h-[300px] lg:h-full w-full z-0">
          <Image
            src="/images/accueil/accueil10.jpg" 
            alt="Réparation de volets roulants - Ici Volets Roulants" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>

        {/* --- Colonne TEXTE (Droite) --- */}
        <div className="relative p-8 lg:p-20 flex flex-col justify-center items-start z-10 bg-slate-200
                        lg:bg-transparent
                        lg:after:content-[''] lg:after:absolute 
                        lg:after:top-0 lg:after:bottom-0 lg:after:left-[-100px] 
                        lg:after:right-0 
                        lg:after:bg-slate-300 lg:after:-z-10
                        lg:after:[clip-path:polygon(100%_0%,0%_0%,100px_100%,100%_100%)]">
          
          <div className="max-w-xl lg:ml-12 w-full">
            

            <h1 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-black leading-[1.1] tracking-tight">
             Vous souhaitez réparer vos volets roulants ?
              
            </h1>

            <p className="mt-6 text-slate-700 text-lg md:text-xl leading-relaxed opacity-90">
              <strong>Icivoletsroulants</strong> est spécialisé dans la <strong>réparation de volets roulants, stores, portes de garage et moteurs de portail</strong> dans toute la France.
            </p>

            {/* --- REMPLACEMENT DES BOUTONS PAR LE COMPOSANT DE RECHERCHE --- */}
            <div className="mt-10 w-full">
              <HeroSearch />
            </div>
            
            <p className="mt-4 text-xs text-slate-500 italic">
              * Intervention rapide sous 48h partout en France.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}