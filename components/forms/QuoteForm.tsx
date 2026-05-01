"use client";

import { useState } from "react";
import Image from "next/image";
// Conservation uniquement des icônes utilisées dans le panneau de gauche
import { FileBadge, Medal, Trophy } from "lucide-react"; 
import { cn } from "@/lib/utils";

const SERVICES = [
  { 
    id: "reparation", 
    title: "Réparation volets roulants", 
    image: "/images/devis/devis2.png" 
  },
  { 
    id: "motorisation", 
    title: "Motorisation de volets", 
    image: "/images/devis/devis3.jpg"
  },
  { 
    id: "installation", 
    title: "Installation volets neufs", 
    image: "/images/devis/devis4.png"  
  },
  { 
    id: "moustiquaires", 
    title: "Installation moustiquaires", 
    image: "/images/devis/devis5.png"  
  },
  { 
    id: "store", 
    title: "Réparation store terrasse", 
    image: "/images/devis/devis6.png"  
  },
  { 
    id: "portail", 
    title: "Réparation moteur portail", 
    image: "/images/devis/devis7.png"  
  },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service_type: "",
  });

  const selectService = (serviceId: string) => {
    setFormData({ ...formData, service_type: serviceId });
    setStep(2);
  };

  return (
    <section className="min-h-screen bg-slate-200 flex flex-col lg:flex-row">
      
      {/* --- Panneau de Gauche --- */}
      <div className="relative lg:w-1/3 min-h-[400px] lg:min-h-screen text-white p-8 lg:p-12 lg:pt-24 flex flex-col justify-start items-center overflow-hidden">
        <Image
          src="/images/devis/devis1.jpg"
          alt="Arrière-plan devis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-center w-full">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 leading-tight text-center">
            Votre demande de devis 
          </h2>
          
          <div className="bg-white text-slate-900 p-6 lg:p-8 shadow-2xl max-w-sm w-full">
            <p className="text-sm md:text-base leading-relaxed mb-6 text-center">
              <strong className="text-black">C&apos;est simple, gratuit et sans engagement !</strong><br />
              Faites votre demande en ligne et obtenez une mise en relation avec nos techniciens locaux. 
              En cas de besoin, nos Conseillers sont à votre disposition.
            </p>

            <div className="grid grid-cols-3 gap-2 py-6 border-y border-slate-100">
              <div className="flex flex-col items-center text-center group">
                <div className="p-2 bg-teal-50 rounded-full mb-2 group-hover:bg-teal-100 transition-colors">
                  <FileBadge className="size-6 text-teal-700" />
                </div>
                <span className="text-[10px] font-bold uppercase leading-tight text-slate-600">Matériel<br/>Garanti</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="p-2 bg-teal-50 rounded-full mb-2 group-hover:bg-teal-100 transition-colors">
                  <Medal className="size-6 text-teal-700" />
                </div>
                <span className="text-[10px] font-bold uppercase leading-tight text-slate-600">Pose<br/>Pro</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="p-2 bg-teal-50 rounded-full mb-2 group-hover:bg-teal-100 transition-colors">
                  <Trophy className="size-6 text-teal-700" />
                </div>
                <span className="text-[10px] font-bold uppercase leading-tight text-slate-600">Relation<br/>Client</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
               <div className="text-[10px] uppercase font-bold text-teal-700 bg-teal-50 px-2 py-1">Expertise France</div>
               <div className="text-[10px] uppercase font-bold text-teal-700 bg-teal-50 px-2 py-1">Intervention 48h</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Panneau de Droite --- */}
      <div className="lg:w-2/3 p-8 lg:p-20 lg:pt-32 flex items-start">
        <div className="max-w-3xl mx-auto w-full">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Demande de devis</span>
          
          {step === 1 && (
            <div className="mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-3xl font-bold text-slate-900 mb-12">
                Quel service vous intéresse ?
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => selectService(service.id)}
                    className={cn(
                      "flex flex-col items-center justify-center p-8 bg-white border-2 transition-all duration-200 group hover:border-teal-600 shadow-sm min-h-[220px]",
                      formData.service_type === service.id ? "border-teal-600 ring-2 ring-teal-600/20" : "border-transparent"
                    )}
                  >
                    {/* Conteneur d'image fixé à h-24 w-24 pour toutes les images */}
                    <div className="mb-4 flex items-center justify-center relative h-24 w-24">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-contain" 
                      />
                    </div>

                    <span className="text-sm text-center text-black tracking-tight font-semibold ">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-4 animate-in fade-in slide-in-from-right-4 duration-500">
               <h1 className="text-3xl font-bold text-slate-900 mb-8">Dites-nous en plus</h1>
               <button 
                onClick={() => setStep(1)} 
                className="text-sm text-slate-500 underline mb-8 hover:text-teal-600 transition-colors flex items-center gap-2"
               >
                ← Retour au choix du produit
               </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}