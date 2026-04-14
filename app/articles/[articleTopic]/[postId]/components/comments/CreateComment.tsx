"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@/components/ui/Button";

import { useArticlePost } from "../../hooks/useArticlePost";
import useGlobalStates from "@/global-utils/hooks/useGlobalStates";

export default function CreateComment() {
  const { state, articleActions } = useArticlePost();
  const { globalState } = useGlobalStates();

  return (
    <div
      className={`${globalState.smallScreen ? "horizontal-layout" : "flex gap-2.5"}`}
    >
      <textarea
        placeholder="Add comment here"
        className="flex-1 w-full input-style"
        value={state.commentTxt}
        onChange={(e) => state.setCommentTxt(e.target.value)}
      />

      <Button
        rounded="smooth"
        content={state.commentAddStatus ? "Adding Comment..." : "Add comment"}
        color="blue"
        clickHandler={articleActions.handleAddComment}
      >
        <FontAwesomeIcon icon={["far", "paper-plane"]} />
      </Button>
    </div>
  );
}
