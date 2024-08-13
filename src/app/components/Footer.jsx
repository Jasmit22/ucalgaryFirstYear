import React from "react";
import Link from "next/link";
import Image from "next/image";
import whiteLogo from "../../../public/campusconnect2.webp";

export default function footer() {
  return (
    <footer className="p-20 max-md:p-12 bg-ucalgaryDarkOrange">
      <div className="flex gap-28 max-md:flex-col max-md:gap-10">
        <Link
          href="/"
          className="text-2xl font-bold flex gap-3 items-center hover:cursor-pointer max-md:hidden"
        >
          <Image
            src={whiteLogo}
            alt="CampusConnect Logo"
            className="hover:-hue-rotate-15 transition-all duration-150 ease-linear hover:cursor-pointer"
            width={75}
          />
        </Link>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold pb-2 text-white border-ucalgaryGold border-b-4">
            Campus Connect
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
              href="/"
            >
              Home
            </Link>
            <Link
              className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold pb-2 text-white border-ucalgaryGold border-b-4">
            Explore
          </h1>
          <div className="flex gap-20">
            <div className="flex flex-col gap-2 font-medium">
              <Link
                className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
                href="/go-to"
              >
                Go To
              </Link>
              <Link
                className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
                href="/study-spots"
              >
                Study Spots
              </Link>
              <Link
                className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
                href="/faq"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-2 font-medium">
              <Link
                className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
                href="/reviews"
              >
                Reviews
              </Link>
              <Link
                className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
                href="/course-sequences"
              >
                Course Sequencing
              </Link>
              <Link
                className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
                href="/schedule-tips"
              >
                Schedule Tips
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
