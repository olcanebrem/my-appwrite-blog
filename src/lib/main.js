// main.js
import { account, databases, ID } from './appwrite.ts';
import { marked } from 'marked';
import { AppwriteException } from 'appwrite';
document.getElementById('post-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const slug = encodeURIComponent(document.getElementById('slug').value);
  const content = marked(document.getElementById('content').value);

  try {
    const session = await account.getSession('current');
    const user = await account.get();
    const username = user.name;

    console.log('Session:', session);
    console.log('User ID:', username);

    const data = {
        title,
        slug,
        content,
        username,
    };

    const results = await databases.createDocument(
    import.meta.env.PUBLIC_APPWRITE_DATABASE_ID,
    import.meta.env.PUBLIC_APPWRITE_COLLECTION_ID,
    ID.unique(),
    data
    );

    window.location.href = `/posts/${results.slug}`;
  } catch (error) {
    console.error('Error creating document:', error);
    if (error instanceof AppwriteException) {
      console.log('AppwriteException:', error.message);
    } else {
      console.log('Unexpected error:', error);
    }
  }
});
