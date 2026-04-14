import { createContext } from "react";

type AboutStates = {
  currentPage: string;
};

export const aboutContext = createContext<AboutStates | null>(null);
