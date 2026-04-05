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
    title: "The Revenant",
    year: "2015",
    rating: 7,
    opinion:
      "In the harsh wilderness of 1820s America, frontiersman Hugh Glass is mauled by a grizzly bear and left for dead by his own hunting team. Driven by a thirst for revenge, Glass embarks on an epic journey of survival, battling the elements, hostile tribes, and his own inner demons to reclaim his life and avenge the betrayal that nearly cost him everything.",
    genre: ["Adventure", "Drama"],
    image:
      "https://m.media-amazon.com/images/M/MV5BYTgwNmQzZDctMjNmOS00OTExLTkwM2UtNzJmOTJhODFjOTdlXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 2,
    title: "Tenet",
    year: "2020",
    rating: 7,
    opinion:
      "A secret agent embarks on a dangerous mission to prevent World War III by manipulating the flow of time.",
    genre: ["Action", "Sci-Fi"],
    image:
      "https://m.media-amazon.com/images/M/MV5BNTIzNDIxMzktMzlkMi00MmUyLWFmMjQtZDgwMjBmOGJmNTI3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 3,
    title: "The lord of the rings: The return of the king",
    year: "2003",
    rating: 10,
    opinion:
      "The epic conclusion to the Lord of the Rings trilogy, The Return of the King, is a cinematic masterpiece that delivers a powerful and emotional story of courage, sacrifice, and the triumph of good over evil. With stunning visuals, breathtaking action sequences, and a heartfelt story, this film is a must-watch for any fantasy lover.",
    genre: ["Drama", "History"],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
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
