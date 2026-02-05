"use client";

import { articlesMeta } from "@/data/dummyData";
import { Comment } from "@/lib/types/types";
import { getArticleMetaById } from "@/services/articles";
import {
  getSpecificArticleComments,
  getSpecificComment,
} from "@/services/comments";
import { useState } from "react";

export function useArticlePost(articleId: string) {
  const [comments, setComments] = useState<Comment[]>(
    getSpecificArticleComments(articleId),
  );
  const [commentAddStatus, setCommentAddStatus] = useState(false);

  const updateCommentNumber = (comments: number) => {
    const targetArticle = getArticleMetaById(articleId);

    const updatedArticle = { ...targetArticle, comments };

    const updatedArticles = articlesMeta.map((article) =>
      article.id === articleId ? updatedArticle : article,
    );

    console.log("previous articles:", articlesMeta);
    console.log("updated articles:", updatedArticles);
  };

  const addComment = (comment: string) => {
    const newComment: Comment = {
      docId: crypto.randomUUID(), // bonus: no collisions
      id: articleId,
      comment,
      likes: 0,
    };

    const updatedComments = [newComment, ...comments];

    console.log("previous comments:", comments);
    console.log("updated comments:", updatedComments);

    setComments(updatedComments);
  };

  const handleAddComment = (comment: string) => {
    const articleComments = getArticleMetaById(articleId);

    const newCommentNumber = articleComments ? articleComments.comments + 1 : 0;

    setCommentAddStatus(true);
    updateCommentNumber(newCommentNumber);

    addComment(comment);
    setCommentAddStatus(false);
  };

  const handleAddCommentLike = (commentId: string, likes: number) => {
    const comment = getSpecificComment(commentId);

    const updatedComment = { ...comment, likes: likes };

    console.log("previous likes:", comment);
    console.log("updated likes:", updatedComment);

    const updatedComments = comments.map((comment) =>
      comment.docId === commentId ? { ...comment, likes: likes } : comment,
    );

    setComments(updatedComments);
  };

  return { comments, handleAddComment, handleAddCommentLike, commentAddStatus };
}
