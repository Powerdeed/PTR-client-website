"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { articleTopicContext } from "../../context/ArticleTopicContext";

export default function ArticleCards() {
  const topicState = useContext(articleTopicContext);

  if (!topicState) throw new Error("Topic context must be within a provider");

  const { articleTopic, articleTopicObj, currentTopic, articles } = topicState;

  if (!articleTopic || !articles || !articleTopicObj) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5 px-2.5 md:px-5">
      {articles &&
        articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${currentTopic}/${article.id}`}
            className="group relative h-70 cursor-pointer rounded-[10px] border border-(--terciary-grey) overflow-hidden"
          >
            {/* ---------- IMAGE ---------- */}
            {article.image && (
              <div className="absolute inset-0">
                <Image
                  src={article.image}
                  alt={article.title ?? "Blog cover image"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}

            {/* ---------- OVERLAY ---------- */}
            <div
              className="
                  absolute bottom-0.5 left-0.5
                  w-[calc(100%-4px)]
                  h-1/2
                  p-2.5
                  bg-(--primary-blue)/80
                  rounded-[10px]
                  transition-all duration-300
                  group-hover:h-[calc(100%-4px)]
                  flex flex-col gap-2.5
                  overflow-hidden
                "
            >
              <div className="text-(--primary-yellow) text-style__body">
                {article.title}
              </div>

              <div className="flex-1 text-white text-style__body">
                {article.description}
              </div>

              <div className="text-(--primary-yellow) text-style__small-text italic">
                by: {article.author}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
