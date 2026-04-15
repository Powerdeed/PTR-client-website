"use client";

// modules
import { useContext, useMemo } from "react";

// types
import { Project } from "../types/project.types";

// context
import { projectsContext } from "../context/ProjectsContext";

export default function useProjectsHandler() {
  const projectsStates = useContext(projectsContext);

  if (!projectsStates)
    throw new Error("Projects context must be within a provider");

  const { projects } = projectsStates;

  const projectsByCategory = useMemo(() => {
    return projects.reduce<Record<string, Project[]>>((acc, project) => {
      if (!project.category) return acc;
      acc[project.category] ??= [];
      acc[project.category].push(project);
      return acc;
    }, {});
  }, [projects]);

  return { projectsByCategory };
}
