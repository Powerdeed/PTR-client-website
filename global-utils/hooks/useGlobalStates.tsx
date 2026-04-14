"use client";

import { useContext } from "react";

import { globalContext } from "../context/GlobalContext";
import useScreenSize from "./useScreenSize";

export default function useGlobalStates() {
  const globalState = useContext(globalContext);
  const screenSize = useScreenSize();

  if (!globalState) throw new Error("Context must be within a provider");

  return { globalState, globalActions: { ...screenSize } };
}
