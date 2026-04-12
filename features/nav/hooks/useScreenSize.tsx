"use client";

import { useContext, useEffect } from "react";
import { navContext } from "../context/NavContext";

export default function useScreenSize() {
  const navState = useContext(navContext);
  if (!navState) throw new Error("Nav context must be within a provider");

  const { setSmallScreen } = navState;

  useEffect(() => {
    const screenSizeSetter = () => setSmallScreen(window.innerWidth < 768);

    screenSizeSetter();
    window.addEventListener("resize", screenSizeSetter);

    return () => window.removeEventListener("resize", screenSizeSetter);
  }, [setSmallScreen]);

  return {};
}
