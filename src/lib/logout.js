// src/lib/logout.js
import { AppwriteException, Account } from "appwrite";
import { client } from "./appwrite"; // Ensure the path is correct

async function deleteSession() {
  const account = new Account(client);

  try {
    const session = await account.getSession('current');
    const jwtToken = session.jwt;
    console.log('JWT Token:', jwtToken);
    console.log(session);

    await account.deleteSession('current');
    sessionStorage.removeItem('username');
    console.log('Current session deleted');
    window.location.href = "../";

    
  } catch (error) {
    console.log("Session not registered");
    // Redirect on success
    window.location.href = "../";

    if (error instanceof AppwriteException) {
      console.log('Appwrite exception:', error.message);
    } else {
      console.log('Unexpected error:', error);
    }
  }
}

// Only add event listeners if running in the browser
if (typeof window !== 'undefined') {
  window.onload = function() {
    deleteSession();
  };
}
