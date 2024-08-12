import { connectDB } from "../../lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Define a Mongoose schema and model for reviews
const reviewSchema = new mongoose.Schema({
  ipAddress: { type: String, required: true }, // Using IP address as the identifier
  courseName: { type: String, required: true },
  overallRating: { type: Number, required: true },
  overallTime: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export async function GET(req) {
  await connectDB(); // Ensure the database is connected
  return NextResponse.json({ message: "Connected to database" });
}

export async function POST(req) {
  try {
    await connectDB(); // Ensure the database is connected

    const { courseName, overallRating, overallTime } = await req.json();

    // Extract the IP address from the request headers
    const ipAddress =
      req.headers.get("x-forwarded-for") || req.headers.get("remote-addr");

    // Validate the incoming data
    if (
      !ipAddress ||
      !courseName ||
      overallRating == null ||
      overallTime == null
    ) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Calculate the time 15 minutes ago from now
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);

    // Count how many reviews this IP address has submitted in the last 15 minutes
    const reviewCount = await Review.countDocuments({
      ipAddress: ipAddress,
      createdAt: { $gte: fifteenMinutesAgo },
    });

    if (reviewCount >= 5) {
      return NextResponse.json(
        {
          message:
            "Rate limit exceeded. You can only submit 5 reviews every 15 minutes.",
        },
        { status: 429 }
      );
    }

    // Create a new review document
    const review = new Review({
      ipAddress,
      courseName,
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
