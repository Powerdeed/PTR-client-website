"use client";

import ProjectsView from "./components/ProjectsView";
import ProjectsProvider from "./context/ProjectsProvider";

export default function Projects() {
  return (
    <ProjectsProvider>
      <ProjectsView></ProjectsView>
    </ProjectsProvider>
  );
}
