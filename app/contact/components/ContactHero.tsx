"use client";

import useContact from "../hooks/useContact";
import AssetImage from "@/components/layout/AssetImage";

export default function ContactHero() {
  const { contactState } = useContact();

  return (
    <div className="w-full h-100 flex flex-col justify-center items-center relative mb-2.5">
      <div className="absolute z-1 w-full text-(--primary-yellow) flex text-center items-center justify-center">
        {contactState.contacts && (
          <div>
            <div className="contact-title-main text-style__section-title">
              {contactState.contacts.Hero.title}
            </div>

            {contactState.contacts.Hero.subtitle}
          </div>
        )}
      </div>
      <div className="relative bg-black w-full h-100 overflow-hidden">
        {contactState.contacts ? (
          <AssetImage
            asset={contactState.contacts.Hero.image}
            alt=""
            fill
            sizes="100vw"
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
