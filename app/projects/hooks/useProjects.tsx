"use client";

import useProjectsApi from "./useProjectsApi";
import useProjectsHandler from "./useProjectsHandler";
import useProjectsStates from "./useProjectsStates";

export default function useProjects() {
  const state = useProjectsStates();
  const api = useProjectsApi();
  const handler = useProjectsHandler();

  return { state, actions: { ...api, ...handler } };
}
