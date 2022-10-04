const dbConnectAppOrder = require('../collections/apporder');
const dbConnectDataSetOrder =  require('../collections/datasetorder');
const dbConnectWorkerPoolOrder =  require('../collections/workerpoolorder');

exports.findCompatibleResource = async (req, resp)=>{
    console.log(req.body);
    let dataAppOrder = await dbConnectAppOrder();
    let dataDataSetOrder = await dbConnectDataSetOrder();
    let dataWorkerPoolOrder = await dbConnectWorkerPoolOrder();
    //console.log('requirementsBodyApp:',req.body.requirements.app);
    const queryForAppOrder = {app:req.body.requirements.app};
   // console.log(queryForAppOrder);
    const optionsForAppOrder = {
        sort:{"_id": 1}
    };
    const appOrderData = await dataAppOrder.findOne(queryForAppOrder, optionsForAppOrder);
    console.log(appOrderData);

    //console.log('requirementsBodyApp:',req.body.requirements.dataset);
    const queryForDataSetOrder = {dataset:req.body.requirements.dataset};
    const optionsForDataSetOrder = {
        sort:{"_id": 1}
    };
    const dataSetOrderData = await dataDataSetOrder.findOne(queryForDataSetOrder, optionsForDataSetOrder);
    console.log('dataSetOrderData:',dataSetOrderData);

   // console.log('executionRequirements:',req.body.requirements.executionRequirements.maxinstant);
    const noOfInstances = req.body.requirements.executionRequirements.maxinstant;
    const queryForWorkerPoolOrder = {noofInstances:{$gt:2}};
    console.log('queryWP:',queryForWorkerPoolOrder);
  //  const query = { runtime: { $lt: 15 } };

    const optionsForWorkerPoolOrder = {
        sort:{"_id": 1}
    };
    //console.log('dataWorkerPoolOrder:',dataWorkerPoolOrder);
    const workerPoolOrderData = await dataWorkerPoolOrder.find(queryForWorkerPoolOrder,optionsForWorkerPoolOrder).toArray();
   console.log('workerPoolOrderData',workerPoolOrderData);
    //let result = await data.insertOne(req.body)  
    var result = {appOrderData,dataSetOrderData,workerPoolOrderData};
    resp.send(result);
    //resp.send(JSON.stringify(result));
};