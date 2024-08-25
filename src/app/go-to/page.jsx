"use client";
import Link from "next/link";
import GetRoute from "../components/GetRoute";
import Image from "next/image";

export default function GoToPage() {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/calgary-transit.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-70 backdrop-blur-sm"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold tracking-tight text-white">
              How do I get there?
            </h1>
            <p className="mb-5 text-lg">
              Not everyone has experience with public transit. The City provides
              both bus and train services to get you to school.
            </p>
            <Link
              className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-circle btn-wide mb-5 font-bold"
              href="#content"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
      <div
        id="content"
        className="mt-10 text-black flex gap-8 justify-center items-center max-md:mx-4 mb-10 flex-col pt-28"
      >
        <div className="w-3/4 max-md:w-full">
          <h1 className="font-bold text-3xl mb-3">
            Need Transit directions from your location?
          </h1>
          <GetRoute />
        </div>
        <div className="flex flex-col text-black w-3/4 max-md:w-full my-8 gap-y-5">
          <h1 className="font-bold text-3xl mb-3">Common Questions</h1>
          <div className="flex flex-col gap-5 xl:flex-row justify-between">
            <div className="flex flex-col gap-2">
              <div className="chat chat-start">
                <div className="chat-bubble bg-ucalgaryDarkOrange text-white">
                  Do you have to pay for transit?
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble bg-ucalgaryRed text-white">
                  No, your UPass is included in your student fees, which gives
                  you unlimited access to Calgary Transit services.
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble bg-ucalgaryDarkOrange text-white">
                  How far is University Station from campus?
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble bg-ucalgaryRed text-white">
                  University Station is located right next to the University of
                  Calgary campus, just a 5 minute walk away.
                </div>
              </div>
            </div>
            <figure className="hidden xl:block xl:max-w-xl">
              <Image
                src="/ctrain.jpeg"
                alt="Ctrain"
                width={1000}
                height={1000}
                className="rounded-2xl"
              />
            </figure>
          </div>
          <div className="flex flex-col gap-5 xl:flex-row justify-between xl:mt-16">
            <figure className="hidden xl:block xl:max-w-xl">
              <Image
                src="/universityStation.jpg"
                alt="University Station"
                width={1000}
                height={1000}
                className="rounded-2xl"
              />
            </figure>
            <div className="flex flex-col gap-2">
              <div className="chat chat-start">
                <div className="chat-bubble bg-ucalgaryDarkOrange text-white">
                  Can I opt out of the UPass if I drive to campus?
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble bg-ucalgaryRed text-white">
                  No, full-time students are automatically enrolled in the UPass
                  program and cannot opt out, even if they prefer to drive.
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble bg-ucalgaryDarkOrange text-white">
                  Can I share my UPass with a friend or family member?
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble bg-ucalgaryRed text-white">
                  No, the UPass is non-transferable and must only be used by the
                  student to whom it is issued.
                </div>
              </div>
            </div>
          </div>
          <figure className="xl:hidden">
            <Image
              src="/ctrain.jpeg"
              alt="Ctrain"
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
