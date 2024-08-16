/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import FeatureCard from "./components/FeatureCard";
import { signIn, signOut, useSession } from "next-auth/react";
import { FiBook, FiMapPin, FiStar, FiCompass } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { data: session, status } = useSession();

  return (
    <main className="flex flex-col">
      <div
        className="min-h-screen hero"
        style={{ backgroundImage: "url(/tfdl.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 backdrop-blur-xs"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-5xl md:text-7xl font-extrabold text-ucalgaryGold uppercase">
              Explore the University of Calgary
            </h1>
            <h2 className="text-xl md:text-3xl px-4 mb-5 text-white">
              Your go-to resource for navigating campus life.
            </h2>

            {status == "authenticated" ? (
              <button
                className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-wide mb-5 font-bold shadow-2xl"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-wide mb-5 font-bold shadow-2xl"
                onClick={() =>
                  signIn(undefined, { callbackUrl: "http://localhost:3000/" })
                }
              >
                Get started now
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12 mb-20 text-gray-800 gap-10 mx-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center mt-5 tracking-tight">
          Why CampusConnect?
        </h1>
        <div className="flex flex-col lg:flex-row mt-7 md:mt-12 lg:mt-20 gap-5 md:gap-10 lg:gap-36 xl:gap-52 items-center lg:items-start font-semibold">
          <Image
            src={"/svg/studySpots.svg"}
            alt=""
            width={1000}
            height={1000}
            className="w-52 lg:w-80"
          />
          <div className="flex flex-col lg:mt-8">
            <h2 className="text-lg md:text-xl lg:text-3xl tracking-wide">
              Best Study Spots
            </h2>
            <p className="mt-2 md:mt-3 lg:mt-4 tracking-normal leading-relaxed lg:tracking-wide lg:leading-loose text-md max-w-sm font-medium">
              Discover the top study spots tailored to your needs. Whether you
              prefer a quiet space in the library or a vibrant café atmosphere,
              there's a perfect spot for everyone.
            </p>
            <Link
              className="btn bg-ucalgaryRed text-white border-none hover:bg-red-800 btn-wide mb-5 font-bold shadow-2xl mt-3 md:mt-5"
              href={"/study-spots"}
            >
              View Study Spots
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-7 md:mt-12 lg:mt-20 gap-5 md:gap-10 lg:gap-36 xl:gap-52 items-center lg:items-start font-semibold">
          <Image
            src={"/svg/map.svg"}
            alt=""
            width={1000}
            height={1000}
            className="block w-52 lg:w-80 lg:hidden"
          />
          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl lg:text-3xl tracking-wide">
              Campus Guide
            </h2>
            <p className="mt-2 md:mt-3 lg:mt-4 tracking-normal leading-relaxed lg:tracking-wide lg:leading-loose text-md max-w-sm font-medium">
              Navigate the University of Calgary campus with ease by following
              our comprehensive directions. Whether you're trying to locate
              classrooms, dining areas, or key campus landmarks, we've got the
              tips and shortcuts to help you get there smoothly.
            </p>
          </div>
          <Image
            src={"/svg/map.svg"}
            alt=""
            width={1000}
            height={1000}
            className="hidden w-52 lg:w-80 lg:block"
          />
        </div>
        <div className="flex flex-col lg:flex-row mt-7 md:mt-12 lg:mt-20 gap-5 md:gap-10 lg:gap-36 xl:gap-52 items-center lg:items-start font-semibold">
          <Image
            src={"/svg/review.svg"}
            alt=""
            width={1000}
            height={1000}
            className="w-52 lg:w-80"
          />
          <div className="flex flex-col">
            <h2 className="text-lg md:text-xl lg:text-3xl tracking-wide">
              Course Ratings
            </h2>
            <p className="mt-2 md:mt-3 lg:mt-4 tracking-normal leading-relaxed lg:tracking-wide lg:leading-loose text-md max-w-sm font-medium">
              Explore detailed course ratings to help you choose the right
              classes at the University of Calgary. Gain insight into student
              experiences, and course difficulty to make informed decisions.
            </p>
            <Link
              className="btn bg-ucalgaryRed text-white border-none hover:bg-red-800 btn-wide mb-5 font-bold shadow-2xl mt-3 md:mt-5"
              href={"/reviews"}
            >
              View Ratings
            </Link>
          </div>
        </div>
        {/* <div className="flex w-full justify-center gap-5 lg:gap-10 mt-5 flex-wrap">
          <FeatureCard
            title={"Best Study Spots"}
            description={"Discover the top study spots tailored to your needs."}
            svg={<FiBook className="size-6" />}
          />
          <FeatureCard
            title={"Campus Guide"}
            description={
              "Find the best routes and tips for getting around campus."
            }
            svg={<FiMapPin className="size-6" />}
          />
          <FeatureCard
            title={"Course Ratings"}
            description={
              "Read reviews and ratings for various courses to make informed decisions."
            }
            svg={<FiStar className="size-6" />}
          />
          <FeatureCard
            title={"Informative FAQ"}
            description={"Get answers to common questions for new students."}
            svg={<FiCompass className="size-6" />}
          />
        </div> */}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white p-5 rounded-lg z-10 max-w-lg w-full mx-5">
            <h3 className="text-3xl text-black text-center font-bold mb-2">
              Disclaimer
            </h3>
            <p className="mb-4 text-center text-black">
              This website is not affiliated with the University of Calgary. It
              is created for informational purposes only.
            </p>
            <button
              className="btn bg-ucalgaryGold hover:bg-ucalgaryGold text-black border-none hover:px-8 transition-all duration-150 ease-in-out font-bold shadow-2xl flex justify-center mx-auto"
              onClick={() => setIsModalOpen(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
