"use client";

import { useContext, useEffect } from "react";

import { homeContext } from "../context/HomeContext";

import { homepage } from "../services/home";

export default function useHomeApi() {
  const homepageState = useContext(homeContext);

  if (!homepageState)
    throw new Error("Homepage context must be within a provider.");

  const { setHomepage } = homepageState;

  useEffect(() => {
    const homepageSetter = () => setHomepage(homepage);

    homepageSetter();
  }, [setHomepage]);

  return {};
}
