"use client";

import NavLogo from "./NavLogo";
import NavToggleButton from "./NavToggleButton";
import NavMenu from "./NavMenu";

export default function Nav() {
  return (
    <nav className="relative flex items-center w-full h-12.5 px-2.5 z-4 bg-[linear-gradient(to_right,var(--secondary-blue)_30%,var(--primary-blue)_70%)] text-(--primary-yellow)">
      <NavLogo />

      <NavToggleButton />

      <NavMenu />
    </nav>
  );
}
