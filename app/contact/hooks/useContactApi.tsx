"use client";

import { useContext, useEffect } from "react";
import { contactContext } from "../context/ContactContext";
import { execute } from "@/lib/api/execute";
import { getContacts } from "../services/contact";

export default function useContactApi() {
  const contactState = useContext(contactContext);

  if (!contactState)
    throw new Error("Contact context must be within a provider");

  const { setContacts, setFetchingContacts, setFetchingContactsError } =
    contactState;

  useEffect(() => {
    const fetchData = async () =>
      await execute(getContacts, {
        setLoading: setFetchingContacts,
        setError: setFetchingContactsError,
        onSuccess: (contacts) => {
          setContacts(contacts);
        },
      });

    fetchData();
  }, [setContacts, setFetchingContacts, setFetchingContactsError]);

  return {};
}
