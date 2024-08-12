import { connectDB } from "../../lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

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

    // Sanitize the courseName input
    const sanitizedCourseName = sanitizeInput(courseName);

    const courseRequest = new CourseRequest({
      courseName: sanitizedCourseName,
    });
    await courseRequest.save();

    return NextResponse.json(
      { message: "Course request submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving course request:", error);
    return NextResponse.json(
      { message: "Failed to submit course request." },
      { status: 500 }
    );
  }
}
