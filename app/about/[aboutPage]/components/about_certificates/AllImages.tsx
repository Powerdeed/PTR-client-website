"use client";

import Image from "next/image";
import useCertificates from "../../hooks/certificates/useCertificates";
import { certificates } from "../../services/about";

export default function AllImages() {
  const { state } = useCertificates();

  return (
    <div className="w-full m-0 md:mr-2.5 flex flex-wrap justify-center md:justify-start gap-2.5">
      {certificates.map((imgSrc, idx) => (
        <div
          className="border border-(--terciary-grey) relative block w-full md:w-[calc(50%-5px)] rounded-[10px] overflow-hidden h-62.5 md:h-75 cursor-pointer"
          onClick={() => state.setSelectedImage(imgSrc)}
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
  );
}
