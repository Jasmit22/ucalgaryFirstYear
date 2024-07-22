import { useState } from "react";

export default function GetRoute() {
  const [transitData, setTransitData] = useState(null);

  const fetchTransitData = async (position) => {
    const fromPlace = `${position.coords.latitude},${position.coords.longitude}`;
    const response = await fetch(
      `/api/transit/get-route?fromPlace=${fromPlace}&toPlace=51.079812941757964, -114.13492437368151`
    );
    const data = await response.json();
    console.log(data);
    setTransitData(data);
  };

  const error = (error) => {
    console.log("Error: " + error.message);
  };

  async function getLocation() {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(fetchTransitData, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className="w-96 h-40 shadow-xl border border-gray-200">
      <button onClick={getLocation} className="bg-black">
        Get Route
      </button>
    </div>
  );
}
