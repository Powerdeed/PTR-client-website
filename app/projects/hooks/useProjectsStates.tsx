"use client";

import { useContext } from "react";
import { projectsContext } from "../context/ProjectsContext";

export default function useProjectsStates() {
  const projectsStates = useContext(projectsContext);

  if (!projectsStates)
    throw new Error("Projects context must be within a provider");

  return { ...projectsStates };
}
