"use client";

import { useContext } from "react";
import { articleTopicContext } from "../../context/ArticleTopicContext";
import ArticlesHeroSection from "./ArticlesHeroSection";
import ArticleCards from "./ArticleCards";

export default function TopicArticlesView() {
  const topicState = useContext(articleTopicContext);

  if (!topicState) throw new Error("Topic context must be within a provider");

  const { articleTopic, articleTopicObj, articles } = topicState;

  if (!articleTopic || !articles || !articleTopicObj) return null;

  return (
    <div className="flex flex-col gap-2.5 md:gap-5 mb-2.5 md:mb-5">
      <ArticlesHeroSection />
      <ArticleCards />
    </div>
  );
}
