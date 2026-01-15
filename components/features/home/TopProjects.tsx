"use client";
import { useState, useEffect } from "react";

// components
import TopProjectsPhoneView from "./components/TopProjectsPhoneView.jsx";

// styles
import "./styles/top-projects.css";

export default function TopProjects({ allProjectsArray }) {
  const [active, setActive] = useState("ELECTRICAL");
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    function animate() {
      const cardsSection = document.querySelector(".project-cards");
      if (cardsSection) {
        cardsSection.style.transition =
          "transform 800ms cubic-bezier(0.4, 0, 0.2, 1), gap 800ms cubic-bezier(0.4, 0, 0.2, 1)";
        cardsSection.style.gap = "20px";
      }
    }

    if (slideIn) {
      const cardsSection = document.querySelector(".project-cards");
      cardsSection.style.transition = "none";
      cardsSection.style.gap = "150px";
      void cardsSection.offsetWidth;
      animate();
      setSlideIn(false);
    }

    function updateSectionRectTop() {
      const cardsSection = document.querySelector(".project-cards");
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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 700);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top-projects">
      <h2 className="home-section-title">Our Top Projects</h2>
      {!isMobile && (
        <ul>
          {uniqueCategories.map((category) => (
            <li
              key={category}
              className={active === category ? "active" : ""}
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
      {isMobile && (
        <TopProjectsPhoneView
          uniqueCategories={uniqueCategories}
          active={active}
          setActive={setActive}
          setSlideIn={setSlideIn}
        />
      )}
      <div className="project-cards">
        {allProjectsArray
          .filter((project) => project.category === active)
          .slice(0, 4)
          .map((project, idx) => (
    <div key={project.id || project.name || idx} className="group bg-(--primary-blue) relative w-full lg:w-100 h-62.5 rounded-[10px] cursor-pointer">
      <img src={project.images[0]} alt="" className="w-full h-full object-cover rounded-[10px] group-hover:opacity-50 group-hover:duration-500" />
      <p className="group-hover:opacity-100 group-hover:-translate-y-17.5 group-hover:duration-500 text-white bottom-0 absolute opacity-0 p-[0_10px]">{project.name}</p>
    </div>
          ))}
      </div>
    </div>
  );
}

default function TopProjectsPhoneView({
  uniqueCategories,
  active,
  setActive,
  setSlideIn,
}) {
  return (
    <div className="top-projects-phone-view">
      <div className="phone-view-categories">
        <div className="category-buttons">
          {uniqueCategories.map((category) => (
            <div
              className={`category-button ${
                active === category ? "selected-category-button" : ""
              }`}
              key={category}
              onClick={() => {
                setActive(category);
                setSlideIn(true);
              }}
            ></div>
          ))}
        </div>
        <div className="selected-button-connectors">
          {uniqueCategories.map((category) => (
            <div
              className={`category-selected-connect ${
                active === category ? "selected-button-connector" : ""
              }`}
              key={category}
            ></div>
          ))}
        </div>
        <div className="selected-category-container">
          <div className="selected-category">{active}</div>
        </div>
      </div>
    </div>
  );
}