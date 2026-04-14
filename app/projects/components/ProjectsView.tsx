"use client";

import { useMemo } from "react";

// services
import { projects } from "../services/projects";

// types
import { Project } from "../types/project.types";

// components
import SidePanel from "@/components/layout/SidePanel";
import DescriptionPanel from "./DescriptionPanel";
import DisplayProjects from "./DisplayProjects";

export default function ProjectsView() {
  const projectsByCategory = useMemo(() => {
    return projects.reduce<Record<string, Project[]>>((acc, project) => {
      if (!project.category) return acc;
      acc[project.category] ??= [];
      acc[project.category].push(project);
      return acc;
    }, {});
  }, []);

  return (
    <div className="md:flex gap-2.5 p-4">
      <div className="flex-1">
        {Object.entries(projectsByCategory).map(
          ([category, categoryProjects]) => (
            <div key={category} className="relative grid gap-2.5">
              <div className="m-2.5 text-style__subheading">{category}</div>

              <DisplayProjects
                category={category}
                categoryProjects={categoryProjects}
              />

              <DescriptionPanel category={category} />
            </div>
          ),
        )}
      </div>

      <SidePanel options={["blogs", "reach us"]} />
    </div>
  );
}
