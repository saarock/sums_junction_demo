// src/services/emailService.js
import { databases } from "../lib/appwrite";
import { ID } from "appwrite";

const DATABASE_ID = "68b6cfec001f6ba9f868";
const COLLECTION_ID = "register-users";

export async function saveEmail(email: string) {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(), // Generates a unique ID for each document
      { email } 
    );
    return response;
  } catch (error) {
    console.error("Error saving email:", error);
    throw error;
  }
}
