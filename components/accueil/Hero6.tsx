"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Post {
  id: string;
  title: string;
  category: string;
  image_url: string;
  created_at: string;
  slug: string;
}

export default function Hero6() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // On récupère seulement les 3 derniers articles pour ce design spécifique
        const { data, error } = await supabase
          .from("posts")
          .select("id, title, category, image_url, created_at, slug")
          .order("created_at", { ascending: false })
          .limit(3);

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error("Erreur Supabase:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div className="h-[500px] flex items-center justify-center">Chargement...</div>;
  if (posts.length === 0) return null;

  const featuredPost = posts[0];
  const sidePosts = posts.slice(1, 3);

  return (
    <section className="w-full bg-slate-200 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div className="space-y-4">
            <h2 className="sm:text-5xl text-3xl text-foreground font-semibold">
              L'actualité de notre réseau
            </h2>
            <p className="text-slate-700 max-w-2xl text-sm md:text-base leading-relaxed">
              Retrouvez l'actualité de notre réseau en région concernant la réparation de volets roulants
            </p>
          </div>
          <Button asChild variant="default" className="bg-teal-700 hover:bg-teal-900 rounded-md px-8 py-6 h-auto text-base">
            <Link href="/actualite">Voir plus d’articles</Link>
          </Button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Article Principal (Gauche) */}
          <Link 
            href={`/actualite/${featuredPost.slug}`}
            className="group relative lg:col-span-6 h-[400px] md:h-[500px] overflow-hidden rounded-lg"
          >
            <Image
              src={featuredPost.image_url}
              alt={featuredPost.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <div className="flex items-center gap-2 text-sm mb-3">
                <Calendar size={14} />
                <span>{new Date(featuredPost.created_at).toLocaleDateString("fr-FR", { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span className="mx-1">•</span>
                <span className="uppercase tracking-wider font-medium">{featuredPost.category}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:underline">
                {featuredPost.title}
              </h3>
              <div className="flex items-center font-semibold uppercase text-sm">
                Lire la suite <ChevronRight size={18} className="ml-1" />
              </div>
            </div>
          </Link>

          {/* Articles Secondaires (Droite) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {sidePosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/actualite/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image_url}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <Calendar size={12} />
                  <span>{new Date(post.created_at).toLocaleDateString("fr-FR", { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span className="mx-1">•</span>
                  <span className="uppercase">{post.category}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#0073b1] transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center text-[#0073b1] font-bold text-sm">
                  Lire la suite <ChevronRight size={16} className="ml-0.5" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}