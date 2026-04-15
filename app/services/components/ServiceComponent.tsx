"use client";

import { useRef } from "react";
import Image from "next/image";

import { Service } from "../types/service.types";

import { projectImages } from "@/data/dummyData";

import ArrowIcons from "@/components/layout/ArrowIcons";

export default function ServiceComponent({ service }: { service: Service }) {
  const imageRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <div
      key={service.id}
      className="vertical-layout__inner w-full md:min-w-150 md:max-w-180"
    >
      <div className="text-style__subheading">{service.name}</div>

      <div className="relative h-60 md:h-90 overflow-hidden rounded-xl">
        <ArrowIcons refs={imageRefs} refId={service.id} />

        <div
          ref={(el) => {
            if (el) imageRefs.current[service.id] = el;
          }}
          className="flex h-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {service.images.map((img) => (
            <div key={img} className="relative min-w-full h-full snap-start">
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
      </div>

      <p className="text-style__body text-gray-700">{service.description}</p>
    </div>
  );
}
