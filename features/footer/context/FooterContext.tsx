"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type FooterStates = {
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
};

export const footerContext = createContext<FooterStates | null>(null);
