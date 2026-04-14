"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type GlobalState = {
  smallScreen: boolean;
  setSmallScreen: Dispatch<SetStateAction<boolean>>;
};

export const globalContext = createContext<GlobalState | null>(null);
