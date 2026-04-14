"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useNav from "../hooks/useNav";

export default function NavToggleButton() {
  const { state, actions } = useNav();

  return (
    <div>
      <div className={`${state.isMenuOpen ? "hidden" : "md:hidden"}`}>
        <FontAwesomeIcon
          className={`cursor-pointer absolute top-4 right-2.5 w-4 h-4`}
          icon={["fas", `${!state.isMenuOpen ? "bars" : "xmark"}`]}
          onClick={() => actions.toggleMenu()}
        />
      </div>

      {/* Overlay */}
      {state.smallScreen && state.isMenuOpen && (
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-(--primary-blue)/50"
          onClick={() => actions.toggleMenu()}
        ></div>
      )}
    </div>
  );
}
