"use client";

import CreateComment from "./CreateComment";
import Comment from "./Comment";

import { useArticlePost } from "../../hooks/useArticlePost";

export default function Comments() {
  const { state, articleActions } = useArticlePost();

  return (
    <div className="w-full text-style__small-text vertical-layout__inner">
      <strong>Comments (Anonymous)</strong>

      <div className="grid gap-5">
        <CreateComment />

        {state.comments.slice(0, state.visibleCount).map((c) => (
          <Comment key={c.docId} comment={c} />
        ))}

        {state.comments && state.visibleCount < state.comments.length && (
          <button
            className="text-(--primary-blue) text-left cursor-pointer w-fit"
            onClick={articleActions.addCommentsVisibilityCount}
          >
            view more
          </button>
        )}
      </div>
    </div>
  );
}
