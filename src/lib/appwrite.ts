import { Account, Client, Databases } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);

client
  .setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID);

   try{
    session = await account.getSession("current");
  } catch(e){
    console.log("Session not registered");
  }