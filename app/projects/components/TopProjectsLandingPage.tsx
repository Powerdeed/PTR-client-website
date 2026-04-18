"use client";

import Image from "next/image.js";

import { projectImages } from "@/data/dummyData";

import useProjects from "@/app/projects/hooks/useProjects";

import useGlobalStates from "@/global-utils/hooks/useGlobalStates";

export default function TopProjectsLandingPage() {
  const { state, actions } = useProjects();
  const { globalState } = useGlobalStates();

  if (!state.projects) return;

  return (
    <div className="w-full px-0.5 md:p-0">
      {globalState.smallScreen ? (
        <TopProjectsPhoneView
          uniqueCategories={actions.uniqueCategories}
          active={state.active}
          setActive={state.setActive}
          setSlideIn={state.setSlideIn}
        />
      ) : (
        <ul className="list-none flex gap-10 justify-center w-full h-6 m-[20px_0] bg-[linear-gradient(to_right,var(--white)_10%,var(--primary-blue)_20%,var(--primary-blue)_80%,var(--white)_90%)] items-center text-style__body">
          {actions.uniqueCategories.map((category) => (
            <li
              key={category}
              className={`${
                state.active === category ? "underline" : ""
              } cursor-pointer text-(--primary-yellow) hover:underline`}
              onClick={() => {
                state.setActive(category);
                state.setSlideIn(true);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      <div
        id="project-cards"
        className={`
          mx-auto w-full md:w-fit 
          grid grid-cols-1 md:grid-cols-2 
          justify-center
          transition-all duration-700 ease-in-out
          ${state.isVisible ? "gap-5" : "gap-37.5"}
        `}
      >
        {state.projects
          .filter((project) => project.category === state.active)
          .slice(0, 4)
          .map((project, idx) => (
            <div
              key={project._id || project.name || idx}
              className="group bg-(--primary-blue) relative w-full md:w-100 h-62.5 rounded-[10px] cursor-pointer"
            >
              <Image
                src={`${
                  projectImages[project.images[0] as keyof typeof projectImages]
                }`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100%, 400px"
                className={`w-full h-full object-cover rounded-[10px] ${globalState.smallScreen ? "opacity-50" : "group-hover:opacity-50 group-hover:duration-500"}`}
              />
              <p
                className={`absolute bottom-0 opacity-0 p-[0_10px] text-style__body text-white ${globalState.smallScreen ? "opacity-100 -translate-y-17.5" : "group-hover:opacity-100 group-hover:-translate-y-17.5 duration-500"}`}
              >
                {project.name}
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
      <div className="grid justify-center">
        <div className="flex grid-cols-[repeat(5,1fr)] justify-center gap-2.5">
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
            />
          ))}
        </div>
        <div className="flex grid-cols-[repeat(5,1fr)] justify-center gap-7.5">
          {uniqueCategories.map((category) => (
            <div
              className={`w-2.5 h-1.25 bg-(--primary-blue) opacity-0 ${
                active === category ? "opacity-100" : ""
              }`}
              key={category}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <div className="text-style__body grid justify-center rounded-[10px] w-57.5 h-8 bg-(--primary-blue) text-(--primary-yellow) items-center">
            {active}
          </div>
        </div>
      </div>
    </div>
  );
}
