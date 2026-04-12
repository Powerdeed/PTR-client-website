"use client";

import { ReactNode, useState } from "react";

import { navContext } from "./NavContext";

export default function NavProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  return (
    <navContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isAboutMenuOpen,
        setIsAboutMenuOpen,
        smallScreen,
        setSmallScreen,
      }}
    >
      {children}
    </navContext.Provider>
  );
}
