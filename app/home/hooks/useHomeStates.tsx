"use client";

import { useContext } from "react";

import { homeContext } from "../context/HomeContext";

export default function useHomeStates() {
  const home = useContext(homeContext);

  if (!home) throw new Error("Context must be within a provider");

  return { ...home };
}
