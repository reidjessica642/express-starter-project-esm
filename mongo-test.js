import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

await client.connect();
const db = client.db('arca');
const result = await db.collection('widgets').findOne();
console.log(result);