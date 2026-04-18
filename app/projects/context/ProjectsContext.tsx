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

  fetchingProjects: boolean;
  setFetchingProjects: Dispatch<SetStateAction<boolean>>;

  fetchingProjectsError: string;
  setFetchingProjectsError: Dispatch<SetStateAction<string>>;

  active: string;
  setActive: Dispatch<SetStateAction<string>>;

  slideIn: boolean;
  setSlideIn: Dispatch<SetStateAction<boolean>>;

  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const projectsContext = createContext<ProjectsState | null>(null);
