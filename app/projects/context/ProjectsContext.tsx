"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Project } from "../types/project.types";

type ProjectsState = {
  selectedProj: Project | null;
  setSelectedProj: Dispatch<SetStateAction<Project | null>>;

  openCategory: string;
  setOpenCategory: Dispatch<SetStateAction<string>>;
};

export const projectsContext = createContext<ProjectsState | null>(null);
