"use client";

// modules
import { DraftifyBlocksReader } from "draftify-react";

// types
import { AboutUs } from "../../types/about.types";

// utils
import {
  isObjectOrDraftifyArr,
  isStringArray,
  isStringMatrix,
} from "../../utils/typeCheckers";

// components
import Title from "./Title";
import CoreValues from "../../../../../components/layout/CoreValues";
import UniqueFeatures from "./UniqueFeatures";

export default function AboutFeature({ about }: { about: AboutUs }) {
  if (isObjectOrDraftifyArr(about.description)) {
    if (typeof about.description === "string")
      return (
        <div>
          <Title title={about.title} icon={["far", "thumbs-up"]} />
          <div className="">{about.description}</div>
        </div>
      );

    return (
      <div>
        <Title title="Overview" icon={["fas", "list"]} />
        <DraftifyBlocksReader blocksData={about.description} />
      </div>
    );
  }

  if (isStringArray(about.description)) {
    if (about.title !== "Why Choose Powerdeed?") {
      return (
        <div>
          <Title title={about.title} icon={["fas", "question"]} />
          <UniqueFeatures about={about} />
        </div>
      );
    } else
      return (
        <div>
          <Title title={about.title} icon={["fas", "question"]} />
          <div className="flex flex-wrap gap-2.5 mt-2.5">
            {about.description.map((item: string, index: number) => (
              <div
                key={index}
                className="py-1 px-2 w-fit bg-[linear-gradient(to_right,var(--primary-blue)_60%,var(--secondary-blue)_80%)] rounded-[10px] text-(--primary-yellow) text-style__small-text"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      );
  }

  if (isStringMatrix(about.description))
    return (
      <div className="about-core-values grid gap-5">
        <Title title="Core Values" icon={["fas", "arrows-to-circle"]} />

        <CoreValues about={about} />
      </div>
    );

  return <div></div>;
}
