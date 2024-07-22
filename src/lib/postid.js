import { Account } from 'appwrite';
import { client } from './appwrite';

const account = new Account(client);

export async function getSessionUsername() {
  try {
    // Kullanıcı bilgilerini alın
    const user = await account.get();
    
    // Kullanıcı adını alın
    const username = user.name || 'Guest'; 
    
    // HTML öğesini güncelleyin
    document.getElementById('username').innerHTML = `<strong>${username}</strong>`;
  } catch (error) {
    console.log('Error fetching user info:', error);
    document.getElementById('username').textContent = 'Guest';
  }
}

// Sayfa yüklendiğinde fonksiyonu çağırın
window.onload = getSessionUsername;
