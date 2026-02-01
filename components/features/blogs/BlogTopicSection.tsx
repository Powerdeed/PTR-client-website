"use client";

import Image from "next/image";

import { groupedBlogs, topics } from "@/services/blogs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function BlogTopicSection({
  selectedTopic,
  setBlogSelected,
}: {
  selectedTopic: string;
  setBlogSelected: Dispatch<SetStateAction<boolean>>;
}) {
  const [currentTopic, setCurrentTopic] = useState<string>("");

  useEffect(() => {
    if (selectedTopic === "") return;

    const setTopic = () => setCurrentTopic(selectedTopic);

    setTopic();
  }, [selectedTopic]);

  const blogTopic = topics.find((topic) => topic.topic === currentTopic);

  return (
    blogTopic && (
      <div className="flex flex-col gap-2.5 md:gap-5">
        <div className="relative w-full h-100">
          <Image
            src={blogTopic.image}
            alt=""
            fill
            objectFit="cover"
            className="w-full h-full"
          />

          <div className="absolute top-1/2 left-2.5 md:left-10 text-white text-[30px] md:text-[40px] font-bold">
            Topic:
            <span className="text-(--primary-yellow)">{blogTopic.topic}</span>
            <div className="text-[16px] lg:text-[20px] font-normal pr-2.5">
              {blogTopic.description}
            </div>
          </div>
        </div>

        <div className="blog-cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5 px-2.5 md:px-5">
          {groupedBlogs[currentTopic].map((blog) => {
            const imageBlock = blog.blogDoc.blocks.find(
              (block) => block.type === "image",
            );

            return (
              <div
                key={blog.id}
                className="card group border border-(--terciary-grey) p-1 relative rounded-[10px] h-70 cursor-pointer"
                onClick={() => {
                  setBlogSelected(true);
                }}
              >
                {imageBlock && (
                  <div className="relative w-full h-full">
                    <Image
                      src={imageBlock.data.src}
                      alt=""
                      fill
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                )}

                <div
                  className={`blog-desc-overlay absolute bottom-0.5 left-0.5 w-[calc(100%-4px)] h-1/2 p-2.5 group-hover:h-[calc(100%-4px)] bg-(--primary-blue)/80 rounded-[10px] transition-all duration-300 flex flex-col gap-2.5 overflow-hidden`}
                >
                  <div className="text-(--primary-yellow) text-[14px] font-semibold">
                    {blog.blogDoc.metadata?.docTitle}
                  </div>
                  <div className="flex-1 text-white text-[14px]">
                    {blog.blogDoc.metadata?.description}
                  </div>
                  <div className="text-(--primary-yellow) text-[14px] font-semibold italic">
                    by: {blog.blogDoc.metadata?.author}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
