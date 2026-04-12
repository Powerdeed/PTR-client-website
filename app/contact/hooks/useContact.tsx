"use client";

import useContactState from "./useContactState";
import useReachUsForm from "./useReachUsForm";

export default function useContact() {
  const state = useContactState();
  const reachusForm = useReachUsForm();

  return { state, actions: { ...reachusForm } };
}
