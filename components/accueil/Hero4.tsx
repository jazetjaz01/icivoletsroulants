"use client";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export interface ServiceItem {
    heading: string;
    descp: string;
    image: string;
}

export interface ServicesProps {
    data?: ServiceItem[];
}

// Mise à jour des chemins vers le dossier public/images/accueil
export const servicesData: ServiceItem[] = [
    {
        heading: "Réparation",
        descp: "Qu’il s’agisse de volets roulants en PVC ou en aluminium, qu’ils soient manuels ou motorisés, nos techniciens sont qualifiés pour intervenir sur tous types de réparations.",
        image: "/images/accueil/services-1.png" // Le chemin part de la racine du dossier public
    },
    {
        heading: "Motorisation",
        descp: "Améliorez votre confort au quotidien en motorisant votre volet roulant manuel. Dites adieu à la manivelle grâce à l’installation d’un moteur performant, pour une utilisation simple et sans effort.",
        image: "/images/accueil/services-2.png"
    },
    {
        heading: "Installation",
        descp: "Vous avez un projet de construction ou de rénovation de votre habitation ? L’un de vos volets roulants est hors service ? Vous souhaitez remplacer vos équipements actuels par une solution plus moderne, pratique et esthétique ",

        image: "/images/accueil/services-3.png"
    },
    {
        heading: "Maintenance",
        descp: "Nous vous proposons des contrats de maintenance Volets Roulants adaptés aux résidences de vacances, syndics et copropriétés",
        image: "/images/accueil/services-4.png"
    }
];

function Hero4({ data = servicesData }: ServicesProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 lg:py-20 sm:py-16 py-8">
                <div className="flex flex-col sm:gap-16 gap-8">
                    <div className="flex md:flex-row flex-col justify-between md:items-end items-start gap-4">
                        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200 ease-in-out fill-mode-both">
                            <Badge variant="outline" className="py-1 px-3 h-auto text-sm font-normal border-0 outline outline-border">
                                Services
                            </Badge>
                            <h2 className="sm:text-5xl text-3xl text-foreground font-semibold">Nous réparons les volets roulants</h2>
                            <p className="max-w-2xl text-black sm:text-lg text-base">
                            Vos équipements rencontrent un dysfonctionnement et vous avez besoin d’un dépannage rapide et efficace ? 
                            </p>
                        </div>
                        <Button
                            asChild
                            className={"group p-1 bg-teal-700 hover:bg-black text-white font-medium flex gap-2 lg:gap-3 justify-between items-center rounded-full w-fit ps-5 h-auto border-0 animate-in fade-in slide-in-from-right-10 duration-1000 delay-200 ease-in-out fill-mode-both"}
                        >
                            <a href="/devis" className="flex items-center gap-3 text-white text-sm font-medium">
                                Demande devis
                                <div className="p-2 bg-white rounded-full group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                                    <Icon
                                        className="text-teal-700"
                                        icon="lucide:arrow-up-right"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </a>
                        </Button>
                    </div>
                    <div className="grid grid-cols-12 relative gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 ease-in-out fill-mode-both">
                        <div className="w-full lg:col-span-4 col-span-12 flex items-center justify-center">
                            <div className={`transition-all duration-300 z-10 h-80 w-full overflow-hidden rounded-xl border border-border shadow-sm`} >
                                {data?.[activeIndex]?.image && (
                                    <Image
                                        src={data[activeIndex].image}
                                        alt={data[activeIndex].heading}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        priority={activeIndex === 0} // Charge la première image en priorité
                                    />
                                )}
                            </div>
                        </div>
                        <div className="lg:col-span-1" />
                        <div className="w-full flex flex-col lg:col-span-7 col-span-12">
                            <div>
                                {data?.map((value, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        className="group py-6 xl:py-10 border-t border-border cursor-pointer flex xl:flex-row flex-col xl:items-center items-start justify-between xl:gap-10 gap-1 relative">
                                        <h3 className={cn(
                                            "transition-colors duration-300 py-1 text-2xl md:text-3xl font-semibold max-w-2xs w-full", 
                                            activeIndex === index ? "text-teal-700" : "text-foreground group-hover:text-teal-500"
                                        )}>
                                            {value.heading}
                                        </h3>
                                        {activeIndex === index && (
                                            <p className="text-muted-foreground text-base transition-all animate-in fade-in duration-500 flex-1">
                                                {value.descp}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero4;