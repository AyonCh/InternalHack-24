import { MongoClient } from "mongodb";

const client = await new MongoClient(process.env.MONGODB_URI).connect();
export default client;
