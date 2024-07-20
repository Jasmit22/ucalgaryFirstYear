"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const testReviewList = [
  {
    course: "SENG 300",
    desc: "Introduction to Software Engineering",
    rating: 29,
    time: 12,
    tag: ["Computer Science", "Required"],
  },
  {
    course: "CPSC 359",
    desc: "Computing Machinery II",
    rating: 50,
    time: 70,
    tag: ["Computer Science", "Non-Required"],
  },
  {
    course: "PHIL 314",
    desc: "Information Technology Ethics",
    rating: 92,
    time: 99,
    tag: ["Computer Science", "Required"],
  },
  {
    course: "MATH 265",
    desc: "University Calculus I",
    rating: 89,
    time: 92,
    tag: ["Computer Science", "Required"],
  },
  {
    course: "CPSC 231",
    desc: "Introduction to Computer Science for Computer Science Majors I",
    rating: 90,
    time: 86,
    tag: ["Computer Science", "Required"],
  },
  {
    course: "CPSC 331",
    desc: "Data Structures, Algorithms, and Their Analysis",
    rating: 66,
    time: 29,
    tag: ["Computer Science", "Required"],
  },
  {
    course: "CPSC 441",
    desc: "Computer Networks",
    rating: 39,
    time: 72,
    tag: ["Computer Science", "Required"],
  },
];
const Page = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredReviews, setFilteredReviews] = useState(testReviewList);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);

    const filtered = testReviewList.filter(
      (review) =>
        review.course.toLowerCase().includes(value) ||
        review.desc.toLowerCase().includes(value) ||
        review.tag.some((tag) => tag.toLowerCase().includes(value))
    );
    setFilteredReviews(filtered);
  };
  return (
    <div className="p-10 gap-20 mb-12">
      <div className="text-black font-extrabold text-5xl pt-10 text-center">
        Course Reviews
      </div>
      <div className="self-end w-full flex justify-end">
        <label className="input bg-white border-2 border-gray-200 flex items-center gap-2 text-black">
          <input
            type="text"
            className="grow bg-ucalgaryLightGrey p-2 rounded-md"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchChange}
          />
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
      <div
        id="content"
        className="mt-10 text-black flex gap-8 flex-grow flex-wrap justify-center items-center max-md:mx-4"
      >
        {filteredReviews.map((testReviews) => (
          <Link
            href={`/reviews/${testReviews.course}`}
            key={testReviews.course}
          >
            <div className="hover:scale-105 card card-compact text-black w-96 shadow-xl group border-2 transition-all duration-150 ease-in-out">
              <div className="card-body">
                <h2
                  className={`card-title font-bold text-4xl flex justify-center p-10 rounded-lg bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                    testReviews.rating < 40
                      ? "bg-ucalgaryRed"
                      : testReviews.rating < 70
                      ? "bg-ucalgaryGold"
                      : "bg-green-600"
                  }`}
                >
                  {testReviews.course}
                </h2>
                <p className="font-bold text-base text-center flex justify-center">
                  {testReviews.desc}
                </p>
                <p className="text-center border-t-2 font-semibold text-xl pt-3 pb-1 border-ucalgaryLightGrey">
                  {testReviews.rating < 40
                    ? "Difficult"
                    : testReviews.rating < 70
                    ? "Middling"
                    : "Enjoyable"}
                </p>
                <div className="flex justify-evenly">
                  <div className="flex items-center flex-col">
                    <p>Overal Rating</p>
                    <p
                      className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                        testReviews.rating < 40
                          ? "bg-ucalgaryRed"
                          : testReviews.rating < 70
                          ? "bg-ucalgaryGold"
                          : "bg-green-600"
                      }`}
                    >
                      {" "}
                      {testReviews.rating}
                    </p>
                  </div>
                  <div className="flex items-center flex-col">
                    <p>Time Commitment</p>
                    <p
                      className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                        testReviews.time < 40
                          ? "bg-ucalgaryRed"
                          : testReviews.time < 70
                          ? "bg-ucalgaryGold"
                          : "bg-green-600"
                      }`}
                    >
                      {testReviews.time}
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end pt-5">
                  <div className="badge badge-outline">
                    {testReviews.tag[0]}
                  </div>
                  <div className="badge badge-outline">
                    {testReviews.tag[1]}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
