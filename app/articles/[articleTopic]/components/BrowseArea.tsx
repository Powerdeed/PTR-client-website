"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, JSX, RefObject, SetStateAction } from "react";
import Link from "next/link";

import { groupedArticles } from "@/app/articles/[articleTopic]/utils/articles";

import Button from "@/components/ui/Button";
import { ArticleMeta } from "../types/article.types";

export default function BrowseArea({
  searchedArticle,
  setSearchedArticle,
  browseArea,
  smallScreen,
  compressed,
  setCompressed,
  selectedTopic,
  setSelectedTopic,
  articlesMatchingSearch,
  highlightMatch,
}: {
  searchedArticle: string | null;
  setSearchedArticle: Dispatch<SetStateAction<string | null>>;
  browseArea: RefObject<HTMLDivElement | null>;
  smallScreen: boolean;
  compressed: boolean;
  setCompressed: Dispatch<SetStateAction<boolean>>;
  selectedTopic: string;
  setSelectedTopic: Dispatch<SetStateAction<string>>;
  articlesMatchingSearch: () => ArticleMeta[];
  highlightMatch: (text: string, query: string) => string | JSX.Element;
}) {
  return (
    <div
      ref={browseArea}
      className={`
        relative
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
        className={`${compressed ? "" : " md:-right-15"} absolute
          w-[calc(100vw-30px)] md:w-fit
          top-2.5
          z-2
          ${compressed ? "ml-2.5" : ""}`}
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
      <div
        className={`flex flex-col gap-2.5 ${!compressed && "mt-2.5"} md:mt-0`}
      >
        <input
          type="text"
          placeholder="Search by name or tag"
          value={searchedArticle ?? ""}
          onChange={(e) => setSearchedArticle(e.target.value)}
          className={`${!compressed ? "border" : null} rounded-[10px] text-center min-h-7.5 text-style__small-text`}
        />

        <ul
          className={`grid gap-2.5 ${compressed && "max-h-100 overflow-y-scroll"}`}
        >
          {searchedArticle ? (
            articlesMatchingSearch().length > 0 ? (
              articlesMatchingSearch().map((article) => (
                <li
                  key={article.id}
                  className="cursor-pointer border rounded-[10px] p-1"
                >
                  <Link href={`/articles/${article.topic}/${article.id}`}>
                    {highlightMatch(article.title, searchedArticle)}
                  </Link>
                </li>
              ))
            ) : (
              <div>No articles match &quot;{searchedArticle}&quot;</div>
            )
          ) : (
            Object.entries(groupedArticles).map(([topic, blogArray]) => (
              <li
                key={topic}
                className={`rounded-[10px] ${!compressed && "p-1.25 border"} overflow-hidden transition-[max-height,border-color] duration-300 ease-in-out
                ${selectedTopic === topic ? "border-(--secondary-blue) max-h-40" : "max-h-10"}
              `}
              >
                <Link
                  href={`/articles/${topic}`}
                  className="h-7.5 flex items-center font-semibold text-(--secondary-blue) cursor-pointer"
                  onClick={() => {
                    if (selectedTopic !== topic) setSelectedTopic(topic);
                  }}
                >
                  <div className="flex-1 text-style__link">
                    {topic.charAt(0).toUpperCase() + topic.slice(1)}
                  </div>
                  <FontAwesomeIcon
                    icon={[
                      "fas",
                      `angle-${selectedTopic === topic ? "up" : "down"}`,
                    ]}
                  />
                </Link>

                <ol className="p-1 text-style__small-text text-justify grid gap-2.5">
                  {blogArray.map((b) => (
                    <li key={b.id} className="cursor-pointer">
                      <Link href={`/articles/${topic}/${b.id}`}>{b.title}</Link>
                    </li>
                  ))}
                </ol>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
