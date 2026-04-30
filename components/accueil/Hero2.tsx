"use client";

import Image from "next/image";
import Link from "next/link";

const activities = [
  {
    title: "Volets Roulants",
    subtitle: "Réparation tablier, lames,moteurs et motorisation",
    image: "/images/accueil/accueil11.jpg",
    href: "/services/volets-roulants",
  },
  {
    title: "Store terrasse",
    subtitle: "Réparation et maintenance stores manuels et motorisés",
    image: "/images/accueil/accueil12.jpg",
    href: "/services/stores",
  },


  {
    title: "Portails",
    subtitle: "Réparation, motorisation et maintenance",
    image: "/images/accueil/accueil14.jpg",
    href: "/services/portails",
  },

  {
    title: "Portes de Garage",
    subtitle: "Réparation, motorisation et maintenance",
    image: "/images/accueil/accueil13.jpg",
    href: "/services/portes-de-garage",
  },
  
  {
    title: "Installation volets roulants neufs",
    subtitle: "Remplacemens anciens volets par des volets roulants neufs",
    image: "/images/accueil/accueil15.jpg",
    href: "/services/fenetres",
  },
];

export default function Hero2() {
  return (
    <section className="w-full py-12 bg-background">
      {/* Titre d'accompagnement au-dessus des images */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
          Icivoletsroulants vous accompagne dans toutes vos réparations !
        </h2>
      </div>

      {/* Grid container : padding latéral pour l'esthétique des arrondis */}
      <div className="px-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {activities.map((activity, index) => (
            <Link
              key={index}
              href={activity.href}
              className="group relative h-[300px] w-full overflow-hidden rounded-md shadow-sm"
            >
              {/* Image avec effet de zoom au hover et bords arrondis via parent */}
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay sombre progressif */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

              {/* Conteneur de texte */}
              <div className="absolute bottom-0 left-0 p-5 w-full text-white z-10">
                <h3 className="text-lg font-bold  tracking-wider">
                  {activity.title}
                </h3>
                
                {/* Sous-titre : transition fluide de hauteur */}
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-20">
                  <p className="mt-2 text-xs text-slate-200 border-t border-white/20 pt-2 italic">
                    {activity.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}