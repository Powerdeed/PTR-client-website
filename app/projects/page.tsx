"us client";

// modules
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

import { projects, blogs } from "@/data/dummyData";

export default function Projects() {
  const blogsContainerRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [topBlogs, setTopBlogs] = useState({});

  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function getRandomTopBlogs() {
    const allBlogs = Object.values(blogs).flat();
    const shuffled = [...allBlogs];
    shuffleArray(shuffled);
    return shuffled.slice(0, 10).reduce((acc, blog) => {
      acc[blog.id] = blog;
      return acc;
    }, {});
  }

  useEffect(() => {
    setTopBlogs(getRandomTopBlogs());
  }, [blogs, setTopBlogs]);

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

  const scrollProjects = (direction) => {
    const container = blogsContainerRef.current;
    if (container) {
      container.scrollBy({
        top: direction === "down" ? 216 : -216,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="proj-view-area">
      <div className="projects-section">
        {Object.entries(projects).map(([key, projCategory]) => (
          <ProjectCategory
            key={key}
            projCategoryName={key}
            projects={projCategory}
          />
        ))}
      </div>
      <div className="blog-area">
        <h3 className="blog-container-title">
          Hot Topics
          <FontAwesomeIcon
            icon={faRotate}
            className="blog-container-refresh-icon"
            onClick={handleRefreshBlogs}
          />
        </h3>
        {!isAtTop && (
          <FontAwesomeIcon
            className="blogs-nav-icons"
            icon={faAngleUp}
            onClick={() => scrollProjects("up")}
          />
        )}
        <div className="blogs-container" ref={blogsContainerRef}>
          {Object.entries(topBlogs).map(([blogId, blog]) => (
            <BlogGlimpse key={blogId} blog={blog} />
          ))}
        </div>
        <FontAwesomeIcon
          className="blogs-nav-icons"
          icon={faAngleDown}
          onClick={() => scrollProjects("down")}
        />
      </div>
    </div>
  );
}
