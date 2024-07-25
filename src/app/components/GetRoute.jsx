"use client";
import { useState, useRef } from "react";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";

const libraries = ["places"]; // Define libraries outside the component

export default function GetRoute() {
  const [transitData, setTransitData] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
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
      const fromPlace = `${place.geometry.location.lat()},${place.geometry.location.lng()}`;
      getLocationAndFetchRoute(fromPlace);
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
    } catch (error) {
      console.log("Error fetching transit data: ", error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  const error = (error) => {
    console.log("Error: " + error.message);
  };

  async function getLocationAndFetchRoute(fromPlace) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const toPlace = `${position.coords.latitude},${position.coords.longitude}`;
        fetchTransitData(fromPlace, toPlace);
      }, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className="w-full h-full shadow-xl border flex-col border-gray-200 p-4">
      {isLoaded && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter your starting location,{" "}
            <span
              onClick={handleOnPlacesChanged}
              className="text-blue-500 cursor-pointer underline"
            >
              or use my location.
            </span>
          </label>
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
      {loading && <p className="text-blue-500">Loading...</p>}{" "}
      {/* Conditionally render loading state */}
      {transitData && <div>{/* Render transit data here */}</div>}
    </div>
  );
}
