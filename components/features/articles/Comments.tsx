"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Comment } from "@/lib/types/types";

import { useArticlePost } from "@/hooks/useArticlePost";

export default function Comments({ articleId }: { articleId: string }) {
  const [visibleCount, setVisibleCount] = useState<number>(5);

  const { comments, handleAddComment, handleAddCommentLike, commentAddStatus } =
    useArticlePost(articleId);

  return (
    <div className="text-[12px] w-full flex flex-col gap-2.5">
      <strong>Comments (Anonymous)</strong>
      <div className="grid gap-5">
        <EditComment
          handleAddComment={handleAddComment}
          commentAddStatus={commentAddStatus}
        />

        {!comments ? (
          <div>Loading comments</div>
        ) : (
          comments
            .slice(0, visibleCount)
            .map((c: Comment) => (
              <Comment
                key={c.docId}
                id={c.docId}
                comment={c}
                likes={c.likes}
                handleAddCommentLike={handleAddCommentLike}
              />
            ))
        )}

        {comments && visibleCount < comments.length && (
          <button
            className="text-(--primary-blue) text-left cursor-pointer w-fit"
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            view more
          </button>
        )}
      </div>
    </div>
  );
}

function EditComment({
  handleAddComment,
  commentAddStatus,
}: {
  handleAddComment: (comment: string) => void;
  commentAddStatus: boolean;
}) {
  const [comment, setComment] = useState("");

  const submit = () => {
    if (!comment.trim()) return;
    handleAddComment(comment);
    setComment("");
  };

  return (
    <div
      className="rounded-[10px] w-full gap-2.5 items-center"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          submit();
        }
      }}
      tabIndex={0}
    >
      <textarea
        placeholder="Add comment here"
        className="rounded-[10px] bg-white flex-1 w-full min-h-20 focus:outline-0 focus:ring-0 p-2"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        className="text-white cursor-pointer rounded-[10px] p-1 h-7 bg-(--secondary-blue) hover:bg-(--primary-blue)"
        onClick={submit}
      >
        {commentAddStatus ? "Adding Comment..." : "Add comment"}{" "}
        <FontAwesomeIcon icon={["far", "paper-plane"]} />
      </button>
    </div>
  );
}

function Comment({
  id,
  comment,
  likes,
  handleAddCommentLike,
}: {
  id: string;
  comment: Comment;
  likes: number;
  handleAddCommentLike: (docId: string, likes: number) => void;
}) {
  const [liked, setLiked] = useState(false);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const likedComments = JSON.parse(
      localStorage.getItem("likedComments") || "[]",
    );

    const setCommentLiked = () => setLiked(true);

    if (likedComments.includes(id)) {
      setCommentLiked();
    }
  }, [id]);

  const triggerBounce = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 200);
  };

  const handleLikeClick = () => {
    const newLikes = liked ? likes - 1 : likes + 1;

    setLiked(!liked);
    handleAddCommentLike(id, newLikes);

    const likedComments = JSON.parse(
      localStorage.getItem("likedComments") || "[]",
    );

    if (!liked) {
      const updated = [...likedComments, id];
      localStorage.setItem("likedComments", JSON.stringify(updated));
    } else {
      const updated = likedComments.filter((c: string) => c !== id);
      localStorage.setItem("likedComments", JSON.stringify(updated));
    }
  };

  return (
    <div className="rounded-[10px] grid gap-2.5 bg-white rounded-2.5 w-full p-2">
      <div>{comment.comment}</div>
      <div className="flex gap-2.5 items-center">
        {comment.likes}
        <FontAwesomeIcon
          className={`icon-size cursor-pointer ${
            bounce ? "like-bounce" : ""
          } ${liked ? "text-(--secondary-blue)" : "text--foreground"}`}
          icon={["far", "thumbs-up"]}
          onClick={() => {
            triggerBounce();
            handleLikeClick();
          }}
        />
      </div>
    </div>
  );
}
