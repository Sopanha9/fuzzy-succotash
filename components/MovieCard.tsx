"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, X, Info } from "lucide-react";
import { Movie } from "@/lib/data";

export function MovieCard({ movie }: { movie: Movie }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* ── Detail Modal ── */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-zinc-900/95 border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Poster in modal */}
            <div className="relative w-full aspect-[2/3]">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover object-center"
                sizes="448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

              {/* Close */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Year badge */}
              <div className="absolute top-3 left-3">
                <Badge className="bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-wider px-2 py-1">
                  {movie.year}
                </Badge>
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="flex justify-between items-start gap-3 mb-3">
                <h2 className="text-xl font-black tracking-tight text-white leading-tight">
                  {movie.title}
                </h2>
                <div className="flex items-center gap-1.5 shrink-0 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <span className="text-emerald-400 font-bold text-sm">
                    {movie.rating}/5
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="text-[10px] uppercase tracking-widest text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-700"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <p className="text-zinc-300 text-sm italic leading-relaxed border-l-2 border-emerald-500/50 pl-3">
                &ldquo;{movie.opinion}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Poster Card ── */}
      <div
        className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[2/3] shadow-lg"
        onClick={() => setExpanded(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Poster image */}
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className={`object-cover object-center transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
        />

        {/* Always-visible bottom gradient + title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Year badge top-right */}
        <div className="absolute top-2 right-2">
          <Badge className="bg-emerald-500 text-black font-bold text-[9px] uppercase tracking-wider px-1.5 py-0.5">
            {movie.year}
          </Badge>
        </div>

        {/* Rating top-left */}
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
          <Star className="w-3 h-3 fill-emerald-400 text-emerald-400" />
          <span className="text-emerald-400 text-[11px] font-bold">
            {movie.rating}/10
          </span>
        </div>

        {/* Bottom info — always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white font-bold text-sm leading-tight truncate">
            {movie.title}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            {movie.genre.slice(0, 2).map((g) => (
              <span
                key={g}
                className="text-[9px] uppercase tracking-widest text-zinc-400"
              >
                {g}
              </span>
            ))}
          </div>
        </div>

        {/* Hover overlay — opinion snippet + info icon */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center p-4 bg-black/70 backdrop-blur-[2px] transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Info className="w-6 h-6 text-emerald-400 mb-3" />
          <p className="text-white text-xs italic text-center leading-relaxed line-clamp-5">
            &ldquo;{movie.opinion}&rdquo;
          </p>
          <span className="mt-3 text-[10px] uppercase tracking-widest text-zinc-400">
            Click for details
          </span>
        </div>
      </div>
    </>
  );
}
