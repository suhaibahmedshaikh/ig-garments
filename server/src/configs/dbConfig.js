import mongoose from "mongoose";

import { MONGO_URI } from "./serverConfig.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(
      `Successfully connected to MongoDB Database 👍 on host ${mongoose.connection.host}`
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
