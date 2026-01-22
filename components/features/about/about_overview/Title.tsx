"use client";

import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Title({
  title,
  icon,
}: {
  title: string;
  icon: string[];
}) {
  return (
    <div className="text-l font-semibold  text-[14px]">
      <h3 className="relative inline-flex w-full">
        {title}
        <div className="absolute w-5 right-0">
          <FontAwesomeIcon icon={icon as [IconPrefix, IconName]} />
        </div>
      </h3>
      <div className="bg-[linear-gradient(to_right,var(--secondary-blue)_70%,var(--primary-blue)_90%)] h-1.25"></div>
    </div>
  );
}
