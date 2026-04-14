import { projects } from "../services/projects";
import { Project } from "../types/project.types";

const grouped = projects.reduce<Record<string, Project[]>>((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item);
  return acc;
}, {});

export const topProjects = Object.entries(grouped).flatMap(
  ([category, projects]) =>
    projects.map((project) => ({
      ...project,
      category,
    })),
);
