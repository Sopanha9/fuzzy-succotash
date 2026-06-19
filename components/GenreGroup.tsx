"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Film } from "lucide-react";
import { Movie } from "@/lib/data";
import { MovieCard } from "@/components/MovieCard";

interface GenreGroupProps {
  genre: string;
  movies: Movie[];
  defaultOpen?: boolean;
}

export function GenreGroup({ genre, movies, defaultOpen = false }: GenreGroupProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      {/* Header bar — clickable */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-emerald-500/20 transition-all duration-200 group"
      >
        <Film className={`w-4 h-4 transition-colors ${open ? "text-emerald-400" : "text-zinc-500"}`} />
        <span className="text-sm font-bold uppercase tracking-widest text-white">
          {genre}
        </span>
        <span className="text-xs text-zinc-600 font-medium">
          {movies.length} {movies.length === 1 ? "title" : "titles"}
        </span>
        <div className="flex-1 h-px bg-white/5 mx-1" />
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${
            open ? "rotate-180 text-emerald-400" : "group-hover:text-zinc-300"
          }`}
        />
      </button>

      {/* Collapsible content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[5000px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}