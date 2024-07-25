"use client";
import { useState } from "react";
import FeatureCard from "./components/FeatureCard";
import { signIn, signOut, useSession } from "next-auth/react";
import { FiBook, FiMapPin, FiMessageSquare, FiStar } from "react-icons/fi";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { data: session, status } = useSession();

  return (
    <main>
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
            <h2 className="text-xl md:text-3xl px-4 mb-5">
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
      <div className="flex flex-col items-center my-10 text-gray-800 gap-5 mx-5">
        <h1 className="text-2xl md:text-4xl font-bold flex justify-center mt-5">
          Why Use CampusConnect?
        </h1>
        <div className="flex w-full justify-center gap-5 lg:gap-10 mt-5 flex-wrap">
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
            title={"Active Student Forum"}
            description={
              "Join discussions, ask questions, and share experiences with peers."
            }
            svg={<FiMessageSquare className="size-6" />}
          />
          <FeatureCard
            title={"Course Ratings"}
            description={
              "Read reviews and ratings for various courses to make informed decisions."
            }
            svg={<FiStar className="size-6" />}
          />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider mt-0 mb-5"></div>
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
