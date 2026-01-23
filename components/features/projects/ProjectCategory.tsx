// modules
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image.js";
// styles
import "../styles/project-category.css";

export default function ProjectCategory({ projCategoryName, projects }) {
  const [projDesc, setProjDesc] = useState(false);
  const [selectedProj, setSelectedProj] = useState([]);

  const projDescWindow = useRef<HTMLDivElement | null>(null);
  const descriptionBox = useRef<HTMLDivElement | null>(null);
  const projectTitle = useRef<HTMLDivElement | null>(null);
  const imagesContainer = useRef<HTMLDivElement | null>(null);
  const description = useRef<HTMLDivElement | null>(null);
  const projectsScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (projDesc) {
      projDescWindow.current?.classList.add("proj-activated-window");
      if (descriptionBox.current)
        descriptionBox.current.style.height = "fit-content";
      if (imagesContainer.current)
        imagesContainer.current.style.display = "inline-block";
      if (description.current) description.current.style.display = "block";
      if (window.innerWidth <= 700) {
        if (projDescWindow.current)
          projDescWindow.current.style.display = "inline-flex";
      }

      setTimeout(() => {
        if (projectTitle.current) projectTitle.current.style.display = "block";
      }, 500);
    } else {
      projDescWindow.current?.classList.remove("proj-activated-window");

      setTimeout(() => {
        if (descriptionBox.current) descriptionBox.current.style.height = "0";
        if (projectTitle.current) projectTitle.current.style.display = "none";
        if (imagesContainer.current)
          imagesContainer.current.style.display = "none";
        if (description.current) description.current.style.display = "none";
        if (window.innerWidth <= 700) {
          if (projDescWindow.current)
            projDescWindow.current.style.display = "none";
        }
      }, 500);
    }
  }, [projDesc]);

  return (
    <div className="projects-category-container">
      <h3 className="projects-glimpse-title">{projCategoryName}</h3>
      <div className="projects-container" ref={projectsScrollRef}>
        <FontAwesomeIcon
          className="projects-nav-icons-left"
          icon={["fas", "chevron-left"]}
          onClick={() =>
            projectsScrollRef.current?.scrollBy({
              left: -250,
              behavior: "smooth",
            })
          }
        />
        <div className="category-projects">
          {Object.entries(projects).map(([key, project]) => (
            <div
              key={key}
              className="project"
              onClick={() => {
                setProjDesc(true);
                setSelectedProj(project);
              }}
            >
              <div className="project-image-container">
                <Image src={project.images[0]} alt="" />
              </div>
              <h5 className="project-title">{project.name}</h5>
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          className="projects-nav-icons-right"
          icon={["fas", "chevron-right"]}
          onClick={() =>
            projectsScrollRef.current?.scrollBy({
              left: 250,
              behavior: "smooth",
            })
          }
        />
      </div>
      <div className="description-borders">
        <div className="top-border"></div>
        {projDesc ? (
          <FontAwesomeIcon
            className="projects-xmark"
            icon={["fas", "xmark"]}
            onClick={() => setProjDesc(false)}
          />
        ) : (
          <></>
        )}

        <div className="description-box" ref={descriptionBox}>
          <h3 className="selected-proj-title" ref={projectTitle}>
            {selectedProj?.name}
          </h3>
          <div className="proj-description-window" ref={projDescWindow}>
            <div className="images-container" ref={imagesContainer}>
              {selectedProj?.images?.map((image, i) => (
                <Image key={i} src={image} alt="" />
              ))}
            </div>
            <div className="description" ref={description}>
              {selectedProj?.description}
            </div>
          </div>
        </div>
        <div className="bottom-border"></div>
      </div>
    </div>
  );
}
