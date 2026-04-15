"use client";

import { RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { handleScroll } from "@/global-utils/scroll-interactions";

export default function ArrowIcons({
  refs,
  refId,
}: {
  refs: RefObject<Record<string, HTMLDivElement | null>>;
  refId: string;
}) {
  return (
    <div className="text-3xl absolute w-full top-1/2 flex items-center justify-between z-1">
      <FontAwesomeIcon
        icon={["fas", "circle-arrow-left"]}
        className="left-3 arrow-icon-bg-layer"
        onClick={() => handleScroll(refs, "left", refId)}
      />

      <FontAwesomeIcon
        icon={["fas", "circle-arrow-right"]}
        className="right-3 arrow-icon-bg-layer"
        onClick={() => handleScroll(refs, "right", refId)}
      />
    </div>
  );
}
