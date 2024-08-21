import { connectDB } from "../../lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import Filter from "bad-words"; // Import bad-words

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

// Utility function to normalize course names for comparison
const normalizeCourseName = (courseName) => {
  return courseName.replace(/\s+/g, "").toLowerCase();
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

    // Initialize the profanity filter
    // const filter = new Filter();

    // Check for profanity in the course name
    // if (filter.isProfane(courseName)) {
    //   return NextResponse.json(
    //     { message: "Course name contains inappropriate language." },
    //     { status: 400 }
    //   );
    // }

    // Sanitize and normalize the courseName input
    const sanitizedCourseName = sanitizeInput(courseName);
    const normalizedCourseName = normalizeCourseName(sanitizedCourseName);

    // Fetch all courses and check for a match with the normalized course name
    const courses = await Course.find({});
    const courseExists = courses.some(
      (course) =>
        normalizeCourseName(course.courseName) === normalizedCourseName
    );

    if (courseExists) {
      return NextResponse.json(
        { message: "Course is already included." },
        { status: 409 }
      );
    }

    // If no matching course found, add the new course
    const newCourse = new Course({
      courseName: sanitizedCourseName,
    });
    await newCourse.save();

    return NextResponse.json(
      { message: "Course added successfully." },
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
