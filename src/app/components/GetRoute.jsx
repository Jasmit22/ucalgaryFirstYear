"use client";
import { useState, useRef } from "react";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import Image from "next/image";

const libraries = ["places"]; // Define libraries outside the component

export default function GetRoute() {
  const [transitData, setTransitData] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [fromPlace, setFromPlace] = useState(null); // Add state for fromPlace
  const inputRef = useRef(null);
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const toPlace = "51.0785,-114.1319"; // University of Calgary Coordinates

  transitData ? console.log(transitData) : ""; // Keep for testing

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
    libraries, // Use the libraries array here
  });

  const handleOnPlacesChanged = () => {
    const places = inputRef.current.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const fromLocation = `${place.geometry.location.lat()},${place.geometry.location.lng()}`;
      setFromPlace(fromLocation); // Store the selected place in state
    }
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationString = `${latitude},${longitude}`;
          setFromPlace(locationString); // Set the location as fromPlace
          await fetchTransitData(locationString);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchTransitData = async (fromPlace) => {
    setLoading(true); // Set loading to true
    try {
      const response = await fetch(
        `/api/transit/get-route?fromPlace=${fromPlace}&toPlace=${toPlace}`
      );
      const data = await response.json();
      setTransitData(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching transit data: ", error);
      setTransitData(null);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  async function getLocationAndFetchRoute() {
    if (navigator.geolocation) {
      fetchTransitData(fromPlace);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  const handleSubmit = () => {
    if (fromPlace) {
      getLocationAndFetchRoute();
    } else {
      console.log("Please select a starting location.");
    }
  };

  const handleImageClick = () => {
    window.open("https://transitapp.com/", "_blank");
  };

  const millisecondsToTime = (milliseconds) => {
    const date = new Date(milliseconds);

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className="w-full h-full shadow-xl border flex-col border-gray-200 p-4">
      {isLoaded && (
        <div className="mb-4">
          <div className="flex items-center m-auto gap-4 mb-4 text-center align-middle">
            <Image
              src="/transit-api-badge.svg"
              alt="Transit Badge"
              width={100}
              height={25}
              onClick={handleImageClick} // Add onClick handler
              className="cursor-pointer" // Add pointer cursor for better UX
            />
            <label className="block text-gray-700 text-lg">
              Enter your starting location,{" "}
              <button
                className="text-blue-500 cursor-pointer underline"
                onClick={handleUseMyLocation}
              >
                or use my location.
              </button>
            </label>
          </div>
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef.current = ref)}
            onPlacesChanged={handleOnPlacesChanged}
          >
            <input
              type="text"
              className="w-full bg-white border border-gray-300 rounded-md px-2 py-2 text-gray-700"
              placeholder="Type here..."
            />
          </StandaloneSearchBox>
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-[#30b566] text-white rounded-md"
      >
        Submit
      </button>
      <div className="flex w-full justify-center items-center">
        {loading && (
          <span className="loading loading-spinner loading-lg mb-5"></span>
        )}{" "}
      </div>
      {/* Conditionally render loading state */}
      {transitData && !loading && (
        <div className="mt-4">
          {transitData.plan?.itineraries.length == 0 ? (
            <div
              role="alert"
              className="alert alert-error ml-1 max-w-screen-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Unable to fetch transit details. Please try again!</span>
            </div>
          ) : (
            ""
          )}
          <div className="flex">
            <div className="flex justify-center items-center py-5 whitespace-nowrap font-semibold text-md lg:ml-2">
              <h1>Depart At</h1>
            </div>
          </div>
          <ul className="flex flex-col gap-y-3">
            {transitData.plan?.itineraries[0]?.legs?.map((leg, index) => (
              <li
                key={index}
                className="mb-2 flex flex-row gap-3 lg:gap-5 lg:ml-2"
              >
                <div>
                  <div className="flex justify-center items-center py-5 w-full whitespace-nowrap min-w-16">
                    {millisecondsToTime(leg.startTime)}
                  </div>
                </div>
                {leg.mode == "WALK" ? (
                  <details
                    tabIndex={0}
                    className="collapse collapse-arrow border-base-300 bg-gray-500 border text-zinc-50 max-w-[1200px]"
                  >
                    <summary
                      className="collapse-title text-xl font-semibold"
                      style={{
                        backgroundImage: "url(/go-to/WhiteWalk.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "2em",
                        backgroundPosition: "0.5em center",
                        paddingLeft: "3.5em", // Adjust this value based on the size of the image
                      }}
                    >
                      Walk
                    </summary>
                    <div className="collapse-content">
                      <p className="ml-1">
                        Walk {leg.distance} meters for{" "}
                        {Math.round(leg.duration / 60)} minutes
                        {transitData.plan?.itineraries[0]?.legs[index + 1]?.from
                          ?.name
                          ? ` to ${
                              transitData.plan?.itineraries[0]?.legs[index + 1]
                                ?.from?.name
                            }.`
                          : "."}
                        {transitData.plan?.itineraries[0]?.legs[index + 1] ==
                        transitData.plan?.itineraries[0]?.legs[-1]
                          ? " Arrive at the University of Calgary."
                          : ""}
                      </p>
                    </div>
                  </details>
                ) : leg.mode == "BUS" ? (
                  <details
                    tabIndex={0}
                    className="collapse collapse-arrow border-base-300 bg-amber-500 border text-zinc-50 max-w-[1200px]"
                  >
                    <summary
                      className="collapse-title text-xl font-semibold"
                      style={{
                        backgroundImage: "url(/go-to/WhiteBus.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "2em",
                        backgroundPosition: "0.5em center",
                        paddingLeft: "3.5em", // Adjust this value based on the size of the image
                      }}
                    >
                      Route {leg.route}
                    </summary>
                    <div className="collapse-content">
                      <p>
                        Ride the bus for {Math.round(leg.duration / 60)} minutes
                        ({leg.intermediateStops.length + 1} stops). Exit at{" "}
                        {leg.to.name}.
                      </p>
                    </div>
                  </details>
                ) : leg.route == "Red" ? (
                  <details
                    tabIndex={0}
                    className="collapse collapse-arrow border-base-300 bg-red-500 border text-zinc-50 max-w-[1200px]"
                  >
                    <summary
                      className="collapse-title text-xl font-semibold"
                      style={{
                        backgroundImage: "url(/go-to/WhiteTramway.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "2em",
                        backgroundPosition: "0.5em center",
                        paddingLeft: "3.5em", // Adjust this value based on the size of the image
                      }}
                    >
                      {leg.route} Line
                    </summary>
                    <div className="collapse-content">
                      <p>
                        Ride the train for {Math.round(leg.duration / 60)}{" "}
                        minutes ({leg.intermediateStops.length + 1} stops). Exit
                        at {leg.to.name}.
                      </p>
                    </div>
                  </details>
                ) : (
                  <details
                    tabIndex={0}
                    className="collapse collapse-arrow border-base-300 bg-sky-500 border text-zinc-50 max-w-[1200px]"
                  >
                    <summary
                      className="collapse-title text-xl font-semibold"
                      style={{
                        backgroundImage: "url(/go-to/WhiteTramway.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "2em",
                        backgroundPosition: "0.5em center",
                        paddingLeft: "3.5em", // Adjust this value based on the size of the image
                      }}
                    >
                      {leg.route} Line
                    </summary>
                    <div className="collapse-content">
                      <p>
                        Ride the train for {Math.round(leg.duration / 60)}{" "}
                        minutes ({leg.intermediateStops.length + 1} stops). Exit
                        at {leg.to.name}.
                      </p>
                    </div>
                  </details>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
