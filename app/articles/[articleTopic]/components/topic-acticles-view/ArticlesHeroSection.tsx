"use client";

import Image from "next/image";

import { firstCharUpper } from "../../types/first-char-upper";
import { useContext } from "react";
import { articleTopicContext } from "../../context/ArticleTopicContext";

export default function ArticlesHeroSection() {
  const topicState = useContext(articleTopicContext);

  if (!topicState) throw new Error("Topic context must be within a provider");

  const { articleTopic, articleTopicObj, articles } = topicState;

  if (!articleTopic || !articles || !articleTopicObj) return null;

  return (
    <div className="relative w-full h-100 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-(--primary-grey)/30 z-2"></div>
      <Image
        src={articleTopicObj.image}
        alt={`${articleTopicObj.topic} topic cover image`}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      <div className="absolute top-1/2 left-2.5 md:left-10 -translate-y-1/2 max-w-[80%] text-white z-3">
        <div className="text-style__big-text">
          Topic:
          <span className="text-(--primary-yellow)">
            {firstCharUpper(articleTopicObj.topic)}
          </span>
        </div>

        <p className="mt-2 text-style__subheading opacity-90">
          {articleTopicObj.description}
        </p>
      </div>
    </div>
  );
}
