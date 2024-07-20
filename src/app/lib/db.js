import mongoose from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function connectDB() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("=> using existing mongoose connection");
    return global.mongoose.conn;
  } else {
    const connString = process.env.MONGO_URI;
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
