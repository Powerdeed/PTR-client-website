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

  return (
    <projectsContext.Provider
      value={{
        projects,
        setProjects,
        selectedProj,
        setSelectedProj,
        openCategory,
        setOpenCategory,
      }}
    >
      {children}
    </projectsContext.Provider>
  );
}
