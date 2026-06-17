"use client";

import useContact from "@/app/contact/hooks/useContact";
import { LoaderYellow } from "@/app/loading";

export default function FooterContacts() {
  const { contactState } = useContact();

  return (
    <div>
      <div className="Contacts font-bold text-[14px] text-center md:text-left">
        Our Contacts
      </div>
      {!contactState.contacts ? (
        <ul className="w-full md:w-[25%] list-none grid gap-2.5 text-center md:float-left md:text-left mb-2.5 md:mb-0">
          <LoaderYellow />
        </ul>
      ) : (
        <ul className="w-full md:w-[25%] list-none grid gap-2.5 text-center md:float-left md:text-left mb-2.5 md:mb-0">
          <li>{Object.values(contactState.contacts.Location).join(", ")}</li>
          <li>
            {contactState.contacts.ContactInformation.Phone.map(
              (contact) => contact,
            ).join(", ")}
          </li>
          <li>
            {contactState.contacts.ContactInformation.Email.map(
              (email) => email,
            ).join(", ")}
          </li>
          <li className="flex flex-col gap-2.5">
            {Object.entries(contactState.contacts["working-hours"]).map(
              ([days, hours]) => (
                <div key={days}>
                  {days +
                    ":" +
                    (hours ? hours.from + "-" + hours.to : "closed")}
                </div>
              ),
            )}
          </li>
        </ul>
      )}
    </div>
  );
}
