"use client";
import { useEffect, useRef } from "react";

export default function FeatureContainer({
  feature,
  color1,
  color2,
  smallScreen,
}: {
  feature: string;
  color1: string;
  color2: string;
  smallScreen: boolean;
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
      className={`relative ${smallScreen ? "w-28 h-28" : "w-40.5 h-40.5"} flex items-center justify-center`}
      ref={featureContainer}
      style={{ clipPath: clipPathStyle }}
    >
      <div
        className={`absolute left-1.125 top-1.125 ${smallScreen ? "w-25 h-25 text-style__small-text" : "w-37.5 h-37.5 text-style__body"} bg-white flex items-center justify-center text-center`}
        style={{ color: color1, clipPath: clipPathStyle }}
      >
        {feature}
      </div>
    </div>
  );
}
