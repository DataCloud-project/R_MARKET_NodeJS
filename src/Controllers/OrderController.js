const dbConnectAppOrder = require('../collections/apporder');
const dbConnectDataSetOrder =  require('../collections/datasetorder');
const dbConnectWorkerPoolOrder =  require('../collections/workerpoolorder');

exports.addAppOrder = async (req, resp)=>{
    let data = await dbConnectAppOrder();
    let result = await data.insertOne(req.body)  
    resp.send(result)
};

exports.addDataSetOrder = async (req, resp)=>{
    let data = await dbConnectDataSetOrder();
    let result = await data.insertOne(req.body)  
    resp.send(result)
};
exports.addWorkerPoolOrder = async (req, resp)=>{
    let data = await dbConnectWorkerPoolOrder();
    let result = await data.insertOne(req.body)  
    resp.send(result)
};