import { use } from "react";

import SidePanel from "@/components/layout/SidePanel";
import Overview from "@/components/features/about/Overview";
import Strucutre from "@/components/features/about/Strucutre";
import Certificates from "@/components/features/about/Certificates";
import Pagination from "@/components/layout/Pagination";

export default function About({
  params,
}: {
  params: Promise<{ aboutPage: "overview" | "structure" | "certificates" }>;
}) {
  const { aboutPage } = use(params);

  return (
    <div className="w-full h-full lg:flex lg:flex-2 p-2.5 gap-2.5">
      <div className="flex-1 flex flex-col lg:mr-2.5  text-[12px]">
        <div className="flex-1">
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
