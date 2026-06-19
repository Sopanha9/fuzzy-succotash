export interface Movie {
  id: number;
  title: string;
  year: string;
  rating: number; // 1-10 — your personal rating
  opinion: string; // synopsis / what the film is about
  myReview: string; // your personal thoughts after watching
  genre: string[];
  image: string;
  category: "Western" | "C-Drama" | "K-Drama" | "Anime" | "Animation";
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "The Revenant",
    year: "2015",
    rating: 7,
    opinion:
      "In the harsh wilderness of 1820s America, frontiersman Hugh Glass is mauled by a grizzly bear and left for dead by his own hunting team. Driven by a thirst for revenge, Glass embarks on an epic journey of survival, battling the elements, hostile tribes, and his own inner demons to reclaim his life and avenge the betrayal that nearly cost him everything.",
    myReview:
      "A grueling, visceral survival story. DiCaprio's commitment is insane — crawling through frozen rivers, eating raw liver. The cinematography is stunning but the pacing drags in the middle. Still, that final confrontation hits hard.",
    genre: ["Adventure", "Drama"],
    image:
      "https://m.media-amazon.com/images/M/MV5BYTgwNmQzZDctMjNmOS00OTExLTkwM2UtNzJmOTJhODFjOTdlXkEyXkFqcGc@._V1_.jpg",
    category: "Western",
  },
  {
    id: 2,
    title: "Tenet",
    year: "2020",
    rating: 7,
    opinion:
      "A secret agent embarks on a dangerous mission to prevent World War III by manipulating the flow of time.",
    myReview:
      "Nolan at his most confusing. The time inversion concept is brilliant on paper but the execution leaves you more puzzled than amazed. I had to watch it twice to understand half of it. Ambitious but emotionally cold.",
    genre: ["Action", "Sci-Fi"],
    image:
      "https://m.media-amazon.com/images/M/MV5BNTIzNDIxMzktMzlkMi00MmUyLWFmMjQtZDgwMjBmOGJmNTI3XkEyXkFqcGc@._V1_.jpg",
    category: "Western",
  },
  {
    id: 3,
    title: "The lord of the rings: The return of the king",
    year: "2003",
    rating: 10,
    opinion:
      "The epic conclusion to the Lord of the Rings trilogy, The Return of the King, is a cinematic masterpiece that delivers a powerful and emotional story of courage, sacrifice, and the triumph of good over evil. With stunning visuals, breathtaking action sequences, and a heartfelt story, this film is a must-watch for any fantasy lover.",
    myReview:
      "The perfect conclusion to the greatest trilogy ever made. Every battle, every farewell, every sacrifice lands perfectly. The charge of the Rohirrim still gives me chills. 11 Oscars well deserved.",
    genre: ["Drama", "History"],
    image:
      "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
    category: "Western",
  },
  {
    id: 4,
    title: "Good Will Hunting",
    year: "1997",
    rating: 9,
    opinion:
      "Will Hunting, a janitor at MIT, has a genius-level IQ but struggles with personal demons. When he solves a complex math problem, he catches the eye of a psychology professor who tries to help him confront his past and unlock his true potential. A powerful story about friendship, love, and the courage to face one's fears.",
    myReview:
      "Robin Williams at his finest. The 'it's not your fault' scene destroyed me. A masterclass in writing about genius, trauma, and vulnerability. One of those films that stays with you for days.",
    genre: ["Drama"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4ngcb251BWcV9EGK9UK3iDsI1cefjllocQjRkJExV9v_MW7FIScJkWYVzlovKTronoAu7g&s=10",
    category: "Western",
  },
  {
    id: 5,
    title: "Prisoners",
    year: "2013",
    rating: 8,
    opinion:
      "A gripping and atmospheric thriller that keeps you on the edge of your seat until the very end. Hugh Jackman delivers a powerful performance as a desperate father.",
    myReview:
      "Hugh Jackman is terrifying as a desperate father. Villeneuve creates such a suffocating atmosphere — the grey palette, the silence, the dread. The ending is divisive but I found it perfect.",
    genre: ["Thriller", "Drama"],
    image:
      "https://i.pinimg.com/1200x/22/57/3f/22573f79568bd15b7fb55f01829c6ab2.jpg",
    category: "Western",
  },
  {
    id: 6,
    title: "Jujutsu Kaisen: The Culling Game Part 1",
    year: "2026",
    rating: 9,
    opinion:
      "The Culling Game arc is one of the most intense and action-packed sagas in Jujutsu Kaisen, featuring high-stakes battles, shocking betrayals, and the introduction of powerful new characters.",
    myReview:
      "Pure hype. The Culling Game arc goes hard — the power system evolves, the stakes are real, and the new characters bring fresh energy. Animation quality in the key fights is unreal.",
    genre: ["Action", "Fantasy"],
    image:
      "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a1c21d8b67b4a99bc693f26bf8fcd2e5.jpg",
    category: "Anime",
  },
  {
    id: 7,
    title: "Her",
    year: "2013",
    rating: 6,
    opinion:
      "A beautiful and heartbreaking story about love, loss, and the future of humanity.",
    myReview:
      "Quietly devastating. Phoenix captures loneliness so precisely it hurts. The AI romance raises questions I still think about. The color palette is warm and beautiful. A film that understands modern isolation.",
    genre: ["Romance", "Drama"],
    image:
      "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    category: "Western",
  },
  {
    id: 8,
    title: "The upside",
    year: "2017",
    rating: 6,
    opinion:
      "Phillip is a wealthy quadriplegic who needs a caretaker to help him with his day-to-day routine in his New York penthouse. He decides to hire Dell, a struggling parolee who's trying to reconnect with his ex and his young son. Despite coming from two different worlds, an unlikely friendship starts to blossom. ",
    myReview:
      "A feel-good buddy movie that shouldn't work but does. Kevin Hart is surprisingly restrained and Cranston grounds it. Predictable but genuinely heartwarming. The kind of film you watch on a Sunday.",
    genre: ["Comedy", "Music", "Drama"],
    image:
      "https://image.tmdb.org/t/p/w500/hPZ2caow1PCND6qnerfgn6RTXdm.jpg",
    category: "Western",
  },
  {
    id: 9,
    title: "Green Book",
    year: "2018",
    rating: 8,
    opinion:
      "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book. ",
    myReview:
      "Far better than I expected. The chemistry between Mortensen and Ali carries the whole film — their road trip through the segregated South is funny, tense, and deeply moving. The fried chicken scene is iconic.",
    genre: ["Drama", "Comedy"],
    image:
      "https://image.tmdb.org/t/p/w500/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
    category: "Western",
  },
  {
    id: 11,
    title: "Forrest Gump",
    year: "1994",
    rating: 8,
    opinion:
      "A heartwarming and inspiring tale of a simple man with a big heart, navigating through the complexities of life and love.",
    myReview:
      "Innocence and destiny in one package. Every scene is a lesson about life — running, loving, losing, and somehow keeping going. The bench monologue is one of the most quoted lines in cinema for a reason.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI2SBzYW95C8Wo7zYV3bzVzem58xPnUzsZGLsnLg17mSMgR574acQZpgNK7a5XeF3THjqgQ&s=10",
    category: "Western",
  },
  {
    id: 12,
    title: "The truman show",
    year: "1998",
    rating: 8,
    opinion:
      "A thought-provoking and emotionally resonant film that explores themes of reality, identity, and the human desire for freedom.",
    myReview:
      "Ahead of its time. The concept of a man unknowingly living inside a TV show is eerie and profound. Carrey is surprisingly great in a serious role. The boat scene still gives me goosebumps.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIpdWXXfROSBGNXcGzL-2Uv8ZV7grzKQxDjL-J9N37zReEj2mlH0qg60TfcerD-T4X8ok&s=10",
    category: "Western",
  },
  {
    id: 13,
    title: "Shutter island",
    year: "2010",
    rating: 8,
    opinion:
      "A gripping psychological thriller that keeps you guessing until the very end, with a haunting atmosphere and a powerful performance by Leonardo DiCaprio.",
    myReview:
      "Scorsese messing with your head for two hours. The atmosphere is suffocating — the island itself feels alive and hostile. DiCaprio is great but the twist, while shocking on first watch, doesn't hold up on rewatch.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaASGt5HkTiOySkGsHTkXv4l_SCqlgCdpiCMbai76YykQMsJNGbobjcea6jWH-wvqVE9XGw&s=10",
    category: "Western",
  },
  {
    id: 14,
    title: "Se7en",
    year: "2010",
    rating: 8,
    opinion:
      "A gripping psychological thriller that keeps you guessing until the very end, with a haunting atmosphere and a powerful performance by Leonardo DiCaprio.",
    myReview:
      "A masterpiece of restraint. The killer's identity being revealed early is a bold choice that pays off. The opening sequence alone is legendary. Fincher at his coldest and most precise.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOnL9G5Bx6q6vw2ToNKpZLCsaKB_ZA1ZsmJLXDc-SfX04RUQXjiFEccEaLoxxWRIkL4Ct&s=10",
    category: "Western",
  },
  {
    id: 15,
    title: "Get out",
    year: "2010",
    rating: 8,
    opinion:
      "A gripping psychological thriller that keeps you guessing until the very end, with a haunting atmosphere and a powerful performance by Leonardo DiCaprio.",
    myReview:
      "A sharp, unsettling social thriller. Peele's debut is packed with symbolism and tension. The sunken place scene is one of the most disturbing images in modern horror. Clever, original, and necessary.",
    genre: ["Drama", "Romance"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Hr-ZNlOyGfWOED_cHogpEHYv7-H4OZSy3nWlA2MvwbXivNdhkGWgWhScOenoRkknOMhm&s=10",
    category: "Western",
  },
  {
    id: 16,
    title: "Avatar: Fire and Ash",
    year: "2026",
    rating: 10,
    opinion:
      "Set years after the events of Avatar: The Way of Water, Jake Sully and Neytiri have established a new life for their family among the Metkayina clan. However, their peaceful existence is shattered when the RDA returns to Pandora with a new, more destructive agenda. As the Na'vi face a renewed threat to their home and their way of life, Jake must rally the clans together once more to fight for their freedom and protect Pandora from the encroaching forces of humanity.",
    myReview:
      "James Cameron going bigger again. Pandora is gorgeous — the water sequences are breathtaking. But the story is essentially the first film restructured. The spectacle justifies the runtime though.",
    genre: ["Action", "Adventure", "Fantasy"],
    image:
      "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_.jpg",
    category: "Western",
  },
  {
    id: 17,
    title: "Project Hail Mary",
    year: "2026",
    rating: 9,
    opinion:
      "Ryland Grace is the sole survivor on a desperate, last-chance mission to save Earth from an extinction-level threat. He awakens from a coma with no memory of his name, his mission, or his surroundings. As he pieces together the puzzle of his past, he must race against time to solve the scientific mystery that threatens the future of humanity.",
    myReview:
      "Andy Weir's hard sci-fi translated to screen. The mystery unfolds beautifully — Grace piecing together his past while racing against extinction. The humor carries the science. Can't wait to see the film adaptation.",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    image:
      "https://image.tmdb.org/t/p/w500/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
    category: "Western",
  },
  {
    id: 18,
    title: "Invincible (All seasons)",
    year: "2021",
    rating: 9,
    opinion:
      "Mark Grayson is a normal teenager whose father is the most powerful superhero on the planet, Omni-Man. But when his father's legacy turns out to be more sinister than he ever imagined, Mark must forge his own path and live up to his father's name in a world that needs a new kind of hero.",
    myReview:
      "The most brutal superhero show ever made. Omni-Man's reveal in episode 1 is one of the greatest twists in animation. It doesn't hold back — the violence, the politics, the moral ambiguity. Peak adult animation.",
    genre: ["Action", "Adventure", "Drama"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3spp4KYbkITHL6krOqcaJYNvvY70Q9pq0xgGXJNNRKysXHf8y-ZvTffzcTuBewpKRdnd&s=10",
    category: "Animation",
  },
  {
    id: 19,
    title: "The Boys Season 5",
    year: "2026",
    rating: 10,
    opinion:
      "In a world where superpowered individuals (known as 'Supes') are widely idolized, a group of vigilantes known as The Boys work to hold these corrupt heroes accountable for their negligent and often destructive actions.",
    myReview:
      "The most unhinged show on TV and I love it. The supes are perfectly written as celebrities gone wrong. Homelander is genuinely terrifying. Season 5 better not pull punches.",
    genre: ["Action", "Adventure", "Drama"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71_ESBbUZEFgNSG6sQ7e0Nzz5ukfBbnKUgpFoAVtsjjTJ3vsG",
    category: "Western",
  },
  {
    id: 20,
    title: "Lucifer",
    year: "2016",
    rating: 6,
    opinion:
      "Lucifer is a dark fantasy series that follows the story of Lucifer Morningstar, a young man who is cast out of his family and taken in by the Devil's daughter, Penny. As Lucifer struggles to find his place in the world and rebuild his faith, he becomes embroiled in a web of corruption and supernatural forces.",
    myReview:
      "Started strong but lost its way. The Lucifer-Maze friendship was the heart of the show. The final season felt rushed. Still, the procedural-with-a-mythological-twist format was fun while it lasted.",
    genre: ["Action", "Adventure", "Drama"],
    image:
      "https://static0.colliderimages.com/wordpress/wp-content/uploads/2021/05/lucifer-s6.jpg?w=1200&h=675&fit=crop",
    category: "Western",
  },
  {
    id: 21,
    title: "The Journey of Legend",
    year: "2025",
    rating: 8,
    opinion:
      "Xiao Mingming is a martial arts novel enthusiast who, as the novel's protagonist Xiao Qiushui, journeys through a fictional martial arts world and grows from a passionate youth into a noble hero. A wuxia costume drama starring Cheng Yi that blends adventure, self-discovery, and the timeless allure of the martial arts genre.",
    myReview:
      "Cheng Yi shines in this wuxia world. The martial arts choreography is elegant and the costume design is gorgeous. The story takes a few episodes to find its footing but once it does, the emotional payoff is worth it.",
    genre: ["Drama", "Action", "Adventure"],
    image:
      "https://media.themoviedb.org/t/p/w500/mkBNYUVeiiPsLRilUBT5OiJkiZ7.jpg",
    category: "C-Drama",
  },
  {
    id: 22,
    title: "Fated Hearts",
    year: "2025",
    rating: 8,
    opinion:
      "After losing her memory in battle, skilled archer Fu Yixiao is taken in by a noble family and unexpectedly reunited with her former enemy, Prince Feng Suige — the man she once struck with an arrow. As they face the dangers of Yujing together, trust replaces suspicion and a deep bond begins to form. An enemies-to-lovers historical romance with political intrigue and stunning costume design.",
    myReview:
      "Enemies-to-lovers done right. The archer and the prince have real chemistry and the political intrigue adds weight to their romance. Li Qin is compelling as a woman caught between memory and duty. The costume design alone is worth watching.",
    genre: ["Drama", "Mystery", "Romance"],
    image:
      "https://image.tmdb.org/t/p/w500/9yKpGzf83t02GRWYRmyLj2VXy96.jpg",
    category: "C-Drama",
  },
  {
    id: 23,
    title: "The Prisoner of Beauty",
    year: "2025",
    rating: 8,
    opinion:
      "Xiao Qiao, a clever girl from the Qiao family, marries Wei Shao, the brave and kind master of the Wei family. Despite initial wariness due to ancestral grievances, Xiao Qiao and Wei Shao navigate their relationship with humor and determination. As they face challenges together, they come to appreciate each other's qualities through their warm daily life, intertwined with family and national affairs, and work to restore peace and resolve conflicts.",
    myReview:
      "A warm historical romance. Xiao Qiao's intelligence and humor make her a standout lead. The way she and Wei Shao grow from wariness to genuine love feels earned, not forced. The daily life scenes are the heart of the show.",
    genre: ["Drama", "Romance"],
    image:
      "https://image.tmdb.org/t/p/w500/mXbZ5aH4uhao6Dpd884USvATMfo.jpg",
    category: "C-Drama",
  },
  {
    id: 24,
    title: "New Life Begins",
    year: "2022",
    rating: 9,
    opinion:
      "Because of a marriage election, girls from all over the world gather in Xinchuan. Yin Zheng, the sixth young master of Xinchuan, and Li Wei, who only wants to lose the election and live comfortably in her hometown, accidentally meet. A new interesting and fun chapter of their lives begins as they gradually grow closer and spend everyday through all four seasons together, writing the warm daily life of the Xinchuan family.",
    myReview:
      "Cozy, funny, and unexpectedly moving. The marriage election premise is unique and the ensemble cast is charming. Li Wei and Yin Zheng's slow-burn romance is the soul of the show. A perfect comfort drama.",
    genre: ["Comedy", "Drama"],
    image:
      "https://image.tmdb.org/t/p/w500/2LSRCKg68ktB5sBtFbOkXwDQTan.jpg",
    category: "C-Drama",
  },
  {
    id: 25,
    title: "Pursuit of Jade",
    year: "2026",
    rating: 9,
    opinion:
      "Fan Changyu, a butcher's daughter, and Xie Zheng, a fallen noble seeking revenge, enter a fake marriage that turns into true love — but war tears them apart. Determined, Fan Changyu wields her butcher's knife on the battlefield, searching for justice and her husband. A sweeping historical romance of love, war, and defiance of fate.",
    myReview:
      "A sweeping historical romance with real stakes. Fan Changyu wielding a butcher's knife on the battlefield is iconic. The fake-marriage-to-true-love trope is handled with care. The political intrigue gives it weight beyond romance.",
    genre: ["Drama", "Romance", "Action"],
    image:
      "https://media.themoviedb.org/t/p/w500/tKMqVzKi4dVvm9Bdpb4oEEgnZYH.jpg",
    category: "C-Drama",
  },
  {
    id: 26,
    title: "Teach You a Lesson",
    year: "2026",
    rating: 9,
    opinion:
      "An inspector from the Educational Rights Protection Bureau is authorized by the government to use physical intervention and unconventional methods to discipline delinquent students and reform the educational system. A satisfying high-octane power fantasy with real substance — sharp writing, fast pacing, and cathartic as corrupt individuals finally face the consequences of their actions.",
    myReview:
      "A satisfying power fantasy with surprising depth. Watching the inspector dismantle corrupt systems is cathartic. The pacing is fast, the action is brutal, and Kim Mu-yeol brings real intensity. Rare to find a show this entertaining with substance.",
    genre: ["Action", "Drama", "Comedy"],
    image:
      "https://media.themoviedb.org/t/p/w500/fMECSPrTmRClSViMsXFYmiYIcWP.jpg",
    category: "K-Drama",
  },
];