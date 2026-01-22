import { allProjectsArray } from "@/data/dummyData";
import { Project } from "@/lib/types/types";

const grouped = allProjectsArray.reduce<Record<string, Project[]>>(
  (acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(...item.projects);
    return acc;
  },
  {},
);

export const topProjects = Object.entries(grouped).flatMap(
  ([category, projects]) =>
    projects.map((project) => ({
      ...project,
      category,
    })),
);
