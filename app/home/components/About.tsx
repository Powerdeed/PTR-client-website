import Image from "next/image";

import { aboutIntro } from "../services/home";

export default function About() {
  return (
    <div className="w-full flex flex-col gap-7.5">
      {aboutIntro.map((about, idx) => (
        <div
          key={idx}
          className={`w-full flex flex-col mb-7.5 md:grid grid-cols-2 items-center gap-5 ${
            about.flipped ? "rotate-y-180" : ""
          }`}
        >
          <div
            className={`relative w-full h-75 ${
              about.flipped ? "rotate-y-180" : ""
            }`}
          >
            <Image
              src="/images/projects-images/Electrical-engineering-jobs-in-the-construction-industry.jpg"
              alt="Milestone Electrical and Solar Solutions"
              sizes="(max-width: 1024px) 100%"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`flex flex-col items-center gap-2.5 ${
              about.flipped ? "rotate-y-180" : ""
            }`}
          >
            <h3 className="text-style__subheading text-(--primary-blue)">
              {about.title}
            </h3>
            <p className="text-justify text-style__body">{about.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
