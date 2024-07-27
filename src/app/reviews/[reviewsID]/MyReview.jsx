import React from "react";
import { useState } from "react";
import { getRatingStuff } from "../page";

const MyReview = ({ type }) => {
  const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const [hoveredButton, setHoveredButton] = useState(null);
  const [rating, setRating] = useState(null);
  let ratingStuff = null;

  const reviewHeading =
    type === "overall" ? "Overall Rating" : "Time Commitment";

  if (rating !== null && rating !== undefined) {
    ratingStuff = getRatingStuff(numbers[rating]);
  } else if (hoveredButton !== null && hoveredButton !== undefined) {
    ratingStuff = getRatingStuff(numbers[hoveredButton]);
  }
  return (
    <div className="flex text-black justify-evenly items-center w-2/4">
      <div>
        <div className="">
          My {reviewHeading} Review: <br></br>
          {ratingStuff
            ? ratingStuff.rating
            : "Hover and click to solidify review"}
        </div>
        {numbers.map((num, index) => {
          let colorClass;

          if (ratingStuff === null) {
            colorClass = getRatingStuff(num).color;
          } else if (index <= hoveredButton && hoveredButton !== null) {
            colorClass = getRatingStuff(numbers[hoveredButton]).color;
          } else if (index > hoveredButton && hoveredButton !== null) {
            colorClass = "bg-ucalgaryLightGrey";
          } else if (index <= rating && rating !== null) {
            colorClass = getRatingStuff(numbers[rating]).color;
          } else if (index > rating && rating !== null) {
            colorClass = "bg-ucalgaryLightGrey";
          }

          return (
            <button
              key={num}
              className={`${colorClass} p-2 w-10 ${
                (hoveredButton !== null && index <= hoveredButton) ||
                (rating !== null && index <= rating)
                  ? "bg-opacity-70"
                  : "bg-opacity-40"
              } hover:bg-opacity-70`}
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => setRating(index)}
            >
              {num}
            </button>
          );
        })}
      </div>
      <div className="flex gap-10">
        <div className="flex items-center flex-col">
          <p>{reviewHeading}</p>
          <p
            className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
              numbers[hoveredButton]
                ? getRatingStuff(numbers[hoveredButton]).color
                : getRatingStuff(numbers[rating]).color
            }`}
          >
            {" "}
            {numbers[hoveredButton] || numbers[rating]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
