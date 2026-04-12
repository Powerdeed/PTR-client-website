"use client";

import {
  NAV_DISPLAY_BUSINESS_NAME_1,
  NAV_DISPLAY_BUSINESS_NAME_2,
} from "@/global-utils/constants/business-name";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/home" className="company-name">
      <div className="no-underline leading-5">
        <div className="text-style__logo">{NAV_DISPLAY_BUSINESS_NAME_1}</div>
        <div className="text-style__small-text">
          {NAV_DISPLAY_BUSINESS_NAME_2}
        </div>
      </div>
    </Link>
  );
}
