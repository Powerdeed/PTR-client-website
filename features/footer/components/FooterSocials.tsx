"use client";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

import useContact from "@/app/contact/hooks/useContact";
import { LoaderYellow } from "@/app/loading";

export default function FooterSocials() {
  const { contactState } = useContact();

  return (
    <ul className="w-full md:w-[25%] list-none grid justify-center gap-2.5 float-none text-center md:float-left md:text-left mb-2.5 md:mb-0">
      <li className="socials font-bold text-[14px]">Our Socials:</li>

      {!contactState.contacts ? (
        <ul className="w-full md:w-[25%] list-none grid gap-2.5 text-center md:float-left md:text-left mb-2.5 md:mb-0">
          <LoaderYellow />
        </ul>
      ) : (
        contactState.contacts.Socials.map((social, idx) => (
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
        ))
      )}
    </ul>
  );
}
