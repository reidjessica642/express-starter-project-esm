import { MongoClient } from 'mongodb';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

await client.connect();
const db = client.db('arca');
const COLLECTION = 'widgets';
const result = await db.collection('widgets').findOneAndDelete({
  id: '4025822e-cbff-48c4-83e1-7542e9284f87'
});
console.log(result);

// update -----------------------------------------
/*
const result = await db.collection('widgets').updateOne({
  id: '123-456-0091',
  age: 40
}, {
  $set: {
    fName: 'Jane',
    lname: 'Bear'
  }
}, {
  upsert: true
}
);
console.log(result);
*/

// read/query -------------------------------------
/*
const result = await db.collection('widgets').find({
  color: {
    $exists: true
  }
}, {
  sort: {
    weight: -1,
    name: -1
  },
  projection: {
    _id: 0,
    name: 1,
    color: 1,
    weight: 1
  }
}).toArray();
console.log(result);
*/

// create/insert ----------------------------------
/*
const insertResult = await db.collection(COLLECTION).insertOne({
    id: '060a5737-2487-4526-98c4-9b9ecbad4040',
    name: 'widget14',
    color: 'khaki',
    weight: 10,
    inStock: true,
    tags: ['tag1', 'tag2', 'tag3'],
    createDate: new Date(),
  });
console.log(`Inserted ${insertResult.insertedCount} record with ID ${insertResult.insertedId}`);

// const multiInsertResult = await db.collection(COLLECTION).insertMany([ { a: true}, { b: false } ]);
// console.log(`Inserted ${multiInsertResult.insertedCount} records`);
*/