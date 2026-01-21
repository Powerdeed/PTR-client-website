"use client";
import { useEffect, useRef } from "react";

export default function FeatureContainer({ benefit, color1, color2 }) {
  const featureContainer = (useRef < HTMLDivElement) | (null > null);

  useEffect(() => {
    if (featureContainer.current)
      featureContainer.current.style.background = `linear-gradient(to bottom right, ${color1} 60%, ${color2} 80%)`;
  }, [featureContainer, color1, color2]);

  return (
    <div
      className="relative w-37.5 h-37.5 clip-path-[polygon(25%_5%,_75%_5%,_100%_50%,_75%_95%,_25%_95%,_0%_50%)] flex items-center justify-center"
      ref={featureContainer}
    >
      <div
        className="absolute w-[90%] h-[90%] bg-white clip-path-[polygon(25%_5%,_75%_5%,_100%_50%,_75%_95%,_25%_95%,_0%_50%)] flex items-center justify-center text-center"
        style={{ color: color1 }}
      >
        {benefit}
      </div>
    </div>
  );
}
