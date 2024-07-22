import { connectDB } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const db = await connectDB();
  console.log("=> db connection name:", db.connection.name);
  return new NextResponse({ database: db.connection.name });
}

export async function POST(req, res) {}

export async function PUT(req, res) {}

export async function DELETE(req, res) {}
