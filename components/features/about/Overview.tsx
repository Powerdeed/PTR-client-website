"use client";

import Link from "next/link";

import CoreValues from "../../layout/CoreValues";
import FeatureContainer from "./about_overview/FeatureContainer";
import Title from "./about_overview/Title";

import { aboutUs, uniqueFeatures } from "@/data/dummyData";

import { DraftifyBlocksReader } from "draftify-react";

import { DraftifyBlock } from "draftify";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

export default function Overview() {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const screenSizeSetter = () => setSmallScreen(window.innerWidth < 768);

    screenSizeSetter();
    window.addEventListener("resize", screenSizeSetter);

    return () => window.removeEventListener("resize", screenSizeSetter);
  }, []);
  return (
    <div className="grid gap-5 text-style__body">
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
            <DraftifyBlocksReader
              blocksData={
                aboutUs.find((about) => about.title === "Mission")
                  ?.description as DraftifyBlock[]
              }
            />
          </div>
          <div>
            <Title title="Vision" icon={["fas", "crosshairs"]} />
            <DraftifyBlocksReader
              blocksData={
                aboutUs.find((about) => about.title === "Vision")
                  ?.description as DraftifyBlock[]
              }
            />
          </div>
        </div>

        <div>
          <Title title="Why choose us" icon={["fas", "question"]} />
          <DraftifyBlocksReader
            blocksData={
              aboutUs.find((about) => about.title === "Why Choose Powerdeed?")
                ?.description as DraftifyBlock[]
            }
          />
        </div>
      </div>

      {/* Unique features */}
      <div className="relative w-125 h-125 mx-auto">
        {uniqueFeatures.map((feature, index) => {
          const total = uniqueFeatures.length;
          const angle = ((index + 0.5) / total) * 2 * Math.PI - Math.PI / 2;
          const radius = smallScreen ? 130 : 180;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <FeatureContainer {...feature} />
            </div>
          );
        })}
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
          <Button color="blue" content="Download our Profile" rounded={10} />
        </Link>

        <Link href={"../about/structure"} className="w-37.5 lg:w-50">
          <Button
            color="blue"
            content={`Checkout our Company structure →`}
            rounded={10}
          />
        </Link>
      </div>
    </div>
  );
}
