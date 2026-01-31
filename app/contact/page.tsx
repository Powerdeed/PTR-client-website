// modules
// import { useState } from "react";
import Link from "next/link";
// import axios from "axios";

// components
import SidePanel from "@/components/layout/SidePanel";

import { contacts } from "@/data/dummyData";
import Image from "next/image";

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
                    Object.keys(contacts).map((contact) => (
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
                    Object.values(contacts).map((contact) => (
                      <li
                        key={contact}
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
                <li className="list-none">
                  <Link
                    href="https://www.linkedin.com/in/alfred-kuria-58199a106/?originalSubdomain=ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center content-center no-underline text-(--primary-blue) my-1.25 gap-1.25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      aria-label="LinkedIn"
                      className="w-5 h-5 linkedin-icon"
                    >
                      <path
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        fill="#0a66c2"
                      />
                    </svg>
                    LinkedIn
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    href="https://wa.me/254722316721?text=Hi%2C%20I%20found%20you%20on%20the%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center content-center no-underline text-(--primary-blue) my-1.25 gap-1.25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      aria-label="WhatsApp"
                      className="w-5 h-5 whatsapp-icon"
                    >
                      <path
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                        fill="#25d366"
                      />
                    </svg>
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SidePanel options={["reach us"]} />
    </div>
  );
}
