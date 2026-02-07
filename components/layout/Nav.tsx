"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../lib/icons";

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
        className={`fixed md:absolute md:flex items-center gap-5 list-none pt-12.5 md:pt-0 top-0 md:top-3 right-0 md:right-[8%] text-[12px] pl-1 w-0 md:w-fit h-screen md:h-fit bg-(--primary-blue) md:bg-transparent transition-[width_0.3s_ease-in-out] z-3`}
      >
        <div className={`${isMenuOpen ? null : "hidden"}`}>
          <FontAwesomeIcon
            className={`cursor-pointer absolute top-4 right-2.5 w-4 h-4`}
            icon={["fas", `${!isMenuOpen ? "bars" : "xmark"}`]}
            onClick={toggleMenu}
          />
        </div>

        {[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
        ].map((item, idx) => (
          <li
            key={item.href}
            ref={(el) => {
              if (el) menuItems.current[idx] = el;
            }}
            className="cursor-pointer no-underline mb-3.75 md:mb-0 hover:underline"
          >
            <Link
              href={item.href}
              className={isActive(item.href)}
              onClick={() => smallScreen && toggleMenu()}
            >
              {item.label}
            </Link>
          </li>
        ))}

        <li
          ref={(el) => {
            if (el) menuItems.current[2] = el;
          }}
          className="relative flex items-center cursor-pointer no-underline mb-3.75 md:mb-0"
          onMouseEnter={() => {
            if (window.innerWidth >= 768) {
              setIsSubMenuOpen(true);
              toggleSubMenu();
            }
          }}
          onMouseLeave={() => {
            if (window.innerWidth >= 768) {
              setIsSubMenuOpen(false);
              toggleSubMenu();
            }
          }}
          onClick={() => {
            setIsSubMenuOpen((prev) => !prev);
            toggleSubMenu();
          }}
        >
          About Us
          {isMenuOpen && (
            <div className="md:hidden">
              <FontAwesomeIcon
                icon={["fas", `angle-${isSubMenuOpen ? "up" : "down"}`]}
                className="absolute right-2.5 top-1"
              />
            </div>
          )}
          <ul className="md:top-5 w-full md:w-40 relative transition-[height_0.3s_ease-in-out] md:absolute list-none z-2 leading-6">
            {[
              { href: "/about/overview", label: "Overview" },
              { href: "/about/structure", label: "Structure" },
              { href: "/about/certificates", label: "Certificates & Licenses" },
            ].map((item, idx) => (
              <li
                key={item.href}
                ref={(el) => {
                  if (el) subMenuItems.current[idx] = el;
                }}
                className="hidden bg-(--primary-blue) items-center pl-2"
              >
                <Link
                  href={item.href}
                  className={`${isActive(item.href)} hover:underline`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {[
          { href: "/projects", label: "Projects" },
          { href: "/articles/electrical", label: "Articles" },
          { href: "/contact", label: "Contact" },
        ].map((item, idx) => (
          <li
            key={item.href}
            ref={(el) => {
              if (el) menuItems.current[idx + 3] = el;
            }}
            className="cursor-pointer no-underline mb-3.75 md:mb-0 hover:underline"
          >
            <Link
              href={item.href}
              className={isActive(item.href)}
              onClick={() => smallScreen && toggleMenu()}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
