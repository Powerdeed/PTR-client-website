"use client";

import { ArticleMeta } from "@/app/articles/[articleTopic]/types/article.types";
import { getRandomTopArticles } from "@/app/articles/[articleTopic]/utils/articles";
import { getCurrentDateFormatted } from "@/global-utils/date-converter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function TopArticles() {
  const articlesContainerRef = useRef<HTMLDivElement | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [topArticles, setTopArticles] = useState<ArticleMeta[]>([]);

  useEffect(() => {
    function topArticlesFunc() {
      setTopArticles(getRandomTopArticles());
    }

    topArticlesFunc();
  }, []);

  useEffect(() => {
    const container = articlesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsAtTop(container.scrollTop === 0);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRefreshArticles = () => {
    setTopArticles(getRandomTopArticles());
  };

  const scrollProjects = (direction: "up" | "down") => {
    const container = articlesContainerRef.current;
    if (container) {
      container.scrollBy({
        top: direction === "down" ? 250 : -250,
        behavior: "smooth",
      });
    }
  };

  const clipPathTop =
    "polygon(0 0, 100% 0, 100% 75%, 96% 100%, 96% 75%, 4% 75%, 4% 100%, 0 75%  )";

  const clipPathBottom =
    "polygon(4% 25%, 96% 25%, 96% 0, 100% 25%, 100% 100%, 0 100%, 0 25%, 4% 0 )";

  return (
    <div className="w-full h-fit border border-(--terciary-grey) rounded-[10px] inline-block text-center p-2.5">
      <div className="relative mx-5 text-style__subheading text-(--secondary-blue) font-semibold text-center">
        Hot Topics
        <FontAwesomeIcon
          icon={["fas", "rotate"]}
          className="absolute right-0 top-[25%] text-[0.8em] float-right cursor-pointer"
          onClick={handleRefreshArticles}
        />
      </div>

      {!isAtTop && (
        <FontAwesomeIcon
          className="cursor-pointer my-2.5 p-2.5 border border-(--terciary-grey) rounded-[50%] hover:bg-(--secondary-grey) hover:text-(--primary-yellow)"
          icon={["fas", "angle-up"]}
          onClick={() => scrollProjects("up")}
        />
      )}

      <div className="h-[60vh] overflow-hidden" ref={articlesContainerRef}>
        {topArticles.map((article) => (
          <div key={article.id}>
            <div className="w-75 inline-block text-left my-1.25">
              <div
                className="h-[2em] bg-[linear-gradient(to_right,var(--primary-blue)_60%,var(--secondary-blue)_90%)] pl-[1.2em] text-(--primary-yellow) italic rounded-t-[5px] rounded-r-[5px] translate-y-1.5"
                style={{ clipPath: clipPathTop }}
              >
                topic: {article.topic}
              </div>

              <div className="flex flex-col bg-(--terciary-grey)/25 mx-[4%] py-1.25 h-30">
                <div className="flex-1">
                  <div className="text-style__small-text mb-1.25 text-(--secondary-blue) px-[4%]">
                    {article.title}
                  </div>
                  <p className="line-clamp-4 mb-1.25 text-style__small-text px-[4%] text-justify">
                    {article.description}
                  </p>
                </div>

                <Link
                  className="text-style__small-text italic no-underline text-(--secondary-blue) px-[4%] hover:underline"
                  href={`/articles/${article.topic}/${article.id}`}
                >
                  Continue reading &rarr;
                </Link>
              </div>
              <div
                className="h-[2em] bg-[linear-gradient(to_right,var(--primary-blue)_60%,var(--secondary-blue)_90%)] pl-[1.2em] text-(--primary-yellow) italic rounded-b-[5px] rounded-r-[5px] pt-[0.4em] -translate-y-1.5"
                style={{ clipPath: clipPathBottom }}
              >
                Posted on{" "}
                {article.createdAt &&
                  getCurrentDateFormatted(new Date(article.createdAt))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <FontAwesomeIcon
        className="cursor-pointer my-2.5 p-2.5 border border-(--terciary-grey) rounded-[50%] hover:bg-(--secondary-grey) hover:text-(--primary-yellow)"
        icon={["fas", "angle-down"]}
        onClick={() => scrollProjects("down")}
      />
    </div>
  );
}
