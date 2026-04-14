"use client";

import { ReactNode, useState } from "react";

import { globalContext } from "./GlobalContext";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [smallScreen, setSmallScreen] = useState(false);

  return (
    <globalContext.Provider
      value={{
        smallScreen,
        setSmallScreen,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}
