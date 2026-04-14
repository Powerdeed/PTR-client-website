"use client";

import { use } from "react";

import ArticleTopicView from "./components/ArticleTopicView";
import ArticleTopicProvider from "./context/ArticleTopicProvider";

export default function Page({
  params,
}: {
  params: Promise<{ articleTopic: string }>;
}) {
  const { articleTopic } = use(params);

  return (
    <ArticleTopicProvider>
      <ArticleTopicView articleTopic={articleTopic} />
    </ArticleTopicProvider>
  );
}
