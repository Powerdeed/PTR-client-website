"use client";

import { Homepage } from "@/app/about/[aboutPage]/types/about.types";
import { createContext, Dispatch, SetStateAction } from "react";

type HomeContextState = {
  homepage: Homepage | null;
  setHomepage: Dispatch<SetStateAction<Homepage | null>>;

  activeNav: string | null;
  setActiveNav: Dispatch<SetStateAction<string | null>>;

  hoveredNav: string | null;
  setHoveredNav: Dispatch<SetStateAction<string | null>>;
};

export const homeContext = createContext<HomeContextState | null>(null);
