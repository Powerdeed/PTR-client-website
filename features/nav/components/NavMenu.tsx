"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useNav from "../hooks/useNav";

import Link from "next/link";
import NavSubMenu from "./NavItem/NavSubMenu";
import { NAVIGATION } from "@/features/nav/constants/navigation";

export default function NavMenu() {
  const { state, actions } = useNav();

  return (
    <ul
      className={`fixed md:absolute md:flex items-center gap-5 list-none pt-12.5 md:pt-0 top-0 md:top-3 right-0 md:right-[8%] pl-1 ${state.smallScreen && state.isMenuOpen ? "w-40" : state.smallScreen && !state.isMenuOpen ? "w-0" : ""} md:w-fit h-screen md:h-fit bg-(--primary-blue) md:bg-transparent transition-[width_0.3s_ease-in-out] z-3`}
    >
      {state.smallScreen && state.isMenuOpen && (
        <FontAwesomeIcon
          className="cursor-pointer absolute top-4 right-2.5 w-4 h-4"
          icon={["fas", "xmark"]}
          onClick={() => {
            actions.toggleMenu();
          }}
        />
      )}

      {NAVIGATION.map((item) => {
        const hasSub = !!item.subLinks;

        return (
          <li
            key={item.label}
            className={`relative cursor-pointer mb-3.75 md:mb-0 ${!hasSub && "hover:underline"} ${state.smallScreen && state.isMenuOpen ? "block" : state.smallScreen && !state.isMenuOpen ? "hidden" : ""} text-style__nav`}
            onClick={() => {
              if (state.smallScreen) {
                if (hasSub) {
                  actions.toggleSubMenu();
                } else {
                  actions.toggleMenu();
                }
              } else if (!state.smallScreen && hasSub) {
                actions.toggleMenu();
              }
            }}
          >
            {/* Main link */}
            {item.href ? (
              <Link href={item.href} className={actions.isActive(item.href)}>
                {item.label}
              </Link>
            ) : (
              <span className="flex items-center gap-1">
                {item.label}
                {hasSub && state.smallScreen && (
                  <FontAwesomeIcon
                    icon={[
                      "fas",
                      `angle-${state.isAboutMenuOpen ? "up" : "down"}`,
                    ]}
                  />
                )}
              </span>
            )}

            {hasSub && <NavSubMenu item={item} />}
          </li>
        );
      })}
    </ul>
  );
}
