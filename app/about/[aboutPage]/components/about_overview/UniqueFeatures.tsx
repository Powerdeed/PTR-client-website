"use client";

import useGlobalStates from "@/global-utils/hooks/useGlobalStates";
import { PRIMARY_COLORS } from "@/global-utils/constants/primary-colors";
import { isStringArray } from "../../utils/typeCheckers";

import FeatureContainer from "./FeatureContainer";
import { AboutUs } from "../../types/about.types";
import useAboutOverview from "../../hooks/overview/useAboutOverview";

export default function UniqueFeatures({ about }: { about: AboutUs }) {
  const { globalState } = useGlobalStates();
  const { state } = useAboutOverview();

  if (!isStringArray(about.description)) return;

  if (!state.about) return;

  return (
    <div className="unique-features relative w-full h-125">
      {about.description.map((feature, index) => {
        const total =
          state.about?.find((about) => about.title === "Unique Features")
            ?.description.length || 0;
        const angle = ((index + 0.5) / total) * 2 * Math.PI - Math.PI / 2;
        const radius = globalState.smallScreen ? 110 : 180;

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const colorIndex = index % PRIMARY_COLORS.length;

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            <FeatureContainer
              feature={feature}
              color1={PRIMARY_COLORS[colorIndex][0]}
              color2={PRIMARY_COLORS[colorIndex][1]}
            />
          </div>
        );
      })}
    </div>
  );
}
