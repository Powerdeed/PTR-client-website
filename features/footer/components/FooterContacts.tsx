"use client";

import useFooter from "../hooks/useFooter";

export default function FooterContacts() {
  const { state } = useFooter();

  return (
    <div>
      <div className="Contacts font-bold text-[14px] text-center md:text-left">
        Our Contacts
      </div>
      {!state.contacts ? (
        <ul className="w-full md:w-[25%] list-none grid gap-2.5 text-center md:float-left md:text-left mb-2.5 md:mb-0">
          <li>Loading contacts...</li>
        </ul>
      ) : (
        <ul className="w-full md:w-[25%] list-none grid gap-2.5 text-center md:float-left md:text-left mb-2.5 md:mb-0">
          <li>{Object.values(state.contacts.Location).join(", ")}</li>
          <li>
            {state.contacts.ContactInformation.Phone.map(
              (contact) => contact,
            ).join(", ")}
          </li>
          <li>
            {state.contacts.ContactInformation.Email.map((email) => email).join(
              ", ",
            )}
          </li>
          <li className="flex flex-col gap-2.5">
            {Object.entries(state.contacts["working-hours"]).map(
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
