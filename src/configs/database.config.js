const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName= 'test'
const client = new MongoClient(url);

 exports.databaseConnection = async (err, db)=>{
    let result = await client.connect();
    console.log('connection....');
    console.log(result);
    if(result)
        return db = await result.db(databaseName);
    else
        return err;
};

//module.exports = databaseConnection();