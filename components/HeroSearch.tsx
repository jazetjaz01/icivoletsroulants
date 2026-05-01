"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const searchCities = async (value: string) => {
    if (value.length < 2) {
      setSuggestions([]);
      return;
    }
  
    try {
      const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${value}&fields=nom,codesPostaux&limit=6`);
      if (!res.ok) return;

      const data = await res.json();

      if (Array.isArray(data)) {
        const formatted = data.map((c: any) => {
          const zip = c.codesPostaux && c.codesPostaux.length > 0 
            ? c.codesPostaux[0] 
            : c.code; 
          return `${c.nom} (${zip})`;
        });
        setSuggestions(formatted);
      }
    } catch (err) {
      console.error("Erreur de récupération des villes:", err);
      setSuggestions([]);
    }
  };

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    // Si une ville est saisie, on l'ajoute en paramètre d'URL
    if (query) {
      router.push(`/devis?ville=${encodeURIComponent(query)}`);
    } else {
      // Si rien n'est saisi, on redirige vers le formulaire de devis vide
      router.push(`/devis`);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form 
        onSubmit={handleSearch} 
        className="relative bg-white flex flex-col md:flex-row items-stretch gap-0 rounded-lg shadow-2xl border border-slate-200"
      >
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Entrez votre ville ou code postal"
            value={query}
            onChange={(e) => {
              const val = e.target.value;
              setQuery(val);
              searchCities(val);
            }}
            autoComplete="off"
            className="h-14 lg:h-16 w-full rounded-none border-none pl-5 text-lg focus-visible:ring-0 text-slate-900 bg-white"
          />
          
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-[999] w-full">
              <ul className="mt-1 bg-white border border-slate-200 shadow-2xl rounded-b-lg max-h-64 overflow-y-auto">
                {suggestions.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setQuery(city);
                      setSuggestions([]);
                      // Optionnel : déclencher la recherche immédiatement après le clic sur une suggestion
                      router.push(`/devis?ville=${encodeURIComponent(city)}`);
                    }}
                    className="px-5 py-4 hover:bg-slate-50 cursor-pointer text-slate-800 text-left border-b border-slate-50 last:border-none transition-colors bg-white"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Button 
          type="submit"
          className="h-14 lg:h-16 px-8 rounded-none md:rounded-r-lg bg-teal-700 hover:bg-black text-white font-bold text-md lg:text-lg uppercase tracking-wider transition-colors border-none"
        >
          Demander un devis
        </Button>
      </form>
      
      <p className="mt-3 text-sm text-slate-600 font-medium">
        📍 Intervention en France, Belgique et Suisse.
      </p>
    </div>
  );
};