"use client";

// modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

// components
import SubTitle from "./SubTitle";

// utils
import { handleScroll } from "@/global-utils/scroll-interactions";

// data
import { testimonials } from "../services/home";

// hooks
import useHome from "../hooks/useHome";

export default function Testimonials() {
  const { actions } = useHome();

  return (
    <div className="p-0 w-full md:px-[10%] mb-7.5 relative">
      <SubTitle subTitle="Even Our Clients Agree with Us!" />

      <FontAwesomeIcon
        className="left-0.5 md:left-[5%] absolute top-[calc(50%+1em)] text-[30px] cursor-pointer z-1"
        icon={["fas", "circle-arrow-left"]}
        style={{ color: "#0a1f448a" }}
        onClick={() =>
          handleScroll(actions.containerRef, "left", "testimonials")
        }
      />

      <div
        className="flex gap-0 overflow-x-hidden w-full rounded-[10px] bg-gray-200 py-2.5"
        ref={(el) => {
          if (el) actions.setTestimonials(el);
        }}
      >
        {testimonials.length > 0
          ? testimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-full md:w-full h-62.5 border-r-0 md:border-r border-r-(--secondary-blue) flex flex-col shrink-0 relative"
                ref={actions.testimonialEl}
              >
                <div className="flex m-[20px_0_0_20px] gap-2.5 items-center">
                  <div className="w-10 h-10 rounded-full relative overflow-hidden bg-gray-400">
                    <Image
                      src={
                        t.profilePic && t.profilePic !== "profile-image"
                          ? `/${t.profilePic}`
                          : "/images/userIcon.jpg"
                      }
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100%"
                      className="object-cover rounded-[50%] relative overflow-hidden"
                    />
                  </div>

                  <div className="h-fit top-6.25 left-17.5 text-[12.8px]">
                    <div className="text-style__subheading">{t.name}</div>
                    <div className="text-style__small-text italic">
                      {t.industry}, {t.position}
                    </div>
                  </div>
                </div>

                <FontAwesomeIcon
                  className="absolute text-[19.2px] left-7.5 bottom-7.5"
                  icon={["fas", "quote-left"]}
                  style={{ color: "#ffd600" }}
                />

                <p className="h-full mt-2.5 text-style__body m-[10px_20px_40px_30px] overflow-hidden items-center flex">
                  {t.testimonial}
                </p>

                <FontAwesomeIcon
                  className="absolute text-[19.2px] right-7.5 top-7.5"
                  icon={["fas", "quote-right"]}
                  style={{ color: "#ffd600" }}
                />

                <hr className="mx-10 border-0 border-t-2 border-(--secondary-blue) h-0 bg-none" />
              </div>
            ))
          : ""}
      </div>

      <FontAwesomeIcon
        className="right-0.5 md:right-[5%] absolute top-[calc(50%+1em)] text-[30px] cursor-pointer z-1"
        icon={["fas", "circle-arrow-right"]}
        style={{ color: "#0a1f448a" }}
        onClick={() =>
          handleScroll(actions.containerRef, "right", "testimonials")
        }
      />
    </div>
  );
}
