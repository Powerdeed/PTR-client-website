"use client";

// components
import SidePanel from "@/components/layout/SidePanel";
import ServiceComponent from "./ServiceComponent";
import ServiceLoading from "./ServiceLoading";

// hooks
import useServices from "../hooks/useServices";

export default function ServicesView() {
  const { state } = useServices();

  return (
    <div className="w-full px-4 flex flex-col items-center box-border gap-5 mb-10">
      <div className="text-center text-style__section-title mt-4">
        Explore Our Services
      </div>

      <div className="grid">
        <div className="w-full md:flex gap-2.5 justify-center text-style__body">
          <div className="flex-1 grid gap-10 mx-auto">
            {state.services.length
              ? state.services.map(
                  (service) =>
                    service.status && (
                      <ServiceComponent key={service._id} service={service} />
                    ),
                )
              : [1, 2].map((num) => <ServiceLoading key={num} />)}
          </div>

          <SidePanel options={["reach us", "projects"]} />
        </div>
      </div>
    </div>
  );
}
