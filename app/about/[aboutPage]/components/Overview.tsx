"use client";

import Link from "next/link";

import CoreValues from "./about_overview/CoreValues";
import FeatureContainer from "./about_overview/FeatureContainer";
import Title from "./about_overview/Title";

import { aboutUs } from "../services/about";

import { DraftifyBlocksReader } from "draftify-react";

import { DraftifyBlock } from "draftify";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { PRIMARY_COLORS } from "@/global-utils/constants/primary-colors";

export default function Overview() {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const screenSizeSetter = () => setSmallScreen(window.innerWidth < 768);

    screenSizeSetter();
    window.addEventListener("resize", screenSizeSetter);

    return () => window.removeEventListener("resize", screenSizeSetter);
  }, []);

  return (
    <div className="flex flex-col gap-5 text-style__body">
      {/* About information */}
      <div className="grid gap-5">
        <div>
          <Title title="Overview" icon={["fas", "list"]} />
          <DraftifyBlocksReader
            blocksData={
              aboutUs.find((about) => about.title === "Company Overview")
                ?.description as DraftifyBlock[]
            }
          />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
          <div>
            <Title title="Mission" icon={["far", "thumbs-up"]} />
            <div className="">
              {
                aboutUs.find((about) => about.title === "Mission")
                  ?.description as string
              }
            </div>
          </div>
          <div>
            <Title title="Vision" icon={["fas", "crosshairs"]} />
            <div>
              {
                aboutUs.find((about) => about.title === "Vision")
                  ?.description as string
              }
            </div>
          </div>
        </div>

        <div>
          <Title title="Why choose us" icon={["fas", "question"]} />
          <div className="flex flex-wrap gap-2.5 mt-2.5">
            {Array.isArray(
              aboutUs.find((about) => about.title === "Why Choose Powerdeed?")
                ?.description,
            ) &&
              (
                aboutUs.find((about) => about.title === "Why Choose Powerdeed?")
                  ?.description as string[]
              ).map((item: string, index: number) => (
                <div
                  key={index}
                  className="py-1 px-2 w-fit bg-[linear-gradient(to_right,var(--primary-blue)_60%,var(--secondary-blue)_80%)] rounded-[10px] text-(--primary-yellow) text-style__small-text"
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Unique features */}
      <div className="">
        <Title title="Unique Features & benefits" icon={["fas", "gem"]} />
        <div className="unique-features relative w-full h-125">
          {Array.isArray(
            aboutUs.find((about) => about.title === "Unique Features")
              ?.description,
          ) &&
            (
              aboutUs.find((about) => about.title === "Unique Features")
                ?.description as string[]
            ).map((feature, index) => {
              const total =
                aboutUs.find((about) => about.title === "Unique Features")
                  ?.description.length || 0;
              const angle = ((index + 0.5) / total) * 2 * Math.PI - Math.PI / 2;
              const radius = smallScreen ? 110 : 180;

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
                    smallScreen={smallScreen}
                  />
                </div>
              );
            })}
        </div>
      </div>

      {/* Core Values */}
      <div className="about-core-values grid gap-5">
        <Title title="Core Values" icon={["fas", "arrows-to-circle"]} />

        <CoreValues />
      </div>

      {/* Other options */}
      <div className="flex justify-center items-center gap-10 lg:gap-25">
        <Link
          href="/docs/profile/POWERDEED ENGINEERING SERVICES.pdf"
          download="POWERDEED ENGINEERING SERVICES.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-37.5 lg:w-50"
        >
          <Button
            color="blue"
            content="Download our Profile"
            rounded="smooth"
          />
        </Link>

        <Link href={"../about/structure"} className="w-37.5 lg:w-50">
          <Button
            color="blue"
            content={`Checkout our Company structure →`}
            rounded="smooth"
          />
        </Link>
      </div>
    </div>
  );
}
