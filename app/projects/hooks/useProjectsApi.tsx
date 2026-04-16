"use client";

import { useContext, useEffect } from "react";

import { projectsContext } from "../context/ProjectsContext";

import { getProjects } from "../services/projects";
import { execute } from "@/lib/api/execute";

export default function useProjectsApi() {
  const projectsStates = useContext(projectsContext);

  if (!projectsStates)
    throw new Error("Projects context must be within a provider");

  const { setProjects, setFetchingProjects, setFetchingProjectsError } =
    projectsStates;

  useEffect(() => {
    const fetchData = async () =>
      await execute(getProjects, {
        setLoading: setFetchingProjects,
        setError: setFetchingProjectsError,
        onSuccess: (projects) => {
          console.log(projects);
          setProjects(projects);
        },
      });

    fetchData();
  }, [setFetchingProjects, setFetchingProjectsError, setProjects]);

  return {};
}
