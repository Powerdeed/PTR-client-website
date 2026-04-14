"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useArticleTopic } from "../../hooks/useArticleTopic";

import { groupedArticles } from "../../utils/articles";

import { firstCharUpper } from "../../types/first-char-upper";

export default function AllArticles() {
  const { topicState } = useArticleTopic();

  return Object.entries(groupedArticles).map(([topic, blogArray]) => (
    <li
      key={topic}
      className={`rounded-[10px] ${!topicState.compressed && "p-1.25 border"} overflow-hidden transition-[max-height,border-color] duration-300 ease-in-out
                ${topicState.selectedTopic === topic ? "border-(--secondary-blue) max-h-40" : "max-h-10"}
              `}
    >
      <Link
        href={`/articles/${topic}`}
        className="h-7.5 flex items-center font-semibold text-(--secondary-blue) cursor-pointer"
        onClick={() => {
          if (topicState.selectedTopic !== topic)
            topicState.setSelectedTopic(topic);
        }}
      >
        <div className="flex-1 text-style__link">{firstCharUpper(topic)}</div>
        <FontAwesomeIcon
          icon={[
            "fas",
            `angle-${topicState.selectedTopic === topic ? "up" : "down"}`,
          ]}
        />
      </Link>

      <ol className="p-1 text-style__small-text grid gap-2.5">
        {blogArray.map((b) => (
          <li key={b.id} className="cursor-pointer">
            <Link href={`/articles/${topic}/${b.id}`}>{b.title}</Link>
          </li>
        ))}
      </ol>
    </li>
  ));
}
