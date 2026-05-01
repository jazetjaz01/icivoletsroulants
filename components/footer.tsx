"use client";


import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const footerLinks = [

  { title: "Reparation volets roulants", href: "/placo" },
    { title: "Reparation stores", href: "/peinture" },
  { title: "Reparation porte de garage", href: "/isolation" },
  { title: "Reparation portail", href: "/contact" },
  { title: "Contact", href: "contact" },
  { title: "Mentions Légales", href: "contact" },
    { title: "Confidentialite", href: "contact" },
];

const Footer = () => {
  return (
    <div className="w-full bg-slate-200">
      <footer 
        className="w-full bg-teal-700"
        style={{
          clipPath: "polygon(0% 30%, 50% 0%, 70% 15%, 85% 5%, 100% 20%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl pt-14 md:pt-20"> 
          <div className="flex flex-col items-center justify-start py-8 px-6">
            
            {/* --- Logo : Passage en Blanc pour fond Teal --- */}
            <div className="flex flex-col items-center leading-none mb-8">

            <div className="flex-shrink-0">
                  <Image 
                    src="/images/logo-white-400.jpg" 
                    alt="Logo réparation volets roulants"
                    width={70}  
                    height={70} 
                    /* h-6 sur mobile (24px) et md:h-12 sur desktop (48px) */
                    className="h-6 w-auto md:h-12" 
                    priority 
                  />
                </div>
            



              <span className="text-xl font-bold md:text-3xl tracking-widest text-white">
        icivoletsroulants
      </span>
      
      <span className="hidden md:block text-sm font-medium -mt-1 tracking-[0.09em] text-white ">
        réseau réparateurs de volets roulants
      </span>
            </div>

            {/* Navigation : Remplacement par du blanc et du teal très clair */}
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    className="text-teal-50 hover:text-white font-medium transition-colors duration-200 text-sm md:text-base"
                    href={href}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6">
            {/* Séparateur léger pour fond foncé */}
            <Separator className="bg-white/20" />
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-6 px-6 py-10 sm:flex-row">
            
            {/* Copyright Blanc avec signature Pinyon */}
            <span className="text-teal-100/80 text-sm font-medium">
              &copy; {new Date().getFullYear()}{" "}
              <span className="  text-white">Icivoletsroulants.com  Réparation de volets roulants en France </span> 
            
              
            </span>

            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;