"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination() {
  const pathname = usePathname();
  const router = useRouter();
  const pages = ["/about/overview", "/about/structure", "/about/certificates"];

  const currentIndex = pages.indexOf(pathname);

  return (
    <div className="w-full relative grid justify-center items-center text-(--primary-blue)">
      <div className="flex items-center h-7.5 gap-2.5">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={["fas", "arrow-left"]}
          onClick={() => {
            if (currentIndex > 0) {
              router.push(pages[currentIndex - 1]);
            }
          }}
        />
        {pages.map((page, index) => (
          <Link key={index} href={page} className="pagination-link">
            <div
              className={`w-7.5 inline-block border border-(--primary-blue) rounded-[5px] text-center ${
                pathname === page
                  ? "bg-(--primary-blue) text-(--primary-yellow)"
                  : null
              }`}
            >
              {index + 1}
            </div>
          </Link>
        ))}
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={["fas", "arrow-right"]}
          onClick={() => {
            if (currentIndex < pages.length - 1) {
              router.push(pages[currentIndex + 1]);
            }
          }}
        />
      </div>
    </div>
  );
}
