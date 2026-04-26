"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu-top";

export const NavMenuTop = ({ className, ...props }: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu 
    {...props} 
    className={cn("w-full max-w-full justify-end bg-transparent", className)}
  >
    {/* Ajout de border-none et suppression des pseudo-éléments éventuels */}
    <NavigationMenuList className="flex justify-end space-x-1 border-none shadow-none">
      
      {[
        { name: "Qui sommes-nous", href: "/placo" },
        { name: "Devenir franchisé", href: "/peinture" },
        { name: "Recrutement", href: "/isolation" },
        { name: "Actualité", href: "/actualite" },
        { name: "Contact", href: "/contact" },
      ].map((item) => (
        <NavigationMenuItem key={item.href} className="border-none">
          <NavigationMenuLink asChild>
            <Link 
              href={item.href} 
              className={cn(
                navigationMenuTriggerStyle(), 
                // On force "border-none" et "shadow-none" pour éliminer les traits
                "bg-transparent text-white hover:bg-teal-600 hover:text-white focus:bg-teal-600 focus:text-white text-sm h-10 px-4 transition-colors border-none shadow-none"
              )}
            >
              {item.name}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}

    </NavigationMenuList>
  </NavigationMenu>
);