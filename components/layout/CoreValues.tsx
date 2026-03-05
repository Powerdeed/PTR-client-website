"use client";

import { aboutUs } from "@/data/dummyData";
import SubTitle from "../features/home/SubTitle";

import { usePathname } from "next/navigation";

export default function CoreValues() {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-[3%]">
        {pathname !== "/about/overview" && (
          <SubTitle subTitle="Our Core Values" />
        )}

        {Array.isArray(
          aboutUs.find((about) => about.title === "Core Values")?.description,
        ) &&
          (
            aboutUs.find((about) => about.title === "Core Values")
              ?.description as string[][]
          ).map((value, index) => {
            const colors = [
              "#0a1f44",
              "#0043b9",
              "#ffd600",
              "#ff3636",
              "#838383",
              "#61ffd7",
            ];

            const colorIndex = index % colors.length;

            return (
              <div key={index} className="h-25 w-37.5 mb-2.5">
                <div
                  className="group items-center h-12.5 rounded-[10px] overflow-hidden transition-[height_300ms] cursor-pointer pt-3 hover:h-20 hover:transition-[height_300ms]"
                  style={{ boxShadow: `1px 1px 15px ${colors[colorIndex]}` }}
                >
                  <div
                    className="text-style__body text-center"
                    style={{ color: `${colors[colorIndex]}` }}
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
    </div>
  );
}
