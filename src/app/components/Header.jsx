"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid"; // Importing a down arrow icon from Heroicons
import gradientLogo2 from "../../../public/campusconnect3.webp";

export default function Header() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (
      dropdown1Ref.current &&
      !dropdown1Ref.current.contains(event.target) &&
      dropdown2Ref.current &&
      !dropdown2Ref.current.contains(event.target)
    ) {
      setOpenDropdownIndex(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");

      if (window.scrollY > 500) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    const header = document.querySelector("header");

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setOpenDropdownIndex(null);
  };

  return (
    <header className="header fixed top-0 z-50 h-20 w-full">
      <div className="gradient-holder">
        <nav className="flex items-center justify-between text-white py-4 px-4 z-50 text-lg">
          <Link
            href="/"
            className="text-2xl font-bold flex gap-3 items-center ml-4 hover:cursor-pointer"
          >
            <Image
              src={gradientLogo2}
              alt="Calgary First Year Logo"
              className="hover:-hue-rotate-15 transition-all duration-150 ease-linear hover:cursor-pointer"
              width={50}
            />
          </Link>
          <div className="flex gap-8 items-center mr-4">
            <div className="relative" ref={dropdown1Ref}>
              <button
                onClick={() => toggleDropdown(1)}
                className="flex items-center text-white focus:outline-none font-semibold tracking-tight"
              >
                Explore
                <ChevronDownIcon
                  className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                    openDropdownIndex === 1 ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${
                  openDropdownIndex === 1
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  href="/go-to"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Getting to School
                </Link>
                <Link
                  href="/study-spots"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Study Spots
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  FAQ
                </Link>
              </div>
            </div>

            <div className="relative" ref={dropdown2Ref}>
              <button
                onClick={() => toggleDropdown(2)}
                className="flex items-center text-white focus:outline-none font-semibold tracking-tight"
              >
                Courses
                <ChevronDownIcon
                  className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                    openDropdownIndex === 2 ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform ${
                  openDropdownIndex === 2
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  href="/reviews"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Reviews
                </Link>
                <Link
                  href="/course-sequences"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Sequences
                </Link>
                <Link
                  href="/schedule-tips"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  Schedule Tips
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
