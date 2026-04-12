"use client";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import useHome from "../hooks/useHome";

import { QUICKNAVS } from "../constants/quick-navs";

export default function QuickNavs() {
  const { state, actions } = useHome();

  return (
    <div className="fixed top-25 z-10">
      <p className="w-fit mb-2.5 bg-[linear-gradient(45deg,var(--primary-blue)_30%,var(--secondary-blue)_70%)] rounded-tr-2xl rounded-br-2xl p-[5px_10px] text-(--primary-yellow) text-style__body">
        I want:
      </p>

      {Object.entries(QUICKNAVS).map(([key, value]) => {
        const isActive =
          state.activeNav === value.iconDescription ||
          state.hoveredNav === value.iconDescription;

        return (
          <div
            key={key}
            className="h-7.5 flex items-center mb-5 cursor-pointer bg-[linear-gradient(45deg,var(--primary-blue)_30%,var(--secondary-blue)_70%)] rounded-tr-2xl rounded-br-2xl overflow-hidden"
            style={{
              width: isActive ? "120px" : "calc(1em + 20px)",
              transition: "width 500ms ease",
            }}
            onMouseEnter={() => state.setHoveredNav(value.iconDescription)}
            onMouseLeave={() => state.setHoveredNav(null)}
            onClick={() => actions.handleActivate(value.iconDescription)}
          >
            <div className="w-[22.4px] h-[22.4px] ml-2">
              <FontAwesomeIcon
                icon={value.icon as [IconPrefix, IconName]}
                className="text-(--primary-yellow) rounded-2xl object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>

            <Link
              href={"/not-found"}
              className="w-20 text-(--primary-yellow) ml-2 text-style__small-text hover:underline"
              style={{
                opacity: isActive ? 1 : 0,
                visibility: isActive ? "visible" : "hidden",
                transition: "opacity 150ms ease 350ms",
              }}
            >
              {value.iconDescription}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
