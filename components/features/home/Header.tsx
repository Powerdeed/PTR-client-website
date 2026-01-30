// modules
import Link from "next/link.js";
import Image from "next/image.js";

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
        <button className="text-4 w-50 h-12.5 border-0 rounded-[100px] text-(--primary-yellow) bg-[linear-gradient(45deg,var(--primary-blue)_50%,var(--secondary-blue)_90%)] bg-(--secondary-blue) hover:bg-none hover:bg-(--primary-blue) hover:transition-[background-color_0.3s_ease_in_out]">
          <Link
            href={"../404"}
            className="no-underline text-(--primary-yellow)"
          >
            Request a Quotation
          </Link>
        </button>
        <button className="text-4 w-50 h-12.5 border-0 rounded-[100px] text-(--primary-yellow) bg-[linear-gradient(45deg,var(--primary-grey)_50%,var(--secondary-grey)_90%)] bg-(--secondary-grey) hover:bg-none hover:bg-(--primary-grey) hover:transition-[background-color_0.3s_ease_in_out]">
          <Link
            href={"../services"}
            className="no-underline text-(--primary-yellow)"
          >
            Explore Our Services
          </Link>
        </button>
      </div>
    </div>
  );
}
