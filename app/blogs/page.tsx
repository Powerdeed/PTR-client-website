"use client";

import BlogReadingSection from "@/components/features/blogs/BlogReadingSection";
import BlogTopicSection from "@/components/features/blogs/BlogTopicSection";
import BrowseArea from "@/components/features/blogs/BrowseArea";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [compressed, setCompressed] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("Electrical");
  const [blogSelected, setBlogSelected] = useState(false);

  useEffect(() => {
    function checkScreenSize() {
      setCompressed(window.innerWidth <= 768);
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="md:flex">
      <BrowseArea
        compressed={compressed}
        setCompressed={setCompressed}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        setBlogSelected={setBlogSelected}
      />

      <div className="min-h-[calc(100vh-350px)] flex-1 mb-2.5 md:mb-5">
        {blogSelected ? (
          <BlogReadingSection />
        ) : (
          <BlogTopicSection
            selectedTopic={selectedTopic}
            setBlogSelected={setBlogSelected}
          />
        )}
      </div>
    </div>
  );
}
