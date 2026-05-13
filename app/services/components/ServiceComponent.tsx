"use client";

import { useRef } from "react";
import Image from "next/image";

import { Service } from "../types/service.types";

import ArrowIcons from "@/components/layout/ArrowIcons";
import { getAssetImageKey, getAssetImageSrc } from "@/app/utils/asset-images";

export default function ServiceComponent({ service }: { service: Service }) {
  const imageRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <div
      key={service._id}
      className="vertical-layout__inner w-full md:min-w-150 md:max-w-180"
    >
      <div className="text-style__subheading">{service.name}</div>

      <div className="relative h-60 md:h-90 overflow-hidden rounded-xl">
        <ArrowIcons refs={imageRefs} refId={service._id} />

        <div
          ref={(el) => {
            if (el) imageRefs.current[service._id] = el;
          }}
          className="flex h-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {(service.images ?? []).map((img, index) => (
            <div
              key={getAssetImageKey(img, index)}
              className="relative min-w-full h-full snap-start"
            >
              <Image
                src={getAssetImageSrc(img)}
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
