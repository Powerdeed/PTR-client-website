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

      <div className="px-5 py-20 lg:p-25 min-h-[calc(100vh-350px)] flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-2.5 items-center w-full lg:max-w-260 min-h-150 h-full px-5 py-10 md:px-20 md:py-25 bg-white text-[13px]">
          {blogContent && (
            <DraftifyBlocksReader
              blocksData={blogContent.blogDoc.blocks}
              fontFamily="Open Sans"
            />
          )}
        </div>

        {/* <Comment /> */}
      </div>
    </div>
  );
}
