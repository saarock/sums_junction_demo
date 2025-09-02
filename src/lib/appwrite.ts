import { Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('680c6ba80022cf503c26');

const databases = new Databases(client);
export {client, databases}