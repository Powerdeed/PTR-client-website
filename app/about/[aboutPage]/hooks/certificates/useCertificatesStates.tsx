"use client";

import { useContext } from "react";
import { aboutCertificatesContext } from "../../context/AboutCertificationsContext";

export default function useCertificatesStates() {
  const certificateStates = useContext(aboutCertificatesContext);

  if (!certificateStates)
    throw new Error("Certificates context must be within a provider");

  return { ...certificateStates };
}
