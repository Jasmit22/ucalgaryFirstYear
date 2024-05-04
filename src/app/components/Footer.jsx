import React from "react";
import Link from "next/link";

export default function footer() {
  return (
    <footer className="p-20 bg-ucalgaryDarkOrange">
      <div className="flex gap-40">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold pb-2 text-ucalgaryGold border-ucalgaryGold border-b-4">
            Explore MonkeySquad
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
              href="/about"
            >
              About
            </Link>
            <Link
              className="w-fit hover:text-ucalgaryGold transition-all duration-150 ease-linear"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-bold pb-2 text-ucalgaryGold border-ucalgaryGold border-b-4">
            Designed and developed by
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <h1>bruh</h1>
            <h1>bruh</h1>
            <h1>bruh</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
