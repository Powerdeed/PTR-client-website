"use client";

import Image from "next/image";
import useContact from "../hooks/useContact";

export default function ContactHero() {
  const { state } = useContact();

  return (
    <div className="w-full h-100 flex flex-col justify-center items-center relative mb-2.5">
      <div className="absolute z-1 w-full text-(--primary-yellow) flex text-center items-center justify-center">
        <div>
          <div className="contact-title-main text-style__section-title">
            {state.contacts.Hero.title}
          </div>

          {state.contacts.Hero.subtitle}
        </div>
      </div>
      <div className="relative bg-black w-full h-100 overflow-hidden">
        {state.contacts.Hero.image ? (
          <Image
            src={state.contacts.Hero.image}
            alt=""
            fill
            className="w-full h-full object-cover opacity-40 z-0"
            loading="eager"
          />
        ) : (
          <div>Loading Image</div>
        )}
      </div>
    </div>
  );
}
