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
    className={cn("w-full max-w-full justify-end bg-white", className)}
  >
    <NavigationMenuList className="flex justify-end space-x-1 border-none shadow-none bg-white">
      
      {[
        { name: "Qui sommes-nous", href: "/quisommesnous" },
        { name: "Devenir franchisé", href: "/franchise" },
        { name: "Recrutement", href: "/recrutement" },
        { name: "Actualité", href: "/actualite" },
        { name: "Contact", href: "/contact" },
      ].map((item) => (
        <NavigationMenuItem key={item.href} className="border-none">
          <NavigationMenuLink asChild>
            <Link 
              href={item.href} 
              className={cn(
                navigationMenuTriggerStyle(), 
                // AJOUT : !text-slate-700 pour forcer la couleur sombre
                // AJOUT : !bg-white pour s'assurer que le fond reste blanc
                "!bg-white !text-black hover:!bg-slate-50 hover:!text-teal-600 focus:!bg-slate-50 focus:!text-teal-600 text-sm h-10 px-4 transition-colors border-none shadow-none"
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