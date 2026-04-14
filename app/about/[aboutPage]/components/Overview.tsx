"use client";

import Link from "next/link";

import { aboutUs } from "../services/about";

import Button from "@/components/ui/Button";
import AboutFeature from "./about_overview/AboutFeature";

export default function Overview() {
  return (
    <div className="flex flex-col gap-5 text-style__body">
      {/* About information */}
      <div className="grid gap-5">
        {aboutUs.map((about, index) => (
          <AboutFeature key={index} about={about} />
        ))}
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
