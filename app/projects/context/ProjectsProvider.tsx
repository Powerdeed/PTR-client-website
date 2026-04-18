"use client";

import { ReactNode, useState } from "react";

import { Project } from "../types/project.types";

import { projectsContext } from "./ProjectsContext";

export default function ProjectsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [projects, setProjects] = useState<Project[]>([]);

  const [selectedProj, setSelectedProj] = useState<Project | null>(null);

  const [openCategory, setOpenCategory] = useState("");

  const [fetchingProjects, setFetchingProjects] = useState(false);

  const [fetchingProjectsError, setFetchingProjectsError] = useState("");

  const [active, setActive] = useState("Electrical Installation");

  const [slideIn, setSlideIn] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <projectsContext.Provider
      value={{
        projects,
        setProjects,
        selectedProj,
        setSelectedProj,
        openCategory,
        setOpenCategory,
        fetchingProjects,
        setFetchingProjects,
        fetchingProjectsError,
        setFetchingProjectsError,
        active,
        setActive,
        slideIn,
        setSlideIn,
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </projectsContext.Provider>
  );
}
