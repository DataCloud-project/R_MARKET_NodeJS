const { ObjectId } = require('mongodb');
const dbConnect= require('../collections/contracts');
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

exports.getDealsByRequestId = async (req, resp)=>{
    console.log(req.url);
    //const requestId = req.query.requestId;
    let data = await dbConnect();
    const query = {requestId:req.body.requestId};
    data = await data.findOne(query);
    resp.send(data);
};
/** 
 * @swagger 
 * /datacloud: 
 *   post: 
 *     description: Create contract deals 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 
exports.createContract = async (req, resp)=>{
    console.log(req.body);
    let data = await dbConnect();
    req.body.requestId =genRanHex(12);
    let result = await data.insertOne(req.body);
    const responseBody = JSON.stringify(result);
    const responseObject = JSON.parse(responseBody);
    console.log('response:', responseObject.insertedId);
    const query = {requestId: req.body.requestId};
    console.log('query:',query);
    const options = {
        sort:{"_id": 1},
        projection: {_id:1,requesterInfo:1, requestId:1}
    }; // TODO: Add status in the json to return response status and change the parameter name from '_id' to 'requestID'
     const contractResponse = await data.findOne(query, options);
     console.log('contractResponse:',contractResponse);
     resp.send(contractResponse);
}