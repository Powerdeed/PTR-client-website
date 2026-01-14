"use client";

// modules
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

const quickNavs = {
  nav1: {
    icon: ["fas", "charging-station"],
    iconDescription: "an electrical installation",
  },
  nav2: {
    icon: ["fas", "solar-panel"],
    iconDescription: "a solar installation",
  },
  nav3: {
    icon: ["fas", "receipt"],
    iconDescription: "request a receipt",
  },
  nav4: {
    icon: ["far", "comments"],
    iconDescription: "a consultation",
  },
  nav5: {
    icon: ["far", "hard-drive"],
    iconDescription: "a machine installation",
  },
};

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
      <p className="w-fit mb-2.5 bg-[linear-gradient(45deg,var(--primary-blue)_30%,var(--secondary-blue)_70%)] rounded-tr-2xl rounded-br-2xl p-[5px_10px] text-(--primary-yellow)">
        I want:
      </p>

      {Object.entries(quickNavs).map(([key, value]) => {
        const isActive =
          activeNav === value.iconDescription ||
          hoveredNav === value.iconDescription;

        return (
          <div
            key={key}
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
              className="text-[11px] font-bold w-20 text-(--primary-yellow) ml-2 leading-3 hover:underline"
              style={{
                opacity: isActive ? 1 : 0,
                visibility: isActive ? "visible" : "hidden",
                transition: "opacity 150ms ease 350ms",
              }}
            >
              {value.iconDescription}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
