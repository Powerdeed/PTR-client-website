"use client";

import { ReactNode, useState } from "react";

import { aboutCertificatesContext } from "./AboutCertificationsContext";

export default function AboutCertificationsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <aboutCertificatesContext.Provider
      value={{ selectedImage, setSelectedImage }}
    >
      {children}
    </aboutCertificatesContext.Provider>
  );
}
