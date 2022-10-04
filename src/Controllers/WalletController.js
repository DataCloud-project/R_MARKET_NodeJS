const dbConnect = require('../collections/wallets');

exports.createWalletForUser = async (req, resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)  
    resp.send(result)
};