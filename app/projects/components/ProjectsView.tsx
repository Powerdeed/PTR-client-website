"use client";

// components
import SidePanel from "@/components/layout/SidePanel";
import DescriptionPanel from "./DescriptionPanel";
import DisplayProjects from "./DisplayProjects";

// hooks
import useProjects from "../hooks/useProjects";
import ContainerLoadingAnimation from "@/components/layout/ContainerLoadingAnimation";

export default function ProjectsView() {
  const { state, actions } = useProjects();

  return (
    <div className="md:flex gap-2.5 p-4">
      <div className="flex-1">
        {Object.entries(actions.projectsByCategory).map(
          ([category, categoryProjects]) => (
            <div key={category} className="relative grid gap-2.5">
              {!state.fetchingProjects ? (
                <div className="mt-2.5 text-style__subheading">{category}</div>
              ) : (
                <ContainerLoadingAnimation styling="mt-2.5 h-5 w-1/2" />
              )}

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
