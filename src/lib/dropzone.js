import { storage, ID } from './appwrite'; // Yolu ve modülün doğru olduğundan emin olun

// Global değişkenler
let directoryHandle;
let fileHandle; // Global fileHandle değişkeni

// Function to request directory access
async function requestDirectoryAccess() {
  try {
    directoryHandle = await window.showDirectoryPicker();
    console.log('Directory access granted.');
    // Store the directory handle in IndexedDB
    await saveDirectoryHandle(directoryHandle);
  } catch (error) {
    console.error(`Error accessing directory: ${error}`);
  }
}

// Function to create a directory
async function createDirectory(folderName) {
  try {
    if (!directoryHandle) {
      console.error('Directory handle is not available. Please request access first.');
      return;
    }
    const newDirHandle = await directoryHandle.getDirectoryHandle(folderName, { create: true });
    console.log(`Directory '${folderName}' created successfully.`);
    return newDirHandle;
  } catch (error) {
    console.error(`Error creating directory: ${error}`);
  }
}

// Function to create a folder without requesting access again
async function createFolder() {
  const folderName = 'NewFolder';
  console.log(`Attempting to create folder: ${folderName}`);
  const result = await createDirectory(folderName);
  if (result) {
    console.log('Folder created successfully:', result);
  } else {
    console.log('Failed to create folder.');
  }
}

// Function to save directory handle in IndexedDB
async function saveDirectoryHandle(handle) {
  const db = await getDB();
  const tx = db.transaction('handles', 'readwrite');
  const store = tx.objectStore('handles');
  await store.put(handle, 'directoryHandle');
  await tx.complete;
}

// Function to get directory handle from IndexedDB
async function getDirectoryHandle() {
  const db = await getDB();
  const tx = db.transaction('handles', 'readonly');
  const store = tx.objectStore('handles');
  return await store.get('directoryHandle');
}

// Function to open IndexedDB
function getDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('directoryDatabase', 1);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore('handles');
    };
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

// Check if directory handle is available in IndexedDB
async function restoreDirectoryHandle() {
  directoryHandle = await getDirectoryHandle();
  console.log("Directory handle restored");
}

// Event listeners
document.addEventListener('DOMContentLoaded', async () => {
  await restoreDirectoryHandle();

  const requestAccessButton = document.getElementById('requestAccessButton');
  const createFolderButton = document.getElementById('createFolderButton');
  const dropzone = document.getElementById('dropzone');
  const downloadButton = document.getElementById('downloadButton');
  const openFileButton = document.getElementById('open-file');
  const saveFileButton = document.getElementById('save-file');

  requestAccessButton.addEventListener('click', requestDirectoryAccess);
  createFolderButton.addEventListener('click', createFolder);
  
  dropzone.addEventListener('dragover', handleDragOver);
  dropzone.addEventListener('dragleave', handleDragLeave);
  dropzone.addEventListener('drop', handleDrop);
  
  downloadButton.addEventListener('click', async () => {
    try {
      const directoryHandle = await window.showDirectoryPicker();
      const fileList = document.getElementById('file-list');
      fileList.innerHTML = ''; // Clear previous contents
      for await (const entry of directoryHandle.values()) {
        const li = document.createElement('li');
        li.textContent = entry.name;
        fileList.appendChild(li);
      }
    } catch (error) {
      console.error('Error opening directory:', error);
    }
  });

  openFileButton.addEventListener('click', async () => {
    try {
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const content = await file.text();
      document.getElementById('file-content').value = content;
    } catch (error) {
      console.error('Error opening file:', error);
    }
  });

  saveFileButton.addEventListener('click', async () => {
    try {
      if (!fileHandle) {
        alert('You must open a file first!');
        return;
      }
      const newContent = document.getElementById('new-content').value;
      const oldContent = document.getElementById('file-content').value;
      const updatedContent = oldContent + '\n' + newContent;
      const writable = await fileHandle.createWritable();
      await writable.write(updatedContent);
      await writable.close();
      document.getElementById('file-content').value = updatedContent;
      document.getElementById('new-content').value = '';
    } catch (error) {
      console.error('Error saving file:', error);
    }
  });
});

// Function to create a preview element for a file
const previewContainer = document.getElementById('preview-grid');

function createPreviewElement(file) {
    const previewItem = document.createElement('div');
    previewItem.classList.add('preview-item');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '✕';
    deleteBtn.addEventListener('click', () => {
        previewContainer.removeChild(previewItem);
    });

    previewItem.appendChild(deleteBtn);

    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewItem.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        previewItem.textContent = file.name;
    }

    return previewItem;
}

// Function to upload a file
async function uploadFile(file) {
    try {
        const response = await storage.createFile(
            '667f1f250030598fc056', // Your bucket ID
            ID.unique(),
            file
        );
        console.log(response); // Success
    } catch (error) {
        console.error(`Error uploading file: ${error}`);
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
        const previewElement = createPreviewElement(file);
        previewContainer.appendChild(previewElement);
    }
};
