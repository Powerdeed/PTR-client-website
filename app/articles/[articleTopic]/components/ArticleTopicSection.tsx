"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  getArticleTopic,
  getTopicArticles,
} from "@/app/articles/[articleTopic]/utils/articles";

import { ArticleMeta, ArticleTopic } from "../types/article.types";

import Link from "next/link";

export default function ArticleTopicSection({
  selectedTopic,
  articleTopicFromLink,
}: {
  selectedTopic: string;
  articleTopicFromLink: string;
}) {
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);
  const [articleTopic, setArticleTopic] = useState<ArticleTopic | null>(null);
  const [blogs, setBlogs] = useState<ArticleMeta[] | null>(null);

  /* ---------- sync searched topic ---------- */
  useEffect(() => {
    if (!articleTopicFromLink) return;

    const getCurrentTopic = () => setCurrentTopic(articleTopicFromLink);
    getCurrentTopic();
  }, [articleTopicFromLink]);

  /* ---------- sync selected topic ---------- */
  useEffect(() => {
    if (!selectedTopic) return;

    const getCurrentTopic = () =>
      setCurrentTopic(selectedTopic.toLocaleLowerCase());
    getCurrentTopic();
  }, [selectedTopic]);

  /* ---------- get desired topic object and blogs belonging to the topic ---------- */
  useEffect(() => {
    if (!currentTopic) return;

    const setBlogData = () => {
      setArticleTopic(getArticleTopic(currentTopic) ?? null);
      setBlogs(getTopicArticles(currentTopic) ?? null);
    };

    setBlogData();
  }, [currentTopic]);

  if (!articleTopic || !blogs) return null;

  return (
    <div className="flex flex-col gap-2.5 md:gap-5 mb-2.5 md:mb-5">
      {/* ---------- HERO SECTION ---------- */}
      <div className="relative w-full h-100 overflow-hidden">
        <Image
          src={articleTopic.image}
          alt={`${articleTopic.topic} topic cover image`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-2.5 md:left-10 -translate-y-1/2 max-w-[80%] text-white">
          <div className="text-style__big-text">
            Topic:{" "}
            <span className="text-(--primary-yellow)">
              {articleTopic.topic}
            </span>
          </div>

          <p className="mt-2 text-style__subheading opacity-90">
            {articleTopic.description}
          </p>
        </div>
      </div>

      {/* ---------- BLOG CARDS ---------- */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5 px-2.5 md:px-5">
        {blogs &&
          blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/articles/${currentTopic}/${blog.id}`}
              className="group relative h-70 cursor-pointer rounded-[10px] border border-(--terciary-grey) overflow-hidden"
            >
              {/* ---------- IMAGE ---------- */}
              {blog.image && (
                <div className="absolute inset-0">
                  <Image
                    src={blog.image}
                    alt={blog.title ?? "Blog cover image"}
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
                  {blog.title}
                </div>

                <div className="flex-1 text-white text-style__body">
                  {blog.description}
                </div>

                <div className="text-(--primary-yellow) text-style__small-text italic">
                  by: {blog.author}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
