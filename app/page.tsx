"use client";

import { useState, useMemo } from "react";
import { MOVIES } from "@/lib/data";
import { MovieCard } from "@/components/MovieCard";
import { Hero } from "@/components/Hero";
import { DetailModal } from "@/components/DetailModal";
import { GenreGroup } from "@/components/GenreGroup";
import { Input } from "@/components/ui/input";
import { Search, Clapperboard, Plus } from "lucide-react";
import { RecommendModal } from "@/components/RecommendModal";

export default function MoviePage() {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spotlightExpanded, setSpotlightExpanded] = useState(false);

  // Spotlight = highest rated, ties broken by most recent year
  const spotlight = useMemo(
    () =>
      [...MOVIES].sort((a, b) => {
        if (b.rating !== a.rating) return b.rating - a.rating;
        return parseInt(b.year) - parseInt(a.year);
      })[0],
    []
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return MOVIES;
    const lower = query.toLowerCase();
    return MOVIES.filter(
      (m) =>
        m.title.toLowerCase().includes(lower) ||
        m.genre.some((g) => g.toLowerCase().includes(lower)) ||
        m.year.includes(lower)
    );
  }, [query]);

  const avgRating = useMemo(
    () => MOVIES.reduce((acc, m) => acc + m.rating, 0) / MOVIES.length,
    []
  );

  // Group movies by broad category (Western, C-Drama, K-Drama, Anime, Animation)
  const categoryGroups = useMemo(() => {
    const order = ["Western", "C-Drama", "K-Drama", "Anime", "Animation"];
    const map = new Map<string, typeof MOVIES>();
    for (const movie of MOVIES) {
      if (!map.has(movie.category)) map.set(movie.category, []);
      map.get(movie.category)!.push(movie);
    }
    return order
      .filter((cat) => map.has(cat))
      .map((cat) => ({
        category: cat,
        movies: map.get(cat)!.sort((a, b) => b.rating - a.rating),
      }));
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Spotlight — hidden when searching */}
        {!query.trim() && (
          <Hero
            movie={spotlight}
            onOpen={() => setSpotlightExpanded(true)}
          />
        )}

        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Clapperboard className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium">
                Personal Cinema Journal
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              CINE
              <span className="text-emerald-500">LOG</span>
            </h1>
            <p className="text-zinc-500 mt-3 font-medium text-sm">
              Films watched, thoughts captured.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-end gap-6 md:mb-2">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-black text-white">{MOVIES.length}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                  Watched
                </p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-black text-emerald-400">
                  {avgRating.toFixed(1)}
                </p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                  Avg Rating
                </p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            
            <div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
               <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-800/50 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl border border-white/5 transition-colors text-sm font-medium group"
                >
                  <Plus className="w-4 h-4 text-emerald-400 group-hover:rotate-90 transition-transform duration-300" />
                  Recommend <span className="hidden sm:inline">a Movie</span>
                </button>
            </div>
          </div>
        </header>

        {/* Search */}
        <div className="relative mb-10 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <Input
            placeholder="Search by title, genre, or year..."
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Results count */}
        {query && (
          <p className="text-zinc-600 text-sm mb-6">
            {filtered.length === 0
              ? "No results found."
              : `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`}
          </p>
        )}

        {/* Grid label */}
        {!query.trim() && (
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 font-medium">
              Browse by Category
            </h2>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-zinc-600">{categoryGroups.length} categories</span>
          </div>
        )}

        {/* Category dropdowns (default view) or flat grid (search results) */}
        {query.trim() ? (
          filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((movie, i) => (
                <MovieCard key={movie.id} movie={movie} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-zinc-700">
              <p className="text-6xl mb-4">🎬</p>
              <p className="text-lg font-medium">No films found</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          )
        ) : (
          <div>
            {categoryGroups.map((group, i) => (
              <GenreGroup
                key={group.category}
                genre={group.category}
                movies={group.movies}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-24 py-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-2 text-zinc-600 text-xs">
          <p className="font-medium uppercase tracking-widest">CineLog</p>
          <p>© {new Date().getFullYear()} — Your personal cinema journal</p>
        </footer>
      </div>

      <RecommendModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Spotlight detail modal — controlled by Hero "View Details" */}
      <DetailModal
        movie={spotlightExpanded ? spotlight : null}
        onClose={() => setSpotlightExpanded(false)}
      />
    </main>
  );
}
