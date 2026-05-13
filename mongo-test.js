import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

await client.connect();
const db = client.db('arca');
const COLLECTION = 'widgets';
const result = await db.collection('widgets').find({
    color: 'green'
}).toArray();
console.log(result);

// create/insert ----------------------------------
/*
const insertResult = await db.collection(COLLECTION).insertOne({
    id: '6ba9f058-39c4-4b3f-b7f8-cabefbf8db83',
    name: 'widget13',
    color: 'green',
    weight: 6,
    inStock: true,
    tags: ['tag1', 'tag2', 'tag3'],
    createDate: new Date(),
  });
console.log(`Inserted ${insertResult.insertedCount} record with ID ${insertResult.insertedId}`);

// const multiInsertResult = await db.collection(COLLECTION).insertMany([ { a: true}, { b: false } ]);
// console.log(`Inserted ${multiInsertResult.insertedCount} records`);
*/