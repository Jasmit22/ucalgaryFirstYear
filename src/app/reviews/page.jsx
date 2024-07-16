import React from "react";
import Link from "next/link";

const testReviewList = [
  {
    course: "SENG 300",
    rating: 2,
  },
  {
    course: "cpsc 342",
    rating: 5,
  },
  {
    course: "lol",
    rating: 10,
  },
];
const page = () => {
  return (
    <div className="flex items-center flex-col p-10 gap-20">
      <div className="text-black text-5xl">Reviews</div>
      <div className="self-end w-full flex justify-end">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex flex-row gap-5">
        {testReviewList.map((testReviews) => (
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{testReviews.course}</h2>
              <p>{testReviews.rating}/10</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
