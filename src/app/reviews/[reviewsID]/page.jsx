"use client";
import React from "react";
import MyReview from "./MyReview";
import { getRatingStuff } from "../page";
import Link from "next/link";

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
const Page = ({ params }) => {
  const { reviewsID } = params;
  const decodedCourseName = decodeURIComponent(reviewsID);
  const courseData = testReviewList.find(
    (course) => course.course === decodedCourseName
  );

  if (!courseData) {
    return (
      <div className="mb-12 min-h-screen flex flex-col items-center justify-center">
        <div className="text-black font-extrabold text-5xl text-center mb-4">
          Course Not Found
        </div>
        <Link
          href="/"
          className="p-4 bg-ucalgaryGold rounded-2xl text-black font-bold"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="gap-10 flex flex-col items-center min-h-screen m-auto justify-center bg-slate-200">
      <div className="text-black font-extrabold text-5xl text-center">
        {courseData.course}
      </div>
      <div className="flex text-black justify-evenly items-center">
        <div className="flex gap-10">
          <div className="flex items-center flex-col">
            <p>Overall Rating</p>
            <p
              className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                getRatingStuff(courseData.rating).color
              }`}
            >
              {" "}
              {courseData.rating}
            </p>
          </div>
          <div className="flex items-center flex-col">
            <p>Time Commitment</p>
            <p
              className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                getRatingStuff(courseData.rating).color
              }`}
            >
              {courseData.time}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <MyReview courseName={courseData.course} />
      </div>
    </div>
  );
};

export default Page;
