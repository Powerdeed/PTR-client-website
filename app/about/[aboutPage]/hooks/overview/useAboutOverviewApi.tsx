"use client";

import { useContext, useEffect } from "react";

import { aboutOverviewContext } from "../../context/AboutOverviewContext";
import { execute } from "@/lib/api/execute";
import { getAboutUs } from "../../services/about";

export default function useAboutOverviewApi() {
  const aboutOverviewStates = useContext(aboutOverviewContext);

  if (!aboutOverviewStates)
    throw new Error("About overview context must be within a provider");

  const { setAbout, setFetchingAbout, setFetchingAboutError } =
    aboutOverviewStates;

  useEffect(() => {
    const fetchData = async () =>
      await execute(getAboutUs, {
        setLoading: setFetchingAbout,
        setError: setFetchingAboutError,
        onSuccess: (aboutus) => {
          setAbout(aboutus.sections);
        },
      });

    fetchData();
  }, [setAbout, setFetchingAbout, setFetchingAboutError]);

  return {};
}
