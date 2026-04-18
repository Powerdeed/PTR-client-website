"use client";

import ContactView from "./components/ContactView";
import ContactProvider from "./context/ContactProvider";

export default function Page() {
  return (
    <ContactProvider>
      <ContactView />
    </ContactProvider>
  );
}
