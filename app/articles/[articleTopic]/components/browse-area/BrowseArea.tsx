"use client";

// Hooks
import { useArticleTopic } from "../../hooks/useArticleTopic";

// components
import ArticleTopicsButton from "./ArticleTopicsButton";
import SearchedArticles from "./SearchedArticles";
import AllArticles from "./AllArticles";

export default function BrowseArea() {
  const { topicState } = useArticleTopic();

  return (
    <div
      className={`
        relative leading-7.5 transition-all duration-300 z-3 bg-background
        ${
          topicState.compressed
            ? "w-0 h-0 p-0 border-0"
            : "w-full md:w-62.5 p-[60px_10px_10px_10px] md:p-2.5 border-r border-(--terciary-grey)"
        }
      `}
    >
      <ArticleTopicsButton />

      <div
        className={`flex flex-col gap-2.5 ${!topicState.compressed && "mt-2.5"} md:mt-0`}
      >
        <input
          placeholder="Search by name or tag"
          value={topicState.searchedArticle ?? ""}
          onChange={(e) => topicState.setSearchedArticle(e.target.value)}
          className={`${!topicState.compressed ? "border" : null} rounded-[10px] text-center min-h-7.5 text-style__small-text`}
        />

        <ul
          className={`grid gap-2.5 ${topicState.compressed && "max-h-100 overflow-y-scroll"}`}
        >
          {topicState.searchedArticle ? <SearchedArticles /> : <AllArticles />}
        </ul>
      </div>
    </div>
  );
}
