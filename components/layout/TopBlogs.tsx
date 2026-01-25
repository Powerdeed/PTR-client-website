"use client";

import { blogs } from "@/data/dummyData";
import { Blogs } from "@/lib/types/types";
import { getCurrentDateFormatted } from "@/utils/dateConverter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function TopBlogs() {
  const blogsContainerRef = useRef<HTMLDivElement | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [topBlogs, setTopBlogs] = useState<Blogs>([]);

  function shuffleArray(array: Blogs) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function getRandomTopBlogs() {
    const shuffled = [...blogs];
    shuffleArray(shuffled);
    return shuffled.slice(0, 10);
  }

  useEffect(() => {
    function topBlogsFunc() {
      setTopBlogs(getRandomTopBlogs());
    }

    topBlogsFunc();
  }, []);

  useEffect(() => {
    const container = blogsContainerRef.current;
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

  const handleRefreshBlogs = () => {
    setTopBlogs(getRandomTopBlogs());
  };

  const scrollProjects = (direction: "up" | "down") => {
    const container = blogsContainerRef.current;
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
      <div className="relative mx-5 text-[1.3em] text-(--secondary-blue) font-semibold text-center">
        Hot Topics
        <FontAwesomeIcon
          icon={["fas", "rotate"]}
          className="absolute right-0 top-[25%] text-[0.8em] float-right cursor-pointer"
          onClick={handleRefreshBlogs}
        />
      </div>

      {!isAtTop && (
        <FontAwesomeIcon
          className="cursor-pointer my-2.5 p-2.5 border border-(--terciary-grey) rounded-[50%] hover:bg-(--secondary-grey) hover:text-(--primary-yellow)"
          icon={["fas", "angle-up"]}
          onClick={() => scrollProjects("up")}
        />
      )}

      <div className="h-[60vh] overflow-hidden" ref={blogsContainerRef}>
        {topBlogs.map((blog) => (
          <div key={blog.id}>
            <div className="w-75 inline-block text-left my-1.25">
              <div
                className="h-[2em] bg-[linear-gradient(to_right,var(--primary-blue)_60%,var(--secondary-blue)_90%)] pl-[1.2em] text-(--primary-yellow) italic rounded-t-[5px] rounded-r-[5px] translate-y-1.5"
                style={{ clipPath: clipPathTop }}
              >
                <h5 className="blog-glimpse-topic">topic: {blog.topic}</h5>
              </div>
              <div className="flex flex-col bg-(--terciary-grey)/25 mx-[4%] py-1.25 h-30">
                <div className="flex-1">
                  <div className="text-[1em] mb-1.25 text-(--secondary-blue) px-[4%]">
                    {blog.blogDoc.metadata?.docTitle}
                  </div>
                  <p className="line-clamp-4 mb-1.25 text-[0.9em] px-[4%] text-justify">
                    {blog.blogDoc.metadata?.description}
                  </p>
                </div>
                <Link
                  className="text-[0.9em] italic no-underline text-(--secondary-blue) px-[4%] hover:underline"
                  href={`/blogs/${blog.id}`}
                >
                  Continue reading &rarr;
                </Link>
              </div>
              <div
                className="h-[2em] bg-[linear-gradient(to_right,var(--primary-blue)_60%,var(--secondary-blue)_90%)] pl-[1.2em] text-(--primary-yellow) italic rounded-b-[5px] rounded-r-[5px] pt-[0.4em] -translate-y-1.5"
                style={{ clipPath: clipPathBottom }}
              >
                <div className="blog-glimpse-date">
                  Posted on{" "}
                  {blog.blogDoc.metadata?.createdAt &&
                    getCurrentDateFormatted(
                      new Date(blog.blogDoc.metadata.createdAt),
                    )}
                </div>
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
