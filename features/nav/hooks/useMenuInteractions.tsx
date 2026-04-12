"use client";

import { useContext } from "react";
import { usePathname } from "next/navigation";
import { navContext } from "../context/NavContext";

export default function useMenuInteractions() {
  const pathname = usePathname();
  const navState = useContext(navContext);

  if (!navState) throw new Error("Nav context must be within a provider");

  const { setIsMenuOpen, setIsAboutMenuOpen } = navState;

  const isActive = (path: string) => (pathname === path ? "underline" : "");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleSubMenu = () => setIsAboutMenuOpen((prev) => !prev);

  return {
    isActive,
    toggleMenu,
    toggleSubMenu,
  };
}
