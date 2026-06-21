"use client";

import useContactMap from "../hooks/useContactMap";

export default function Map() {
  const mapContainerRef = useContactMap();

  return (
    <div className="vertical-layout__inner">
      <div className="text-style__heading text-(--primary-blue)">
        {`We're right Here`}
      </div>
      <div
        ref={mapContainerRef}
        className="w-full min-h-80 relative border border-(--secondary-grey) rounded-[10px] p-2.5"
      />
    </div>
  );
}
