"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { flattenedNavigation } from "../utils/flattenedNavigation";

export default function FooterNavs() {
  const pathname = usePathname();

  return (
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
  );
}
