"use client";

import { useContext, useRef } from "react";
import { homeContext } from "../context/HomeContext";

export default function useQuickNavs() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const home = useContext(homeContext);

  if (!home) throw new Error("Context must be within a provider");

  const { setActiveNav } = home;

  const handleActivate = (desc: string) => {
    setActiveNav(desc);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveNav(null);
    }, 3000);
  };

  return { handleActivate };
}
