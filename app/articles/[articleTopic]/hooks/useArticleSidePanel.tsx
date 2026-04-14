"use client";

import { globalContext } from "@/global-utils/context/GlobalContext";
import { useContext, useEffect } from "react";
import { articleTopicContext } from "../context/ArticleTopicContext";

export default function useArticleSidePanel() {
  const globalState = useContext(globalContext);
  const topicState = useContext(articleTopicContext);

  if (!topicState || !globalState)
    throw new Error("Context must be within a provider");

  const { setCompressed } = topicState;

  const { smallScreen } = globalState;

  useEffect(() => {
    const runCompressOnSmallScreen = () =>
      smallScreen ? setCompressed(true) : null;
    runCompressOnSmallScreen();
  }, [smallScreen, setCompressed]);
  return {};
}
