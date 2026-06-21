"use client";

import { useEffect, useRef } from "react";
import {
  setOptions,
  importLibrary,
  type LibraryMap,
} from "@googlemaps/js-api-loader";

type AdvancedMarker = InstanceType<
  LibraryMap["marker"]["AdvancedMarkerElement"]
>;

const WAKIAWA_HOUSE = {
  position: { lat: -0.419, lng: 36.953 },
  title: "Wakiawa House",
} as const;

export default function useContactMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY;
    if (!API_KEY) {
      console.error(
        "Missing NEXT_PUBLIC_MAPS_API_KEY. The Google Maps API key must be exposed to the browser.",
      );
      return;
    }

    let cancelled = false;
    let marker: AdvancedMarker | null = null;

    async function init(): Promise<void> {
      setOptions({ key: API_KEY });

      const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        importLibrary("maps"),
        importLibrary("marker"),
      ]);

      if (cancelled || !mapContainerRef.current) return;

      const map = new Map(mapContainerRef.current, {
        center: WAKIAWA_HOUSE.position,
        zoom: 17,
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID ?? "DEMO_MAP_ID",
      });

      marker = new AdvancedMarkerElement({
        map,
        position: WAKIAWA_HOUSE.position,
        title: WAKIAWA_HOUSE.title,
      });
    }

    void init().catch((error: unknown) => {
      if (!cancelled) {
        console.error("Failed to initialize the contact map:", error);
      }
    });

    return () => {
      cancelled = true;
      if (marker) marker.map = null;
    };
  }, []);

  return mapContainerRef;
}
