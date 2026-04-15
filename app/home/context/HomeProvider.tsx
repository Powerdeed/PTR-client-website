"use client";

import { ReactNode, useState } from "react";

import { homeContext } from "./HomeContext";
import { Homepage } from "@/app/about/[aboutPage]/types/about.types";

export default function HomeProvider({ children }: { children: ReactNode }) {
  const [homepage, setHomepage] = useState<Homepage | null>(null);

  const [activeNav, setActiveNav] = useState<string | null>(null);

  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <homeContext.Provider
      value={{
        homepage,
        setHomepage,
        activeNav,
        setActiveNav,
        hoveredNav,
        setHoveredNav,
      }}
    >
      {children}
    </homeContext.Provider>
  );
}
