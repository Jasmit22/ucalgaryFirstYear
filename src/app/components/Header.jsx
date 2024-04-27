import Link from "next/link";
import React from "react";

export default function header() {
  return (
    // No responsiveness yet, just messing around
    // No idea why sticky isn't working
    <header>
      <nav className="flex items-center justify-between bg-ucalgaryRed text-white py-4 px-4 sticky top-0 z-50 text-lg">
        <Link href="/" className="text-2xl font-bold ">
          <h1 className="hover:text-ucalgaryLightGrey transition-all duration-150 ease-linear">
            MonkeySquad
          </h1>
        </Link>
        <ul class="menu">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a>Stuff</a>
            <ul class="submenu bg-ucalgaryRed mt-2">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
