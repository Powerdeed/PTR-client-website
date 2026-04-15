"use client";

import { PRIMARY_COLORS } from "@/global-utils/constants/primary-colors";
import { isStringMatrix } from "../../app/about/[aboutPage]/utils/typeCheckers";
import { AboutUs } from "../../app/about/[aboutPage]/types/about.types";

export default function CoreValues({ about }: { about: AboutUs }) {
  if (!isStringMatrix(about.description)) return;

  return (
    <div className="flex flex-wrap justify-center gap-[3%]">
      {about.description.map((value, index) => {
        const colorIndex = index % PRIMARY_COLORS.length;

        return (
          <div key={index} className="h-25 w-37.5 mb-2.5">
            <div
              className="group items-center h-12.5 rounded-[10px] overflow-hidden transition-[height_300ms] cursor-pointer pt-3 hover:h-20 hover:transition-[height_300ms]"
              style={{
                boxShadow: `1px 1px 15px ${PRIMARY_COLORS[colorIndex][0]}`,
              }}
            >
              <div
                className="text-style__body text-center"
                style={{ color: `${PRIMARY_COLORS[colorIndex][0]}` }}
              >
                {value[0]}
              </div>
              <p className="hidden group-hover:block mt-1.25 p-1.25 pb-2.5 text-style__small-text text-center text-(--primary-grey)">
                {value[1]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return <div></div>;
}
