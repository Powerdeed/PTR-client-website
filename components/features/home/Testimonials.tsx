"use client";

// modules
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SubTitle from "./SubTitle";

const testimonials = [
  {
    id: "6870da6360461b0545bb47e6",
    name: "John Doe",
    title: "CEO, Acme Corp",
    testimonial:
      "Powerdeed exceeded our expectations with their professionalism and expertise.",
    profilePic: "profile-image",
  },
  {
    id: "6870e4f7e43b11bdb76674b5",
    name: "Jane Smith",
    title: "Resident",
    testimonial: "The team was friendly and efficient. Highly recommended!",
    profilePic: "profile-image",
  },
  {
    id: "6870e52d5f5d5c2b57831af2",
    name: "Michael Brown",
    title: "Facility Manager",
    testimonial: "Their solutions are reliable and cost-effective.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5435f5d5c2b57831af5",
    name: "Emily White",
    title: "Homeowner",
    testimonial: "I am very satisfied with the service provided by Powerdeed.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5545f5d5c2b57831af8",
    name: "David Green",
    title: "Business Owner",
    testimonial: "Prompt response and excellent customer care.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5795f5d5c2b57831afb",
    name: "Sophia Lee",
    title: "Resident",
    testimonial: "They made the whole process seamless and easy.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5a55f5d5c2b57831afe",
    name: "Olivia Brown",
    title: "Property Manager",
    testimonial: "We will definitely work with Powerdeed again.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5b85f5d5c2b57831b01",
    name: "Daniel Kim",
    title: "Resident",
    testimonial: "Great value for money and top-notch service.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5cb5f5d5c2b57831b04",
    name: "Grace Wilson",
    title: "CEO, Wilson Enterprises",
    testimonial: "Professional, reliable, and trustworthy.",
    profilePic: "profile-image",
  },
];

export default function Testimonials() {
  const [testimonialWidth, setTestimonialWidth] = useState(0);

  const testimonialEl = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function updateWidth() {
      if (testimonialEl.current) {
        setTestimonialWidth(
          testimonialEl.current.getBoundingClientRect().width
        );
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [testimonialWidth]);

  return (
    <div className="p-0 w-full lg:px-[10%] mb-7.5 relative">
      <SubTitle subTitle="Even Our Clients Agree with Us!" />

      <FontAwesomeIcon
        className="left-0.5 lg:left-[5%] absolute top-[calc(50%+1em)] text-[30px] cursor-pointer z-1"
        icon={["fas", "circle-arrow-left"]}
        style={{ color: "#0a1f448a" }}
        onClick={(e) =>
          e.currentTarget.nextElementSibling?.scrollBy({
            left: -testimonialWidth,
            behavior: "smooth",
          })
        }
      />

      <div className="flex gap-0 overflow-x-hidden w-full rounded-[10px] bg-gray-200 py-2.5">
        {testimonials.length > 0
          ? testimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-full lg:w-full h-62.5 border-r-0 lg:border-r border-r-(--secondary-blue) flex flex-col shrink-0 relative"
                ref={testimonialEl}
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
                      className="object-cover rounded-[50%] relative overflow-hidden"
                    />
                  </div>
                  <div className="h-fit top-6.25 left-17.5 text-[12.8px]">
                    <div className="font-semibold">{t.name}</div>
                    <div className="italic">{t.title}</div>
                  </div>
                </div>
                <FontAwesomeIcon
                  className="absolute text-[19.2px] right-7.5 top-7.5"
                  icon={["fas", "quote-right"]}
                  style={{ color: "#ffd600" }}
                />
                <p className="h-full mt-2.5 text-[14.4px] m-[10px_20px_40px_30px] overflow-hidden items-center flex">
                  {t.testimonial}
                </p>
                <FontAwesomeIcon
                  className="absolute text-[19.2px] left-7.5 bottom-7.5"
                  icon={["fas", "quote-left"]}
                  style={{ color: "#ffd600" }}
                />
                <hr className="mx-10 border-0 border-t-2 border-(--secondary-blue) h-0 bg-none" />
              </div>
            ))
          : ""}
      </div>

      <FontAwesomeIcon
        className="right-0.5 lg:right-[5%] absolute top-[calc(50%+1em)] text-[30px] cursor-pointer z-1"
        icon={["fas", "circle-arrow-right"]}
        style={{ color: "#0a1f448a" }}
        onClick={(e) =>
          e.currentTarget.previousElementSibling?.scrollBy({
            left: testimonialWidth,
            behavior: "smooth",
          })
        }
      />
    </div>
  );
}
