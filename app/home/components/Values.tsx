"use client";

import CoreValues from "@/app/about/[aboutPage]/components/about_overview/CoreValues";

import SubTitle from "./SubTitle";

import useHome from "../hooks/useHome";

export default function Values() {
  const {} = useHome();

  return (
    <div>
      <SubTitle subTitle="Our Core Values" />
      <CoreValues />
    </div>
  );
}
