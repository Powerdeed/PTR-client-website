"use client";

// modules
import Link from "next/link";
import { usePathname } from "next/navigation";
// import axios from "axios";

import { contacts } from "@/data/dummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const links = [
  "",
  "services",
  "about/overview",
  "about/structure",
  "about/certificates",
  "projects",
  "articles",
  "contact",
];

export default function Footer() {
  // const API = import.meta.env.VITE_API_BASE_URL;
  // const [contacts, setContacts] = useState({});

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
    <footer className="relative w-full h-max lg:h-75 p-[0_10%_80px_10%] bg-(--primary-blue) text-[12px] text-(--primary-yellow) grid gap-5 pt-2.5">
      <div>
        <ul className="w-full lg:w-[25%] list-none grid gap-2.5 text-center lg:float-left lg:text-left mb-2.5 lg:mb-0">
          <li className="Contacts font-bold text-[14px]">Our Contacts</li>

          {!contacts.general ? (
            <li>Loading contacts...</li>
          ) : (
            Object.entries(contacts.general).map(([title, value]) => (
              <li key={title}> {value}</li>
            ))
          )}
        </ul>

        <ul className="w-full lg:w-[25%] list-none grid justify-center gap-2.5 float-none text-center lg:float-left lg:text-left mb-2.5 lg:mb-0">
          {links.map((path, index) => {
            const lastSegment = path.split("/").pop();

            const label =
              path === ""
                ? "Home"
                : lastSegment
                  ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
                  : "";

            return (
              <li key={index}>
                <Link
                  className={`${pathname === `/${path}` ? "underline" : ""}`}
                  href={`/${path}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="w-full lg:w-[25%] list-none grid justify-center gap-2.5 float-none text-center lg:float-left lg:text-left mb-2.5 lg:mb-0">
          <li className="socials font-bold text-[14px]">Our Socials:</li>

          {Object.entries(contacts.socials).map(([social, value]) => (
            <li key={social} className="grid lg:block justify-center">
              <Link
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <FontAwesomeIcon
                  className="text-(--primary-yellow) text-[14px]"
                  icon={["fab", social.toLocaleLowerCase() as IconName]}
                />

                {social}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="w-full lg:w-[25%] list-none grid justify-center gap-2.5 float-none text-center lg:float-left lg:text-left mb-2.5 lg:mb-0">
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
          <li>Subscribe to Our Newsletter “We never spam.”</li>
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
