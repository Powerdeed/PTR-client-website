"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { projectImages, projects } from "@/data/dummyData";
import SidePanel from "@/components/layout/SidePanel";
import { Project } from "@/lib/types/types";
import { handleScroll } from "@/utils/interactions";

export default function Projects() {
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const projectScrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  /* ---------- group projects by category ---------- */
  const projectsByCategory = useMemo(() => {
    return projects.reduce<Record<string, Project[]>>((acc, project) => {
      if (!project.category) return acc;
      acc[project.category] ??= [];
      acc[project.category].push(project);
      return acc;
    }, {});
  }, []);

  return (
    <div className="md:flex w-full p-[20px_10px] text-[12px] gap-2.5">
      <div className="flex-1 mb-2.5">
        {Object.entries(projectsByCategory).map(
          ([category, categoryProjects]) => {
            const isOpen = openCategory === category;
            return (
              <div key={category} className="relative w-full grid gap-2.5">
                {/* Category title */}
                <div className="m-2.5 text-[16px] font-semibold">
                  {category}
                </div>

                {/* Horizontal scroll area */}
                <div className="relative overflow-hidden">
                  <FontAwesomeIcon
                    icon={["fas", "arrow-left"]}
                    className="absolute left-0 top-1/2 z-1 -translate-y-1/2 cursor-pointer rounded-full bg-(--terciary-grey)/70 p-1.5 text-white text-[18px] hover:bg-(--terciary-grey) hover:text-(--primary-yellow) duration-300"
                    onClick={() =>
                      handleScroll(projectScrollRefs, "left", category)
                    }
                  />

                  <div className="relative w-full overflow-hidden">
                    <div
                      ref={(el) => {
                        if (el) projectScrollRefs.current[category] = el;
                      }}
                      className="flex gap-3.75 overflow-x-auto scroll-smooth no-scrollbar"
                    >
                      {categoryProjects.map((project) => (
                        <div
                          key={project.name}
                          onClick={() => {
                            setSelectedProj(project);
                            setOpenCategory(category);
                          }}
                          className="group relative h-75 w-57.5 shrink-0 cursor-pointer rounded-[10px] transition-shadow duration-500 hover:shadow-[0_0_10px_var(--primary-blue)]"
                        >
                          {/* Image Container - CHANGED HERE */}
                          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[10px] transition-[height] duration-500 ease-in-out group-hover:h-65">
                            <Image
                              src={
                                projectImages[
                                  project
                                    .images[0] as keyof typeof projectImages
                                ]
                              }
                              alt={project.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 230px"
                              className="object-cover"
                            />
                          </div>

                          {/* Title */}
                          <h5 className="absolute bottom-0 z-[-1] h-12.5 w-full grid place-items-center px-2.5 italic text-(--primary-blue)">
                            {project.name}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </div>

                  <FontAwesomeIcon
                    icon={["fas", "arrow-right"]}
                    className="absolute right-0 top-1/2 z-1 -translate-y-1/2 cursor-pointer rounded-full bg-(--terciary-grey)/70 p-1.5 text-white text-[18px] hover:bg-(--terciary-grey) hover:text-(--primary-yellow) duration-300"
                    onClick={() =>
                      handleScroll(projectScrollRefs, "right", category)
                    }
                  />
                </div>

                <div>
                  {/* Divider */}
                  <div
                    className={`h-0.75 w-full rounded-[3px] border border-(--primary-blue) ${isOpen ? "mb-2.5" : null}`}
                  />

                  {/* ---------- Description panel ---------- */}
                  <div
                    className={`relative overflow-hidden transition-all duration-500
                  ${isOpen ? "max-h-250 opacity-100" : "max-h-0 opacity-0"}
                `}
                  >
                    {/* Close button */}
                    {isOpen && (
                      <FontAwesomeIcon
                        icon={["fas", "xmark"]}
                        className="absolute right-2.5 top-1 z-20 cursor-pointer text-[1.2em] transition-transform duration-500 hover:-rotate-90 hover:text-(--secondary-blue)"
                        onClick={() => {
                          setSelectedProj(null);
                          setOpenCategory(null);
                        }}
                      />
                    )}

                    {/* Title */}
                    <div
                      className={`
                    text-[14px] font-semibold text-center italic transition-all duration-500
                    ${isOpen ? "block" : "hidden"}
                  `}
                    >
                      {selectedProj?.name}
                    </div>

                    {/* Content */}
                    <div
                      className={`
                    flex transition-all duration-500
                    max-md:flex-col
                    ${isOpen ? "opacity-100 mt-2.5 gap-2.5" : "opacity-0"}
                  `}
                    >
                      {/* Images */}
                      <div className="flex w-1/2 flex-wrap gap-1.25 max-md:w-full">
                        {selectedProj?.images.map((image, i) => (
                          <div
                            key={i}
                            className="relative h-32 w-[calc(50%-5px)]"
                          >
                            <Image
                              src={
                                projectImages[
                                  image as keyof typeof projectImages
                                ]
                              }
                              alt={selectedProj?.name ?? "Project image"}
                              fill
                              sizes="(max-width: 768px) 50vw, 25vw"
                              className="rounded-[10px] object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Description */}
                      <div className="w-1/2 text-[1em] max-md:w-full">
                        {selectedProj?.description}
                      </div>
                    </div>
                  </div>

                  {/* Bottom divider */}
                  <div
                    className={`h-0.75 w-full rounded-[3px] border border-(--primary-blue) ${isOpen ? "mt-2.5" : null}`}
                  />
                </div>
              </div>
            );
          },
        )}
      </div>

      <SidePanel options={["blogs", "reach us"]} />
    </div>
  );
}
