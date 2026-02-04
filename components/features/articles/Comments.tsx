"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ArticleMeta, Comment } from "@/lib/types/types";
import { useEffect, useState } from "react";

import { getSpecificArticleComments } from "@/services/comments";
import { getArticleMetaById } from "@/services/articles";

export default function Comments({
  articleId,
  //   handleAddComment,
  //   handleAddCommentLike,
  commentAddStatus,
  addCommentCheck,
}: {
  articleId: string;
  //   handleAddComment: (args: {
  //     blogId: string;
  //     comment: string;
  //     comments: number;
  //   }) => Promise<void>;
  //   handleAddCommentLike: (args: { docId: string; likes: number }) => void;
  commentAddStatus: boolean;
  addCommentCheck: boolean;
}) {
  //   const [blog, setBlog] = useState<ArticleMeta>();
  const [comments, setComments] = useState<Comment[]>();
  const [visibleCount, setVisibleCount] = useState<number>(5);

  useEffect(() => {
    async function fetchComments() {
      const comments = getSpecificArticleComments(articleId);
      setComments(comments as Comment[]);

      //   const articleMeta = getArticleMetaById(articleId);
      //   setBlog(articleMeta as ArticleMeta);
    }

    fetchComments();
  }, [articleId, addCommentCheck]);

  return (
    <div className="text-[12px] w-full flex flex-col gap-2.5">
      <strong>Comments (Anonymous)</strong>
      <div className="grid gap-5">
        <EditComment
          //   blogId={articleId}
          //   handleAddComment={handleAddComment}
          commentAddStatus={commentAddStatus}
          //   comments={blog?.comments || 0}
        />

        {!comments ? (
          <div>Loading comments</div>
        ) : (
          comments.slice(0, visibleCount).map((c: Comment) => (
            <Comment
              key={c.docId}
              id={c.docId}
              comment={c}
              //   likes={c.likes}
              // handleAddCommentLike={handleAddCommentLike}
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
  //   blogId,
  //   comments,
  //   handleAddComment,
  commentAddStatus,
}: {
  //   blogId: string;
  //   handleAddComment: (args: {
  //     blogId: string;
  //     comment: string;
  //     comments: number;
  //   }) => Promise<void>;
  //   comments: number;
  commentAddStatus: boolean;
}) {
  const [comment, setComment] = useState("");

  const submit = () => {
    if (!comment.trim()) return;
    // handleAddComment({ blogId, comment, comments: comments + 1 });
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
      tabIndex={0} // allows div to capture keyboard events
    >
      <textarea
        placeholder="Add comment here"
        className="border rounded-[10px] bg-white flex-1 w-full min-h-20 focus:outline-(--secondary-blue) focus:ring-0 p-1"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        className="text-(--primary-blue) cursor-pointer rounded-[10px] p-1 h-7 bg-(--secondary-blue) hover:bg-(--primary-blue) hover:text-(--secondary-blue)"
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
  //   likes,
  //   handleAddCommentLike,
}: {
  id: string;
  comment: Comment;
  //   likes: number;
  //   handleAddCommentLike: (args: { docId: string; likes: number }) => void;
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
    // const newLikes = liked ? likes - 1 : likes + 1;

    setLiked(!liked);
    // handleAddCommentLike({
    //   docId: id,
    //   likes: newLikes,
    // });

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
    <div className="rounded-[10px] grid gap-2.5 bg-white rounded-2.5 dark:bg-black w-full p-2">
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
