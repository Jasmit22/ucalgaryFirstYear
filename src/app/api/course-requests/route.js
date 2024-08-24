import { connectDB } from "../../lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Define a Mongoose schema and model for courses
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

// Define a Mongoose schema and model for course requests
const courseRequestSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  requestedAt: { type: Date, default: Date.now },
});

const CourseRequest =
  mongoose.models.CourseRequest ||
  mongoose.model("CourseRequest", courseRequestSchema);

// Utility function to sanitize input
const sanitizeInput = (input) => {
  return input.replace(/[<>\/\\;]/g, "").trim();
};

// Utility function to normalize course names for comparison (without removing spaces)
const normalizeCourseName = (courseName) => {
  return courseName.toLowerCase();
};

export async function POST(req) {
  try {
    await connectDB(); // Ensure the database is connected

    const { courseName } = await req.json();

    if (!courseName) {
      return NextResponse.json(
        { message: "Course name is required." },
        { status: 400 }
      );
    }

    // Sanitize and normalize the courseName input
    const sanitizedCourseName = sanitizeInput(courseName);
    const normalizedCourseName = normalizeCourseName(sanitizedCourseName);

    // Check if the course already exists in the courses collection
    const courseExists = await Course.findOne({
      courseName: new RegExp(`^${normalizedCourseName}$`, "i"),
    });

    // Add the course request regardless of whether the course already exists
    const newCourseRequest = new CourseRequest({
      courseName: sanitizedCourseName,
    });
    await newCourseRequest.save();

    if (courseExists) {
      return NextResponse.json(
        { message: "Course is already included, but request was recorded." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "Course request submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving course request:", error);
    return NextResponse.json(
      { message: "Failed to submit course request." },
      { status: 500 }
    );
  }
}
