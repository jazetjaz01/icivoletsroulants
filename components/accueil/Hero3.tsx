"use client";

import { Star, StarHalf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero3() {
  return (
    <section className="w-full py-8  bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Bloc Custplace */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
               {/* Remplace par ton vrai logo si dispo */}
               <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center border-2 border-amber-400 font-bold text-[10px] text-center p-1 uppercase">
                 Avis Pro
               </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">4.8 sur 5</div>
              <div className="flex text-amber-400 my-1">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="text-sm text-slate-500">
                Note moyenne sur <span className="font-semibold text-slate-800">1 450 avis clients</span>
              </p>
            </div>
          </div>

          {/* Séparateur Vertical (visible uniquement sur desktop) */}
          <div className="hidden md:block h-12 w-px bg-slate-200" />

          {/* Bloc Google */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 shrink-0">
               <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
               </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">4.9 sur 5</div>
              <div className="flex text-amber-400 my-1">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <StarHalf size={18} fill="currentColor" />
              </div>
              <p className="text-sm text-slate-500">
                Note moyenne sur <span className="font-semibold text-slate-800">890 avis clients</span>
              </p>
            </div>
          </div>

          {/* Texte explicatif */}
          <div className="text-center md:text-left max-w-[280px]">
            <h4 className="font-bold text-slate-900">Avis authentifiés</h4>
            <p className="text-sm text-slate-600 leading-snug">
              Les avis affichés sur ce site proviennent tous de vrais clients <span className="font-semibold italic">Icivoletsroulants</span>.
            </p>
          </div>

          {/* Bouton d'action */}
          <Link 
            href="/avis" 
            className="bg-teal-700 hover:bg-black text-white font-bold py-3 px-8 rounded-md transition-all shadow-md active:scale-95"
          >
            Lire les avis
          </Link>

        </div>
      </div>
    </section>
  );
}