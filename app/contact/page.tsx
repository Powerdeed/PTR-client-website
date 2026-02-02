"use client";

// modules
// import { useState } from "react";
import Link from "next/link";
// import axios from "axios";

// components
import SidePanel from "@/components/layout/SidePanel";

import { contacts } from "@/data/dummyData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export default function Contact() {
  // const API = import.meta.env.VITE_API_BASE_URL;
  // const [contacts, setContacts] = useState({});

  // Fetch contacts from the API
  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     try {
  //       const res = await axios.get(`${API}/contacts`);
  //       const data = res.data.data;
  //       setContacts(data);
  //     } catch (error) {
  //       console.error("Failed to fetch contacts", error);
  //     }
  //   };

  //   fetchContacts();
  // }, []);

  return (
    <div className="w-full lg:inline-flex p-2.5 text-[0.8em] lg:h-[calc(100vh-350px)] lg:min-h-200">
      <div className="flex-1 relative lg:mr-2.5 bg-(--terciary-grey)/30 p-2.5 lg:p-0 mb-2.5">
        <div className="w-full h-100 flex flex-col justify-center items-center relative mb-2.5">
          <div className="absolute z-1 w-full h-full text-(--primary-yellow) flex text-center items-center justify-center">
            <div>
              <h2 className="contact-title-main">Let&apos;s Talk!</h2>
              <h3 className="contact-subtitle">
                Whether you have a question, feedback, or just want to say
                hello, we&apos;d love to hear from you!
              </h3>
            </div>
          </div>
          <div className="relative bg-black w-full h-100 overflow-hidden">
            <Image
              src="/images/agreement.png"
              alt=""
              fill
              className="w-full h-full object-cover opacity-40 z-0"
            />
          </div>
        </div>
        <div className="w-full lg:px-2.5 grid gap-2.5">
          <div className="lg:flex">
            <div className="w-full h-50 mb-2.5 lg:w-1/2">
              <h2 className="text-(--primary-blue) font-semibold">
                Our Contact
              </h2>
              <div className="grid grid-cols-[1fr_2fr] m-2.5">
                <ul className="w-full h-fit grid gap-5">
                  {!contacts ? (
                    <li>Loading contacts...</li>
                  ) : (
                    Object.keys(contacts.general).map((contact) => (
                      <li
                        key={contact}
                        className="w-full h-[2em] flex list-none items-center font-semibold text-(--primary-blue)"
                      >
                        {contact}:
                      </li>
                    ))
                  )}
                </ul>
                <ul className="w-full h-fit grid gap-5">
                  {!contacts ? (
                    <li>Loading contacts...</li>
                  ) : (
                    Object.values(contacts.general).map((contact) => (
                      <li
                        key={contact[0]}
                        className="w-full h-[2em] flex list-none items-center"
                      >
                        {contact}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
            <div className="w-full h-50 mb-2.5 lg:w-1/2">
              <h2 className="section-title text-(--primary-blue) font-semibold">
                We&apos;re right Here
              </h2>
              <div className="w-full h-[calc(100%-3em)] relative border border-(--primary-blue) rounded-[10px]">
                map
              </div>
            </div>
          </div>

          <div className="w-full mb-2.5">
            <h2 className="section-title text-(--primary-blue) font-semibold">
              Connect With Us
            </h2>
            <div className="w-full items-start flex-col lg:items-center justify-center">
              <ul>
                {Object.entries(contacts.socials).map(([social, value]) => (
                  <li key={social} className="list-none">
                    <Link
                      href={value.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center content-center no-underline text-(--primary-blue) my-1.25 gap-1.25"
                    >
                      <FontAwesomeIcon
                        className="text-(--primary-blue)"
                        icon={["fab", social.toLocaleLowerCase() as IconName]}
                      />
                      {social}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SidePanel options={["reach us"]} />
    </div>
  );
}
