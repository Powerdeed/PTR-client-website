"use client";

import { ReactNode, useState } from "react";

import { homeContext } from "./HomeContext";
import { Homepage } from "../types/home.types";

export default function HomeProvider({ children }: { children: ReactNode }) {
  const [homepage, setHomepage] = useState<Homepage | null>(null);

  const [activeNav, setActiveNav] = useState<string | null>(null);

  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const [fetchingHomepageData, setFetchingHomepageData] = useState(false);

  const [fetchingHomepageDataError, setFetchingHomepageDataError] =
    useState("");

  return (
    <homeContext.Provider
      value={{
        homepage,
        setHomepage,
        activeNav,
        setActiveNav,
        hoveredNav,
        setHoveredNav,
        fetchingHomepageData,
        setFetchingHomepageData,
        fetchingHomepageDataError,
        setFetchingHomepageDataError,
      }}
    >
      {children}
    </homeContext.Provider>
  );
}
