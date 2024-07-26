// appwrite.js
import { Client, Account, Databases, ID } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID); // Your project ID

// Initialize the Account service
const account = new Account(client);
const databases = new Databases(client);


export { client, account, databases, ID };
