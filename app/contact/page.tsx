"use client";

import Contact from "./components/Contact";
import ContactProvider from "./context/ContactProvider";

export default function Page() {
  return (
    <ContactProvider>
      <Contact />
    </ContactProvider>
  );
}
