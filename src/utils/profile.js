import { Account } from "appwrite";
import { client } from "@lib/appwrite";

async function getSessionUsername() {
  const account = new Account(client);
  let session;

  try {
    // Mevcut oturumu al
    session = await account.getSession('current');
  } catch (error) {
    console.error("No current session found:", error.message);
    return null;
  }

  return session ? session.userName : null;
}

async function displayUsername() {
  const username = await getSessionUsername();

  if (username) {
    document.getElementById("username-display").innerText = `Welcome, ${username}`;
  } else {
    document.getElementById("username-display").innerText = "Welcome,";
  }
}

// Sayfa yüklendiğinde kullanıcı adını göster
document.addEventListener("DOMContentLoaded", displayUsername);
