"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

import useContact from "../hooks/useContact";

export default function Socials() {
  const { state } = useContact();

  if (!state.contacts) return;
  return (
    <div className="vertical-layout__inner">
      <div className="text-style__heading text-(--primary-blue)">
        {`Connect With Us`}
      </div>
      <div className="w-full items-start flex-col md:items-center justify-center">
        <ul>
          {state.contacts.Socials.map((social, idx) => (
            <li key={idx} className="list-none underline">
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center content-center text-(--primary-blue) my-1.25 gap-1.25"
              >
                <FontAwesomeIcon
                  className="text-(--primary-blue)"
                  icon={["fab", social.name.toLocaleLowerCase() as IconName]}
                />
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
