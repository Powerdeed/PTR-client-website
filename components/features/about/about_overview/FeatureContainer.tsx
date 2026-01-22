"use client";
import { useEffect, useRef } from "react";

export default function FeatureContainer({
  benefit,
  color1,
  color2,
}: {
  benefit: string;
  color1: string;
  color2: string;
}) {
  const featureContainer = useRef<HTMLDivElement | null>(null);
  const clipPathStyle =
    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)";

  useEffect(() => {
    if (featureContainer.current)
      featureContainer.current.style.background = `linear-gradient(to bottom right, ${color1} 60%, ${color2} 80%)`;
  }, [featureContainer, color1, color2]);

  return (
    <div
      className="relative w-37.5 h-37.5 flex items-center justify-center"
      ref={featureContainer}
      style={{ clipPath: clipPathStyle }}
    >
      <div
        className="absolute left-1.125 top-1.125 w-33.75 h-33.75 bg-white flex items-center justify-center text-center"
        style={{ color: color1, clipPath: clipPathStyle }}
      >
        {benefit}
      </div>
    </div>
  );
}
