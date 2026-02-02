"use client";

import Link from "next/link";

import CoreValues from "../../layout/CoreValues";
import FeatureContainer from "./about_overview/FeatureContainer";
import Title from "./about_overview/Title";

import { aboutUs, uniqueFeatures } from "@/data/dummyData";

import { DraftifyBlocksReader } from "draftify-react";

import { DraftifyBlock } from "draftify";

export default function Overview() {
  return (
    <div className="grid gap-5 text-[12px]">
      {/* About information */}
      <div className="grid gap-5">
        <div>
          <Title title="Overview" icon={["fas", "question"]} />
          <DraftifyBlocksReader
            blocksData={
              aboutUs.find((about) => about.title === "Company Overview")
                ?.description as DraftifyBlock[]
            }
          />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5">
          <div>
            <Title title="Mission" icon={["fas", "thumbs-up"]} />
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
      <div className="unique-features grid gap-5">
        <Title title="Unique Features & benefits" icon={["fas", "gem"]} />

        <div className="inline-flex justify-center gap-7.5 lg:gap-15">
          <FeatureContainer {...uniqueFeatures[0]} />
          <FeatureContainer {...uniqueFeatures[1]} />
        </div>

        <div className="inline-flex justify-center gap-10 lg:gap-55">
          <FeatureContainer {...uniqueFeatures[2]} />
          <FeatureContainer {...uniqueFeatures[3]} />
        </div>

        <div className="inline-flex justify-center">
          <FeatureContainer {...uniqueFeatures[4]} />
        </div>
      </div>

      {/* Core Values */}
      <div className="about-core-values grid gap-5">
        <Title title="Core Values" icon={["fas", "arrows-to-circle"]} />

        <CoreValues />
      </div>

      {/* Other options */}
      <div className="flex justify-center items-center gap-10 lg:gap-25 text-[12px]">
        <Link
          href="/docs/profile/POWERDEED ENGINEERING SERVICES.pdf"
          download="POWERDEED ENGINEERING SERVICES.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center grid items-center w-37.5 h-12 p-2 lg:w-50 bg-(--primary-blue) hover:bg-(--secondary-blue) text-(--primary-yellow) rounded-[10px] cursor-pointer font-bold transition hover:duration-300 ease-in-out no-underline"
        >
          Download our Profile
        </Link>

        <Link
          href={"../about/structure"}
          className="text-center grid items-center w-37.5 h-12 p-2 lg:w-50 bg-(--primary-blue) hover:bg-(--secondary-blue) text-(--primary-yellow) rounded-[10px] cursor-pointer font-bold transition hover:duration-300 ease-in-out no-underline"
        >
          Checkout our Company structure &rarr;
        </Link>
      </div>
    </div>
  );
}
