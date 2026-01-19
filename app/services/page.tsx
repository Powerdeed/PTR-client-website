"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Project } from "@/lib/types/types";
import { allProjectsArray, projectImages, services } from "@/data/dummyData";
import SidePanel from "@/components/features/services/SidePanel";

export default function ServicesPage() {
  const [topProjects, setTopProjects] = useState<Project[]>([]);
  const imageRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const grouped = allProjectsArray.reduce<Record<string, Project[]>>(
      (acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(...item.projects);
        return acc;
      },
      {},
    );

    const flattened = Object.entries(grouped).flatMap(([category, projects]) =>
      projects.map((project) => ({
        ...project,
        category,
      })),
    );

    const shuffled = [...flattened].sort(() => 0.5 - Math.random());

    const setTopProjectsFromShuffled = (projects: Project[]) => {
      setTopProjects(projects);
    };

    setTopProjectsFromShuffled(shuffled.slice(0, 3));
  }, []);

  const handleScroll = (direction: "left" | "right", serviceId: string) => {
    const imageContainer = imageRefs.current[serviceId];

    if (!imageContainer) return;

    const scrollAmount = imageContainer.offsetWidth;
    imageContainer.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full px-4">
      <h1 className="text-center text-2xl font-bold mt-4">
        Explore Our Services
      </h1>

      <div className="w-full lg:flex gap-2.5 mt-5 justify-center text-[14.4px]">
        <div className="grid gap-10 mt-8 max-w-5xl mx-auto mb-10">
          {services.map((service) => (
            <div key={service.id} className="w-full lg:w-180">
              <h2 className="text-lg font-semibold mb-3">{service.name}</h2>

              <div className="relative h-60 md:h-90 overflow-hidden rounded-xl">
                <FontAwesomeIcon
                  icon={["fas", "circle-arrow-left"]}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl cursor-pointer z-10 text-white drop-shadow"
                  onClick={() => handleScroll("left", service.id)}
                />

                <div
                  ref={(el) => {
                    if (el) imageRefs.current[service.id] = el;
                  }}
                  className="flex h-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                >
                  {service.images.map((img) => (
                    <div
                      key={img}
                      className="relative min-w-full h-full snap-start"
                    >
                      <Image
                        src={projectImages[img as keyof typeof projectImages]}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                      />
                    </div>
                  ))}
                </div>

                {/* Right Arrow */}
                <FontAwesomeIcon
                  icon={["fas", "circle-arrow-right"]}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl cursor-pointer z-10 text-white drop-shadow"
                  onClick={() => handleScroll("right", service.id)}
                />
              </div>

              <p className="mt-4 text-sm text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <SidePanel topProjects={topProjects} />
      </div>
    </div>
  );
}
