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
    <div>
      {/* About information */}
      <div>
        <DraftifyBlocksReader
          blocksData={aboutUs.overview.description as DraftifyBlock[]}
        />
      </div>

      {/* <AboutInfo {...aboutUs.overview} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5">
        <AboutInfo {...aboutUs.mission} height={"3.5em"} />
        <AboutInfo {...aboutUs.vision} height={"3.5em"} />
      </div>
      <AboutInfo {...aboutUs.whyChoose} /> */}

      {/* Unique features */}
      <div className="unique-features grid gap-5">
        <Title title={uniqueFeatures.title} icon={["fas", "gem"]} />

        <div className="inline-flex justify-center gap-7.5 lg:gap-15">
          <FeatureContainer {...uniqueFeatures.description.benefit1} />
          <FeatureContainer {...uniqueFeatures.description.benefit2} />
        </div>

        <div className="inline-flex justify-center gap-10 lg:gap-55">
          <FeatureContainer {...uniqueFeatures.description.benefit3} />
          <FeatureContainer {...uniqueFeatures.description.benefit4} />
        </div>

        <div className="inline-flex justify-center">
          <FeatureContainer {...uniqueFeatures.description.benefit5} />
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
