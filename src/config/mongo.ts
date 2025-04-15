import "dotenv/config";
import mongoose, { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  mongoose.set('strictQuery', false)
  const DB_URL = <string>process.env.DB_URL;
  await connect(DB_URL);
}

export default dbConnect;