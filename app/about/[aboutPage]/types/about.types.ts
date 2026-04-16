import { DraftifyBlock } from "draftify";

export interface AboutUs {
  title: string;
  description: DraftifyBlock[] | string | string[] | string[][];
}
