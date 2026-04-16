export interface Homepage {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  aboutIntro: AboutIntro[];
}

export interface AboutIntro {
  title: string;
  description: string;
  image: string;
  flipped: boolean;
}
