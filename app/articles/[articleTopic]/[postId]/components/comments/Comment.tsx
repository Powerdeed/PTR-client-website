"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CommentType } from "../../../types/article.types";

import { useArticlePost } from "../../hooks/useArticlePost";

export default function Comment({ comment }: { comment: CommentType }) {
  const { state, articleActions } = useArticlePost();

  //   useEffect(() => {
  //     const likedComments = JSON.parse(
  //       localStorage.getItem("likedComments") || "[]",
  //     );

  //     const setCommentLiked = () => state.setLiked(true);

  //     if (likedComments.includes(comment.id)) {
  //       setCommentLiked();
  //     }
  //   }, [comment.id, state]);

  return (
    <div className="rounded-[10px] grid gap-2.5 bg-white rounded-2.5 w-full p-2">
      <div>{comment.comment}</div>

      <div className="horizontal-layout">
        {comment.likes}

        <FontAwesomeIcon
          className={`icon-size cursor-pointer ${
            state.bounce ? "like-bounce" : ""
          } ${state.liked ? "text-(--secondary-blue)" : "text--foreground"}`}
          icon={["far", "thumbs-up"]}
          onClick={() => {
            articleActions.triggerBounce();
            articleActions.handleArticleLike(comment);
          }}
        />
      </div>
    </div>
  );
}
