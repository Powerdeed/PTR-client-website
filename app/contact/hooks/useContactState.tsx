"use client";

import { useContext } from "react";
import { contactContext } from "../context/ContactContext";

export default function useContactState() {
  const contactState = useContext(contactContext);

  if (!contactState)
    throw new Error("Contact context must be within a provider");

  return { ...contactState };
}
