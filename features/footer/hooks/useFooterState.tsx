"use client";

import { useContext } from "react";
import { footerContext } from "../context/FooterContext";

export default function useFooterState() {
  const footerStates = useContext(footerContext);

  if (!footerStates)
    throw new Error("Footer context must be within a provider");

  return { ...footerStates };
}
