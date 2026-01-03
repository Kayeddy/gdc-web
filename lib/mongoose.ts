"use server";

// Mongoose imports
import mongoose from "mongoose";

let isConnected = false;

/**
 * Connects to the MongoDB database using Mongoose.
 * Manages connection states to ensure proper connection handling without redundant attempts,
 * and provides detailed logging of connection status.
 *
 * @returns {Promise<void>} A promise that resolves when the connection is either already established or successfully made.
 */
export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true); // Enforce strict query policies to prevent deprecations.

  if (!process.env.MONGODB_URL) {
    console.log("Database (MongoDB) URL not found");
    return;
  }

  if (isConnected) {
    console.log("Database is already connected and running!");
    return;
  }

  switch (mongoose.connection.readyState) {
    case 1: // already connected
      console.log("Database connection is already established.");
      return;
    case 2: // connection attempt is ongoing
      // Return a promise that resolves when the ongoing connection attempt finishes
      return new Promise<void>((resolve, reject) => {
        mongoose.connection.once("open", () => {
          isConnected = true;
          console.log("Connection to mongoDB was successful after waiting.");
          resolve(); // Resolving with no value, hence `void`
        });
        mongoose.connection.on("error", (error) => {
          console.log("Database connection failed during wait:", error);
          reject(error);
        });
      });
    default:
      // No connection is established, try to connect
      try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("Connection to MongoDB successful.");
      } catch (error) {
        console.error(`Error connecting to the database: ${error}`);
        throw error;
      }
  }
};
