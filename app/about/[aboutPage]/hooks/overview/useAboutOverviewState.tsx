"use client";

import { useContext } from "react";
import { aboutOverviewContext } from "../../context/AboutOverviewContext";

export default function useAboutOverviewState() {
  const aboutOverviewStates = useContext(aboutOverviewContext);

  if (!aboutOverviewStates)
    throw new Error("About overview context must be within a provider");

  return { ...aboutOverviewStates };
}
