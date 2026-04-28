"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react"; // Optionnel : pour une icône

export const HeroSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  // Simulation d'une API de villes (à remplacer par un fetch réel si besoin)
  const searchCities = async (value: string) => {
    if (value.length < 2) {
      setSuggestions([]);
      return;
    }
    
    // Exemple d'appel API (ici vers l'API Gouv Geo pour la France)
    try {
      const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${value}&limit=5&fields=nom,codePostaux`);
      const data = await res.json();
      setSuggestions(data.map((c: any) => `${c.nom} (${c.codePostaux[0]})`));
    } catch (err) {
      console.error("Erreur API Gouv", err);
    }
  };

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query) {
      // Redirection vers la page devis avec la ville en paramètre
      router.push(`/devis?ville=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      
      
      <form onSubmit={handleSearch} className="relative bg-white flex flex-col md:flex-row items-stretch gap-0 overflow-hidden rounded-lg shadow-xl">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Entrez votre ville ou code postal"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              searchCities(e.target.value);
            }}
            className="h-14 lg:h-16 w-full rounded-none border-none pl-5 text-lg focus-visible:ring-0 text-slate-900"
          />
          
          {/* Liste des suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute z-50 w-full bg-white border-t border-slate-100 shadow-2xl">
              {suggestions.map((city, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setQuery(city);
                    setSuggestions([]);
                  }}
                  className="px-5 py-3 hover:bg-slate-100 cursor-pointer text-slate-700 transition-colors border-b border-slate-50 last:border-none"
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Button 
          type="submit"
          className="h-14 lg:h-16 px-8 rounded-none bg-teal-700 hover:bg-teal-900 text-white font-bold text-md lg:text-lg uppercase tracking-wider transition-colors border-none"
        >
          Demander un devis
        </Button>
      </form>
    </div>
  );
};