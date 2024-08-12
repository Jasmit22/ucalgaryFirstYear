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

  const fetchTransitData = async (fromPlace, toPlace) => {
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
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  const error = (error) => {
    console.log("Error: " + error.message);
  };

  async function getLocationAndFetchRoute() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const toPlace = `${position.coords.latitude},${position.coords.longitude}`;
        fetchTransitData(fromPlace, toPlace);
      }, error);
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
      {transitData && <div>{/* Render transit data here */}</div>}
    </div>
  );
}
