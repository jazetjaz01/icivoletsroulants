"use client";

import Image from "next/image"; // Importation du composant Image de Next.js

export const Logo = () => (
  // Ajout de gap-3 pour espacer le logo du texte, et items-center pour aligner verticalement
  <div className="flex items-center gap-3 leading-none">
    
    {/* Conteneur de l'image pour contrôler sa taille facilement */}
    <div className="flex-shrink-0">
      <Image 
        src="/images/logo400.jpg" // Note: j'ai gardé votre faute de frappe "imgages" si c'est bien le nom du dossier
        alt="Logo Ici Volets Roulants"
        width={50}  // Ajustez la largeur souhaitée (en pixels)
        height={50} // Ajustez la hauteur souhaitée (en pixels)
        className="h-10 w-auto md:h-12" // Taille adaptative en CSS (hauteur fixe, largeur auto)
        priority // Charge l'image en priorité car c'est le logo
      />
    </div>

    {/* Conteneur du texte (flex-col pour garder l'empilement) */}
    <div className="flex flex-col">
      <span className="text-2xl font-bold md:text-3xl tracking-widest text-black">
        icivoletsroulants
      </span>
      
      <span className="hidden md:block text-sm font-medium -mt-1 tracking-[0.09em] text-gray-700">
        réseau national répatateurs de volets
      </span>
    </div>
  </div>
);