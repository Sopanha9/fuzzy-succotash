"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Clapperboard, Play } from "lucide-react";
import { Movie } from "@/lib/data";

interface HeroProps {
  movie: Movie;
  onOpen?: () => void;
}

export function Hero({ movie, onOpen }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`relative w-full h-[480px] md:h-[560px] rounded-3xl overflow-hidden border border-white/10 mb-14 transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* ── Blurred backdrop ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={movie.image}
          alt=""
          fill
          className="object-cover scale-125 blur-2xl brightness-[0.35]"
          sizes="100vw"
          priority
        />
      </div>

      {/* ── Gradient overlays for readability ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

      {/* ── Content ── */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-14">
          {/* Poster */}
          <div
            className={`relative w-48 md:w-64 aspect-[2/3] flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 shadow-2xl transition-all duration-1000 delay-200 ${
              mounted
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-90"
            }`}
          >
            <Image
              src={movie.image}
              alt={movie.title}
              fill
              className="object-cover object-center"
              sizes="256px"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div
              className={`flex items-center gap-2 mb-3 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Clapperboard className="w-4 h-4 text-emerald-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-medium">
                Spotlight
              </span>
            </div>

            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-4 transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {movie.title}
            </h2>

            <div
              className={`flex flex-wrap items-center gap-3 mb-4 transition-all duration-700 delay-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Badge className="bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider px-3 py-1">
                {movie.year}
              </Badge>
              <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span className="text-emerald-400 font-bold text-sm">
                  {movie.rating}/10
                </span>
              </div>
              {movie.genre.map((g) => (
                <span
                  key={g}
                  className="text-[10px] uppercase tracking-widest text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                >
                  {g}
                </span>
              ))}
            </div>

            <p
              className={`text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl line-clamp-3 mb-6 transition-all duration-700 delay-[900ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {movie.opinion}
            </p>

            <button
              onClick={onOpen}
              className={`inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 text-sm transition-all duration-700 delay-[1100ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Play className="w-4 h-4 fill-black" />
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}