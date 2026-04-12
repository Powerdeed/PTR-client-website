"use client";

import NavView from "./components/NavView";
import NavProvider from "./context/NavProvider";

import "@/lib/icons";

export default function Nav() {
  return (
    <NavProvider>
      <NavView />
    </NavProvider>
  );
}
