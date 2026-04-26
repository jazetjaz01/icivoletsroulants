"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cn } from "@/lib/utils"

// --- COMPOSANTS DE BASE ---

function NavigationMenuTopRoot({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(
        "relative flex flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuTopList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-0 border-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuTopItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      className={cn(
        "relative flex items-center justify-center border-none", 
        // Suppression totale des after: (les traits verticaux)
        className
      )}
      {...props}
    />
  )
}

// --- STYLES DES LIENS ---

const navMenuTopTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-none bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors outline-none hover:bg-teal-600 focus:bg-teal-600 disabled:opacity-50 border-none shadow-none"
)

function NavigationMenuTopLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(navMenuTopTriggerStyle(), className)}
      {...props}
    />
  )
}

export {
  NavigationMenuTopRoot as NavigationMenu,
  NavigationMenuTopList as NavigationMenuList,
  NavigationMenuTopItem as NavigationMenuItem,
  NavigationMenuTopLink as NavigationMenuLink,
  navMenuTopTriggerStyle as navigationMenuTriggerStyle,
}