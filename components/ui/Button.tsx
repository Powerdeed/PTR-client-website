"use client";

import { ReactNode } from "react";

export default function Button({
  color,
  content,
  rounded,
}: {
  color: string;
  content: ReactNode;
  rounded: number;
}) {
  return (
    <div
      style={{
        borderRadius: `${rounded}px`,
        background: `var(--secondary-${color})`,
      }}
    >
      <button
        style={{
          borderRadius: `${rounded}px`,
          background: `linear-gradient(
          45deg,
          var(--primary-${color}) 50%,
          var(--secondary-${color}) 90%
        )`,
          transition: "background 0.3s ease-in-out",
        }}
        className="
        w-full
        h-12.5
        p-2.5
        border-0
        text-4
        text-style__button
        cursor-pointer
      "
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
      >
        {content}
      </button>
    </div>
  );
}
