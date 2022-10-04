const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName= 'test'
const client = new MongoClient(url);


async function dbConnectContract()
{
    let result = await client.connect();
    db= result.db(databaseName);
   return db.collection('contractsReq');
}

module.exports = dbConnectContract;