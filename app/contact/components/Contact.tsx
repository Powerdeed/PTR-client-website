"use client";

// components
import SidePanel from "@/components/layout/SidePanel";
import ContactHero from "./ContactHero";
import RenderContactList from "./RenderContactList";
import Map from "./Map";
import Socials from "./Socials";

export default function Contact() {
  return (
    <div className="w-full min-h-[calc(100vh-350px)] md:inline-flex md:p-2.5 text-style__small-text">
      <div className="flex-1 md:min-w-150 relative md:mr-2.5 bg-(--terciary-grey)/30 p-2.5 md:p-0 mb-2.5">
        <ContactHero />

        <div className="w-full md:px-2.5 grid gap-2.5">
          <div className="flex flex-col md:flex-row gap-2.5">
            <div className="flex-1">
              <RenderContactList />
            </div>

            <div className="flex-1 vertical-layout__inner">
              <Map />
              <Socials />
            </div>
          </div>
        </div>
      </div>

      <SidePanel options={["reach us"]} />
    </div>
  );
}
