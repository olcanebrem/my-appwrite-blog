import { storage, ID } from './appwrite'; // Yolu ve modülün doğru olduğundan emin olun

// Upload file function
async function uploadFile(file) {
  try {
    const response = await storage.createFile(
      '667f1f250030598fc056', // Your bucket ID
      ID.unique(),
      file
      
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


// Download file function
document.getElementById('downloadButton').addEventListener('click', async () => {

  try {
    // Kullanıcının bir dizini seçmesini sağla
    const directoryHandle = await window.showDirectoryPicker();

    // Dizin içeriğini listele
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = ''; // Önceki içerikleri temizle

    // Dizin içeriğini listele
    for await (const entry of directoryHandle.values()) {
        const li = document.createElement('li');
        li.textContent = entry.name;
        fileList.appendChild(li);
    }
} catch (error) {
    console.error('Dizin açılırken bir hata oluştu:', error);
}

});
  
// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('downloadButton');
  dropzone.addEventListener('dragover', handleDragOver);
  dropzone.addEventListener('dragleave', handleDragLeave);
  dropzone.addEventListener('drop', handleDrop);
});

let fileHandle;

document.getElementById('open-file').addEventListener('click', async () => {
    try {
        // Kullanıcının bir dosya seçmesini sağla
        [fileHandle] = await window.showOpenFilePicker();

        // Dosya içeriğini oku
        const file = await fileHandle.getFile();
        const content = await file.text();

        // İçeriği textarea'ya yerleştir
        document.getElementById('file-content').value = content;
    } catch (error) {
        console.error('Dosya açılırken bir hata oluştu:', error);
    }
});

document.getElementById('save-file').addEventListener('click', async () => {
    try {
        if (!fileHandle) {
            alert('Önce bir dosya açmalısınız!');
            return;
        }

        // Yeni içerik ekle
        const newContent = document.getElementById('new-content').value;
        const oldContent = document.getElementById('file-content').value;
        const updatedContent = oldContent + '\n' + newContent;

        // Dosyaya yaz
        const writable = await fileHandle.createWritable();
        await writable.write(updatedContent);
        await writable.close();

        // Güncellenmiş içeriği göster
        document.getElementById('file-content').value = updatedContent;
        document.getElementById('new-content').value = '';

    } catch (error) {
        console.error('Dosya yazılırken bir hata oluştu:', error);
    }
});


