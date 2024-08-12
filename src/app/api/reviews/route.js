import { connectDB } from "../../lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Define a Mongoose schema and model for reviews
const reviewSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  overallRating: { type: Number, required: true },
  overallTime: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

// Define a Mongoose schema and model for courses
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  // Add other course-specific fields as necessary
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

// Utility function to sanitize input
const sanitizeInput = (input) => {
  return input.replace(/[<>\/\\;]/g, "").trim();
};

export async function GET(req) {
  try {
    await connectDB(); // Ensure the database is connected

    // Perform an aggregation to calculate the average rating and time commitment for each course
    const averages = await Course.aggregate([
      {
        $lookup: {
          from: "reviews",
          localField: "courseName",
          foreignField: "courseName",
          as: "courseReviews",
        },
      },
      {
        $unwind: {
          path: "$courseReviews",
          preserveNullAndEmptyArrays: true, // Keep courses with no reviews
        },
      },
      {
        $group: {
          _id: "$courseName", // Group by course name
          averageRating: { $avg: "$courseReviews.overallRating" }, // Calculate the average rating
          averageTime: { $avg: "$courseReviews.overallTime" }, // Calculate the average time commitment
        },
      },
      {
        $project: {
          _id: 0,
          courseName: "$_id", // Rename _id to courseName
          averageRating: { $round: ["$averageRating", 0] }, // Round the average rating to the nearest whole number
          averageTime: { $round: ["$averageTime", 0] }, // Round the average time to the nearest whole number
        },
      },
      {
        $sort: { averageRating: -1 }, // Sort by averageRating in descending order
      },
    ]);

    return NextResponse.json(averages, { status: 200 });
  } catch (error) {
    console.error("Error fetching course averages:", error);
    return NextResponse.json(
      { message: "Failed to fetch course averages." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB(); // Ensure the database is connected

    const { courseName, overallRating, overallTime } = await req.json();

    // Validate the incoming data
    if (!courseName || overallRating == null || overallTime == null) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Sanitize the courseName input
    const sanitizedCourseName = sanitizeInput(courseName);

    // Create a new review document
    const review = new Review({
      courseName: sanitizedCourseName,
      overallRating,
      overallTime,
    });

    // Save the review to the database
    await review.save();

    return NextResponse.json(
      { message: "Review saved successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving review:", error);
    return NextResponse.json(
      { message: "Failed to save the review." },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  // Implementation for updating a review can go here
}

export async function DELETE(req) {
  // Implementation for deleting a review can go here
}
