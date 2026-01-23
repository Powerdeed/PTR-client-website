"use client";

import { useState } from "react";
import Image from "next/image";

import { certificates } from "@/services/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="text-center font-bold text-[20px]">
        Certifications and Licenses
      </div>

      <div className="w-full m-0 lg:mr-2.5 flex flex-wrap justify-center lg:justify-start gap-2.5">
        {certificates.map((imgSrc, idx) => (
          <div
            className="border border-(--terciary-grey) relative block w-full lg:w-[calc(50%-5px)] rounded-[10px] overflow-hidden h-62.5 lg:h-75 cursor-pointer"
            onClick={() => setSelectedImage(imgSrc)}
            key={imgSrc || idx}
          >
            <Image
              src={imgSrc}
              alt={`Certificate-${idx}`}
              fill
              objectFit="contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Selected Image window */}
      {selectedImage && (
        <div className="fixed w-screen h-screen bg-(--terciary-grey)/50 z-10 top-0 left-0 flex flex-col justify-center">
          <div className="relative w-full h-full my-5 lg:my-10">
            <div
              className="absolute -top-10 right-10 w-10 h-10 grid justify-center items-center rounded-full bg-white/70 text-(--primary-grey) text-[18px] float-right cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <FontAwesomeIcon icon={["fas", "xmark"]} />
            </div>

            <Image
              src={selectedImage}
              alt={selectedImage}
              fill
              objectFit="contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full left-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
