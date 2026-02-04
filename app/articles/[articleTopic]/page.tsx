"use client";

import { use } from "react";

import BlogTopicSection from "@/components/features/articles/ArticleTopicSection";
import BrowseArea from "@/components/features/articles/BrowseArea";

import { useArticle } from "@/hooks/useArticle";

export default function Blogs({
  params,
}: {
  params: Promise<{ articleTopic: string }>;
}) {
  const { articleTopic } = use(params);

  const { smallScreen, selectedTopic, setSelectedTopic } = useArticle(
    "",
    articleTopic,
  );

  return (
    <div className="md:flex">
      <BrowseArea
        smallScreen={smallScreen}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      <div className="min-h-[calc(100vh-350px)] flex-1">
        <BlogTopicSection
          selectedTopic={selectedTopic}
          blogTopicFromLink={articleTopic}
        />
      </div>
    </div>
  );
}
