"use client";

import Image from "next/image";

export const Logo = () => (
  <div className="flex items-center gap-3 leading-none">
    
    <div className="flex-shrink-0">
      <Image 
        src="/images/logo400.jpg" 
        alt="Logo réparation volets roulants"
        width={70}  
        height={70} 
        /* h-6 sur mobile (24px) et md:h-12 sur desktop (48px) */
        className="h-6 w-auto md:h-12" 
        priority 
      />
    </div>

    <div className="flex flex-col">
      <span className="text-xl font-bold md:text-3xl tracking-widest text-teal-700">
        icivoletsroulants
      </span>
      
      <span className="hidden md:block text-sm font-medium -mt-1 tracking-[0.09em] text-teal-700">
        réseau réparateurs de volets roulants
      </span>
    </div>
  </div>
);