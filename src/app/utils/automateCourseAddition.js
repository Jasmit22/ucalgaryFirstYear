require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");

// Global mongoose object to reuse connections
global.mongoose = {
  conn: null,
  promise: null,
};

// Function to connect to the MongoDB database
async function connectDB() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("=> using existing mongoose connection");
    return global.mongoose.conn;
  } else {
    const connString = process.env.MONGO_URI; // Ensure your MongoDB URI is stored in environment variables
    const promise = mongoose.connect(connString, {
      autoIndex: true,
    });

    global.mongoose = {
      conn: await promise,
      promise,
    };

    console.log("=> new mongoose connection");

    return await promise;
  }
}

// Schema definitions
const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

const courseRequestSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  requestedAt: { type: Date, default: Date.now },
});

const CourseRequest =
  mongoose.models.CourseRequest ||
  mongoose.model("CourseRequest", courseRequestSchema);

// Utility function to normalize course names for comparison
const normalizeCourseName = (courseName) => {
  return courseName.replace(/\s+/g, "").toLowerCase();
};

// Function to automate course addition
async function automateCourseAddition() {
  try {
    await connectDB();

    const courseRequests = await CourseRequest.find({});

    for (const request of courseRequests) {
      const normalizedCourseName = normalizeCourseName(request.courseName);

      const existingCourse = await Course.findOne({
        courseName: new RegExp(`^${normalizedCourseName}$`, "i"),
      });

      if (existingCourse) {
        console.log(`Duplicate entry found: ${request.courseName}`);
      } else {
        const newCourse = new Course({
          courseName: request.courseName,
        });
        await newCourse.save();
        console.log(`Course added: ${request.courseName}`);
      }

      await CourseRequest.findByIdAndDelete(request._id);
    }

    console.log("Course requests processed successfully.");
  } catch (error) {
    console.error("Error processing course requests:", error);
  }
}

// Export the function to allow external triggering
module.exports = { automateCourseAddition };

// You can run this script directly by invoking the function if needed
if (require.main === module) {
  automateCourseAddition()
    .then(() => {
      console.log("Automation completed.");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error during automation:", error);
      process.exit(1);
    });
}
