import Link from "next/link";
import monkeyLogo from "./image.png";
import Image from "next/image";

export default function header() {
  return (
    <header>
      <nav className="flex items-center justify-between bg-ucalgaryRed text-white py-4 px-4 sticky top-0 z-50 text-lg">
        <Link href="/" className="text-2xl font-bold flex gap-3 items-center">
          <Image src={monkeyLogo} alt="MonkeySquad Logo" width={50} />
          <h1 className="hover:text-ucalgaryGold transition-all duration-150 ease-linear">
            MonkeySquad
          </h1>
        </Link>
        <ul className="menu">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a>Stuff</a>
            <ul className="submenu bg-ucalgaryRed mt-2">
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
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
