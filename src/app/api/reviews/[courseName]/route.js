import { connectDB } from "../../../lib/db";
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

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  // Add other course-specific fields as necessary
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export async function GET(req, { params }) {
  try {
    await connectDB(); // Ensure the database is connected

    const courseName = decodeURIComponent(params.courseName); // Decode the courseName from URL format

    // First, check if the course exists
    const courseExists = await Course.findOne({ courseName });

    if (!courseExists) {
      return NextResponse.json(
        { message: "Course not found." },
        { status: 404 }
      );
    }

    const reviewCount = await Review.countDocuments({ courseName: courseName });

    // Perform an aggregation to calculate the average rating and time commitment for the specific course
    const averages = await Review.aggregate([
      {
        $match: { courseName: courseName }, // Filter reviews by courseName
      },
      {
        $group: {
          _id: "$courseName", // Group by course name
          averageRating: { $avg: "$overallRating" }, // Calculate the average rating
          averageTime: { $avg: "$overallTime" }, // Calculate the average time commitment
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
    ]);

    if (averages.length === 0) {
      // If no reviews are found, return courseName with null values for averageRating and averageTime
      return NextResponse.json(
        {
          courseName: courseName,
          averageRating: null,
          averageTime: null,
          reviewCount: reviewCount,
        },
        { status: 200 }
      );
    }

    const result = {
      ...averages[0],
      reviewCount: reviewCount,
    };

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error fetching course averages:", error);
    return NextResponse.json(
      { message: "Failed to fetch course averages." },
      { status: 500 }
    );
  }
}
