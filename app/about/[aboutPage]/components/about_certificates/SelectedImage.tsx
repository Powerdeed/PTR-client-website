"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import useCertificates from "../../hooks/certificates/useCertificates";

export default function SelectedImage() {
  const { state } = useCertificates();

  if (!state.selectedImage) return;

  return (
    <div className="fixed w-screen h-screen bg-(--terciary-grey)/50 z-10 top-0 left-0 flex flex-col justify-center">
      <div className="relative w-full h-full my-5 md:my-10">
        <div
          className="absolute -top-10 right-10 w-10 h-10 grid justify-center items-center rounded-full bg-white/70 text-(--primary-grey) text-[18px] float-right cursor-pointer"
          onClick={() => state.setSelectedImage("")}
        >
          <FontAwesomeIcon icon={["fas", "xmark"]} />
        </div>

        <Image
          src={state.selectedImage}
          alt={state.selectedImage}
          fill
          objectFit="contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full left-0"
        />
      </div>
    </div>
  );
}
