import { FeaturedImageLink } from "@/app/utils/asset-images";

export interface Homepage {
  hero: {
    title: string;
    subtitle: string;
    image: FeaturedImageLink;
  };
  aboutIntro: AboutIntro[];
}

export interface AboutIntro {
  title: string;
  description: string;
  image: FeaturedImageLink;
  flipped: boolean;
}
