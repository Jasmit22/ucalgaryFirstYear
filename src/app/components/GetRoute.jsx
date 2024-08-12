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
              <span className="text-blue-500 cursor-pointer underline">
                or use my location.
              </span>
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
      {loading && <p className="text-black font-semibold mt-2">Loading...</p>}{" "}
      {/* Conditionally render loading state */}
      {transitData && (
        <div className="mt-4">
          <h3 className="font-semibold text-2xl mb-5 ml-1">Transit Details:</h3>
          <ul className="flex flex-col gap-y-3">
            {transitData.plan?.itineraries[0]?.legs?.map((leg, index) => (
              <li
                key={index}
                className="mb-2 flex flex-row gap-3 lg:gap-5 lg:ml-2"
              >
                <div>
                  <div className="flex justify-center items-center py-5 w-full whitespace-nowrap">
                    {millisecondsToTime(leg.startTime)}
                  </div>
                </div>
                {leg.mode == "WALK" ? (
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border-base-300 bg-gray-500 border text-zinc-50 max-w-[1200px]"
                  >
                    <div
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
                    </div>
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
                      </p>
                    </div>
                  </div>
                ) : leg.mode == "BUS" ? (
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border-base-300 bg-amber-500 border text-zinc-50 max-w-[1200px]"
                  >
                    <div
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
                    </div>
                    <div className="collapse-content">
                      <p>Random text</p>
                    </div>
                  </div>
                ) : (
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border-base-300 bg-sky-500 border text-zinc-50 max-w-[1200px]"
                  >
                    <div
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
                    </div>
                    <div className="collapse-content">
                      <p>Random text</p>
                    </div>
                  </div>
                )}
                {/* <p>
                  <strong>{leg.mode}</strong> from{" "}
                  {leg.from.name || `${leg.from.lat}, ${leg.from.lon}`} to{" "}
                  {leg.to.name || `${leg.to.lat}, ${leg.to.lon}`}
                </p>
                <p>
                  Distance: {leg.distance} meters, Duration:{" "}
                  {Math.round(leg.duration / 60)} minutes
                </p>
                {leg.agencyName && (
                  <p>
                    Agency: {leg.agencyName}, Route: {leg.route}
                  </p>
                )} */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
