"use client";

import { useContext, useEffect } from "react";

import { projectsContext } from "../context/ProjectsContext";

import { projects as p } from "../services/projects";

export default function useProjectsApi() {
  const projectsStates = useContext(projectsContext);

  if (!projectsStates)
    throw new Error("Projects context must be within a provider");

  const { setProjects } = projectsStates;

  useEffect(() => {
    const projectsSetter = () => setProjects(p);

    projectsSetter();
  }, [setProjects]);

  return {};
}
