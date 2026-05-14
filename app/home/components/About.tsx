"use client";

import useHome from "../hooks/useHome";
import AssetImage from "@/components/layout/AssetImage";

export default function About() {
  const { state } = useHome();

  if (!state.homepage) return;

  return (
    <div className="w-full flex flex-col gap-7.5">
      {state.homepage.aboutIntro.map((about, idx) => (
        <div
          key={idx}
          className={`w-full flex flex-col mb-7.5 md:grid grid-cols-2 items-center gap-5 ${
            about.flipped ? "rotate-y-180" : ""
          }`}
        >
          <div
            className={`relative w-full h-75 ${
              about.flipped ? "rotate-y-180" : ""
            }`}
          >
            <AssetImage
              asset={about.image}
              alt="Milestone Electrical and Solar Solutions"
              sizes="(max-width: 1024px) 100vw, 50vw"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`flex flex-col items-center gap-2.5 ${
              about.flipped ? "rotate-y-180" : ""
            }`}
          >
            <h3 className="text-style__subheading text-(--primary-blue)">
              {about.title}
            </h3>
            <p className="text-justify text-style__body">{about.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
