"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, X, Film, Calendar, Tag, PenLine } from "lucide-react";
import { Movie } from "@/lib/data";

interface DetailModalProps {
  movie: Movie | null;
  onClose: () => void;
}

/**
 * Shared detail modal for movie cards and hero spotlight.
 * Features:
 * - Fast scale-in + fade animation (200ms, CSS only)
 * - Two-column layout on desktop (poster | info), stacked on mobile
 * - Image preloaded via priority + sizes
 * - Staggered content reveal (title → badges → opinion)
 * - Escape key + backdrop click to close
 * - Backdrop blur with darker tint for focus
 */
export function DetailModal({ movie, onClose }: DetailModalProps) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  // Trigger entrance animation on next frame after mount
  useEffect(() => {
    if (!movie) return;

    // Reset state for re-entry
    setMounted(false);
    setShow(false);

    const raf1 = requestAnimationFrame(() => {
      setMounted(true);
    });
    const raf2 = requestAnimationFrame(() => {
      // Double rAF ensures the browser paints the initial state first
      requestAnimationFrame(() => setShow(true));
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [movie]);

  // Escape key to close
  useEffect(() => {
    if (!movie) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    // Lock body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [movie, onClose]);

  if (!movie) return null;

  // Rating-based accent color
  const ratingColor =
    movie.rating >= 9
      ? "text-emerald-400"
      : movie.rating >= 7
      ? "text-lime-400"
      : movie.rating >= 5
      ? "text-amber-400"
      : "text-orange-400";

  const ratingBg =
    movie.rating >= 9
      ? "bg-emerald-500/15 border-emerald-500/30"
      : movie.rating >= 7
      ? "bg-lime-500/15 border-lime-500/30"
      : movie.rating >= 5
      ? "bg-amber-500/15 border-amber-500/30"
      : "bg-orange-500/15 border-orange-500/30";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
        show ? "opacity-100" : "opacity-0"
      } bg-black/85 backdrop-blur-md`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl overflow-hidden rounded-3xl bg-zinc-900/95 border border-white/10 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] transition-all duration-200 ease-out ${
          show
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — always accessible, outside content flow */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/90 hover:scale-110 transition-all border border-white/10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col md:flex-row max-h-[85vh]">
          {/* Poster column */}
          <div className="relative w-full md:w-[40%] aspect-[2/3] md:aspect-auto md:min-h-[480px] flex-shrink-0 overflow-hidden">
            <Image
              src={movie.image}
              alt={movie.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            {/* Gradient to blend poster into card on desktop */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-zinc-900/95" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent md:hidden" />

            {/* Year badge on poster */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5">
              <Badge className="bg-emerald-500 text-black font-bold text-[10px] uppercase tracking-wider px-2.5 py-1">
                <Calendar className="w-3 h-3 mr-1" />
                {movie.year}
              </Badge>
            </div>
          </div>

          {/* Info column */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto">
            {/* Staggered entrance — each element delays slightly more */}
            <div
              className={`transition-all duration-500 delay-[50ms] ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Film className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-medium">
                  Now Showing
                </span>
              </div>
            </div>

            {/* Title + rating */}
            <div
              className={`flex justify-between items-start gap-3 mb-4 transition-all duration-500 delay-[100ms] ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-[1.1]">
                {movie.title}
              </h2>
              <div
                className={`flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full border ${ratingBg}`}
              >
                <Star className={`w-4 h-4 fill-current ${ratingColor}`} />
                <span className={`${ratingColor} font-bold text-sm`}>
                  {movie.rating}
                  <span className="text-zinc-500 font-normal">/10</span>
                </span>
              </div>
            </div>

            {/* Genres */}
            <div
              className={`flex flex-wrap gap-1.5 mb-5 transition-all duration-500 delay-[150ms] ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <div className="flex items-center gap-1.5 mr-1 text-zinc-500">
                <Tag className="w-3 h-3" />
              </div>
              {movie.genre.map((g) => (
                <span
                  key={g}
                  className="text-[10px] uppercase tracking-widest text-zinc-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div
              className={`h-px bg-gradient-to-r from-emerald-500/30 via-white/10 to-transparent mb-5 transition-all duration-500 delay-[200ms] ${
                show ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />

            {/* Opinion */}
            <div
              className={`transition-all duration-500 delay-[250ms] ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2 font-medium">
                My Thoughts
              </p>
              <blockquote className="text-zinc-200 text-sm md:text-[15px] leading-relaxed italic border-l-2 border-emerald-500/40 pl-4">
                {movie.opinion}
              </blockquote>
            </div>

            {/* Personal review — your thoughts after watching */}
            <div
              className={`transition-all duration-500 delay-[300ms] ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <PenLine className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-medium">
                    My Review
                  </span>
                </div>

                {/* Personal rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <Star
                      key={n}
                      className={`w-3.5 h-3.5 ${
                        n <= movie.rating
                          ? "fill-emerald-400 text-emerald-400"
                          : "fill-transparent text-zinc-700"
                      }`}
                    />
                  ))}
                  <span className={`ml-2 text-sm font-bold ${ratingColor}`}>
                    {movie.rating}/10
                  </span>
                </div>

                <blockquote className="text-zinc-200 text-sm md:text-[15px] leading-relaxed italic border-l-2 border-emerald-500/40 pl-4">
                  {movie.myReview}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}