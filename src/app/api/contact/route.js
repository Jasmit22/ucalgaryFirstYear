import { connectDB } from "../../lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Define a Mongoose schema and model for messages
const messageSchema = new mongoose.Schema({
  email: { type: String, required: true },
  description: { type: String, required: true },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export async function GET(req) {
  // Implementation for updating a message can go here
}

export async function POST(req) {
  try {
    await connectDB(); // Ensure the database is connected

    const { email, description } = await req.json();

    // Validate the incoming data
    if (!email || !description) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Create a new message document
    const message = new Message({
      email,
      description,
    });

    // Save the message to the database
    await message.save();

    return NextResponse.json(
      { message: "Message saved successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { message: "Failed to save the message." },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  // Implementation for updating a message can go here
}

export async function DELETE(req) {
  // Implementation for deleting a message can go here
}
