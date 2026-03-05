"use client";

// modules
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
// import axios from "axios";

// components
import SidePanel from "@/components/layout/SidePanel";

import { contacts } from "@/data/dummyData";

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

  // helper component for each labelled entry
  const ContactEntry: React.FC<{
    label: string;
    children: React.ReactNode;
  }> = ({ label, children }) => (
    <li>
      {label}:<div className="ml-5 flex flex-col gap-2.5">{children}</div>
    </li>
  );

  // render contact list or loading state
  const renderContactList = () => {
    if (!contacts) {
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
    } = contacts;

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
  };

  const SubTitle = (subtitle: string) => (
    <h2 className="section-title text-(--primary-blue) font-semibold">
      {subtitle}
    </h2>
  );

  return (
    <div className="w-full md:inline-flex p-2.5 text-style__small-text">
      <div className="flex-1 md:min-w-150 relative md:mr-2.5 bg-(--terciary-grey)/30 p-2.5 md:p-0 mb-2.5">
        <div className="w-full h-100 flex flex-col justify-center items-center relative mb-2.5">
          <div className="absolute z-1 w-full text-(--primary-yellow) flex text-center items-center justify-center">
            <div>
              <div className="contact-title-main text-style__section-title">
                {contacts.Hero.title}
              </div>

              {contacts.Hero.subtitle}
            </div>
          </div>
          <div className="relative bg-black w-full h-100 overflow-hidden">
            {contacts.Hero.image ? (
              <Image
                src={contacts.Hero.image}
                alt=""
                fill
                className="w-full h-full object-cover opacity-40 z-0"
                loading="eager"
              />
            ) : (
              <div>Loading Image</div>
            )}
          </div>
        </div>
        <div className="w-full md:px-2.5 grid gap-2.5">
          <div className="md:flex">
            <div className="w-full mb-2.5 md:w-1/2">
              {SubTitle("Our Contact")}
              {renderContactList()}
            </div>

            <div className="w-full mb-2.5 md:w-1/2 flex flex-col gap-2.5">
              {SubTitle("We're right Here")}
              <div className="w-full min-h-50 relative border border-(--secondary-grey) rounded-[10px] p-2.5">
                map
              </div>

              <div className="w-full">
                {SubTitle("Connect With Us")}
                <div className="w-full items-start flex-col md:items-center justify-center">
                  <ul>
                    {contacts.Socials.map((social, idx) => (
                      <li key={idx} className="list-none underline">
                        <Link
                          href={social[1]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center content-center text-(--primary-blue) my-1.25 gap-1.25"
                        >
                          <FontAwesomeIcon
                            className="text-(--primary-blue)"
                            icon={[
                              "fab",
                              social[0].toLocaleLowerCase() as IconName,
                            ]}
                          />
                          {social[0]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SidePanel options={["reach us"]} />
    </div>
  );
}
