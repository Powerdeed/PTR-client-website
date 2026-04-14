"use client";

import { ReactNode } from "react";

export default function Button({
  color,
  content,
  children,
  rounded = "smooth",
  type = "button",
  clickHandler,
}: {
  color?: string;
  content?: string;
  children?: ReactNode;
  rounded?: "full" | "smooth";
  type?: "submit" | "button" | "reset";
  clickHandler?: () => void;
}) {
  const borderRadius = rounded === "full" ? "100px" : "10px";

  return (
    <div
      style={{
        height: "fit-content",
        borderRadius,
        background: `var(--secondary-${color})`,
      }}
    >
      <button
        type={type}
        style={{
          borderRadius,
          background: `linear-gradient(
          45deg,
          var(--primary-${color}) 50%,
          var(--secondary-${color}) 90%
        )`,
          transition: "background 0.3s ease-in-out",
        }}
        className={`w-full p-2.5 border-0 text-style__button cursor-pointer ${children ? "flex items-center justify-center gap-1" : ""}
      `}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `var(--primary-${color})`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = `linear-gradient(
          45deg,
          var(--primary-${color}) 50%,
          var(--secondary-${color}) 90%
        )`;
        }}
        onClick={clickHandler}
      >
        {content}
        {children}
      </button>
    </div>
  );
}
