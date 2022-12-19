import mongoose from "mongoose";

export const connect = () => {
  return mongoose.connect(process.env.MONGO_URL);
};
