"use client";

import { ReactNode } from "react";
import useContact from "../hooks/useContact";

export default function RenderContactList() {
  const { state } = useContact();
  if (!state.contacts) {
    return (
      <ul className="w-full grid gap-5">
        <li>Loading contacts...</li>
      </ul>
    );
  }

  const {
    Location,
    ContactInformation,
    "working-hours": workingHours,
  } = state.contacts;

  return (
    <ul className="w-full h-fit grid gap-5">
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
      {label}:<div className="ml-5 flex flex-col gap-2.5">{children}</div>
    </li>
  );
}
