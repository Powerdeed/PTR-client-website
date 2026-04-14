"use client";

import { createContext, Dispatch, SetStateAction } from "react";

import { ArticleContent, CommentType } from "../../types/article.types";

type ArticleTopicState = {
  articleContent: ArticleContent | null;
  setArticleContent: Dispatch<SetStateAction<ArticleContent | null>>;

  comments: CommentType[];
  setComments: Dispatch<SetStateAction<CommentType[]>>;

  commentTxt: string;
  setCommentTxt: Dispatch<SetStateAction<string>>;

  commentAddStatus: boolean;
  setCommentAddStatus: Dispatch<SetStateAction<boolean>>;

  liked: boolean;
  setLiked: Dispatch<SetStateAction<boolean>>;

  bounce: boolean;
  setBounce: Dispatch<SetStateAction<boolean>>;

  visibleCount: number;
  setVisibleCount: Dispatch<SetStateAction<number>>;
};

export const articlePostContext = createContext<ArticleTopicState | null>(null);
