"use client";

// modules
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

// components
import SidePanel from "@/components/layout/SidePanel";

// data
import { projectImages } from "@/data/dummyData";
import { services } from "./services/services";

// utils
import { handleScroll } from "@/global-utils/scroll-interactions";

export default function Services() {
  const imageRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <div className="border w-full px-4 grid justify-center box-border">
      <div className="text-center text-style__section-title mt-4">
        Explore Our Services
      </div>

      <div className="w-fit md:flex gap-2.5 mt-5 justify-center text-[14.4px] mb-10">
        <div className="grid gap-10 mx-auto mb-10">
          {services.map((service) => (
            <div key={service.id} className="w-full md:min-w-150 md:max-w-180">
              <h2 className="text-style__subheading mb-3">{service.name}</h2>

              <div className="relative h-60 md:h-90 overflow-hidden rounded-xl">
                <FontAwesomeIcon
                  icon={["fas", "circle-arrow-left"]}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl cursor-pointer z-1 text-white drop-shadow"
                  onClick={() => handleScroll(imageRefs, "left", service.id)}
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
                        sizes="100%"
                        priority
                      />
                    </div>
                  ))}
                </div>

                <FontAwesomeIcon
                  icon={["fas", "circle-arrow-right"]}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl cursor-pointer z-1 text-white drop-shadow"
                  onClick={() => handleScroll(imageRefs, "right", service.id)}
                />
              </div>

              <p className="mt-4 text-style__body text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <SidePanel options={["reach us", "projects"]} />
      </div>
    </div>
  );
}
