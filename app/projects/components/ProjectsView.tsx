"use client";

// components
import SidePanel from "@/components/layout/SidePanel";
import DescriptionPanel from "./DescriptionPanel";
import DisplayProjects from "./DisplayProjects";

// hooks
import useProjects from "../hooks/useProjects";

export default function ProjectsView() {
  const { actions } = useProjects();

  return (
    <div className="md:flex gap-2.5 p-4">
      <div className="flex-1">
        {Object.entries(actions.projectsByCategory).map(
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
