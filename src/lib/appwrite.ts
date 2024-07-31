// appwrite.js
import { Client,Storage, Account, Databases, ID ,AppwriteException } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
.setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
.setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID); // Your project ID

// Initialize the Account service
const storage = new Storage(client);
const account = new Account(client);
const databases = new Databases(client);


export { client, account, databases, storage, ID, AppwriteException };
