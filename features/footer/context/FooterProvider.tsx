"use client";

import { ReactNode, useState } from "react";

import { footerContext } from "./FooterContext";

export default function FooterProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState("");

  return (
    <footerContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </footerContext.Provider>
  );
}
