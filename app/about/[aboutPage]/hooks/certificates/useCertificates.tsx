"use client";

import useCertificatesStates from "./useCertificatesStates";

export default function useCertificates() {
  const state = useCertificatesStates();

  return { state };
}
