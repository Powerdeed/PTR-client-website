"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/icons";
import { NAVIGATION } from "@/utils/constants";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const mainMenu = useRef<HTMLUListElement | null>(null);
  const menuItems = useRef<HTMLLIElement[]>([]);
  const subMenuItems = useRef<HTMLLIElement[]>([]);

  const pathname = usePathname();

  const toggleMenu = () => {
    if (!mainMenu.current) return;

    setIsMenuOpen((prev) => !prev);

    if (isMenuOpen) {
      mainMenu.current.style.width = "0px";
      menuItems.current.forEach((li) => {
        li.style.display = "none";
      });
    } else {
      mainMenu.current.style.width = "160px";
      menuItems.current.forEach((li, idx) => {
        setTimeout(() => {
          li.style.display = "block";
          li.style.opacity = "1";
        }, idx * 100);
        li.style.opacity = "0";
        li.style.transition = "opacity 0.3s ease-in-out";
      });
    }
  };

  const toggleSubMenu = () => {
    if (isSubMenuOpen) {
      subMenuItems.current.forEach((li) => {
        li.style.display = "none";
      });
    } else {
      subMenuItems.current.forEach((li) => {
        li.style.display = "block";
        li.style.opacity = "1";
        li.style.transition = "opacity 0.3s ease-in-out";
      });
    }
  };

  useEffect(() => {
    const screenSizeSetter = () => setSmallScreen(window.innerWidth < 768);

    screenSizeSetter();
    window.addEventListener("resize", screenSizeSetter);

    return () => window.removeEventListener("resize", screenSizeSetter);
  }, []);

  const isActive = (path: string) => (pathname === path ? "underline" : "");

  return (
    <nav className="relative flex items-center w-full h-12.5 px-2.5 z-3 bg-[linear-gradient(to_right,var(--secondary-blue)_30%,var(--primary-blue)_70%)] text-(--primary-yellow)">
      <Link href="/" className="company-name">
        <div className="no-underline leading-5">
          <h1 className="font-extrabold text-[1.7em] m-0">POWERDEED</h1>
          <h3 className="font-bold text-[0.7em] m-0">
            TECHNOLOGY RESOURCES LTD.
          </h3>
        </div>
      </Link>

      <div className={`${isMenuOpen ? "hidden" : "md:hidden"}`}>
        <FontAwesomeIcon
          className={`cursor-pointer absolute top-4 right-2.5 w-4 h-4`}
          icon={["fas", `${!isMenuOpen ? "bars" : "xmark"}`]}
          onClick={toggleMenu}
        />
      </div>

      {/* Overlay */}
      {smallScreen && isMenuOpen && (
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-(--primary-blue)/50 z-2"
          onClick={toggleMenu}
        ></div>
      )}

      <ul
        ref={mainMenu}
        className={`fixed md:absolute md:flex items-center gap-5 list-none
    pt-12.5 md:pt-0 top-0 md:top-3 right-0 md:right-[8%]
    text-[12px] pl-1 w-0 md:w-fit h-screen md:h-fit
    bg-(--primary-blue) md:bg-transparent
    transition-[width_0.3s_ease-in-out] z-3`}
      >
        {smallScreen && isMenuOpen && (
          <FontAwesomeIcon
            className="cursor-pointer absolute top-4 right-2.5 w-4 h-4"
            icon={["fas", "xmark"]}
            onClick={toggleMenu}
          />
        )}

        {NAVIGATION.map((item, idx) => {
          const hasSub = !!item.subLinks;

          return (
            <li
              key={item.label}
              ref={(el) => {
                if (el) menuItems.current[idx] = el;
              }}
              className={`relative cursor-pointer mb-3.75 md:mb-0 ${!hasSub && "hover:underline"}`}
              onMouseEnter={() => {
                if (!smallScreen && hasSub) {
                  setIsSubMenuOpen(true);
                  toggleSubMenu();
                }
              }}
              onMouseLeave={() => {
                if (!smallScreen && hasSub) {
                  setIsSubMenuOpen(false);
                  toggleSubMenu();
                }
              }}
              onClick={() => {
                if (hasSub && smallScreen) {
                  setIsSubMenuOpen((p) => !p);
                  toggleSubMenu();
                } else if (smallScreen) {
                  toggleMenu();
                }
              }}
            >
              {/* Main link */}
              {item.href ? (
                <Link href={item.href} className={isActive(item.href)}>
                  {item.label}
                </Link>
              ) : (
                <span className="flex items-center gap-1">
                  {item.label}
                  {hasSub && smallScreen && (
                    <FontAwesomeIcon
                      icon={["fas", `angle-${isSubMenuOpen ? "up" : "down"}`]}
                    />
                  )}
                </span>
              )}

              {/* Sub menu */}
              {hasSub && (
                <ul className="border border-(--primary-blue) md:absolute md:top-5 w-full md:w-40 list-none z-2 ">
                  {item.subLinks?.map((sub, subIdx) => (
                    <li
                      key={sub.href}
                      ref={(el) => {
                        if (el) subMenuItems.current[subIdx] = el;
                      }}
                      className="hidden bg-(--primary-blue) pl-2 leading-6 hover:underline"
                    >
                      <Link
                        href={sub.href}
                        className={`${isActive(sub.href)} hover:underline`}
                        onClick={() => smallScreen && toggleMenu()}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
