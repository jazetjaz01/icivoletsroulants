"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero5() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  // Mouvement des côtés : on ajuste les valeurs pour éviter les collisions
  const leftX = useTransform(scrollYProgress, [0, 1], ["-250px", "0px"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["250px", "0px"]);

  // On part d'un léger zoom (1.1) vers la taille réelle (1) 
  // pour que l'image centrale finisse exactement à la même hauteur (420px)
  const scaleCenter = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={ref}
      className="h-[60vh] flex items-center justify-center bg-slate-200 overflow-hidden"
    >
      <div className="flex items-center justify-center w-full max-w-[1400px] gap-4">

        {/* Gauche */}
        <motion.img
          src="/images/accueil/voletsterrasse2.jpg"
          style={{ x: leftX }}
          className="w-[300px] h-[420px] object-cover rounded-2xl shadow-xl"
          alt="Image Gauche"
        />

        {/* Centre */}
        <motion.img
          src="/images/accueil/voletsterrasse.jpg"
          style={{ 
            scale: scaleCenter,
            zIndex: 10 
          }}
          className="w-[600px] h-[420px] object-cover rounded-2xl shadow-2xl"
          alt="Image Centrale"
        />

        {/* Droite */}
        <motion.img
          src="/images/accueil/accueil12.jpg"
          style={{ x: rightX }}
          className="w-[300px] h-[420px] object-cover rounded-2xl shadow-xl"
          alt="Image Droite"
        />
      </div>
    </section>
  );
}