import { getProjects } from "../services/projects";
import { Project } from "../types/project.types";

const grouped = async () => {
  const projects = await getProjects();
  if (!projects) {
  }

  return projects.reduce<Record<string, Project[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
};

export const topProjects = async () => {
  const groupedProjects = await grouped();
  if (!groupedProjects) return;

  return Object.entries(groupedProjects).flatMap(([category, projects]) =>
    projects.map((project) => ({
      ...project,
      category,
    })),
  );
};
