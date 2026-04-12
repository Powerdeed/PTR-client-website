"use client";

import { ReactNode, useState } from "react";

import { footerContext } from "./FooterContext";
import { contacts as contactObj } from "@/app/contact/services/contact";

export default function FooterProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState(contactObj);

  const [activePage, setActivePage] = useState("");

  return (
    <footerContext.Provider
      value={{ activePage, setActivePage, contacts, setContacts }}
    >
      {children}
    </footerContext.Provider>
  );
}
