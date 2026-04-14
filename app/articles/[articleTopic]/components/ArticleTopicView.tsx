"use client";

// modules
import { useEffect } from "react";

// components
import BrowseArea from "./browse-area/BrowseArea";
import TopicArticlesView from "./topic-acticles-view/TopicArticlesView";

// hooks
import { useArticleTopic } from "../hooks/useArticleTopic";

export default function ArticleTopicView({
  articleTopic,
}: {
  articleTopic: string;
}) {
  const { topicState } = useArticleTopic();

  /* ---------- set article topic ---------- */
  useEffect(() => {
    const articleSetter = () => {
      topicState.setArticleTopic(articleTopic);
      topicState.setSelectedTopic(articleTopic);
    };

    articleSetter();
  }, [articleTopic, topicState]);

  return (
    <div className="md:flex">
      <BrowseArea />

      <div className="min-h-[calc(100vh-350px)] flex-1">
        <TopicArticlesView />
      </div>
    </div>
  );
}
