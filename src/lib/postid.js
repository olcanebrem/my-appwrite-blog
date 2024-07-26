// client-side code
import { Account } from 'appwrite';
import { client ,account } from 'src/lib/appwrite';
import { givePostID } from './signin';

const account = new Account(client);

export async function getPostID() {

  var session;
  try {
    const session = await account.getSession('current');
    const user = await account.get();
    const username = user.name; // Use localStorage instead of sessionStorage for client-side storage
    console.log('Session:', session);
    console.log('User ID:', username);
    localStorage.setItem('userId', session.userId);
    return username;
  } catch (error) {
    console.error('Error fetching session:',2, error,2);
    return null;
  }
}
