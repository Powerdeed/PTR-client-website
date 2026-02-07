"use client";

// modules
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { QUICKNAVS } from "@/utils/constants/UI-data-constants";
import Link from "next/link";

export default function QuickNavs() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleActivate = (desc: string) => {
    setActiveNav(desc);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveNav(null);
    }, 3000);
  };

  return (
    <div className="fixed top-25 z-10">
      <p className="w-fit mb-2.5 bg-[linear-gradient(45deg,var(--primary-blue)_30%,var(--secondary-blue)_70%)] rounded-tr-2xl rounded-br-2xl p-[5px_10px] text-(--primary-yellow) text-style__body">
        I want:
      </p>

      {Object.entries(QUICKNAVS).map(([key, value]) => {
        const isActive =
          activeNav === value.iconDescription ||
          hoveredNav === value.iconDescription;

        return (
          <Link
            key={key}
            href={"/not-found"}
            className="h-7.5 flex items-center mb-5 cursor-pointer bg-[linear-gradient(45deg,var(--primary-blue)_30%,var(--secondary-blue)_70%)] rounded-tr-2xl rounded-br-2xl overflow-hidden"
            style={{
              width: isActive ? "120px" : "calc(1em + 20px)",
              transition: "width 500ms ease",
            }}
            onMouseEnter={() => setHoveredNav(value.iconDescription)}
            onMouseLeave={() => setHoveredNav(null)}
            onClick={() => handleActivate(value.iconDescription)}
          >
            <div className="w-[22.4px] h-[22.4px] ml-2">
              <FontAwesomeIcon
                icon={value.icon as [IconPrefix, IconName]}
                className="text-(--secondary-yellow) rounded-2xl object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>

            <h4
              className="w-20 text-(--primary-yellow) ml-2 text-style__small-text hover:underline"
              style={{
                opacity: isActive ? 1 : 0,
                visibility: isActive ? "visible" : "hidden",
                transition: "opacity 150ms ease 350ms",
              }}
            >
              {value.iconDescription}
            </h4>
          </Link>
        );
      })}
    </div>
  );
}
