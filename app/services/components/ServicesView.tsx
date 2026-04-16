"use client";

// components
import SidePanel from "@/components/layout/SidePanel";
import ServiceComponent from "./ServiceComponent";

// hooks
import useServices from "../hooks/useServices";

export default function ServicesView() {
  const { state } = useServices();

  return (
    <div className="border w-full px-4 grid justify-center box-border">
      <div className="text-center text-style__section-title mt-4">
        Explore Our Services
      </div>

      <div className="w-fit md:flex gap-2.5 mt-5 justify-center text-[14.4px] mb-10">
        <div className="grid gap-10 mx-auto mb-10">
          {state.services.map(
            (service) =>
              service.status && (
                <ServiceComponent key={service._id} service={service} />
              ),
          )}
        </div>

        <SidePanel options={["reach us", "projects"]} />
      </div>
    </div>
  );
}
