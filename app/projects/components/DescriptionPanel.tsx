"use client";

import { projectImages } from "@/data/dummyData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useProjects from "../hooks/useProjects";

import Image from "next/image";

export default function DescriptionPanel({ category }: { category: string }) {
  const { state } = useProjects();

  const isOpen = state.openCategory === category;

  return (
    <div>
      <Divider />

      <div
        className={`relative vertical-layout__inner overflow-hidden transition-all duration-500 ${isOpen ? "pt-7.5 max-h-250 my-2.5 opacity-100" : "max-h-0 opacity-0"} `}
      >
        {/* Close button */}
        <FontAwesomeIcon
          icon={["fas", "xmark"]}
          className="absolute right-2.5 top-1 z-20 cursor-pointer text-[1.2em] transition-transform duration-500 hover:-rotate-90 hover:text-(--secondary-blue)"
          onClick={() => {
            state.setSelectedProj(null);
            state.setOpenCategory("");
          }}
        />

        {/* Title */}
        <div
          className={`text-style__subheading text-center transition-all duration-500 ${isOpen ? "block" : "hidden"} `}
        >
          {state.selectedProj?.name}
        </div>

        {/* Content */}
        <div
          className={`flex gap-2.5 transition-all duration-500 max-md:flex-col ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          {/* Images */}
          <div className="flex w-1/2 flex-wrap gap-1.25 max-md:w-full">
            {state.selectedProj?.images.map((image, i) => (
              <div key={i} className="relative h-32 w-[calc(50%-5px)]">
                <Image
                  src={projectImages[image as keyof typeof projectImages]}
                  alt={state.selectedProj?.name ?? "Project image"}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="rounded-[10px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="w-1/2 text-style__body max-md:w-full">
            {state.selectedProj?.description}
          </div>
        </div>
      </div>

      <Divider />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0.75 w-full rounded-[3px] border border-(--primary-blue)" />
  );
}
