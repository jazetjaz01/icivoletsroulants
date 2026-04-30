import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { NavMenuTop } from "./nav-menu-top";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col border-b bg-background w-full">
      {/* 1. Bande supérieure : Changement de bg-teal-700 vers bg-white ou bg-background */}
      <div className="hidden md:block w-full bg-white border-b border-slate-100">
        {/* 2. Container interne */}
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <NavMenuTop />
        </div>
      </div>

      {/* Barre principale */}
      <div className="mx-auto flex h-20 w-full max-w-(--breakpoint-2xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        {/* Desktop Menu (Milieu) */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="flex items-center gap-3">
          {/* Menu Mobile (Trigger) */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;