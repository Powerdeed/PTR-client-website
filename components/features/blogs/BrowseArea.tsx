"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function BrowseArea({
  compressed,
  setCompressed,
}: {
  compressed: boolean;
  setCompressed: Dispatch<SetStateAction<boolean>>;
}) {
  const browseArea = useRef<HTMLDivElement | null>(null);
  const [fixed, setFixed] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [activeTopic, setActiveTopic] = useState(false);

  useEffect(() => {
    const screenSizeSetter = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    screenSizeSetter();
    window.addEventListener("resize", screenSizeSetter);

    return () => window.removeEventListener("resize", screenSizeSetter);
  }, []);

  useEffect(() => {
    if (!smallScreen) return;

    const handleScroll = () => {
      setFixed(window.scrollY >= 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [smallScreen]);

  return (
    <div
      ref={browseArea}
      className={`
        ${fixed ? "fixed top-0 left-0" : "relative"}
        md:relative
        leading-7.5
        transition-all
        duration-300
        z-2
        bg-background
        ${
          compressed
            ? "w-0 h-0 p-0 border-0"
            : "w-full md:w-62.5 p-[60px_10px_10px_10px] md:p-2.5 border-r border-(--terciary-grey)"
        }
      `}
    >
      <div
        className={`absolute
          w-fit h-10
          py-1 px-2
          rounded-[10px]
          text-(--primary-yellow)
          bg-[linear-gradient(45deg,var(--primary-blue)_50%,var(--secondary-blue)_90%)] hover:bg-none
          bg-(--secondary-blue) hover:bg-(--primary-blue)
          transition-transform hover:transition-[background-color_0.3s_ease_in_out]
          md:-right-15
          top-2.5
          z-2
          cursor-pointer
          ${compressed ? "translate-x-2.5" : "translate-x-0"}`}
        onClick={() => setCompressed((prev) => !prev)}
      >
        <button className="w-[calc(100vw-50px)] block md:hidden">
          Browse Topics
        </button>

        <div className="hidden md:block">
          <FontAwesomeIcon
            icon={["fas", `angle-${compressed ? "right" : "left"}`]}
          />
        </div>
      </div>

      {!compressed && (
        <div className="flex flex-col gap-2.5">
          <input
            type="text"
            placeholder="Search by name or tag"
            className="border rounded-[10px] text-center min-h-7.5 text-[11px]"
          />

          <ul className="grid gap-2.5 text-[12px]">
            <li
              className={`border rounded-[10px] p-1.25 overflow-hidden transition-[max-height,border-color] duration-300 ease-in-out
                ${activeTopic ? "border-(--secondary-blue) max-h-40" : "max-h-10"}
              `}
            >
              <div
                className="flex items-center font-semibold text-(--secondary-blue) cursor-pointer"
                onClick={() => setActiveTopic((prev) => !prev)}
              >
                <div className="flex-1">Electrical</div>
                <FontAwesomeIcon
                  icon={["fas", `angle-${activeTopic ? "up" : "down"}`]}
                />
              </div>

              <ol className="pl-3 leading-normal grid gap-2.5">
                <li className="cursor-pointer">
                  Modern Wiring techniques for safer homes
                </li>

                <li className="cursor-pointer mr-2.5">
                  How backup power can save your business during blackouts
                </li>
              </ol>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
