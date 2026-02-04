"use client";

import { DraftifyBlocksReader } from "draftify-react";

import BrowseArea from "@/components/features/articles/BrowseArea";

import { useArticle } from "@/hooks/useArticle";
import Comments from "./Comments";

export default function ArticlePostClient({
  articleTopic,
  postId,
}: {
  articleTopic: string;
  postId: string;
}) {
  const {
    searchedArticle,
    setSearchedArticle,
    browseArea,
    compressed,
    setCompressed,
    smallScreen,
    selectedTopic,
    setSelectedTopic,
    blogContent,
    articlesMatchingSearch,
    highlightMatch,
    addCommentCheck,
    commentAddStatus,
  } = useArticle(postId, articleTopic);

  return (
    <div className="md:flex">
      <BrowseArea
        searchedArticle={searchedArticle}
        setSearchedArticle={setSearchedArticle}
        browseArea={browseArea}
        compressed={compressed}
        setCompressed={setCompressed}
        smallScreen={smallScreen}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        articlesMatchingSearch={articlesMatchingSearch}
        highlightMatch={highlightMatch}
      />

      <div className="px-5 py-20 lg:p-25 min-h-[calc(100vh-350px)] flex-1 flex flex-col items-center gap-2.5">
        <div className="flex flex-col gap-2.5 items-center w-full lg:max-w-260 min-h-150 h-full px-5 py-10 md:px-20 md:py-25 bg-white text-[13px]">
          {blogContent && (
            <DraftifyBlocksReader
              blocksData={blogContent.articleDoc.blocks}
              fontFamily="Open Sans"
            />
          )}
        </div>

        <Comments
          articleId={postId}
          addCommentCheck={addCommentCheck}
          commentAddStatus={commentAddStatus}
        />
      </div>
    </div>
  );
}

// .
