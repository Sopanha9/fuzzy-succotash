"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, X, Film } from "lucide-react";
import { Movie } from "@/lib/data";

export function MovieCard({ movie }: { movie: Movie }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Expanded Modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-zinc-900/95 border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 w-full">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-white">
                    {movie.title}
                  </h2>
                  <p className="text-zinc-400 text-sm mt-1">{movie.year}</p>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/20 px-3 py-1.5 rounded-full border border-emerald-500/30">
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <span className="text-emerald-400 font-bold text-sm">
                    {movie.rating}/5
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genre.map((g) => (
                  <Badge
                    key={g}
                    className="bg-zinc-800 text-zinc-300 border border-zinc-700 text-[11px] uppercase tracking-widest"
                  >
                    {g}
                  </Badge>
                ))}
              </div>
              <p className="text-zinc-300 text-base italic leading-relaxed border-l-2 border-emerald-500/50 pl-4">
                &ldquo;{movie.opinion}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Card */}
      <Card
        className="group overflow-hidden border-white/5 cursor-pointer transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/10 hover:shadow-[0_0_40px_0_rgba(16,185,129,0.1)] hover:-translate-y-1"
        onClick={() => setExpanded(true)}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-2 right-2">
            <Badge className="bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-wide px-2 py-1">
              {movie.year}
            </Badge>
          </div>
          <div className="absolute bottom-2 left-2">
            <Film className="w-4 h-4 text-white/50" />
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg font-bold tracking-tight text-white leading-tight">
              {movie.title}
            </CardTitle>
            <div className="flex items-center gap-1 text-emerald-400 shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-sm font-semibold">{movie.rating}/5</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="text-[10px] uppercase tracking-widest text-zinc-500"
              >
                {g}
              </span>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-zinc-400 text-sm italic leading-relaxed line-clamp-3">
            &ldquo;{movie.opinion}&rdquo;
          </p>
        </CardContent>
      </Card>
    </>
  );
}
