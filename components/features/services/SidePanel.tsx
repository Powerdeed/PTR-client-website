// components
import ReachUsForm from "@/components/layout/ReachUsForm";
import Image from "next/image";

import { Project } from "@/lib/types/types";
import { projectImages } from "@/data/dummyData";
import Link from "next/link";

export default function SidePanel({ topProjects }: { topProjects: Project[] }) {
  return (
    <div className="w-full md:w-[90%] lg:w-100">
      <ReachUsForm />
      <hr style={{ margin: "5px 0" }} />
      <div className="w-full bg-(--terciary-grey) rounded-[10px] grid justify-center py-2.5 mb-1.25 lg:mb-0">
        <h3 className="text-[18px] text-center m-[5px_5px_10px_5px] font-bold">
          See what we&apos;ve been working on
        </h3>
        <h5 className="text-center m-0.5">
          A glimpse into some of our recent projects across Kenya.
        </h5>
        {topProjects.map((project, idx) => (
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
        <h4 className="cursor-pointer m-[10px_0_0_10px] text-(--secondary-blue) italic hover:underline">
          Explore all projects &rarr;
        </h4>
      </div>
    </div>
  );
}
