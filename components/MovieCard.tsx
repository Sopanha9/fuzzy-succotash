"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Info } from "lucide-react";
import { Movie } from "@/lib/data";
import { DetailModal } from "@/components/DetailModal";

export function MovieCard({ movie, index = 0 }: { movie: Movie; index?: number }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120 + index * 50);
    return () => clearTimeout(t);
  }, [index]);

  // Rating-based accent color
  const ratingColor =
    movie.rating >= 9
      ? "text-emerald-400"
      : movie.rating >= 7
      ? "text-lime-400"
      : movie.rating >= 5
      ? "text-amber-400"
      : "text-orange-400";

  return (
    <>
      {/* ── Detail Modal ── */}
      <DetailModal movie={expanded ? movie : null} onClose={() => setExpanded(false)} />

      {/* ── Poster Card ── */}
      <div
        className={`relative group cursor-pointer rounded-xl overflow-hidden aspect-[2/3] shadow-lg transition-all duration-700 ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
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
          <Star className={`w-3 h-3 fill-current ${ratingColor}`} />
          <span className={`${ratingColor} text-[11px] font-bold`}>
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
