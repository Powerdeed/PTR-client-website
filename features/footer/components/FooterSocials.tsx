"use client";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

import useFooter from "../hooks/useFooter";

export default function FooterSocials() {
  const { state } = useFooter();

  return (
    <ul className="w-full md:w-[25%] list-none grid justify-center gap-2.5 float-none text-center md:float-left md:text-left mb-2.5 md:mb-0">
      <li className="socials font-bold text-[14px]">Our Socials:</li>

      {state.contacts.Socials.map((social, idx) => (
        <li
          key={idx}
          className="text-style__link--inverse grid md:block justify-center"
        >
          <Link
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5"
          >
            <FontAwesomeIcon
              className="text-(--primary-yellow) text-[14px]"
              icon={["fab", social.name.toLocaleLowerCase() as IconName]}
            />

            {social.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
