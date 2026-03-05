"use client";

// modules
import Link from "next/link";
import { usePathname } from "next/navigation";
// import axios from "axios";

import { contacts } from "@/data/dummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { NAVIGATION } from "@/utils/constants/UI-data-constants";

export default function Footer() {
  // const API = import.meta.env.VITE_API_BASE_URL;
  // const [contacts, setContacts] = useState({});

  const flattenedNavigation = NAVIGATION.flatMap(
    ({ href, label, subLinks }) => {
      const parent = href ? [{ href, label }] : [];

      const children =
        subLinks?.map(({ href, label }) => ({ href, label })) ?? [];

      return [...parent, ...children];
    },
  );

  const pathname = usePathname();

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
    <footer className="relative w-full h-max md:h-75 p-[0_10%_80px_10%] bg-(--primary-blue) text-style__footer text-(--primary-yellow) grid gap-5 pt-2.5">
      <div>
        <div className="Contacts font-bold text-[14px] text-center md:text-left">
          Our Contacts
        </div>

        {!contacts ? (
          <ul className="w-full md:w-[25%] list-none grid gap-2.5 text-center md:float-left md:text-left mb-2.5 md:mb-0">
            <li>Loading contacts...</li>
          </ul>
        ) : (
          <ul className="w-full md:w-[25%] list-none grid gap-2.5 text-center md:float-left md:text-left mb-2.5 md:mb-0">
            <li>{Object.values(contacts.Location).join(", ")}</li>
            <li>
              {contacts.ContactInformation.Phone.map((contact) => contact).join(
                ", ",
              )}
            </li>
            <li>
              {contacts.ContactInformation.Email.map((email) => email).join(
                ", ",
              )}
            </li>
            <li className="flex flex-col gap-2.5">
              {Object.entries(contacts["working-hours"]).map(
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

        <ul className="w-full md:w-[25%] list-none grid justify-center gap-2.5 float-none text-center md:float-left md:text-left mb-2.5 md:mb-0">
          {flattenedNavigation.map((path, index) => (
            <li key={index}>
              <Link
                className={`${pathname === `/${path}` ? "underline" : ""}`}
                href={path.href}
              >
                {path.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="w-full md:w-[25%] list-none grid justify-center gap-2.5 float-none text-center md:float-left md:text-left mb-2.5 md:mb-0">
          <li className="socials font-bold text-[14px]">Our Socials:</li>

          {contacts.Socials.map((social, idx) => (
            <li
              key={idx}
              className="text-style__link--inverse grid md:block justify-center"
            >
              <Link
                href={social[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <FontAwesomeIcon
                  className="text-(--primary-yellow) text-[14px]"
                  icon={["fab", social[0].toLocaleLowerCase() as IconName]}
                />

                {social[0]}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="w-full md:w-[25%] list-none grid justify-center gap-2.5 float-none text-center md:float-left md:text-left mb-2.5 md:mb-0">
          <li>
            <a
              href="/docs/profile/POWERDEED ENGINEERING SERVICES.pdf"
              download="POWERDEED ENGINEERING SERVICES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              📄 Company Profile (PDF)
            </a>
          </li>
          <li>
            <Link href="../404">🔐 Privacy Policy</Link>
          </li>
          <li>
            <Link href="../404">Terms of Use</Link>
          </li>
          <li>
            <Link href="../404">Cookie Policy</Link>
          </li>
          <li>
            <Link href="../404">
              Subscribe to Our Newsletter “We never spam.”
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 h-12.5 w-full text-center">
        <p>
          Experience the power of innovation with Powerdeed. Let&apos;s shape a
          brighter tomorrow, today.
        </p>
        <p>
          &copy; {new Date().getFullYear()} Powerdeed Engineering Services. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
