export interface Movie {
  id: number;
  title: string;
  year: string;
  rating: number; // 1-10
  opinion: string;
  genre: string[];
  image: string;
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: "2024",
    rating: 9,
    opinion:
      "A cinematic masterpiece. The sound design and scale are unmatched in modern sci-fi.",
    genre: ["Sci-Fi", "Adventure"],
    image:
      "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
  },
  {
    id: 2,
    title: "Cyberpunk: Edgerunners",
    year: "2022",
    rating: 9,
    opinion:
      "In the neon-drenched chaos of Night City, David Martinez, a street kid, fights to survive in a world of cybernetic enhancements and corporate greed. A thrilling and emotional journey of ambition, loss, and the true meaning of humanity.",
    genre: ["Action", "Drama"],
    image:
      "https://f.woowoowoowoo.net/resize/250x400/7d/b0/7db02264214ae01ae9bb262b48760dd2/7db02264214ae01ae9bb262b48760dd2.jpg",
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
      "https://f.woowoowoowoo.net/resize/250x400/b5/6a/b56a5aee9715743bb34b728e52b6bea0/b56a5aee9715743bb34b728e52b6bea0.jpg",
  },
  {
    id: 4,
    title: "Good Will Hunting",
    year: "1997",
    rating: 9,
    opinion:
      "Will Hunting, a janitor at MIT, has a genius-level IQ but struggles with personal demons. When he solves a complex math problem, he catches the eye of a psychology professor who tries to help him confront his past and unlock his true potential. A powerful story about friendship, love, and the courage to face one's fears.",
    genre: ["Drama"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4ngcb251BWcV9EGK9UK3iDsI1cefjllocQjRkJExV9v_MW7FIScJkWYVzlovKTronoAu7g&s=10"},
  {
    id: 5,
    title: "Prisoners",
    year: "2013",
    rating: 8,
    opinion:
      "A gripping and atmospheric thriller that keeps you on the edge of your seat until the very end. Hugh Jackman delivers a powerful performance as a desperate father.",
    genre: ["Thriller", "Drama"],
    image:"https://i.pinimg.com/1200x/22/57/3f/22573f79568bd15b7fb55f01829c6ab2.jpg"
  },
  {
    id: 6,
    title: "Jujutsu Kaisen: The Culling Game Part 1",
    year: "2026",
    rating: 9,
    opinion:
      "The Culling Game arc is one of the most intense and action-packed sagas in Jujutsu Kaisen, featuring high-stakes battles, shocking betrayals, and the introduction of powerful new characters.",
    genre: ["Action", "Fantasy"],
    image:
      "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a1c21d8b67b4a99bc693f26bf8fcd2e5.jpg",
  },
  {
    id: 7,
    title: "Her",
    year: "2013",
    rating: 6,
    opinion:
      "A beautiful and heartbreaking story about love, loss, and the future of humanity.",
    genre: ["Romance", "Drama"],
    image:
      "https://f.woowoowoowoo.net/resize/250x400/79/c0/79c0e280e1629d894df99b2191de15f3/79c0e280e1629d894df99b2191de15f3.jpg",
  },
  {
    id: 8,
    title: "The upside",
    year: "2017",
    rating: 6,
    opinion:
      "Phillip is a wealthy quadriplegic who needs a caretaker to help him with his day-to-day routine in his New York penthouse. He decides to hire Dell, a struggling parolee who's trying to reconnect with his ex and his young son. Despite coming from two different worlds, an unlikely friendship starts to blossom. ",
    genre: ["Comedy","Music", "Drama"],
    image:
      "https://f.woowoowoowoo.net/resize/250x400/1a/9b/1a9b4c075c6b478e5d42c95e8d34df0c/1a9b4c075c6b478e5d42c95e8d34df0c.jpg",
  },
  {
    id: 9,
    title: "Green Book",
    year: "2018",
    rating: 8,
    opinion:
      "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book. ",
    genre: ["Romance", "Drama"],
    image:
      "https://f.woowoowoowoo.net/resize/250x400/e2/e2/e2e23dfa07a9e20bbc9597a33b2622e2/e2e23dfa07a9e20bbc9597a33b2622e2.jpg",
  },

  {
    id: 11,
    title: "Forrest Gump",
    year: "1994",
    rating: 8,
    opinion:
      "A heartwarming and inspiring tale of a simple man with a big heart, navigating through the complexities of life and love.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI2SBzYW95C8Wo7zYV3bzVzem58xPnUzsZGLsnLg17mSMgR574acQZpgNK7a5XeF3THjqgQ&s=10",
  },
  {
    id: 12,
    title: "The truman show",
    year: "1998",
    rating: 8,
    opinion:
      "A thought-provoking and emotionally resonant film that explores themes of reality, identity, and the human desire for freedom.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIpdWXXfROSBGNXcGzL-2Uv8ZV7grzKQxDjL-J9N37zReEj2mlH0qg60TfcerD-T4X8ok&s=10",
  },
  {
    id: 13,
    title: "Shutter island",
    year: "2010",
    rating: 8,
    opinion:
      "A gripping psychological thriller that keeps you guessing until the very end, with a haunting atmosphere and a powerful performance by Leonardo DiCaprio.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaASGt5HkTiOySkGsHTkXv4l_SCqlgCdpiCMbai76YykQMsJNGbobjcea6jWH-wvqVE9XGw&s=10",
  },
  {
    id: 14,
    title: "Se7en",
    year: "2010",
    rating: 8,
    opinion:
      "A gripping psychological thriller that keeps you guessing until the very end, with a haunting atmosphere and a powerful performance by Leonardo DiCaprio.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOnL9G5Bx6q6vw2ToNKpZLCsaKB_ZA1ZsmJLXDc-SfX04RUQXjiFEccEaLoxxWRIkL4Ct&s=10",
  },
  {
    id: 15,
    title: "Get out",
    year: "2010",
    rating: 8,
    opinion:
      "A gripping psychological thriller that keeps you guessing until the very end, with a haunting atmosphere and a powerful performance by Leonardo DiCaprio.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Hr-ZNlOyGfWOED_cHogpEHYv7-H4OZSy3nWlA2MvwbXivNdhkGWgWhScOenoRkknOMhm&s=10",
  },
];
