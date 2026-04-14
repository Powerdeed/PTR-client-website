"use client";

import Link from "next/link";

import useNav from "../../hooks/useNav";
import { NavItem } from "../../types/navigation.types";

export default function NavSubMenu({ item }: { item: NavItem }) {
  const { state, actions } = useNav();

  return (
    <ul className="border border-(--primary-blue) md:absolute md:top-5 w-full md:w-40 list-none z-2 ">
      {item.subLinks?.map((sub) => {
        return (
          <li
            key={sub.href}
            className={`bg-(--primary-blue) pl-2 leading-6 hover:underline
              ${state.smallScreen && state.isAboutMenuOpen ? "block opacity-100 opacity 0.3s ease-in-out" : state.smallScreen && !state.isMenuOpen ? "hidden" : !state.smallScreen && state.isMenuOpen ? "block" : "hidden"}`}
          >
            <Link
              href={sub.href}
              className={`${actions.isActive(sub.href)} hover:underline`}
              onClick={() => state.smallScreen && actions.toggleMenu()}
            >
              {sub.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
