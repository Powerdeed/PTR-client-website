"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { projectImages, projects } from "@/data/dummyData";
import SidePanel from "@/components/layout/SidePanel";
import { Project } from "@/lib/types/types";

export default function Projects() {
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  const projectsScrollRef = useRef<HTMLDivElement | null>(null);

  /* ---------- group projects by category ---------- */
  const projectsByCategory = useMemo(() => {
    return projects.reduce<Record<string, Project[]>>((acc, project) => {
      if (!project.category) return acc;
      acc[project.category] ??= [];
      acc[project.category].push(project);
      return acc;
    }, {});
  }, []);

  const isOpen = Boolean(selectedProj);

  return (
    <div className="border border-(--terciary-grey) md:inline-flex w-full p-[20px_10px] text-[12px] gap-2.5">
      <div className="w-full grid gap-5">
        {Object.entries(projectsByCategory).map(
          ([category, categoryProjects]) => (
            <div key={category} className="relative w-full grid gap-2.5">
              {/* Category title */}
              <h3 className="m-2.5 font-semibold">{category}</h3>

              {/* Horizontal scroll area */}
              <div className="relative overflow-hidden">
                <FontAwesomeIcon
                  icon={["fas", "chevron-left"]}
                  className="absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-(--terciary-grey) p-2.5 text-(--primary-grey)"
                  onClick={() =>
                    projectsScrollRef.current?.scrollBy({
                      left: -250,
                      behavior: "smooth",
                    })
                  }
                />

                <div
                  ref={projectsScrollRef}
                  className="flex gap-3.75 overflow-x-auto scroll-smooth px-8"
                >
                  {categoryProjects.map((project) => (
                    <div
                      key={project.name}
                      onClick={() => setSelectedProj(project)}
                      className="group relative h-75 w-57.5 cursor-pointer rounded-[10px] transition-shadow duration-500 hover:shadow-[0_0_10px_var(--primary-blue)]"
                    >
                      {/* Image */}
                      <div className="absolute inset-0 overflow-hidden rounded-[10px] transition-all duration-500 group-hover:h-65">
                        <Image
                          src={
                            projectImages[
                              project.images[0] as keyof typeof projectImages
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

                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  className="absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-(--terciary-grey) p-2.5 text-(--primary-grey)"
                  onClick={() =>
                    projectsScrollRef.current?.scrollBy({
                      left: 250,
                      behavior: "smooth",
                    })
                  }
                />
              </div>

              {/* Divider */}
              <div className="h-0.75 w-full rounded-[3px] border border-(--primary-blue)" />

              {/* Close button */}
              {isOpen && (
                <FontAwesomeIcon
                  icon={["fas", "xmark"]}
                  className="absolute right-2.5 top-2.5 z-20 cursor-pointer text-[1.2em] transition-transform duration-500 hover:-rotate-90 hover:text-(--secondary-blue)"
                  onClick={() => setSelectedProj(null)}
                />
              )}

              {/* ---------- Description panel ---------- */}
              <div
                className={`
                  overflow-hidden transition-all duration-500
                  ${isOpen ? "max-h-250 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                {/* Title */}
                <div
                  className={`
                    text-center italic transition-all duration-500
                    ${isOpen ? "block" : "hidden"}
                  `}
                >
                  {selectedProj?.name}
                </div>

                {/* Content */}
                <div
                  className={`
                    mt-2.5 flex gap-2.5 transition-all duration-500
                    max-md:flex-col
                    ${isOpen ? "opacity-100" : "opacity-0"}
                  `}
                >
                  {/* Images */}
                  <div className="flex w-1/2 flex-wrap gap-1.25 max-md:w-full">
                    {selectedProj?.images.map((image, i) => (
                      <div key={i} className="relative h-32 w-[calc(50%-5px)]">
                        <Image
                          src={
                            projectImages[image as keyof typeof projectImages]
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
                  <div className="w-1/2 text-[0.85em] max-md:w-full">
                    {selectedProj?.description}
                  </div>
                </div>
              </div>

              {/* Bottom divider */}
              <div className="h-0.75 w-full rounded-[3px] border border-(--primary-blue)" />
            </div>
          ),
        )}
      </div>

      <SidePanel options={["blogs", "reach us"]} />
    </div>
  );
}
