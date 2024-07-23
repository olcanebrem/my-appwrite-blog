import { Account } from 'appwrite';
import { client } from './appwrite';

const account = new Account(client);

export async function getSessionUsername() {
  const storedUsername = sessionStorage.getItem('username');
  const usernameDisplay = document.getElementById('usernameDisplay');
  const logoutButton = document.getElementById('logoutButton');

  if (storedUsername) {
    // Eğer kullanıcı adı zaten saklandıysa, bunu kullanın
    console.log('Kullanıcı adı alındı');
    if (usernameDisplay) {
      usernameDisplay.innerHTML = `Welcome, <strong>${storedUsername}</strong>`;
    }
    
      logoutButton.style.display = 'inline-flex'; // Butonu göster
    
    return storedUsername;
  } else {
    // Kullanıcı adını Appwrite'tan çekin
    try {
      const user = await account.get();
      const username = user.name;
      // Kullanıcı adını oturum saklamada saklayın
      sessionStorage.setItem('username', username);
      
      if (usernameDisplay) {
        usernameDisplay.innerHTML = `Welcome, <strong>${storedUsername}</strong>`;
      }
      if (logoutButton) {
        logoutButton.style.display = 'inline-flex';
      }
      
    } catch (error) {
      console.log('Error fetching user info:', error);
      if (logoutButton) {
        logoutButton.style.display = 'none';
      }
      if (usernameDisplay) {
        usernameDisplay.innerHTML = `You are Surfing as <strong>Guest</strong>`;
        
      }
    }
  }
}

// Sayfa yüklendiğinde fonksiyonu çağırın
window.onload = getSessionUsername;
