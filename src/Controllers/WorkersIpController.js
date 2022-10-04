const dbConnect= require('../collections/workersIP');

exports.getProvisionedWorkersByIP = async (req, resp)=>{
    let data = await dbConnect();
    const dealId = req.params.dealId;
    const query = {dealID: dealId};
    console.log(query);
    const options = {
        sort:{"_id": 1},
        projection: {_id:0,dealID:1, workerpoolInfo:1}
    };
    const deals = await data.findOne(query, options);
    console.log(deals);
    resp.send(deals);
};