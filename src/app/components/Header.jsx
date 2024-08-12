"use client"; // This is a client component

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import gradientLogo2 from "../../../public/campusconnect3.webp";

export default function Header() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      const text = document.querySelector(".campus-connect-text");

      if (window.scrollY > 500) {
        header.classList.add("scrolled");
        text.classList.add("hiding");
      } else {
        header.classList.remove("scrolled");
        text.classList.remove("hiding");
      }
    });
  }, []);

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
              alt="CampusConnect Logo"
              className="hover:-hue-rotate-15 transition-all duration-150 ease-linear hover:cursor-pointer"
              width={50}
            />
            <h1 className="campus-connect-text hidden hover:text-ucalgaryGold max-md:hidden transition-all duration-150 ease-linear text-2xl font-semibold hover:cursor-pointer">
              Campus Connect
            </h1>
          </Link>
          <div className="flex gap-4 items-center mr-4">
            {/* Get rid of this map stuff when actually implementing, just copy paste twice and change the routes */}
            {["Dropdown 1", "Dropdown 2"].map((label, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="bg-gray-700 text-white p-2 rounded-md"
                >
                  {label}
                </button>
                {openDropdownIndex === index && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      example
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      example
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      example
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
