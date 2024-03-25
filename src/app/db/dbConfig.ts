import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const conenection = mongoose.connection;

    conenection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    conenection.on("error", (error) => {
      console.error("Error connecting to Mongo Database: ", error);
      process.exit();
    });
  } catch (error) {
    console.error("Error connecting to Mongo Database: ", error);
  }
}
