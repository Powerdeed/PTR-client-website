"use client";

import { ReactNode, useState } from "react";

import { articlePostContext } from "./ArticlePostContext";

import { ArticleContent, CommentType } from "../../types/article.types";

export default function ArticlePostProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [articleContent, setArticleContent] = useState<ArticleContent | null>(
    null,
  );

  const [comments, setComments] = useState<CommentType[]>([]);

  const [commentAddStatus, setCommentAddStatus] = useState(false);

  const [commentTxt, setCommentTxt] = useState("");

  const [liked, setLiked] = useState(false);

  const [bounce, setBounce] = useState(false);

  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <articlePostContext.Provider
      value={{
        articleContent,
        setArticleContent,
        comments,
        setComments,
        commentAddStatus,
        setCommentAddStatus,
        commentTxt,
        setCommentTxt,
        liked,
        setLiked,
        bounce,
        setBounce,
        visibleCount,
        setVisibleCount,
      }}
    >
      {children}
    </articlePostContext.Provider>
  );
}
