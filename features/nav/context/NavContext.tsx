"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type NavState = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;

  isAboutMenuOpen: boolean;
  setIsAboutMenuOpen: Dispatch<SetStateAction<boolean>>;

  smallScreen: boolean;
  setSmallScreen: Dispatch<SetStateAction<boolean>>;
};

export const navContext = createContext<NavState | null>(null);
