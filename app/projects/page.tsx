"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { projects } from "@/data/dummyData";
import SidePanel from "@/components/layout/SidePanel";

export default function Projects() {
  const [projDesc, setProjDesc] = useState(false);
  const [selectedProj, setSelectedProj] = useState([]);

  const projDescWindow = useRef<HTMLDivElement | null>(null);
  const descriptionBox = useRef<HTMLDivElement | null>(null);
  const projectTitle = useRef<HTMLDivElement | null>(null);
  const imagesContainer = useRef<HTMLDivElement | null>(null);
  const description = useRef<HTMLDivElement | null>(null);
  const projectsScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // if (projDesc) {
    //   projDescWindow.current.classList.add("proj-activated-window");
    //   descriptionBox.current.style.height = "fit-content";
    //   imagesContainer.current.style.display = "inline-block";
    //   description.current.style.display = "block";
    //   if (window.innerWidth <= 700) {
    //     projDescWindow.current.style.display = "inline-flex";
    //   }
    //   setTimeout(() => {
    //     projectTitle.current.style.display = "block";
    //   }, 500);
    // } else {
    //   projDescWindow.current.classList.remove("proj-activated-window");
    //   setTimeout(() => {
    //     descriptionBox.current.style.height = "0";
    //     projectTitle.current.style.display = "none";
    //     imagesContainer.current.style.display = "none";
    //     description.current.style.display = "none";
    //     if (window.innerWidth <= 700) {
    //       projDescWindow.current.style.display = "none";
    //     }
    //   }, 500);
    // }
  }, [projDesc]);

  return (
    <div className="border border-(--terciary-grey) inline-flex w-full p-[20px_10px]">
      {/* <div className="w-full h-fit grid gap-5">
        {Object.entries(projects).map(([projCategoryName, projects]) => (
          <div key={projCategoryName} className="projects-category-container">
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
                    <div className="relative project-image-container">
                      <Image
                        src={project.images[0]}
                        alt=""
                        fill
                        className="object-cover w-full h-full"
                      />
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
                      <img key={i} src={image} alt="" />
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
        ))}
      </div> */}

      <SidePanel options={["blogs", "reach us"]} />
    </div>
  );
}
