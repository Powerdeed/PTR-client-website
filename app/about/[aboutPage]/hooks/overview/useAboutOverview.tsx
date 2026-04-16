"use client";

import useAboutOverviewApi from "./useAboutOverviewApi";
import useAboutOverviewState from "./useAboutOverviewState";

export default function useAboutOverview() {
  const state = useAboutOverviewState();
  const api = useAboutOverviewApi();

  return { state, api };
}
