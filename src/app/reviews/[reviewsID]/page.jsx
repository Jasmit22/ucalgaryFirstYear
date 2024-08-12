"use client";
import React, { useState, useEffect } from "react";
import MyReview from "./MyReview";
import { getRatingColour } from "../page";
import Link from "next/link";

const Page = ({ params }) => {
  const { reviewsID } = params;
  const decodedCourseName = decodeURIComponent(reviewsID);

  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(
          `/api/reviews/${encodeURIComponent(decodedCourseName)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        const data = await response.json();
        setCourseData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [decodedCourseName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error || !courseData) {
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

  const { courseName, averageRating, averageTime } = courseData;

  return (
    <div className="gap-10 flex flex-col items-center min-h-screen m-auto justify-center bg-slate-200">
      <div className="text-black font-extrabold text-5xl text-center">
        {courseName}
      </div>
      <div className="flex text-black justify-evenly items-center">
        <div className="flex gap-10">
          <div className="flex items-center flex-col">
            <p>Overall Rating</p>
            <p
              className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                getRatingColour(averageRating).color
              }`}
            >
              {averageRating !== null ? averageRating : "N/A"}
            </p>
          </div>
          <div className="flex items-center flex-col">
            <p>Time Commitment</p>
            <p
              className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                getRatingColour(averageRating).color
              }`}
            >
              {averageTime !== null ? averageTime : "N/A"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <MyReview courseName={courseName} />
      </div>
    </div>
  );
};

export default Page;
