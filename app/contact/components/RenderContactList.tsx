"use client";

import { ReactNode } from "react";
import useContact from "../hooks/useContact";
import { Loader } from "@/app/loading";

export default function RenderContactList() {
  const { state } = useContact();

  if (!state.contacts) {
    return (
      <ul className="w-full h-full flex justify-center items-center">
        <Loader />
      </ul>
    );
  }

  const {
    Location,
    ContactInformation,
    "working-hours": workingHours,
  } = state.contacts;

  return (
    <div className="vertical-layout__inner p-2.5">
      <div className="text-style__heading text-(--primary-blue)">
        Our Contact
      </div>

      <ul className="w-full h-fit grid gap-7.5">
        <ContactEntry label="location">
          {Object.values(Location).join(", ")}
        </ContactEntry>
        <ContactEntry label="phone">
          {ContactInformation.Phone.map((p, i) => (
            <div key={i}>{p}</div>
          ))}
        </ContactEntry>
        <ContactEntry label="email">
          {ContactInformation.Email.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </ContactEntry>
        <ContactEntry label="working-hours">
          {Object.entries(workingHours).map(([days, hours]) => (
            <div key={days}>
              {days}: {hours ? `${hours.from}-${hours.to}` : "closed"}
            </div>
          ))}
        </ContactEntry>
      </ul>
    </div>
  );
}

function ContactEntry({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <li>
      <div className="text-style__body">{label}:</div>
      <div className="ml-5 flex flex-col gap-2.5">{children}</div>
    </li>
  );
}
