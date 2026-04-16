"use client";

import { createContext, Dispatch, SetStateAction } from "react";

import { Homepage } from "../types/home.types";

type HomeContextState = {
  homepage: Homepage | null;
  setHomepage: Dispatch<SetStateAction<Homepage | null>>;

  activeNav: string | null;
  setActiveNav: Dispatch<SetStateAction<string | null>>;

  hoveredNav: string | null;
  setHoveredNav: Dispatch<SetStateAction<string | null>>;

  fetchingHomepageData: boolean;
  setFetchingHomepageData: Dispatch<SetStateAction<boolean>>;

  fetchingHomepageDataError: string;
  setFetchingHomepageDataError: Dispatch<SetStateAction<string>>;
};

export const homeContext = createContext<HomeContextState | null>(null);
