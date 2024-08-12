"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "daisyui";

// Utility function to sanitize input
const sanitizeInput = (input) => {
  const sanitized = input.replace(/[<>\/\\;]/g, ""); // Remove potentially harmful characters
  return sanitized;
};

export const getRatingColour = (num) => {
  if (num == null) return { color: "bg-ucalgaryLightGrey", averageRating: "-" };
  if (num < 50) return { color: "bg-ucalgaryRed", averageRating: "Difficult" };
  if (num < 80) return { color: "bg-ucalgaryGold", averageRating: "Middling" };
  if (num <= 100)
    return { color: "bg-green-600", averageRating: "Lighter Load" };

  return { color: "bg-ucalgaryLightGrey", averageRating: "???" };
};

const Page = () => {
  const [searchInput, setSearchInput] = useState("");
  const [reviews, setReviews] = useState([]); // Store the full list of reviews
  const [filteredReviews, setFilteredReviews] = useState([]); // Store the filtered reviews
  const [loading, setLoading] = useState(true);
  const [courseName, setCourseName] = useState("");
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        setReviews(data); // Store the full list in 'reviews'
        setFilteredReviews(data); // Initialize 'filteredReviews' with the full list
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleSearchChange = (e) => {
    const value = sanitizeInput(e.target.value.toLowerCase());
    setSearchInput(value);

    if (value === "") {
      // If the search input is empty, show all reviews
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((review) =>
        sanitizeInput(review.courseName.toLowerCase()).includes(value)
      );
      setFilteredReviews(filtered);
    }
  };

  const handleCourseRequest = async (e) => {
    e.preventDefault();
    const sanitizedCourseName = sanitizeInput(courseName);

    try {
      const response = await fetch("/api/course-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseName: sanitizedCourseName }),
      });

      if (response.ok) {
        setRequestSuccess(true);
        setCourseName("");
        setTimeout(() => setRequestSuccess(false), 3000);
      } else {
        console.error("Failed to submit course request.");
      }
    } catch (error) {
      console.error("Error submitting course request:", error);
    }
  };

  return (
    <div className="p-10 gap-20 mb-12 min-h-screen">
      <div className="bg-ucalgaryRed fixed top-0 left-0 z-10 h-20 w-full"></div>
      <div className="text-black font-extrabold text-5xl pt-24 mb-10 text-center">
        Course Reviews
      </div>
      <div className="self-end w-full flex justify-between items-center px-10 max-md:px-0">
        <label className="input bg-white border-2 border-gray-200 flex items-center gap-2 text-black">
          <input
            type="text"
            className="bg-ucalgaryLightGrey p-2 rounded-md max-md:w-24"
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
        <button
          onClick={() => setModalOpen(true)}
          className="btn bg-ucalgaryRed text-white ml-4"
        >
          Request Course
        </button>
      </div>
      <div
        id="content"
        className="mt-10 text-black flex gap-8 flex-grow flex-wrap justify-center items-center max-md:mx-4"
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-black"></span>
          </div>
        ) : (
          filteredReviews.map((review) => (
            <Link
              href={`/reviews/${encodeURIComponent(
                sanitizeInput(review.courseName)
              )}`}
              key={review.courseName}
            >
              <div className="hover:scale-105 card card-compact text-black w-96 shadow-xl group border-2 transition-all duration-150 ease-in-out">
                <div className="card-body">
                  <h2
                    className={`card-title font-bold text-4xl flex justify-center p-10 rounded-lg bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                      getRatingColour(review.averageRating).color
                    }`}
                  >
                    {sanitizeInput(review.courseName)}
                  </h2>
                  <p className="text-center border-t-2 font-semibold text-xl pt-3 pb-1 border-ucalgaryLightGrey">
                    {getRatingColour(review.averageRating).averageRating}
                  </p>
                  <div className="flex justify-evenly">
                    <div className="flex items-center flex-col">
                      <p>Overall Rating</p>
                      <p
                        className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                          getRatingColour(review.averageRating).color
                        }`}
                      >
                        {review.averageRating != null
                          ? review.averageRating
                          : "-"}
                      </p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p>Time Commitment</p>
                      <p
                        className={`w-20 h-20 flex justify-center items-center rounded-xl text-4xl font-bold text-center bg-opacity-70 transition ease-in-out delay-150 duration-200 ${
                          getRatingColour(review.averageTime).color
                        }`}
                      >
                        {review.averageTime != null ? review.averageTime : "-"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-white">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg text-black">
              Request to Add a Course
            </h3>
            {requestSuccess && (
              <p className="text-green-600 mt-4">
                Request submitted successfully!
              </p>
            )}
            <form onSubmit={handleCourseRequest} className="mt-4">
              <input
                type="text"
                placeholder="Enter course name"
                value={courseName}
                onChange={(e) => setCourseName(sanitizeInput(e.target.value))}
                className="input input-bordered w-full bg-gray-200 text-black"
                required
              />
              <div className="modal-action mt-4">
                <button
                  type="submit"
                  // Keep the hover stuff here, it is needed trust
                  className={`btn bg-ucalgaryGold text-black hover:bg-ucalgaryGold ${
                    !courseName ? "cursor-not-allowed" : ""
                  }`}
                  disabled={!courseName}
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  className="btn bg-ucalgaryRed text-white"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
