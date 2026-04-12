"use client";

import ContactProvider from "./context/ContactProvider";

export default function Contact() {
  return (
    <ContactProvider>
      <Contact />
    </ContactProvider>
  );
}
