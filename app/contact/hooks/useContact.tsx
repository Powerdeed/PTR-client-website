"use client";

import useContactApi from "./useContactApi";
import useContactState from "./useContactState";
import useReachUsForm from "./useReachUsForm";

export default function useContact() {
  const state = useContactState();
  const reachusForm = useReachUsForm();
  const api = useContactApi();

  return { state, actions: { ...reachusForm }, api };
}
