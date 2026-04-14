"use client";

import Link from "next/link";
import { useArticleTopic } from "../../hooks/useArticleTopic";
import { firstCharUpper } from "../../types/first-char-upper";

export default function SearchedArticles() {
  const { topicState, topicActions } = useArticleTopic();

  const matchingArticles = topicActions.articlesMatchingSearch();

  return matchingArticles.length ? (
    matchingArticles.map((article) => (
      <li
        key={article.id}
        className="cursor-pointer border rounded-[10px] p-1 text-style__small-text"
      >
        <Link href={`/articles/${article.topic}/${article.id}`}>
          <span className="text-(--primary-green)">
            ({firstCharUpper(article.topic)}):
          </span>
          {topicActions.highlightMatch(
            article.title,
            topicState.searchedArticle,
          )}
        </Link>
      </li>
    ))
  ) : (
    <div className="text-style__small-text">
      No articles match
      <span className="text-(--secondary-blue)">
        {`"${topicState.searchedArticle}"`}
      </span>
    </div>
  );
}
