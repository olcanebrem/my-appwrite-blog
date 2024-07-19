import { AppwriteException, ID ,Account} from "appwrite";
import { client } from "@lib/appwrite";

// Initialize Appwrite client

const account = new Account(client);

const format = document.getElementById("signup-form");

format.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // Create a new account
    await account.create(
      ID.unique(), // userId
      email,
      password,
      username
    );
    
    // Redirect on success
    window.location.href = "../index.html";
    alert("Account Created!");
  } catch (error) {
    console.log("Error occurred while creating account");
    
    // Check for AppwriteException
    if (error instanceof AppwriteException) {
      console.log('AppwriteException:', error.message);
      alert("An error occurred: " + error.message);
    } else {
      console.log("General error:", error);
      alert("Failed to create account");
    }
  }
});
