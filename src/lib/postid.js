import { Account } from "appwrite";
import { client } from './appwrite';

var session;
const account = new Account(client);

export async function getPostID() {
    
    try{
        session = await account.getSession('current');
        
        console.log("ID:");
        
        const user = await account.get();
        const username = user.name;
        return username || "Guest";
        
      } catch (error) {
        console.log('Error fetching user info:', error);
        return 'Guest';
      }
}

