"use client";

import { DraftifyBlocksReader } from "draftify-react";

import BrowseArea from "@/components/features/articles/BrowseArea";

import { useArticle } from "@/hooks/useArticle";

export default function ArticlePostClient({
  articleTopic,
  post,
}: {
  articleTopic: string;
  post: string;
}) {
  const {
    smallScreen,
    setSmallScreen,
    selectedTopic,
    setSelectedTopic,
    blogContent,
  } = useArticle(post, articleTopic);

  return (
    <div className="md:flex">
      <BrowseArea
        compressed={smallScreen}
        setCompressed={setSmallScreen}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      <div className="min-h-[calc(100vh-350px)] flex-1">
        <div className="pt-15 flex flex-col items-center h-full p-2.5 lg:p-20 bg-background">
          <div className="blog-reading bg-white w-full h-full lg:max-w-260 min-h-125 p-2.5 md:px-20 md:py-25 flex flex-col gap-2.5 text-[13px]">
            {blogContent && (
              <DraftifyBlocksReader
                blocksData={blogContent.blogDoc.blocks}
                fontFamily="Open Sans"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
