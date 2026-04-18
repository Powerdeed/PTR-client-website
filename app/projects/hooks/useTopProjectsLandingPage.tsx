"use client";

import { useContext, useEffect } from "react";

import { projectsContext } from "../context/ProjectsContext";

export default function useTopProjectsLandingPage() {
  const projectsStates = useContext(projectsContext);

  if (!projectsStates)
    throw new Error("Projects context must be within a provider");

  const { projects, slideIn, setSlideIn, setIsVisible } = projectsStates;
  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("project-cards");
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const halfway = window.innerHeight / 2;

      if (rect.top <= halfway && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsVisible]);

  useEffect(() => {
    if (slideIn) {
      setIsVisible(false);

      const t = setTimeout(() => {
        setIsVisible(true);
        setSlideIn(false);
      }, 50); // small delay to allow reflow

      return () => clearTimeout(t);
    }
  }, [slideIn, setIsVisible, setSlideIn]);

  const uniqueCategories = [
    ...new Set(projects.map((project) => project.category)),
  ];

  return { uniqueCategories };
}
