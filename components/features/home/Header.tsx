// modules
import Link from "next/link.js";
import Image from "next/image.js";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <div className="relative w-full items-center">
      <div className="relative w-full h-100">
        <Image
          src="/images/PES-site-image.jpg"
          alt="PES site preview"
          fill
          priority
          className="object-cover object-[10%_25%]"
        />
      </div>
      <div className="grid justify-center m-[30px_0] text-(--primary-blue) gap-2.5 text-center leading-6">
        <h1 className="text-[1.5em]">
          Powering Kenya&apos;s Future: Expert Electrical & Solar Solutions
        </h1>
        <p className="text-[19.2px]">
          Delivering reliable electrical engineering and solar energy solutions
          across Kenya.
        </p>
      </div>
      <div className="w-full flex justify-center gap-5 md:gap-10 p-[0_2px]">
        <Link href={"../404"} className="no-underline text-(--primary-yellow)">
          <Button
            color={"blue"}
            content={"Explore Our Services"}
            rounded={100}
          />
        </Link>

        <Link
          href={"../services"}
          className="no-underline text-(--primary-yellow)"
        >
          <Button
            color={"grey"}
            content={"Request a Quotation"}
            rounded={100}
          />
        </Link>
      </div>
    </div>
  );
}
