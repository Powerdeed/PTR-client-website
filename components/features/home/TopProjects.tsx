"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image.js";
import SubTitle from "./SubTitle";

import { allProjectsArray, projectImages } from "@/data/dummyData";

export default function TopProjects() {
  const [active, setActive] = useState("Electrical");
  const [slideIn, setSlideIn] = useState(false);
  const projectCards = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const cardsSection = projectCards.current;
    function animate() {
      if (cardsSection) {
        cardsSection.style.transition =
          "transform 800ms cubic-bezier(0.4, 0, 0.2, 1), gap 800ms cubic-bezier(0.4, 0, 0.2, 1)";
        cardsSection.style.gap = "20px";
      }
    }

    function imageSliderAnimation() {
      if (slideIn && cardsSection) {
        cardsSection.style.transition = "none";
        cardsSection.style.gap = "150px";
        void cardsSection.offsetWidth;
        animate();
        setSlideIn(false);
      }
    }

    imageSliderAnimation();

    function updateSectionRectTop() {
      if (!cardsSection) return;
      const rect = cardsSection.getBoundingClientRect();
      const halfway = window.innerHeight / 2;
      if (rect.top <= halfway && rect.bottom >= 0) {
        animate();
      }
    }

    window.addEventListener("scroll", updateSectionRectTop);

    return () => {
      window.removeEventListener("scroll", updateSectionRectTop);
    };
  }, [slideIn, setSlideIn]);

  const uniqueCategories = [
    ...new Set(allProjectsArray.map((project) => project.category)),
  ];

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 700);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full px-0.5 lg:p-0">
      <SubTitle subTitle="Our Top Projects" />

      {isMobile ? (
        <TopProjectsPhoneView
          uniqueCategories={uniqueCategories}
          active={active}
          setActive={setActive}
          setSlideIn={setSlideIn}
        />
      ) : (
        <ul className="list-none flex gap-10 justify-center w-full h-6 m-[20px_0] bg-[linear-gradient(to_right,var(--white)_10%,var(--primary-blue)_20%,var(--primary-blue)_80%,var(--white)_90%)] items-center">
          {uniqueCategories.map((category) => (
            <li
              key={category}
              className={`${
                active === category ? "underline" : ""
              } cursor-pointer text-(--primary-yellow) hover:underline`}
              onClick={() => {
                setActive(category);
                setSlideIn(true);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      <div
        ref={projectCards}
        className="mx-auto w-full lg:w-fit grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-37.5 justify-center"
      >
        {allProjectsArray
          .filter((project) => project.category === active)
          .slice(0, 4)
          .map((project, idx) => (
            <div
              key={project.id || project.projects[0].name || idx}
              className="group bg-(--primary-blue) relative w-full lg:w-100 h-62.5 rounded-[10px] cursor-pointer"
            >
              <Image
                src={`${
                  projectImages[
                    project.projects[0].images[0] as keyof typeof projectImages
                  ]
                }`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100%, 400px"
                className="w-full h-full object-cover rounded-[10px] group-hover:opacity-50 group-hover:duration-500"
              />
              <p className="group-hover:opacity-100 group-hover:-translate-y-17.5 group-hover:duration-500 text-white bottom-0 absolute opacity-0 p-[0_10px]">
                {project.projects[0].name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

function TopProjectsPhoneView({
  uniqueCategories,
  active,
  setActive,
  setSlideIn,
}: {
  uniqueCategories: string[];
  active: string;
  setActive: (category: string) => void;
  setSlideIn: (slideIn: boolean) => void;
}) {
  return (
    <div className="mb-5">
      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex grid-cols-[repeat(5,1fr)] justify-center gap-2.5">
          {uniqueCategories.map((category) => (
            <div
              className={`w-7.5 h-7.5 rounded-[10px] cursor-pointer ${
                active === category
                  ? "bg-(--primary-blue)"
                  : "bg-(--secondary-blue)"
              }`}
              key={category}
              onClick={() => {
                setActive(category);
                setSlideIn(true);
              }}
            ></div>
          ))}
        </div>
        <div className="w-full flex grid-cols-[repeat(5,1fr)] justify-center gap-7.5">
          {uniqueCategories.map((category) => (
            <div
              className={`w-2.5 h-1.25 bg-(--primary-blue) opacity-0 ${
                active === category ? "opacity-100" : ""
              }`}
              key={category}
            ></div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <div className="grid justify-center rounded-[10px] w-57.5 h-8 bg-(--primary-blue) text-(--primary-yellow) items-center">
            {active}
          </div>
        </div>
      </div>
    </div>
  );
}
