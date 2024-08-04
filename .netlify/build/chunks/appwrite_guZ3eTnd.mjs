import { Client, Storage, Account, Databases } from 'appwrite';

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("667eeaf9002912d4f3ab");
new Storage(client);
new Account(client);
const databases = new Databases(client);

export { client as c, databases as d };
