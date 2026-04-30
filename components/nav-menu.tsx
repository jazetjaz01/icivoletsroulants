"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react"; // Import de l'icône
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavMenu = ({ className, ...props }: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu 
    {...props} 
    className={cn("!flex-col w-full max-w-full", className)}
  >
    <NavigationMenuList className="w-full">
      
      {/* Accueil */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/placo" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
          Réparation volets roulants
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
      {/* Pose placo */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/peinture" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Motorisation volets
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Peinture */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/isolation" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Installation volets
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Isolation */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/actualite" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Réparation Portail 
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Contact */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/rendez-vous" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Store terrasse
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Réseau avec icône en couleur Teal 700 */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/reparateurs" 
            className={cn(
              navigationMenuTriggerStyle(), 
              "w-full md:w-max !flex !flex-row items-center justify-center"
            )}
          >
            <MapPin className="mr-2 h-5 w-5 shrink-0 text-teal-700" /> {/* Couleur ajoutée ici */}
            <span className="whitespace-nowrap">Notre réseau</span>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);