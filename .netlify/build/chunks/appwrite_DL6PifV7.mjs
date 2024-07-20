import { Client, Databases } from 'appwrite';

const client = new Client();
const databases = new Databases(client);
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("667eeaf9002912d4f3ab");

export { client as c, databases as d };
