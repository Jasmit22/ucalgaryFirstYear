import React, { useState } from "react";
import { getRatingColour } from "../page";

const MyReview = ({ courseName }) => {
  const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const [hoveredButton, setHoveredButton] = useState(null);
  const [overallRating, setOverallRating] = useState(null);
  const [overallTime, setOverallTime] = useState(null);
  const [activeType, setActiveType] = useState("overall");
  let ratingStuff = null;

  const reviewHeading =
    activeType === "overall" ? "Overall Rating" : "Time Commitment";

  if (hoveredButton !== null) {
    ratingStuff = getRatingColour(numbers[hoveredButton]);
  } else if (activeType === "overall" && overallRating !== null) {
    ratingStuff = getRatingColour(numbers[overallRating]);
  } else if (activeType === "time" && overallTime !== null) {
    ratingStuff = getRatingColour(numbers[overallTime]);
  }

  const handleSaveReview = async () => {
    if (overallRating === null || overallTime === null) {
      alert("Please provide both Overall Rating and Time Commitment.");
      return;
    }

    const reviewData = {
      courseName,
      overallRating: numbers[overallRating],
      overallTime: numbers[overallTime],
    };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        alert("Review saved successfully!");
        window.location.href = "/reviews";

        // Reset the form
        setOverallRating(null);
        setOverallTime(null);
        setActiveType("overall");
      } else {
        console.log(response);
        alert("Failed to save the review.");
      }
    } catch (error) {
      console.error("Error saving the review:", error);
      alert("An error occurred while saving the review.");
    }
  };

  const handleRatingClick = (index) => {
    if (activeType === "overall") {
      setOverallRating(index);
    } else {
      setOverallTime(index);
    }
  };

  return (
    <div className="p-4 rounded-xl shadow-md bg-slate-100">
      <div className="flex justify-center mb-4">
        <div className="relative inline-flex">
          <button
            onClick={() => setActiveType("overall")}
            className={`px-4 py-2 rounded-l-lg border border-r-0 ${
              activeType === "overall"
                ? "bg-ucalgaryGold text-black"
                : "bg-gray-200 text-black"
            }`}
          >
            Overall Rating
          </button>
          <button
            onClick={() => setActiveType("time")}
            className={`px-4 py-2 rounded-r-lg border ${
              activeType === "time"
                ? "bg-ucalgaryGold text-black"
                : "bg-gray-200 text-black"
            }`}
          >
            Time Commitment
          </button>
        </div>
      </div>

      <div className="flex mb-2 text-black items-center max-md:px-10">
        <div className="mr-10 max-md:mr-4">
          <p className="flex justify-start">
            {reviewHeading}: {ratingStuff ? ratingStuff.rating : ""}
          </p>
          {numbers.map((num, index) => {
            let colorClass;

            if (hoveredButton !== null && index <= hoveredButton) {
              colorClass = getRatingColour(numbers[hoveredButton]).color;
            } else if (index > hoveredButton && hoveredButton !== null) {
              colorClass = "bg-ucalgaryLightGrey";
            } else if (
              activeType === "overall" &&
              overallRating !== null &&
              index <= overallRating
            ) {
              colorClass = getRatingColour(numbers[overallRating]).color;
            } else if (
              activeType === "time" &&
              overallTime !== null &&
              index <= overallTime
            ) {
              colorClass = getRatingColour(numbers[overallTime]).color;
            } else {
              colorClass = "bg-ucalgaryLightGrey";
            }

            return (
              <button
                key={num}
                className={`${colorClass} p-2 w-10 ${
                  (hoveredButton !== null && index <= hoveredButton) ||
                  (activeType === "overall" &&
                    overallRating !== null &&
                    index <= overallRating) ||
                  (activeType === "time" &&
                    overallTime !== null &&
                    index <= overallTime)
                    ? "bg-opacity-70"
                    : "bg-opacity-40"
                } hover:bg-opacity-70 transition-all duration-200 ease-in-out`}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleRatingClick(index)}
              >
                {num}
              </button>
            );
          })}
        </div>
        <div className="flex">
          <div className="flex items-center flex-col">
            <p
              className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out duration-200 ${
                ratingStuff ? ratingStuff.color : "bg-ucalgaryLightGrey"
              }`}
            >
              {hoveredButton !== null
                ? numbers[hoveredButton]
                : activeType === "overall" && overallRating !== null
                ? numbers[overallRating]
                : activeType === "time" && overallTime !== null
                ? numbers[overallTime]
                : ""}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSaveReview}
          className="btn bg-ucalgaryRed text-white rounded-xl transition-all duration-200 ease-in-out hover:bg-ucalgaryGold hover:text-black"
        >
          Save Review
        </button>
      </div>
    </div>
  );
};

export default MyReview;
