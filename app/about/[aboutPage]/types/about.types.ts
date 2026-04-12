import { DraftifyBlock } from "draftify";

export interface AboutUs {
  title: string;
  description: DraftifyBlock[] | string | string[] | string[][];
}

export interface AboutIntro {
  title: string;
  description: string;
  image: string;
  flipped: boolean;
}
