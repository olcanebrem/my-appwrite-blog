import { storage, ID } from './appwrite'; // Yolu ve modülün doğru olduğundan emin olun

// Upload file function
async function uploadFile(file) {
  try {
    const response = await storage.createFile(
      '667f1f250030598fc056', // Your bucket ID
      ID.unique(),
      file,
      progress(progress: UploadProgress) => void
    );
    console.log(response); // Success
  } catch (error) {
    console.error(`Yükleme sırasında bir hata oluştu: ${error}`);
  }
}

// Handle drag over
const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('dropzone').classList.add('dragover');
};

// Handle drag leave
const handleDragLeave = (event) => {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('dropzone').classList.remove('dragover');
};

// Handle drop
const handleDrop = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('dropzone').classList.remove('dragover');

  const files = event.dataTransfer.files;

  for (const file of files) {
    console.log(`Dropped file: ${file.name}`);
    await uploadFile(file);
  }
};

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  dropzone.addEventListener('dragover', handleDragOver);
  dropzone.addEventListener('dragleave', handleDragLeave);
  dropzone.addEventListener('drop', handleDrop);
});
