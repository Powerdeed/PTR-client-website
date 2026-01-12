"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollIndicator() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

      if (scrollPercent <= 5) {
        setHeight(0);
      } else if (scrollPercent > 5 && scrollPercent <= 30) {
        setHeight(0.25);
      } else if (scrollPercent > 30 && scrollPercent <= 60) {
        setHeight(0.5);
      } else if (scrollPercent > 60 && scrollPercent < 95) {
        setHeight(0.75);
      } else if (scrollPercent >= 95) {
        setHeight(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-2 cursor-pointer text-[25px]">
      <FontAwesomeIcon
        icon={[
          "fas",
          `${
            height === 0
              ? "battery-empty"
              : height === 0.25
              ? "battery-quarter"
              : height === 0.5
              ? "battery-half"
              : height === 0.75
              ? "battery-three-quarters"
              : "battery-full"
          }`,
        ]}
        style={{
          color: `${
            height === 0
              ? "#ff0000"
              : height === 0.25
              ? "#0043b9"
              : height === 0.5
              ? "#0043b9"
              : height === 0.75
              ? "#0043b9"
              : "#ffd600"
          }`,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
