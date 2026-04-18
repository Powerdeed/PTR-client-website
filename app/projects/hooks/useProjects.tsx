"use client";

import useProjectsApi from "./useProjectsApi";
import useProjectsHandler from "./useProjectsHandler";
import useProjectsStates from "./useProjectsStates";
import useTopProjectsLandingPage from "./useTopProjectsLandingPage";

export default function useProjects() {
  const state = useProjectsStates();
  const api = useProjectsApi();
  const projectsHandler = useProjectsHandler();
  const topProjectsLandingPageHandler = useTopProjectsLandingPage();

  return {
    state,
    actions: { ...api, ...projectsHandler, ...topProjectsLandingPageHandler },
  };
}
