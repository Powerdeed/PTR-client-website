"use client";

import SidePanel from "@/components/layout/SidePanel";
import Overview from "../components/Overview";
import Strucutre from "../components/Strucutre";
import Certificates from "../components/Certificates";
import Pagination from "../../../../components/layout/Pagination";

export default function AboutView({ aboutPage }: { aboutPage: string }) {
  return (
    <div className="w-full h-full md:flex md:flex-2 p-2.5 gap-2.5">
      <div className="flex-1 flex flex-col md:mr-2.5">
        <div className="flex-1 md:min-w-150">
          {aboutPage === "overview" && <Overview />}
          {aboutPage === "structure" && <Strucutre />}
          {aboutPage === "certificates" && <Certificates />}
        </div>

        <Pagination />
      </div>
      <SidePanel options={["reach us", "projects"]} />
    </div>
  );
}
