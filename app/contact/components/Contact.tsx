"use client";

// components
import SidePanel from "@/components/layout/SidePanel";
import ContactHero from "./ContactHero";
import SubTitle from "./SubTitle";
import RenderContactList from "./RenderContactList";
import Map from "./Map";
import Socials from "./Socials";

export default function Contact() {
  return (
    <div className="w-full md:inline-flex p-2.5 text-style__small-text">
      <div className="flex-1 md:min-w-150 relative md:mr-2.5 bg-(--terciary-grey)/30 p-2.5 md:p-0 mb-2.5">
        <ContactHero />

        <div className="w-full md:px-2.5 grid gap-2.5">
          <div className="md:flex">
            <div className="w-full mb-2.5 md:w-1/2">
              <SubTitle subtitle="Our Contact" />
              <RenderContactList />
            </div>

            <div className="w-full mb-2.5 md:w-1/2 flex flex-col gap-2.5">
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
