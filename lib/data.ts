export interface Movie {
  id: number;
  title: string;
  year: string;
  rating: number; // 1-5
  opinion: string;
  genre: string[];
  image: string;
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: "2024",
    rating: 5,
    opinion:
      "A cinematic masterpiece. The sound design and scale are unmatched in modern sci-fi.",
    genre: ["Sci-Fi", "Adventure"],
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Bear (Season 3)",
    year: "2024",
    rating: 4,
    opinion:
      "Stressed me out as usual, but the cinematography in the 'Naples' episode was stunning.",
    genre: ["Drama"],
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Oppenheimer",
    year: "2023",
    rating: 5,
    opinion:
      "Nolan at his peak. A film that demands to be seen on the largest screen possible. Cillian Murphy is transcendent.",
    genre: ["Drama", "History"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Past Lives",
    year: "2023",
    rating: 5,
    opinion:
      "Quiet, devastating, and perfect. A film about the roads not taken that lingers for days.",
    genre: ["Romance", "Drama"],
    image:
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Poor Things",
    year: "2023",
    rating: 4,
    opinion:
      "Bizarre, audacious, and visually unlike anything else. Emma Stone fully commits to an insane role.",
    genre: ["Comedy", "Fantasy"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "All of Us Strangers",
    year: "2023",
    rating: 5,
    opinion:
      "A ghost story about grief and queerness that broke me completely. Andrew Scott is extraordinary.",
    genre: ["Romance", "Fantasy"],
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    rating: 5,
    opinion:
      "The peaks of animation. Every frame is a painting, and the story is as ambitious as the visuals.",
    genre: ["Animation", "Action"],
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1000&auto=format&fit=crop",
  },
];
