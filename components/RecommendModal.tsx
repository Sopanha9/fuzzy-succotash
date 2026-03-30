"use client";

import { useState } from "react";
import { X, Send, Film, Star, Image as ImageIcon, LayoutGrid } from "lucide-react";
import { Input } from "@/components/ui/input";

interface RecommendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecommendModal({ isOpen, onClose }: RecommendModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Action",
    rate: "5",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("category", formData.category);
      payload.append("rate", formData.rate);
      if (imageFile) {
        payload.append("image", imageFile);
      }

      const res = await fetch("/api/telegram", {
        method: "POST",
        body: payload,
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData({ title: "", category: "Action", rate: "5" });
          setImageFile(null);
          onClose();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-zinc-900/90 border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-xl">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-zinc-400 hover:text-white rounded-full transition-colors hover:bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
            <Film className="w-6 h-6 text-emerald-400" />
            Recommend a Movie
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Share your favorite films with me via Telegram.
          </p>
        </div>

        {status === "success" ? (
          <div className="py-12 text-center text-emerald-400">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-4">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sent Successfully</h3>
            <p className="text-zinc-400">Thanks for the recommendation!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                <Film className="w-4 h-4 text-emerald-400" /> Title
              </label>
              <Input 
                required
                placeholder="e.g. Inception"
                className="bg-black/50 border-white/10 focus-visible:ring-emerald-500/50"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-emerald-400" /> Image (Optional)
              </label>
              <Input 
                type="file"
                accept="image/*"
                className="bg-black/50 border-white/10 focus-visible:ring-emerald-500/50 file:text-emerald-400 file:bg-transparent file:border-0 file:text-sm file:font-medium hover:file:cursor-pointer"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-emerald-400" /> Category
                </label>
                <select 
                  className="w-full h-10 px-3 py-2 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Horror">Horror</option>
                  <option value="Romance">Romance</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Animation">Animation</option>
                  <option value="Documentary">Documentary</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Star className="w-4 h-4 text-emerald-400" /> Expected Rating
                </label>
                <select 
                  className="w-full h-10 px-3 py-2 bg-black/50 border border-white/10 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none"
                  value={formData.rate}
                  onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                >
                  <option value="5">5 Stars ⭐️⭐️⭐️⭐️⭐️</option>
                  <option value="4">4 Stars ⭐️⭐️⭐️⭐️</option>
                  <option value="3">3 Stars ⭐️⭐️⭐️</option>
                  <option value="2">2 Stars ⭐️⭐️</option>
                  <option value="1">1 Star ⭐️</option>
                </select>
              </div>
            </div>

             {status === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-400 text-sm text-center">
                  Failed to send recommendation.<br/> Check server logs.
                </div>
             )}

            <button 
              type="submit"
              disabled={status === "loading"}
              className="w-full h-10 mt-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Recommendation
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
