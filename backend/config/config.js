import mongoose from "mongoose";
import { configDotenv } from "dotenv"

configDotenv()

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATA_BASE_URI);
    console.log("DataBAse is connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
