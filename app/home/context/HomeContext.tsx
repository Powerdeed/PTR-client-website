"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type HomeContextState = {
  activeNav: string | null;
  setActiveNav: Dispatch<SetStateAction<string | null>>;

  hoveredNav: string | null;
  setHoveredNav: Dispatch<SetStateAction<string | null>>;
};

export const homeContext = createContext<HomeContextState | null>(null);
