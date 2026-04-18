"use client";

// modules
import Link from "next/link.js";
import Image from "next/image.js";
import Button from "@/components/ui/Button";
import useHome from "../hooks/useHome";
import { Loader } from "@/app/loading";

export default function Header() {
  const { state } = useHome();

  return (
    <div className="relative w-full items-center">
      <div className="relative w-full h-100">
        {!state.homepage && (
          <div className="w-full h-full flex items-center justify-center">
            <Loader />
          </div>
        )}

        {state.homepage && (
          <Image
            src={state.homepage.hero.image}
            alt="PES site preview"
            fill
            priority
            className="object-cover object-[10%_25%]"
          />
        )}
      </div>

      {state.homepage && (
        <div className="grid justify-center my-7.5 text-(--primary-blue) gap-2.5 text-center">
          <div className="text-style__heading">{state.homepage.hero.title}</div>
          <div className="text-style__subheading">
            {state.homepage.hero.subtitle}
          </div>
        </div>
      )}

      <div className="w-full flex justify-center gap-5 md:gap-10 p-[0_2px]">
        <Link href={"/services"}>
          <Button color="blue" content="Explore Our Services" rounded="full" />
        </Link>

        <Link href="../articles/electrical">
          <Button color="grey" content="What's new in Tech" rounded="full" />
        </Link>
      </div>
    </div>
  );
}
