"use client";

// modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import Button from "@/components/ui/Button";

// hooks
import useGlobalStates from "@/global-utils/hooks/useGlobalStates";
import { useArticleTopic } from "../../hooks/useArticleTopic";

export default function ArticleTopicsButton() {
  const { topicState } = useArticleTopic();
  const { globalState } = useGlobalStates();
  return (
    <div
      className={`absolute w-[calc(100vw-37.5px)] md:w-fit left-[7.5px] md:left-auto top-2.5 z-3 ${topicState.compressed ? "ml-[7.5px]" : "md:-right-15"}`}
      onClick={() => topicState.setCompressed((prev) => !prev)}
    >
      <Button
        rounded="smooth"
        color={"blue"}
        content={globalState.smallScreen ? "Browse Topics" : ""}
      >
        {!globalState.smallScreen && (
          <FontAwesomeIcon
            icon={["fas", `angle-${topicState.compressed ? "right" : "left"}`]}
          />
        )}
      </Button>
    </div>
  );
}
