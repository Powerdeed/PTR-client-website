import { createContext } from "react";

type AboutOverviewStates = {
  currentPage: string;
};

export const aboutOverviewContext = createContext<AboutOverviewStates | null>(
  null,
);
