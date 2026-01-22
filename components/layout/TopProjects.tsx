"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { topProjects } from "@/services/projects";

import { Project } from "@/lib/types/types";

import { projectImages } from "@/data/dummyData";

export default function TopProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    function getRandomProjects() {
      const shuffledProjects = [...topProjects].sort(() => 0.5 - Math.random());

      setProjects(shuffledProjects.slice(0, 3));
    }

    getRandomProjects();
  }, []);
  return (
    <div className="w-full bg-(--terciary-grey)/50 rounded-[10px] flex flex-col justify-center p-2.5 mb-1.25 lg:mb-0">
      <h3 className="text-[18px] text-center m-[5px_5px_10px_5px] font-bold">
        See what we&apos;ve been working on
      </h3>

      <h5 className="text-center m-0.5">
        A glimpse into some of our recent projects across Kenya.
      </h5>

      {projects.map((project, idx) => (
        <Link
          href="/projects"
          key={idx}
          className="group w-full h-fit p-1.25 my-1.25 cursor-pointer"
        >
          <div className="relative w-full h-62.5 overflow-hidden">
            <Image
              src={
                projectImages[project.images[0] as keyof typeof projectImages]
              }
              alt="proj-img"
              fill
              sizes="(max-width: 1024px) 100%"
              className="object-cover rounded-[10px] scale-100 duration-300 hover:scale-[1.2]"
            />
          </div>

          <h4 className="italic group-hover:text(--secondary-blue)">
            {project.name}
          </h4>
        </Link>
      ))}

      <Link
        href="/projects"
        className="cursor-pointer m-[10px_0_0_10px] text-(--secondary-blue) italic hover:underline"
      >
        Explore all projects &rarr;
      </Link>
    </div>
  );
}
