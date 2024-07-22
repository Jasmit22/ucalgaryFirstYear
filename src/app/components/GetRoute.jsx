"use client";
import { useState, useRef } from "react";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";

const libraries = ["places"];

export default function GetRoute() {
  const [transitData, setTransitData] = useState(null);
  const inputRef = useRef(null);
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
    libraries,
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
    const response = await fetch(
      `/api/transit/get-route?fromPlace=${fromPlace}&toPlace=${toPlace}`
    );
    const data = await response.json();
    console.log(data);
    setTransitData(data);
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
    <div className="w-full h-full shadow-xl border border-gray-200">
      {isLoaded && (
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handleOnPlacesChanged}
        >
          <input
            type="text"
            className="w-full bg-white border border-gray-300 rounded-md px-2 py-1 text-gray-400"
            placeholder="Type your address here..."
          />
        </StandaloneSearchBox>
      )}
      <button
        onClick={() => handleOnPlacesChanged()}
        className="bg-black text-white p-2 mt-2"
      >
        Get From My Location
      </button>
    </div>
  );
}
