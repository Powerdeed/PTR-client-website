"use client";

import useProjectsStates from "./useProjectsStates";

export default function useProjects() {
  const state = useProjectsStates();

  return { state, actions: {} };
}
