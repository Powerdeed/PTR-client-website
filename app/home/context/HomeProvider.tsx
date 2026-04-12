"use client";

import { ReactNode, useState } from "react";

import { homeContext } from "./HomeContext";

export default function HomeProvider({ children }: { children: ReactNode }) {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <homeContext.Provider
      value={{ activeNav, setActiveNav, hoveredNav, setHoveredNav }}
    >
      {children}
    </homeContext.Provider>
  );
}
