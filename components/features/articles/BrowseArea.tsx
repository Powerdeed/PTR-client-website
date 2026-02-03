"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { groupedBlogs } from "@/services/blogs";

import { useArticle } from "@/hooks/useArticle";
import Button from "@/components/ui/Button";

export default function BrowseArea({
  compressed,
  setCompressed,
  selectedTopic,
  setSelectedTopic,
}: {
  compressed: boolean;
  setCompressed: Dispatch<SetStateAction<boolean>>;
  selectedTopic: string;
  setSelectedTopic: Dispatch<SetStateAction<string>>;
}) {
  const { browseArea, fixedProperty, smallScreen } = useArticle(
    "",
    selectedTopic,
  );

  return (
    <div
      ref={browseArea}
      className={`
        ${fixedProperty ? "not-has-focus:fixed relative top-0 left-0" : "relative"}
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
          w-[calc(100vw-40px)] md:w-fit
          md:-right-15
          top-2.5
          z-2
          ${compressed ? "translate-x-2.5" : "translate-x-0"}`}
        onClick={() => setCompressed((prev) => !prev)}
      >
        <Button
          color={"blue"}
          content={
            smallScreen ? (
              "Browse Topics"
            ) : (
              <FontAwesomeIcon
                icon={["fas", `angle-${compressed ? "right" : "left"}`]}
              />
            )
          }
          rounded={10}
        />
      </div>

      {
        <div className="flex flex-col gap-2.5 mt-2.5 md:mt-0">
          <input
            type="text"
            placeholder="Search by name or tag"
            className={`${!compressed ? "border" : null} rounded-[10px] text-center min-h-7.5 text-[11px]`}
          />

          <ul
            className={`grid gap-2.5 text-[12px] ${smallScreen && "max-h-100 overflow-y-scroll"}`}
          >
            {Object.entries(groupedBlogs).map(([topic, blogArray]) => (
              <li
                key={topic}
                className={`rounded-[10px] ${!compressed ? "p-1.25 border" : null} overflow-hidden transition-[max-height,border-color] duration-300 ease-in-out
                ${selectedTopic === topic ? "border-(--secondary-blue) max-h-40" : "max-h-10"}
              `}
              >
                <Link
                  href={`/articles/${topic}`}
                  className="flex items-center font-semibold text-(--secondary-blue) cursor-pointer"
                  onClick={() => {
                    if (selectedTopic !== topic) setSelectedTopic(topic);
                  }}
                >
                  <div className="flex-1">
                    {topic.charAt(0).toUpperCase() + topic.slice(1)}
                  </div>
                  <FontAwesomeIcon
                    icon={[
                      "fas",
                      `angle-${selectedTopic === topic ? "up" : "down"}`,
                    ]}
                  />
                </Link>

                <ol className="p-1 leading-normal grid gap-2.5">
                  {blogArray.map((b) => (
                    <li key={b.id} className="cursor-pointer">
                      <Link href={`/articles/${topic}/${b.id}`}>{b.title}</Link>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}
