import { Account } from 'appwrite';
import { client } from './appwrite';

const account = new Account(client);

async function getSessionUsername() {
  try {
    // Mevcut oturumu alın
    
    // Kullanıcı bilgilerini alın
    const user = await account.get();
    
    // Kullanıcı adını alın
    const username = user.name || 'Guest'; 
    // HTML öğesini güncelleyin
    document.getElementById('username-display').innerHTML = `Welcome, <strong>${username}</strong>`;
    const logoutButton = document.querySelector('a[href="/logout"]');
    if (logoutButton) {
        logoutButton.style.display = 'inline-flex';
      }

  } catch (error) {
    console.log('Error fetching user info:', error);
    if (logoutButton) {
        logoutButton.style.display = 'none';
      }
  }
}

// Sayfa yüklendiğinde fonksiyonu çağırın
window.onload = getSessionUsername;
