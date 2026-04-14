"use client";

import { RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { handleScroll } from "@/global-utils/scroll-interactions";

export default function ArrowIcons({
  category,
  projectScrollRefs,
}: {
  category: string;
  projectScrollRefs: RefObject<Record<string, HTMLDivElement | null>>;
}) {
  return (
    <div className="absolute w-full top-1/2 flex items-center justify-between z-1">
      <FontAwesomeIcon
        icon={["fas", "arrow-left"]}
        className="arrow-icon-bg-layer"
        onClick={() => handleScroll(projectScrollRefs, "left", category)}
      />

      <FontAwesomeIcon
        icon={["fas", "arrow-right"]}
        className="arrow-icon-bg-layer"
        onClick={() => handleScroll(projectScrollRefs, "right", category)}
      />
    </div>
  );
}
