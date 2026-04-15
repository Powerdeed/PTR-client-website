"use client";

import { useContext, useEffect } from "react";

import { homeContext } from "../context/HomeContext";

import { getHomePageData } from "../services/home.service";

import { execute } from "@/lib/api/execute";

export default function useHomeApi() {
  const homepageState = useContext(homeContext);

  if (!homepageState)
    throw new Error("Homepage context must be within a provider.");

  const { setHomepage, setFetchingHomepageData, setFetchingHomepageDataError } =
    homepageState;

  useEffect(() => {
    const fetchData = async () =>
      await execute(getHomePageData, {
        setLoading: setFetchingHomepageData,
        setError: setFetchingHomepageDataError,
        onSuccess: (homepages) => setHomepage(homepages),
      });

    fetchData();
  }, [setFetchingHomepageData, setFetchingHomepageDataError, setHomepage]);

  return {};
}
