 const {MongoClient} = require('mongodb');
 const url = 'mongodb://localhost:27017';
 const databaseName= 'test'
 const client = new MongoClient(url);


 async function dbConnectResources()
 {
     let result = await client.connect();
     db= result.db(databaseName);
    return db.collection('resourceRequirements');
 }

 module.exports = dbConnectResources;