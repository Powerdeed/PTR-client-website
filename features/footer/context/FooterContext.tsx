"use client";

import { Contacts } from "@/app/contact/types/contact.types";
import { createContext, Dispatch, SetStateAction } from "react";

type FooterStates = {
  contacts: Contacts;
  setContacts: Dispatch<SetStateAction<Contacts>>;

  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
};

export const footerContext = createContext<FooterStates | null>(null);
