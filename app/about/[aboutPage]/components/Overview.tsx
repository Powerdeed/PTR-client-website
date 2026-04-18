"use client";

import Link from "next/link";

import Button from "@/components/ui/Button";

import AboutFeature from "./about_overview/AboutFeature";

import useAboutOverview from "../hooks/overview/useAboutOverview";
import { Loader } from "@/app/loading";

export default function Overview() {
  const { state } = useAboutOverview();

  return (
    <div className="h-full flex flex-col gap-5 text-style__body">
      {/* About information */}
      <div className="flex flex-col h-full gap-5">
        {state.about ? (
          state.about.map((about, index) => (
            <AboutFeature key={index} about={about} />
          ))
        ) : (
          <div className="w-full h-1/2 flex justify-center items-center">
            <Loader />
          </div>
        )}
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
