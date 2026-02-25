// modules
import Link from "next/link.js";
import Image from "next/image.js";
import Button from "@/components/ui/Button";
import { hero } from "@/data/dummyData";

export default function Header() {
  return (
    <div className="relative w-full items-center">
      <div className="relative w-full h-100">
        <Image
          src={hero.image}
          alt="PES site preview"
          fill
          priority
          className="object-cover object-[10%_25%]"
        />
      </div>
      <div className="grid justify-center my-7.5 text-(--primary-blue) gap-2.5 text-center">
        <div className="text-style__heading">{hero.title}</div>
        <div className="text-style__subheading">{hero.subtitle}</div>
      </div>
      <div className="w-full flex justify-center gap-5 md:gap-10 p-[0_2px]">
        <Link href={"/services"}>
          <Button
            color={"blue"}
            content={"Explore Our Services"}
            rounded={100}
          />
        </Link>

        <Link href={"../articles/electrical"}>
          <Button color={"grey"} content={"What's new in Tech"} rounded={100} />
        </Link>
      </div>
    </div>
  );
}
