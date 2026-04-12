"use client";

import { use } from "react";

import ArticleTopicSection from "@/app/articles/[articleTopic]/components/ArticleTopicSection";
import BrowseArea from "@/app/articles/[articleTopic]/components/BrowseArea";

import { useArticle } from "@/app/articles/[articleTopic]/hooks/useArticle";

export default function Blogs({
  params,
}: {
  params: Promise<{ articleTopic: string }>;
}) {
  const { articleTopic } = use(params);

  const {
    searchedArticle,
    setSearchedArticle,
    browseArea,
    compressed,
    setCompressed,
    smallScreen,
    selectedTopic,
    setSelectedTopic,
    articlesMatchingSearch,
    highlightMatch,
  } = useArticle("", articleTopic);

  return (
    <div className="md:flex">
      <BrowseArea
        searchedArticle={searchedArticle}
        setSearchedArticle={setSearchedArticle}
        browseArea={browseArea}
        compressed={compressed}
        setCompressed={setCompressed}
        smallScreen={smallScreen}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        articlesMatchingSearch={articlesMatchingSearch}
        highlightMatch={highlightMatch}
      />

      <div className="min-h-[calc(100vh-350px)] flex-1">
        <ArticleTopicSection
          selectedTopic={selectedTopic}
          articleTopicFromLink={articleTopic}
        />
      </div>
    </div>
  );
}
