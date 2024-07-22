"use client"; // This is a client component

import Link from "next/link";
import gradientLogo2 from "../../../public/campusconnect3.webp";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
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
  });

  return (
    <header className="header fixed top-0 z-50 h-20 w-full">
      <div className="gradient-holder">
        <nav className="flex items-center justify-between text-white py-4 px-4 z-50 text-lg cursor-pointer">
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
            <h1 className="campus-connect-text hidden hover:text-ucalgaryGold max-md:hidden transition-all duration-150 ease-linear text-3xl font-semibold hover:cursor-pointer">
              Campus Connect
            </h1>
          </Link>
        </nav>
      </div>
    </header>
  );
}
