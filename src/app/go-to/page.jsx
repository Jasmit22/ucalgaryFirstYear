"use client";
import Image from "next/image";
import Link from "next/link";

export default function GoToPage() {
  const showPosition = (position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  };

  const error = (error) => {
    console.log("Error: " + error.message);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

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
            <p className="mb-5">
              Not everyone has experience with public transit. The City provides
              both bus and train services to get you to school.
            </p>
            <Link
              className="btn bg-ucalgaryRed text-gray-100 border-none hover:bg-red-800 btn-circle btn-wide mb-5 font-bold"
              href="#content"
              onClick={getLocation}
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
      <div
        id="content"
        className="mt-10 text-black flex gap-8 justify-center items-center max-md:mx-4 mb-10"
      >
        <div className="flex">
          <figure>
            <Image
              className="w-full object-cover overflow-hidden"
              src="/go-to/transit-app.png"
              alt="Transit App"
              width={100}
              height={100}
            />
          </figure>
          <div className="flex flex-col m-auto ml-6">
            <h2 className="text-3xl font-bold">Download the Transit App</h2>
            <p className="text-lg">
              The transit app helps you plan your trip and gives you live
              updates and estimated arrival times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
