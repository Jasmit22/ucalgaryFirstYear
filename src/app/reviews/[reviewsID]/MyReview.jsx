import React, { useEffect, useState } from "react";
import { getRatingColour } from "../utils";
import CustomAlert from "../../components/CustomAlert"; // Import the custom alert component

const MyReview = ({ courseName }) => {
  const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const [hoveredButton, setHoveredButton] = useState(null);
  const [overallRating, setOverallRating] = useState(null);
  const [overallTime, setOverallTime] = useState(null);
  const [activeType, setActiveType] = useState("overall");
  const [alertMessage, setAlertMessage] = useState(""); // State for the custom alert message
  const [alertType, setAlertType] = useState(""); // State for the custom alert type

  const [reviewDone, setReviewDone] = useState(false);
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

  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem("reviewed"));

    if (reviews && reviews.length > 0) {
      const reviewFound = reviews.find(
        (review) => review.courseName === courseName
      );
      setReviewDone(reviewFound);
      if (reviewFound !== undefined) {
        setOverallRating(numbers.indexOf(reviewFound.overallRating)); // Convert value to index
        setOverallTime(numbers.indexOf(reviewFound.overallTime)); // Convert value to index
      }
    }
  }, [overallRating, overallTime]);

  const handleSaveReview = async () => {
    if (overallRating === null || overallTime === null) {
      setAlertMessage(
        "Please provide both Overall Rating and Time Commitment."
      );
      setAlertType("failure");
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
        setAlertMessage("Review saved successfully!");
        setAlertType("success");

        const reviewedArray =
          JSON.parse(localStorage.getItem("reviewed")) || [];
        reviewedArray.push(reviewData);
        localStorage.setItem("reviewed", JSON.stringify(reviewedArray));

        // Reset the form
        setOverallRating(null);
        setOverallTime(null);
        setActiveType("overall");
        window.location.href = "/reviews";
      } else {
        console.log(response);
        setAlertMessage("Failed to save the review.");
        setAlertType("failure");
      }
    } catch (error) {
      console.error("Error saving the review:", error);
      setAlertMessage("An error occurred while saving the review.");
      setAlertType("failure");
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
      <div className="flex justify-center">
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

      <div className="flex mb-2 text-black items-center max-md:px-6 md:flex-row flex-col">
        <div className="mr-0 md:mr-10 ">
          <p className="flex justify-start md:pt-0 pt-4">{reviewHeading}:</p>

          <div className="flex flex-row justify-between pt-4">
            {activeType === "overall" && (
              <>
                <span>{getRatingColour(0).averageRating}</span>
                <span>{getRatingColour(70).averageRating}</span>
                <span>{getRatingColour(100).averageRating}</span>
              </>
            )}
            {activeType !== "overall" && (
              <>
                <span>{getRatingColour(0).commitment}</span>
                <span>{getRatingColour(70).commitment}</span>
                <span>{getRatingColour(100).commitment}</span>
              </>
            )}
          </div>

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
                className={`${colorClass} md:p-2 p-0 md:w-10 md:h-10 w-7 h-7 ${
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
                disabled={reviewDone}
              >
                <span className="md:text-base text-xs">{num}</span>
              </button>
            );
          })}
        </div>
        <div className="flex">
          <div className="flex items-center flex-col md:pt-10 pt-4">
            <p className="text-center">Your Review:</p>
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
            {ratingStuff && activeType === "overall" && (
              <p>{ratingStuff.averageRating}</p>
            )}
            {ratingStuff && activeType !== "overall" && (
              <p>{ratingStuff.commitment}</p>
            )}
            {!ratingStuff && <p>--</p>}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {!reviewDone && (
          <button
            onClick={handleSaveReview}
            className="btn bg-ucalgaryRed text-white rounded-xl transition-all duration-200 ease-in-out hover:bg-ucalgaryGold hover:text-black"
          >
            Save Review
          </button>
        )}

        {reviewDone && (
          <div className="text-black">You have already reviewed this!</div>
        )}
      </div>

      {/* Custom Alert Modal */}
      <CustomAlert
        message={alertMessage}
        type={alertType}
        onClose={() => setAlertMessage("")}
      />
    </div>
  );
};

export default MyReview;
