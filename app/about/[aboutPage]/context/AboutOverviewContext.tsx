"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { AboutUs } from "../types/about.types";

type AboutOverviewStates = {
  about: AboutUs[] | null;
  setAbout: Dispatch<SetStateAction<AboutUs[] | null>>;

  fetchingAbout: boolean;
  setFetchingAbout: Dispatch<SetStateAction<boolean>>;

  fetchingAboutError: string;
  setFetchingAboutError: Dispatch<SetStateAction<string>>;
};

export const aboutOverviewContext = createContext<AboutOverviewStates | null>(
  null,
);
