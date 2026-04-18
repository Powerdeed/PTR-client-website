"use client";

import { useRef } from "react";
import Image from "next/image";

// components
import ArrowIcons from "../../../components/layout/ArrowIcons";

// hooks
import useProjects from "../hooks/useProjects";
import useGlobalStates from "@/global-utils/hooks/useGlobalStates";

// types
import { Project } from "../types/project.types";

// services
import { projectImages } from "@/data/dummyData";
import ContainerLoadingAnimation from "@/components/layout/ContainerLoadingAnimation";

export default function DisplayProjects({
  category,
  categoryProjects,
}: {
  category: string;
  categoryProjects: Project[];
}) {
  const projectScrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const { state } = useProjects();
  const { globalState } = useGlobalStates();

  return (
    <div className="relative overflow-hidden">
      <ArrowIcons refs={projectScrollRefs} refId={category} />

      <div
        ref={(el) => {
          if (el) projectScrollRefs.current[category] = el;
        }}
        className="flex gap-3.75 overflow-x-auto scroll-smooth no-scrollbar p-2.5"
      >
        {!state.fetchingProjects ? (
          categoryProjects.map((project) => (
            <div
              key={project.name}
              onClick={() => {
                state.setSelectedProj(project);
                state.setOpenCategory(category);
              }}
              className={`group relative h-75 w-57.5 shrink-0 cursor-pointer rounded-[10px] transition-shadow duration-500 ${globalState.smallScreen ? "shadow-[0_0_10px_var(--primary-blue)]" : "hover:shadow-[0_0_10px_var(--primary-blue)]"}`}
            >
              <div
                className={`absolute top-0 left-0 w-full overflow-hidden rounded-[10px] transition-[height] duration-500 ease-in-out ${globalState.smallScreen ? "h-65" : "h-full group-hover:h-65"}`}
              >
                <Image
                  src={
                    projectImages[
                      project.featuredImage as keyof typeof projectImages
                    ]
                  }
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 230px"
                  className="object-cover"
                />
              </div>

              <h5 className="text-style__small-text absolute bottom-0 z-0 h-12.5 w-full grid place-items-center px-2.5 italic text-(--primary-blue)">
                {project.name}
              </h5>
            </div>
          ))
        ) : (
          <ContainerLoadingAnimation styling="h-75 w-57.5" />
        )}
      </div>
    </div>
  );
}
