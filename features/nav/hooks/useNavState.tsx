"use client";

import { useContext } from "react";
import { navContext } from "../context/NavContext";

export default function useNavState() {
  const navState = useContext(navContext);

  if (!navState) throw new Error("Nav context must be within a provider");

  return { ...navState };
}
