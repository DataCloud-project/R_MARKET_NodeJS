const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName= 'test'
const client = new MongoClient(url);



async function dbConnectWallet()
{
    let result1 = await client.connect();
    db= result1.db(databaseName);
    return db.collection('wallets');
}

module.exports = dbConnectWallet;