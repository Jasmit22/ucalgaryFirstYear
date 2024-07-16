"use client"; // This is a client component

import Link from "next/link";
import gradientLogo2 from "../../../public/campusconnect3.webp";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const header = document.querySelector("header");

      if (window.scrollY > 5) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });

  return (
    <header className="header fixed top-0 z-50 h-20 w-full">
      <div className="gradient-holder">
        <nav className="flex items-center justify-between text-white py-4 px-4 z-50 text-lg">
          <Link
            href="/"
            className="text-2xl font-bold flex gap-3 items-center ml-4"
          >
            <Image src={gradientLogo2} alt="CampusConnect Logo" width={50} />
            <h1 className="hover:text-ucalgaryGold transition-all duration-150 ease-linear text-3xl font-semibold">
              Campus Connect
            </h1>
          </Link>
        </nav>
      </div>
    </header>
  );
}
