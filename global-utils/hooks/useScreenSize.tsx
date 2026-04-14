"use client";

import { useContext, useEffect } from "react";
import { globalContext } from "../context/GlobalContext";

export default function useScreenSize() {
  const globalState = useContext(globalContext);

  if (!globalState) throw new Error("Global context must be within a provider");

  const { setSmallScreen } = globalState;

  useEffect(() => {
    const screenSizeSetter = () => setSmallScreen(window.innerWidth < 768);

    screenSizeSetter();
    window.addEventListener("resize", screenSizeSetter);

    return () => window.removeEventListener("resize", screenSizeSetter);
  }, [setSmallScreen]);
  return {};
}
