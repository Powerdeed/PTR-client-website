"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Project } from "../types/project.types";

type ProjectsState = {
  projects: Project[];
  setProjects: Dispatch<SetStateAction<Project[]>>;

  selectedProj: Project | null;
  setSelectedProj: Dispatch<SetStateAction<Project | null>>;

  openCategory: string;
  setOpenCategory: Dispatch<SetStateAction<string>>;
};

export const projectsContext = createContext<ProjectsState | null>(null);
