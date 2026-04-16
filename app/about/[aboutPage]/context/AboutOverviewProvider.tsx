"use client";

import { ReactNode, useState } from "react";
import { aboutOverviewContext } from "./AboutOverviewContext";
import { AboutUs } from "../types/about.types";

export default function AboutOverviewProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [about, setAbout] = useState<AboutUs[] | null>(null);

  const [fetchingAbout, setFetchingAbout] = useState(false);

  const [fetchingAboutError, setFetchingAboutError] = useState("");

  return (
    <aboutOverviewContext.Provider
      value={{
        about,
        setAbout,
        fetchingAbout,
        setFetchingAbout,
        fetchingAboutError,
        setFetchingAboutError,
      }}
    >
      {children}
    </aboutOverviewContext.Provider>
  );
}
