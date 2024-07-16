import Link from "next/link";
import gradientLogo2 from "../../../public/campusconnect3.webp";
import Image from "next/image";

export default function header() {
  return (
    <header className="flex sticky top-0 shadow-lg z-50">
      <nav className="flex items-center justify-between bg-ucalgaryRed text-white py-4 px-4 sticky top-0 z-50 text-lg w-full">
        <Link
          href="/"
          className="text-2xl font-bold flex gap-3 items-center ml-4"
        >
          <Image src={gradientLogo2} alt="CampusConnect Logo" width={50} />
          <h1 className="hover:text-ucalgaryGold transition-all duration-150 ease-linear text-3xl font-bold">
            Campus Connect
          </h1>
        </Link>
      </nav>
    </header>
  );
}
