"use client";

import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero1() {
  return (
    <section className="relative w-full overflow-hidden bg-background border-b min-h-[600px]">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:h-[700px] relative">
        
        {/* --- Colonne IMAGE (Gauche) --- */}
        <div className="relative h-[300px] lg:h-full w-full z-0">
          <Image
            src="/images/accueil/accueil1.jpg" 
            alt="Travaux de placo et peinture Perpignan - Prohabitation" 
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
          
          <div className="max-w-xl lg:ml-12">
            <Badge className="rounded-full border-border py-1 px-4 mb-6 hover:bg-slate-100 transition-colors cursor-pointer" variant="secondary">
    <Link href="/actualite" className="flex items-center text-sm font-medium">
      Actualité icivoletsroulants <ArrowUpRight className="ml-1 size-4" />
    </Link>
  </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-teal-700 leading-[1.1] tracking-tight">
             vous souhaitez réparer  
              <span className="text-teal-700"> vos volets roulants ?</span>
            </h1>

            <p className="mt-6 text-slate-700 text-lg md:text-xl leading-relaxed opacity-90">
              <strong>Icivoletsroulants</strong> est spécialisé dans la  <strong>réparation de volets roulants, stores, portes de garage et moteurs de portail </strong> dans toute la France.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* --- AJOUT DU LIEN VERS CONTACT --- */}
              <Button  className="rounded-full text-base px-8 h-12 bg-teal-700 hover:bg-slate-900 transition-all shadow-lg" size="lg">
                <Link href="/rendez-vous" className="flex items-center">
                  Demande de rendez-vous <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>

              <Button  className="rounded-full text-base px-8 h-12 shadow-none border-slate-300 hover:bg-white" size="lg" variant="outline">
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <CirclePlay className="mr-2 size-5 text-slate-600" /> Contact
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}